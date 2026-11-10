import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserAlt, FaClock, FaDice, FaCode, FaLaptopCode, FaUsers, FaGraduationCap } from 'react-icons/fa';
import { playHover, playClick, playSwitch } from '../utils/cyberSound';

const aboutTabs = [
  { id: 'background', label: 'Background', icon: FaUserAlt },
  { id: 'focus', label: 'Current Focus', icon: FaClock },
  { id: 'hobbies', label: 'Hobbies & Passions', icon: FaDice },
];

export default function CyberAbout() {
  const [activeTab, setActiveTab] = useState('background');

  const tabContents = {
    background: {
      title: 'BACKGROUND',
      icon: FaUserAlt,
      text: "I'm a Full-Stack Developer and UI/UX enthusiast pursuing B.Tech in Information Technology at Nandha Engineering College. I love solving real-world problems through clean code and intuitive design. I enjoy turning complex concepts into functional, beautiful, and scalable web and mobile applications.",
      details: [
        'Education: B.Tech in Information Technology (2023 - 2027)',
        'Institution: Nandha Engineering College, Erode',
        'Core Interest: Human-Computer Interaction & PERN Stack Architecture',
      ],
    },
    focus: {
      title: 'CURRENT FOCUS',
      icon: FaClock,
      text: 'Currently specializing in full-stack architecture with the PERN stack (PostgreSQL, Express.js, React 18, Node.js), mobile development with Flutter/Dart, and machine learning integration for intelligent data-driven applications.',
      details: [
        'Frontend: React, Vite, Tailwind CSS, Framer Motion',
        'Backend & DB: Node.js, Express REST APIs, PostgreSQL, Supabase',
        'Exploration: Large Language Models, AI analytics & UI design systems',
      ],
    },
    hobbies: {
      title: 'HOBBIES & INSPIRATION',
      icon: FaDice,
      text: 'Beyond writing code, I love exploring modern digital design trends in Figma, listening to ambient coding playlists, traveling to gain fresh perspectives, and experimenting with creative developer sandboxes.',
      details: [
        'Creative: UI/UX Wireframing & Prototyping in Figma',
        'Audio: High-focus Lo-Fi & Synthwave tracks',
        'Learning: Deep-diving into open-source architectures & algorithms',
      ],
    },
  };

  const current = tabContents[activeTab];

  return (
    <section id="about" className="py-20 relative border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading, Subtext, Vertical Tabs */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                [SEC-1]
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase mt-1">
                ABOUT <span className="gradient-cyan-text cyber-glow-cyan">ME</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Get to know more about my background, skills, and what drives me.
              </p>
            </div>

            {/* Vertical Sub-Navigation Tabs matching reference */}
            <div className="space-y-2">
              {aboutTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      playSwitch();
                      setActiveTab(tab.id);
                    }}
                    onMouseEnter={playHover}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 border text-left ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : 'border-cyan-500/20 bg-slate-900/60 text-slate-400 hover:border-cyan-500/50 hover:text-slate-200'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Dynamic Content Card + Stats */}
          <div className="lg:col-span-5 cyber-card rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Header */}
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm tracking-wider uppercase font-bold border-b border-cyan-500/20 pb-3">
                  <current.icon size={16} />
                  <span>{current.title}</span>
                </div>

                {/* Description */}
                <p className="text-slate-200 text-sm leading-relaxed">
                  {current.text}
                </p>

                {/* Bullet details */}
                <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  {current.details.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Stats Row matching reference */}
            <div className="mt-8 pt-6 border-t border-cyan-500/20 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20">
                <div className="flex justify-center text-cyan-400 mb-1">
                  <FaCode size={16} />
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-100">4+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Years Study</div>
              </div>

              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20">
                <div className="flex justify-center text-cyan-400 mb-1">
                  <FaLaptopCode size={16} />
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-100">7+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Projects</div>
              </div>

              <div className="p-2 rounded bg-slate-900/60 border border-cyan-500/20">
                <div className="flex justify-center text-cyan-400 mb-1">
                  <FaUsers size={16} />
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-slate-100">10+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Tech Stacks</div>
              </div>
            </div>
          </div>

          {/* Right Column: Cyber Workstation Showcase Card matching reference */}
          <div className="lg:col-span-3 cyber-card rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Glowing screen graphic */}
            <div className="w-full h-64 sm:h-72 rounded-lg bg-[#040811] border border-cyan-500/30 overflow-hidden relative flex flex-col justify-between p-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400/80">
                <span>STATION // ALPHA</span>
                <span className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 cyber-pulse" />
                  <span>ACTIVE</span>
                </span>
              </div>

              {/* Holographic glowing monitor visual */}
              <div className="my-auto text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                  <FaGraduationCap size={28} />
                </div>
                <div className="text-xs font-mono font-bold text-slate-100">
                  NANDHA ENG COLLEGE
                </div>
                <div className="text-[10px] font-mono text-cyan-400">
                  DEPT OF INFORMATION TECH
                </div>
                <div className="text-[10px] text-slate-400">
                  ERODE, TAMIL NADU
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2 border-t border-cyan-500/20 text-[10px] font-mono text-slate-400 flex justify-between">
                <span>BATCH: 2023-2027</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

