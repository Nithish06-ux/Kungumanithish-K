import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaVolumeUp } from 'react-icons/fa';
import { playClick, isSoundEnabled } from '../utils/cyberSound';

export default function CyberIntroModal({ isOpen, onClose }) {
  const [typedLines, setTypedLines] = useState([]);
  const [complete, setComplete] = useState(false);

  const fullLines = [
    '[SYS_INIT]: INITIALIZING KUNGUMANITHISH PORTFOLIO OS v2.0...',
    '[CORE]: LOADING PROFILE — KUNGUMANITHISH K',
    '[EDUCATION]: B.TECH INFORMATION TECHNOLOGY @ NANDHA ENG COLLEGE',
    '[SPECIALTY]: UI/UX DESIGN & FULL-STACK ENGINEERING (PERN STACK)',
    '[DATABASE]: POSTGRESQL CONNECTED // EXPRESS API ACTIVE',
    '[MISSION]: CRAFTING ELEGANT, RESILIENT & SCALABLE DIGITAL PRODUCTS',
    '[READY]: ALL SUBSYSTEMS NOMINAL. WELCOME, OPERATOR.',
  ];

  useEffect(() => {
    if (!isOpen) {
      setTypedLines([]);
      setComplete(false);
      return;
    }

    // Optional Speech Synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && isSoundEnabled()) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          "Welcome. Initializing Kungumanithish K portfolio system."
        );
        utterance.rate = 1.05;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        // Speech not allowed
      }
    }

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < fullLines.length) {
        setTypedLines((prev) => [...prev, fullLines[lineIndex]]);
        lineIndex++;
      } else {
        setComplete(true);
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-lg cyber-card rounded-2xl p-6 border border-cyan-400/80 shadow-[0_0_35px_rgba(0,242,254,0.3)] relative overflow-hidden font-mono"
      >
        <div className="radar-line" />

        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs">
            <FaTerminal size={14} />
            <span className="font-bold tracking-wider">PORTFOLIO_OS // SYSTEM_BOOT</span>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-cyan-300"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <div className="space-y-2 text-xs min-h-[190px] bg-[#03060c] p-4 rounded-lg border border-cyan-500/20 text-slate-300">
          {typedLines.map((line, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-cyan-400">›</span>
              <span className={idx === typedLines.length - 1 ? 'text-cyan-300 font-bold' : 'text-slate-300'}>
                {line}
              </span>
            </div>
          ))}
          {!complete && (
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-4" />
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-cyan-500/20 flex justify-end">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="px-5 py-2 rounded border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-bold tracking-wider"
          >
            ENTER SYSTEM →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

