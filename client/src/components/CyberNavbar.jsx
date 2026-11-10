import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaVolumeUp, FaVolumeMute, FaExternalLinkAlt, FaSun, FaMoon } from 'react-icons/fa';
import { playHover, playClick, playSwitch, isSoundEnabled, setSoundEnabled } from '../utils/cyberSound';

const navItems = [
  { id: 'home', label: 'HOME', sec: 'SEC-0' },
  { id: 'about', label: 'ABOUT', sec: 'SEC-1' },
  { id: 'projects', label: 'PROJECTS', sec: 'SEC-2' },
  { id: 'experience', label: 'EXPERIENCE', sec: 'SEC-3' },
  { id: 'contact', label: 'CONTACT', sec: 'SEC-5' },
];

export default function CyberNavbar({ onExitClick, soundState, toggleSound, isLightMode, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    playClick();
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06090e]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20'
          : 'bg-[#06090e]/75 backdrop-blur-sm border-b border-cyan-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Brand / Title */}
        <div
          onClick={() => handleNavClick('home')}
          onMouseEnter={playHover}
          className="cursor-pointer group flex flex-col"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 cyber-pulse shadow-[0_0_8px_#00f2fe]" />
            <h1 className="text-lg md:text-xl font-bold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors uppercase">
              Kungumanithish K
            </h1>
          </div>
          <span className="text-[10px] md:text-[11px] font-mono tracking-widest text-cyan-400/70 uppercase">
            Full-Stack Web Developer & UI/UX
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={playHover}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f2fe]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound Toggle + Theme Toggle + EXIT button */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            onMouseEnter={playHover}
            title={isLightMode ? 'Switch to Cyber Dark Mode' : 'Switch to Sci-Fi Light Mode'}
            className="p-2 rounded border border-cyan-500/25 bg-slate-900/60 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            {isLightMode ? <FaMoon size={14} className="text-sky-500" /> : <FaSun size={14} className="text-amber-400" />}
          </button>

          <button
            onClick={() => {
              playClick();
              toggleSound();
            }}
            onMouseEnter={playHover}
            title={soundState ? 'Sound FX Enabled' : 'Sound FX Muted'}
            className="p-2 rounded border border-cyan-500/25 bg-slate-900/60 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            {soundState ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} className="text-slate-500" />}
          </button>

          <button
            onClick={() => {
              playClick();
              onExitClick();
            }}
            onMouseEnter={playHover}
            className="px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase border border-cyan-500/40 bg-slate-900/80 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/15 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all flex items-center space-x-1.5"
          >
            <span>EXIT</span>
            <FaExternalLinkAlt size={10} className="opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            className="p-2 text-cyan-400"
          >
            {isLightMode ? <FaMoon size={16} className="text-sky-500" /> : <FaSun size={16} className="text-amber-400" />}
          </button>

          <button
            onClick={() => {
              playClick();
              toggleSound();
            }}
            className="p-2 text-cyan-400"
          >
            {soundState ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} className="text-slate-500" />}
          </button>

          <button
            onClick={() => {
              playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 text-slate-300 hover:text-cyan-400"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-cyan-500/20 bg-[#06090e]/98 backdrop-blur-xl px-4 py-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 text-sm font-mono tracking-wider rounded ${
                  activeSection === item.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/40'
                }`}
              >
                <span className="text-[10px] text-cyan-400/60 mr-2">[{item.sec}]</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onExitClick();
              }}
              className="w-full mt-2 text-center py-2 text-xs font-mono border border-cyan-500/40 text-cyan-300 rounded bg-cyan-950/30"
            >
              EXIT SESSION ⇲
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

