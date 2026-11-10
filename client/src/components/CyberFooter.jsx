import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { playHover, playClick } from '../utils/cyberSound';

export default function CyberFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/15 bg-[#04070c] py-8 z-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Identity */}
        <div className="flex items-center space-x-3 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 cyber-pulse" />
          <span>KUNGUMANITHISH K © {currentYear}</span>
          <span className="text-cyan-500/50">|</span>
          <span className="text-cyan-400/80">PORTFOLIO_OS v2.0</span>
        </div>

        {/* Center: Tech status */}
        <div className="text-[11px] text-slate-500">
          ENGINEERED WITH REACT 18 • TAILWIND • NODE.JS • POSTGRESQL
        </div>

        {/* Right: Quick Social Links */}
        <div className="flex items-center space-x-3 text-slate-400">
          <a
            href="https://github.com/Nithish06-ux"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="p-1.5 rounded hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            <FaGithub size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/kungumanithish-k"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="p-1.5 rounded hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            <FaLinkedin size={14} />
          </a>
          <a
            href="mailto:kungumanithish@gmail.com"
            onMouseEnter={playHover}
            onClick={playClick}
            className="p-1.5 rounded hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            <FaEnvelope size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

