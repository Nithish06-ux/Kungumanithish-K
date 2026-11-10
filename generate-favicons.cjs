const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table
const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
  }
  table[i] = c;
}

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function makePng(width, height, getPixel) {
  const scanlines = [];
  for (let y = 0; y < height; y++) {
    scanlines.push(0); // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y);
      scanlines.push(
        Math.max(0, Math.min(255, Math.round(r))),
        Math.max(0, Math.min(255, Math.round(g))),
        Math.max(0, Math.min(255, Math.round(b))),
        Math.max(0, Math.min(255, Math.round(a)))
      );
    }
  }
  const rawData = Buffer.from(scanlines);
  const compressed = zlib.deflateSync(rawData);

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeAndData = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([len, typeAndData, crc]);
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: RGBA (6)
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function makeIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(pngBuffers.length, 4); // Number of images

  let offset = 6 + (pngBuffers.length * 16);
  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

function distToSegment(px, py, x0, y0, x1, y1) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x0, py - y0);
  let t = ((px - x0) * dx + (py - y0) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x0 + t * dx), py - (y0 + t * dy));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(c1, c2, t) {
  return [
    lerp(c1[0], c2[0], t),
    lerp(c1[1], c2[1], t),
    lerp(c1[2], c2[2], t),
  ];
}

function getGradientColor(t) {
  // 0 -> Cyan [56, 189, 248]
  // 0.5 -> Purple [168, 85, 247]
  // 1.0 -> Pink [236, 72, 153]
  const cyan = [56, 189, 248];
  const purple = [168, 85, 247];
  const pink = [236, 72, 153];
  if (t < 0.5) {
    return lerpColor(cyan, purple, t * 2);
  } else {
    return lerpColor(purple, pink, (t - 0.5) * 2);
  }
}

function renderFaviconPixel(x, y, N) {
  const px = x + 0.5;
  const py = y + 0.5;
  const pad = 1.0;
  const cx = N / 2;
  const cy = N / 2;
  const halfW = (N - 2 * pad) / 2;
  const halfH = (N - 2 * pad) / 2;
  const R = N * 0.26;

  // Squircle rounded box distance
  const qx = Math.max(Math.abs(px - cx) - (halfW - R), 0);
  const qy = Math.max(Math.abs(py - cy) - (halfH - R), 0);
  const distCorner = Math.hypot(qx, qy);
  const boxDist = distCorner - R;

  // Outside rounded box
  if (boxDist > 0.5) {
    return [0, 0, 0, 0];
  }

  const bgAlpha = Math.min(Math.max(-boxDist + 0.5, 0), 1);

  // Background color gradient
  const bgT = (px + py) / (2 * N);
  const bgCol = lerpColor([15, 23, 42], [2, 6, 23], bgT);

  // Border (outer 1.5px)
  let [r, g, b] = bgCol;
  const borderWidth = Math.max(1.2, N * 0.04);
  if (boxDist > -borderWidth) {
    const borderBlend = Math.min(Math.max((boxDist + borderWidth) / borderWidth, 0), 1);
    const borderCol = getGradientColor(bgT);
    r = lerp(r, borderCol[0], borderBlend * 0.85);
    g = lerp(g, borderCol[1], borderBlend * 0.85);
    b = lerp(b, borderCol[2], borderBlend * 0.85);
  }

  // Letter K geometry
  const strokeR = N * 0.058; // Radius of stroke
  const dStem = distToSegment(px, py, N * 0.33, N * 0.26, N * 0.33, N * 0.74);
  const dArmUp = distToSegment(px, py, N * 0.36, N * 0.50, N * 0.67, N * 0.27);
  const dArmDown = distToSegment(px, py, N * 0.36, N * 0.50, N * 0.67, N * 0.73);
  const dDot = Math.hypot(px - N * 0.71, py - N * 0.24) - (N * 0.042);

  const minLetterDist = Math.min(dStem, dArmUp, dArmDown);
  const kDist = minLetterDist - strokeR;

  // Render K
  if (kDist < 0.5) {
    const kAlpha = Math.min(Math.max(-kDist + 0.5, 0), 1);
    const tK = ((px - N * 0.3) + (py - N * 0.2)) / (N * 0.7);
    const clampedTK = Math.max(0, Math.min(1, tK));
    const kCol = getGradientColor(clampedTK);

    r = lerp(r, kCol[0], kAlpha);
    g = lerp(g, kCol[1], kAlpha);
    b = lerp(b, kCol[2], kAlpha);
  }

  // Render Cyan Accent Dot
  if (dDot < 0.5) {
    const dotAlpha = Math.min(Math.max(-dDot + 0.5, 0), 1);
    r = lerp(r, 56, dotAlpha);
    g = lerp(g, 189, dotAlpha);
    b = lerp(b, 248, dotAlpha);
  }

  return [r, g, b, bgAlpha * 255];
}

// Generate SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="kGrad" x1="16" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <filter id="glow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#a855f7" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Dark Rounded Container with Subtle Glowing Border -->
  <rect x="2.5" y="2.5" width="59" height="59" rx="16" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="2"/>

  <!-- Stylized Monogram K with Glowing Drop Shadow -->
  <g filter="url(#glow)">
    <!-- Vertical Stem -->
    <line x1="21" y1="17" x2="21" y2="47" stroke="url(#kGrad)" stroke-width="7" stroke-linecap="round"/>

    <!-- Upper Diagonal Arm -->
    <line x1="23" y1="32" x2="43" y2="17.5" stroke="url(#kGrad)" stroke-width="7" stroke-linecap="round"/>

    <!-- Lower Diagonal Arm -->
    <line x1="23" y1="32" x2="43" y2="46.5" stroke="url(#kGrad)" stroke-width="7" stroke-linecap="round"/>
  </g>

  <!-- Cyan Tech Accent Dot -->
  <circle cx="45" cy="15.5" r="2.5" fill="#38bdf8"/>
</svg>
`;

console.log('Generating PNG buffers (16x16, 32x32, 48x48)...');
const png16 = makePng(16, 16, (x, y) => renderFaviconPixel(x, y, 16));
const png32 = makePng(32, 32, (x, y) => renderFaviconPixel(x, y, 32));
const png48 = makePng(48, 48, (x, y) => renderFaviconPixel(x, y, 48));
const png192 = makePng(192, 192, (x, y) => renderFaviconPixel(x, y, 192));

const icoBuffer = makeIco([
  { width: 16, height: 16, buffer: png16 },
  { width: 32, height: 32, buffer: png32 },
  { width: 48, height: 48, buffer: png48 }
]);

const targetDirs = [
  path.join(__dirname, 'client', 'public'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'client', 'dist'),
  path.join(__dirname, 'dist')
];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'favicon.svg'), svgContent);
    fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
    fs.writeFileSync(path.join(dir, 'favicon.png'), png32);
    fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), png192);
    console.log(`Updated icons in ${dir}`);
  }
});

console.log('All icons generated successfully!');

