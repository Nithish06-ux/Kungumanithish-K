import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaCommentDots } from 'react-icons/fa';
import { playPetChirp, playClick } from '../utils/cyberSound';

const dialogues = [
  'Beep boop! Tracking your cursor! 🛸',
  '11 GitHub repos loaded and verified! 💻',
  'PERN stack operating at 100% efficiency! ⚡',
  'Try clicking on any project for the deep case study! 📂',
  'UI/UX design looks crisp in both light & dark! 🎨',
  'Did you know? Nithish studies IT at Nandha Eng College! 🎓',
  'Loving this smooth cursor navigation! ✨',
];

export default function CyberPet({ enabled = true, isLightMode = false }) {
  const [pos, setPos] = useState({ x: 120, y: 180 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(0);
  const [mood, setMood] = useState('normal'); // 'normal' | 'speed' | 'happy' | 'love' | 'sleep'
  const [speech, setSpeech] = useState('');
  const [dialogueIdx, setDialogueIdx] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [visible, setVisible] = useState(true);

  const targetRef = useRef({ x: 140, y: 180 });
  const currentRef = useRef({ x: 140, y: 180 });
  const lastMoveTimeRef = useRef(Date.now());
  const rafRef = useRef(null);

  // Mouse Move tracking
  useEffect(() => {
    if (!enabled || !visible) return;

    const handleMouseMove = (e) => {
      // Offset so the pet floats slightly top-right of cursor
      const offsetX = 42;
      const offsetY = -40;

      // Keep inside screen viewport
      const boundedX = Math.max(30, Math.min(window.innerWidth - 70, e.clientX + offsetX));
      const boundedY = Math.max(60, Math.min(window.innerHeight - 70, e.clientY + offsetY));

      targetRef.current = { x: boundedX, y: boundedY };
      lastMoveTimeRef.current = Date.now();

      // Eye pupil vector towards actual cursor
      const dx = e.clientX - currentRef.current.x;
      const dy = e.clientY - currentRef.current.y;
      const dist = Math.hypot(dx, dy) || 1;
      const maxEye = 3.5;
      setEyeOffset({
        x: (dx / dist) * maxEye,
        y: (dy / dist) * maxEye,
      });

      if (mood === 'sleep') {
        setMood('normal');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled, visible, mood]);

  // Smooth Physics Lerp Animation Loop
  useEffect(() => {
    if (!enabled || !visible) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      const now = Date.now();
      const idleTime = now - lastMoveTimeRef.current;

      // Check idle
      if (idleTime > 12000 && mood !== 'sleep' && mood !== 'happy') {
        setMood('sleep');
      }

      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      const speed = Math.hypot(dx, dy);

      // Lerp position
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.08);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.08);

      // Tilt based on horizontal velocity
      const targetTilt = Math.max(-20, Math.min(20, dx * 0.4));
      setTilt((prev) => lerp(prev, targetTilt, 0.15));

      setPos({ x: currentRef.current.x, y: currentRef.current.y });

      if (speed > 18 && mood !== 'happy' && mood !== 'love') {
        setMood('speed');
      } else if (speed < 2 && mood === 'speed') {
        setMood('normal');
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [enabled, visible, mood]);

  const handlePetClick = (e) => {
    e.stopPropagation();
    playPetChirp();
    setIsSpinning(true);
    setMood('love');

    // Show speech bubble
    setSpeech(dialogues[dialogueIdx % dialogues.length]);
    setDialogueIdx((prev) => prev + 1);

    setTimeout(() => {
      setIsSpinning(false);
      setMood('happy');
    }, 700);

    setTimeout(() => {
      setSpeech('');
      setMood('normal');
    }, 4500);
  };

  if (!enabled || !visible) {
    return (
      <button
        onClick={() => {
          playClick();
          setVisible(true);
        }}
        title="Summon Cyber Dev Pet"
        className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full border border-cyan-400/50 bg-[#06090e]/80 text-cyan-300 hover:bg-cyan-500/20 shadow-lg text-xs font-mono flex items-center space-x-1.5"
      >
        <span>🤖</span>
        <span className="hidden sm:inline text-[10px]">SUMMON PET</span>
      </button>
    );
  }

  return (
    <div
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        pointerEvents: 'none',
      }}
      className="fixed top-0 left-0 z-50 transition-transform duration-75 ease-out select-none"
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {speech && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -24, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute -top-12 -left-20 w-48 px-3 py-2 rounded-xl text-[10px] font-mono leading-tight shadow-xl border pointer-events-auto ${
              isLightMode
                ? 'bg-white text-slate-800 border-sky-400 shadow-sky-500/20'
                : 'bg-[#040811]/95 text-cyan-200 border-cyan-400/70 shadow-cyan-500/30'
            }`}
          >
            {speech}
            <div
              className={`absolute -bottom-1.5 left-24 w-3 h-3 rotate-45 border-r border-b ${
                isLightMode ? 'bg-white border-sky-400' : 'bg-[#040811] border-cyan-400'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Robotic Drone Body */}
      <div
        onClick={handlePetClick}
        onMouseEnter={() => {
          playPetChirp();
          if (mood !== 'love') setMood('happy');
        }}
        onMouseLeave={() => {
          if (mood === 'happy') setMood('normal');
        }}
        style={{
          transform: `rotate(${tilt}deg) ${isSpinning ? 'rotate(360deg)' : ''}`,
          transition: isSpinning ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.1s ease-out',
        }}
        className="relative pointer-events-auto cursor-pointer group flex flex-col items-center"
      >
        {/* Antenna with Pulsing Beacon */}
        <div className="flex flex-col items-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe] cyber-pulse" />
          <span className="w-0.5 h-2 bg-gradient-to-b from-cyan-400 to-slate-600" />
        </div>

        {/* Floating Ear/Winglets */}
        <div className="absolute top-4 -left-2.5 w-2 h-4 rounded-full bg-cyan-500/40 border border-cyan-400/60 -rotate-12 group-hover:-rotate-25 transition-transform" />
        <div className="absolute top-4 -right-2.5 w-2 h-4 rounded-full bg-cyan-500/40 border border-cyan-400/60 rotate-12 group-hover:rotate-25 transition-transform" />

        {/* Main Drone Helmet / Face */}
        <div
          className={`w-14 h-12 rounded-2xl p-1.5 flex flex-col items-center justify-center border shadow-lg relative overflow-hidden transition-colors ${
            isLightMode
              ? 'bg-slate-100 border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
              : 'bg-[#080d17] border-cyan-400/70 shadow-[0_0_20px_rgba(0,242,254,0.35)]'
          }`}
        >
          {/* Dark Glass Visor Screen */}
          <div className="w-full h-full rounded-xl bg-[#02050b] border border-cyan-500/30 flex items-center justify-around px-1 relative overflow-hidden">
            {/* Visor Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-pulse" />

            {/* Expressions */}
            {mood === 'sleep' && (
              <div className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest flex items-center space-x-1">
                <span>z</span>
                <span className="text-[11px]">Z</span>
                <span className="text-[12px]">Z</span>
              </div>
            )}

            {mood === 'love' && (
              <div className="flex items-center space-x-2 text-pink-400">
                <FaHeart size={10} className="cyber-pulse" />
                <FaHeart size={10} className="cyber-pulse" />
              </div>
            )}

            {mood === 'happy' && (
              <div className="flex items-center space-x-2 text-cyan-300 font-mono text-xs font-bold">
                <span>^</span>
                <span className="text-[8px] text-pink-400 font-normal">‿</span>
                <span>^</span>
              </div>
            )}

            {mood === 'speed' && (
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold">
                <span>&gt;</span>
                <span className="text-[8px]">‿</span>
                <span>&lt;</span>
              </div>
            )}

            {mood === 'normal' && (
              <div className="flex items-center justify-around w-full px-1">
                {/* Left Eye */}
                <div className="w-2.5 h-3.5 rounded-full bg-cyan-950/80 border border-cyan-400/60 relative overflow-hidden flex items-center justify-center">
                  <div
                    style={{
                      transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f2fe]"
                  />
                </div>

                {/* Right Eye */}
                <div className="w-2.5 h-3.5 rounded-full bg-cyan-950/80 border border-cyan-400/60 relative overflow-hidden flex items-center justify-center">
                  <div
                    style={{
                      transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f2fe]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Micro Thruster Jet Flame at Bottom */}
        <div className="flex items-center space-x-1 -mt-0.5">
          <div className="w-1.5 h-2.5 rounded-b-full bg-gradient-to-b from-cyan-400 to-transparent cyber-pulse opacity-80" />
          <div className="w-2 h-3.5 rounded-b-full bg-gradient-to-b from-cyan-300 via-sky-400 to-transparent shadow-[0_0_8px_#00f2fe] animate-bounce-slow" />
          <div className="w-1.5 h-2.5 rounded-b-full bg-gradient-to-b from-cyan-400 to-transparent cyber-pulse opacity-80" />
        </div>

        {/* Mini HUD Pet Tag */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-[8px] font-mono text-cyan-400/90 tracking-widest bg-slate-900/90 px-1.5 py-0.5 rounded border border-cyan-500/30 whitespace-nowrap">
          BIT // DEV COMPANION
        </div>
      </div>
    </div>
  );
}

