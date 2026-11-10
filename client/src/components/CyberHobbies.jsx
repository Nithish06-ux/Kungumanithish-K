import { motion } from 'framer-motion';
import { FaHeadphones, FaCamera, FaPlane, FaBook, FaGamepad } from 'react-icons/fa';
import { playHover, playClick } from '../utils/cyberSound';

const hobbies = [
  {
    id: 'music',
    title: 'Music',
    desc: 'Relax & Focus',
    sub: 'Synthwave, Lo-Fi & Ambient',
    icon: FaHeadphones,
  },
  {
    id: 'photography',
    title: 'Photography',
    desc: 'Capture Moments',
    sub: 'Architecture & Street Views',
    icon: FaCamera,
  },
  {
    id: 'travel',
    title: 'Travel',
    desc: 'Explore & Learn',
    sub: 'Cultures & Perspectives',
    icon: FaPlane,
  },
  {
    id: 'reading',
    title: 'Reading',
    desc: 'Tech & Design',
    sub: 'UI Trends & Dev Articles',
    icon: FaBook,
  },
  {
    id: 'gaming',
    title: 'Gaming',
    desc: 'Strategy & Fun',
    sub: 'Problem Solving & Mechanics',
    icon: FaGamepad,
  },
];

export default function CyberHobbies() {
  return (
    <section id="hobbies" className="py-20 relative border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference design */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            [SEC-4]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase mt-1">
            HOBBIES
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl">
            Things I enjoy outside of coding that keep me creative, curious, and inspired.
          </p>
        </div>

        {/* 5-Card Grid matching reference design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={playHover}
                onClick={playClick}
                className="cyber-card rounded-xl p-5 border border-cyan-500/25 flex flex-col items-center text-center group hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all" />

                {/* Neon Icon */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.35)] transition-all">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {hobby.title}
                </h3>

                {/* Main tagline */}
                <p className="text-xs font-mono text-cyan-400/90 mt-1">
                  {hobby.desc}
                </p>

                {/* Subtag */}
                <span className="text-[10px] text-slate-500 mt-2">
                  {hobby.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

