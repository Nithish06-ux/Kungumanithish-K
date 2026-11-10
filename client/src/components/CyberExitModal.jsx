import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaUnlock, FaPowerOff, FaTimes } from 'react-icons/fa';
import { playClick } from '../utils/cyberSound';

export default function CyberExitModal({ isOpen, onClose }) {
  const [locked, setLocked] = useState(false);

  if (!isOpen && !locked) return null;

  if (locked) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#03060b] font-mono text-center space-y-6">
        <div className="w-20 h-20 rounded-full border border-cyan-400/40 bg-cyan-950/20 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.3)]">
          <FaLock size={32} />
        </div>
        <div className="space-y-2">
          <div className="text-xl font-bold tracking-widest text-slate-100 uppercase">
            TERMINAL SESSION LOCKED
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Kungumanithish K portfolio environment paused. Ready to resume session whenever you are.
          </p>
        </div>
        <button
          onClick={() => {
            playClick();
            setLocked(false);
            onClose();
          }}
          className="px-6 py-2.5 rounded-lg border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-bold text-xs tracking-wider flex items-center space-x-2 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
        >
          <FaUnlock size={12} />
          <span>RESUME SESSION</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md cyber-card rounded-2xl p-6 border border-cyan-400/70 shadow-[0_0_30px_rgba(0,242,254,0.25)] font-mono text-xs relative"
      >
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
          <div className="flex items-center space-x-2 text-cyan-400 font-bold">
            <FaPowerOff size={14} />
            <span>SESSION CONTROL</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-cyan-300">
            <FaTimes size={16} />
          </button>
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed">
          Would you like to lock the terminal session or explore other sections of the portfolio?
        </p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="px-4 py-2 rounded border border-slate-700 text-slate-300 hover:bg-slate-800"
          >
            STAY ONLINE
          </button>
          <button
            onClick={() => {
              playClick();
              setLocked(true);
            }}
            className="px-5 py-2 rounded border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-bold"
          >
            LOCK TERMINAL
          </button>
        </div>
      </motion.div>
    </div>
  );
}

