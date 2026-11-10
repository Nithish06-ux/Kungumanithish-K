import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPlay,
  FaPause,
  FaStop,
  FaRobot,
  FaTimes,
  FaHeadphones,
  FaRedo,
} from 'react-icons/fa';
import { playClick, playPetChirp } from '../utils/cyberSound';

const portfolioSummary =
  "Welcome to the developer portfolio of Kungumanithish K. Nithish is a passionate Full-Stack Web Developer and UI/UX Designer pursuing his B.Tech in Information Technology at Nandha Engineering College, Erode. " +
  "His engineering skill set spans the complete PERN stack—PostgreSQL, Express.js, React, and Node.js—along with cross-platform mobile development in Flutter and applied computer vision with OpenCV. " +
  "This portfolio features 11 analyzed GitHub repositories, including vbrionPX, an enterprise cloud pharmacy platform; SmartAttend, a secure biometric and rotating QR event system; and educational predictive analytics models. " +
  "Feel free to switch between Dark and Light modes, explore the deep architectural case studies for every project, or transmit a message directly through the encrypted terminal. Thank you for visiting!";

export default function CyberAudioBot({ isLightMode = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [supported, setSupported] = useState(true);

  const utteranceRef = useRef(null);
  const textIntervalRef = useRef(null);

  const stopSpeaking = () => {
    playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    clearInterval(textIntervalRef.current);
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setCurrentText('');
  };

  const getBestVoice = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') ||
            v.name.includes('Google') ||
            v.name.includes('Jenny') ||
            v.name.includes('Guy'))
      ) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];
    return preferred;
  };

  const startSpeaking = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    playClick();

    window.speechSynthesis.cancel();
    clearInterval(textIntervalRef.current);

    const utterance = new SpeechSynthesisUtterance(portfolioSummary);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const voice = getBestVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setProgress(0);

      const totalChars = portfolioSummary.length;
      let charIdx = 0;
      const durationMs = 36000;
      const intervalMs = 100;
      const step = totalChars / (durationMs / intervalMs);

      textIntervalRef.current = setInterval(() => {
        charIdx = Math.min(totalChars, charIdx + step);
        const pct = Math.min(100, (charIdx / totalChars) * 100);
        setProgress(pct);

        const start = Math.max(0, Math.floor(charIdx) - 100);
        setCurrentText(portfolioSummary.slice(start, Math.floor(charIdx) + 50));
      }, intervalMs);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      clearInterval(textIntervalRef.current);
      playPetChirp();
      setTimeout(() => {
        setProgress(0);
        setCurrentText('');
      }, 3500);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      clearInterval(textIntervalRef.current);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeaking = () => {
    playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };

  // Listen for trigger events from other components
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    const handleTrigger = () => {
      setIsOpen(true);
      startSpeaking();
    };

    window.addEventListener('trigger-audio-bot', handleTrigger);
    return () => {
      window.removeEventListener('trigger-audio-bot', handleTrigger);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearInterval(textIntervalRef.current);
    };
  }, []);

  if (!supported) return null;

  return (
    <>
      {/* Floating Audio Bot Trigger Pill (Bottom-Left) */}
      <div className="fixed bottom-5 left-5 z-40">
        <motion.button
          onClick={() => {
            playClick();
            setIsOpen(!isOpen);
            if (!isOpen && !isPlaying) {
              startSpeaking();
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-2.5 px-3.5 py-2 rounded-full border shadow-lg font-mono text-xs transition-all ${
            isPlaying
              ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.35)]'
              : isLightMode
              ? 'border-sky-300 bg-white/95 text-sky-800 shadow-sky-500/10 hover:border-sky-500'
              : 'border-cyan-500/30 bg-[#080d17]/90 text-cyan-400 hover:border-cyan-400 shadow-black/50'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <FaRobot size={15} className={isPlaying ? 'text-cyan-300 cyber-pulse' : 'text-cyan-400'} />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="font-bold text-[11px] tracking-wider leading-none">
              {isPlaying ? 'AUDIO BOT ACTIVE' : 'AUDIO BOT BRIEFING'}
            </span>
            <span className="text-[9px] text-slate-400 leading-tight">
              {isPlaying ? 'Speaking Portfolio Summary' : 'Listen to 30s audio summary'}
            </span>
          </div>

          {/* Soundwave bars */}
          {isPlaying && (
            <div className="flex items-end space-x-0.5 h-3 ml-1">
              <span className="w-0.5 bg-cyan-400 rounded-full animate-bounce-slow h-2" />
              <span className="w-0.5 bg-cyan-400 rounded-full animate-bounce h-3" />
              <span className="w-0.5 bg-cyan-400 rounded-full animate-bounce-slow h-1.5" />
              <span className="w-0.5 bg-cyan-400 rounded-full animate-bounce h-2.5" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Expanded Holographic Audio Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className={`fixed bottom-20 left-5 z-40 w-80 sm:w-96 rounded-2xl p-4 sm:p-5 border shadow-2xl font-mono relative overflow-hidden backdrop-blur-xl ${
              isLightMode
                ? 'bg-white/95 border-sky-400 shadow-sky-500/20 text-slate-800'
                : 'bg-[#060a12]/95 border-cyan-400/70 shadow-[0_0_35px_rgba(0,242,254,0.25)] text-slate-200'
            }`}
          >
            {/* Top Scanning Line */}
            <div className="radar-line" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-3">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs">
                <FaHeadphones size={13} />
                <span className="font-bold tracking-wider uppercase">PORTFOLIO AI VOICE BRIEFING</span>
              </div>
              <button
                onClick={() => {
                  playClick();
                  setIsOpen(false);
                }}
                className="text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Live Subtitle & Transcript Window */}
            <div
              className={`p-3 rounded-xl border text-xs leading-relaxed min-h-[85px] max-h-[110px] overflow-y-auto mb-3 font-sans transition-colors ${
                isLightMode
                  ? 'bg-slate-50 border-sky-200 text-slate-700'
                  : 'bg-[#03060c] border-cyan-500/20 text-slate-300'
              }`}
            >
              {currentText ? (
                <p className="animate-pulse">
                  "...<span className="font-semibold text-cyan-400">{currentText}</span>..."
                </p>
              ) : (
                <p className="text-slate-400 italic text-[11px]">
                  Press PLAY to listen to a 30-second synthesized audio summary covering Nithish's PERN stack skills, education at Nandha Engineering College, and key GitHub projects.
                </p>
              )}
            </div>

            {/* Progress Bar */}
            <div className="space-y-1 mb-3">
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 shadow-[0_0_8px_#00f2fe] transition-all duration-200"
                />
              </div>
              <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                <span>STATUS: {isPlaying ? (isPaused ? 'PAUSED' : 'SPEAKING') : 'READY'}</span>
                <span>{Math.round(progress)}% COMPLETE</span>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2">
                {!isPlaying ? (
                  <button
                    onClick={startSpeaking}
                    className="px-4 py-1.5 rounded-lg border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                  >
                    <FaPlay size={10} />
                    <span>PLAY AUDIO</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={pauseSpeaking}
                      className="px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-slate-800 text-cyan-300 hover:border-cyan-400 text-xs flex items-center space-x-1.5 transition-colors"
                    >
                      {isPaused ? <FaPlay size={10} /> : <FaPause size={10} />}
                      <span>{isPaused ? 'RESUME' : 'PAUSE'}</span>
                    </button>
                    <button
                      onClick={stopSpeaking}
                      className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-400 transition-colors"
                      title="Stop"
                    >
                      <FaStop size={11} />
                    </button>
                  </>
                )}

                <button
                  onClick={startSpeaking}
                  className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
                  title="Restart Audio"
                >
                  <FaRedo size={11} />
                </button>
              </div>

              <div className="text-[10px] text-cyan-400/80 font-mono">
                AI_AUDIO // BRIEFING
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

