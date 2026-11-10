import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPlay, FaVolumeUp, FaVolumeMute, FaMapMarkerAlt, FaCalendarAlt, FaRobot } from 'react-icons/fa';
import { playHover, playClick, playSwitch, playIntroSound } from '../utils/cyberSound';

const heroTabs = [
  { id: 'quick-bio', sec: 'SEC-0', label: 'QUICK BIO', target: 'home' },
  { id: 'background', sec: 'SEC-1', label: 'BACKGROUND', target: 'about' },
  { id: 'current-focus', sec: 'SEC-2', label: 'CURRENT FOCUS', target: 'about' },
  { id: 'hobbies', sec: 'SEC-3', label: 'HOBBIES', target: 'hobbies' },
];

export default function CyberHero({ soundState, toggleSound, onPlayIntro, isLightMode, toggleTheme }) {
  const [activeTab, setActiveTab] = useState('quick-bio');
  const [highQuality, setHighQuality] = useState(true);
  const [activeCodeLine, setActiveCodeLine] = useState(0);

  const codeSnippet = [
    'const developer = new Kungumanithish({',
    '  role: "Full-Stack Web Dev & UI/UX",',
    '  college: "Nandha Engineering College",',
    '  stack: ["PERN", "React", "Node", "PostgreSQL"],',
    '  status: "OPEN_TO_OPPORTUNITIES",',
    '  mission: "Crafting beautiful scalable web solutions"',
    '});',
    'await developer.deployFuture();',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCodeLine((prev) => (prev + 1) % codeSnippet.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (tab) => {
    playSwitch();
    setActiveTab(tab.id);
    if (tab.target !== 'home') {
      const el = document.getElementById(tab.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-28 pb-16 flex flex-col justify-between">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Section Nav Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
          {heroTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                onMouseEnter={playHover}
                className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 border flex flex-col items-start ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                    : 'border-cyan-500/20 bg-slate-900/60 text-slate-400 hover:border-cyan-500/50 hover:text-slate-200'
                }`}
              >
                <span className="text-[10px] text-cyan-400/70 font-semibold tracking-widest leading-none mb-0.5">
                  [{tab.sec}]
                </span>
                <span className="font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: Left Bio & Avatar + Right 3D Workstation Hologram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 cyber-card rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Corner Decorative Tech Elements */}
            <div className="absolute top-2 right-2 flex space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/20" />
            </div>

            {/* Paragraph Bio matching reference design */}
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                // SYSTEM_STATUS: READY
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Hi, I'm <strong className="text-cyan-300 font-semibold">Kungumanithish K</strong>, a passionate{' '}
                <strong className="text-cyan-300 font-semibold">Full-Stack Web Developer</strong> and{' '}
                <strong className="text-cyan-300 font-semibold">UI/UX Designer</strong> pursuing B.Tech in Information
                Technology at Nandha Engineering College. I specialize in building dynamic, user-focused web
                applications and e-commerce platforms. From designing interactive interfaces to engineering scalable
                back-end systems, I bring ideas to life.
              </p>
            </div>

            {/* HUD Corner Bracket Photo Frame */}
            <div className="mt-6 pt-6 border-t border-cyan-500/15 flex items-center space-x-6">
              <div className="relative p-1">
                {/* Corner Brackets */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-slate-800 border border-cyan-500/30 relative group">
                  <img
                    src="/profile-photo.jpg"
                    alt="Kungumanithish K"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // fallback if image path changes
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 space-y-1.5 font-mono text-xs">
                <div className="text-slate-400">
                  IDENTIFIER: <span className="text-cyan-300 font-semibold">KUNGUMANITHISH</span>
                </div>
                <div className="text-slate-400">
                  DEGREE: <span className="text-slate-200">B.Tech IT (2027)</span>
                </div>
                <div className="text-slate-400">
                  SPECIALIZATION: <span className="text-cyan-400">UI/UX & Full-Stack</span>
                </div>
                <div className="flex items-center space-x-2 pt-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 cyber-pulse" />
                  <span className="text-[11px] text-emerald-400">AVAILABLE FOR ROLES</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Holographic Workstation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 cyber-card rounded-xl p-5 md:p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Glowing Neon Cyber Header */}
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
                <span className="text-cyan-300 font-bold tracking-wider">DEV_TERMINAL // WORKSTATION</span>
              </div>
              <div className="text-slate-400 text-[11px]">PORT: 5173 // 5000</div>
            </div>

            {/* Interactive Futuristic Code Console with Hologram Workstation Graphic */}
            <div className="my-4 p-4 rounded-lg bg-[#04070c] border border-cyan-500/25 relative font-mono text-xs leading-relaxed overflow-hidden">
              {/* Scanline line */}
              <div className="radar-line" />

              {/* Code lines */}
              <div className="space-y-1 text-slate-300 select-none">
                {codeSnippet.map((line, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start space-x-3 transition-colors duration-300 ${
                      idx === activeCodeLine ? 'text-cyan-300 bg-cyan-500/10 px-1 rounded' : 'text-slate-400'
                    }`}
                  >
                    <span className="text-slate-600 text-[10px] w-4 select-none">{idx + 1}</span>
                    <span className="flex-1 font-mono">{line}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Futuristic Hologram Monitor Canvas / Graphic */}
              <div className="mt-4 pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-[11px] text-cyan-400/80">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded bg-cyan-400/30" />
                    <span className="w-2 h-2 rounded bg-cyan-400/60" />
                    <span className="w-2 h-2 rounded bg-cyan-400" />
                  </div>
                  <span>REACT 18 • POSTGRESQL • VITE • TAILWIND</span>
                </div>
                <div className="text-emerald-400 text-[11px] font-mono flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 cyber-pulse" />
                  <span>PERN ONLINE</span>
                </div>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20 text-center">
                <div className="text-slate-400 text-[9px] uppercase">Experience</div>
                <div className="text-cyan-300 font-bold">3+ Years</div>
              </div>
              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20 text-center">
                <div className="text-slate-400 text-[9px] uppercase">Projects</div>
                <div className="text-cyan-300 font-bold">7+ Built</div>
              </div>
              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20 text-center">
                <div className="text-slate-400 text-[9px] uppercase">UI Design</div>
                <div className="text-cyan-300 font-bold">85% Score</div>
              </div>
              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20 text-center">
                <div className="text-slate-400 text-[9px] uppercase">Code</div>
                <div className="text-cyan-300 font-bold">Clean & Fast</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom HUD Bar matching the reference design */}
        <div className="mt-8 pt-4 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          {/* Left Checkboxes */}
          <div className="flex flex-wrap items-center gap-4">
            <label
              className="flex items-center space-x-2 cursor-pointer select-none text-slate-300 hover:text-cyan-300"
              onClick={() => {
                playClick();
                setHighQuality(!highQuality);
              }}
            >
              <input
                type="checkbox"
                checked={highQuality}
                readOnly
                className="w-3.5 h-3.5 rounded bg-slate-900 border-cyan-500/40 text-cyan-500 focus:ring-0"
              />
              <span className="text-[11px] font-semibold tracking-wider">HIGH QUALITY</span>
            </label>

            <label
              className="flex items-center space-x-2 cursor-pointer select-none text-slate-300 hover:text-cyan-300"
              onClick={() => {
                playClick();
                toggleSound();
              }}
            >
              <input
                type="checkbox"
                checked={soundState}
                readOnly
                className="w-3.5 h-3.5 rounded bg-slate-900 border-cyan-500/40 text-cyan-500 focus:ring-0"
              />
              <span className="text-[11px] font-semibold tracking-wider">SOUND EFFECTS</span>
            </label>

            <label
              className="flex items-center space-x-2 cursor-pointer select-none text-slate-300 hover:text-cyan-300"
              onClick={() => {
                playClick();
                toggleTheme();
              }}
            >
              <input
                type="checkbox"
                checked={isLightMode}
                readOnly
                className="w-3.5 h-3.5 rounded bg-slate-900 border-cyan-500/40 text-cyan-500 focus:ring-0"
              />
              <span className={`text-[11px] font-semibold tracking-wider ${isLightMode ? 'text-cyan-400 font-bold' : ''}`}>
                LIGHT MODE {isLightMode ? '[ACTIVE]' : ''}
              </span>
            </label>
          </div>

          {/* Middle Info Chips */}
          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-cyan-500/20">
              <FaCalendarAlt size={11} className="text-cyan-400" />
              <span>2026</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-cyan-500/20">
              <FaMapMarkerAlt size={11} className="text-cyan-400" />
              <span>ERODE, TN</span>
            </div>
            <a
              href="https://github.com/Nithish06-ux"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FaGithub size={12} />
              <span>GITHUB</span>
            </a>
            <a
              href="mailto:kungumanithish@gmail.com"
              onMouseEnter={playHover}
              onClick={playClick}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FaEnvelope size={12} />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Right Action: AUDIO BOT + PLAY INTRO ▶ + Sound Icon */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                playClick();
                window.dispatchEvent(new CustomEvent('trigger-audio-bot'));
              }}
              onMouseEnter={playHover}
              title="Listen to 30-second portfolio AI audio summary"
              className="px-3.5 py-1.5 rounded text-xs font-mono tracking-wider font-bold border border-cyan-400/70 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 hover:shadow-[0_0_15px_rgba(0,242,254,0.35)] transition-all flex items-center space-x-1.5"
            >
              <FaRobot size={12} className="text-cyan-400" />
              <span>AUDIO SUMMARY</span>
            </button>

            <button
              onClick={() => {
                playClick();
                playIntroSound();
                onPlayIntro();
              }}
              onMouseEnter={playHover}
              className="px-3.5 py-1.5 rounded text-xs font-mono tracking-wider font-bold border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all flex items-center space-x-1.5"
            >
              <span>PLAY INTRO</span>
              <FaPlay size={10} />
            </button>
            <button
              onClick={() => {
                playClick();
                toggleSound();
              }}
              className="p-2 rounded border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10"
            >
              {soundState ? <FaVolumeUp size={12} /> : <FaVolumeMute size={12} className="text-slate-500" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

