import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import CyberBackground from './components/CyberBackground';
import CyberNavbar from './components/CyberNavbar';
import CyberHero from './components/CyberHero';
import CyberAbout from './components/CyberAbout';
import CyberProjects from './components/CyberProjects';
import CyberExperience from './components/CyberExperience';
import CyberHobbies from './components/CyberHobbies';
import CyberContact from './components/CyberContact';
import CyberFooter from './components/CyberFooter';
import CyberIntroModal from './components/CyberIntroModal';
import CyberExitModal from './components/CyberExitModal';
import CyberPet from './components/CyberPet';
import CyberAudioBot from './components/CyberAudioBot';
import { isSoundEnabled, setSoundEnabled } from './utils/cyberSound';
import { getPortfolioData } from './api/portfolio';

function App() {
  const [soundState, setSoundState] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [petEnabled, setPetEnabled] = useState(true);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  useEffect(() => {
    // Warm up backend
    getPortfolioData().catch(() => {});
  }, []);

  const toggleTheme = () => {
    const nextMode = !isLightMode;
    setIsLightMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  };

  const toggleSound = () => {
    const nextState = !soundState;
    setSoundState(nextState);
    setSoundEnabled(nextState);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isLightMode
          ? 'bg-[#f8fafc] text-slate-900 selection:bg-sky-500/30 selection:text-slate-900'
          : 'bg-[#06090e] text-slate-100 selection:bg-cyan-500/30 selection:text-white'
      } overflow-x-hidden`}
    >
      {/* Interactive Cursor Following Dev Pet */}
      <CyberPet enabled={petEnabled} isLightMode={isLightMode} />

      {/* Cyber Grid & Ambient Canvas Background */}
      <CyberBackground isLightMode={isLightMode} />

      {/* Cyber HUD Fixed Header */}
      <CyberNavbar
        soundState={soundState}
        toggleSound={toggleSound}
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
        onExitClick={() => setIsExitOpen(true)}
      />

      {/* Main Terminal Sections matching reference design */}
      <main className="relative z-10">
        {/* [SEC-0] Hero with Quick Bio, Workstation Console & HUD Bar */}
        <CyberHero
          soundState={soundState}
          toggleSound={toggleSound}
          isLightMode={isLightMode}
          toggleTheme={toggleTheme}
          onPlayIntro={() => setIsIntroOpen(true)}
        />

        {/* [SEC-1] About Me with Background, Focus & Hobbies */}
        <CyberAbout isLightMode={isLightMode} />

        {/* [SEC-2] Projects with Category Filters & Interactive Previews */}
        <CyberProjects isLightMode={isLightMode} />

        {/* [SEC-3] Experience, Education & Achievements */}
        <CyberExperience isLightMode={isLightMode} />

        {/* [SEC-4] Hobbies with 5 Glowing Interactive Cards */}
        <CyberHobbies isLightMode={isLightMode} />

        {/* [SEC-5] Get In Touch with Corner-bracket Trigger & Holographic Form */}
        <CyberContact
          isModalOpen={isContactModalOpen}
          setIsModalOpen={setIsContactModalOpen}
          isLightMode={isLightMode}
        />
      </main>

      {/* Cyberpunk Footer */}
      <CyberFooter isLightMode={isLightMode} />

      {/* Floating Interactive Audio Bot with Live Subtitles & Visualizer */}
      <CyberAudioBot isLightMode={isLightMode} />

      {/* Interactive Modals */}
      <CyberIntroModal
        isOpen={isIntroOpen}
        onClose={() => setIsIntroOpen(false)}
        isLightMode={isLightMode}
      />
      <CyberExitModal
        isOpen={isExitOpen}
        onClose={() => setIsExitOpen(false)}
        isLightMode={isLightMode}
      />

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isLightMode ? '#ffffff' : '#040811',
            color: isLightMode ? '#0284c7' : '#38bdf8',
            border: isLightMode ? '1px solid rgba(14, 165, 233, 0.4)' : '1px solid rgba(0, 242, 254, 0.4)',
            boxShadow: isLightMode ? '0 0 20px rgba(14, 165, 233, 0.2)' : '0 0 20px rgba(0, 242, 254, 0.2)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
          },
        }}
      />
    </div>
  );
}

export default App;
