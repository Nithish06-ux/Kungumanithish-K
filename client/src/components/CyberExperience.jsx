import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaStar, FaCertificate, FaFileAlt, FaCode } from 'react-icons/fa';
import { playHover, playClick, playSwitch } from '../utils/cyberSound';

const expCategories = [
  { id: 'work', label: 'Work Experience', icon: FaBriefcase },
  { id: 'education', label: 'Education & Internships', icon: FaGraduationCap },
  { id: 'achievements', label: 'Achievements', icon: FaTrophy },
];

const workData = [
  {
    role: 'Full Stack Web Developer',
    org: 'Freelance & Open Source Projects',
    period: '2025 - Present',
    description: 'Engineering scalable PERN stack web applications, optimizing REST APIs, and implementing responsive UI components with React 18, Tailwind CSS and PostgreSQL.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    role: 'UI/UX Designer & Frontend Lead',
    org: 'Academic Tech Labs & Design Projects',
    period: '2024 - 2025',
    description: 'Designed user-centric interfaces, developed high-fidelity interactive wireframes in Figma, and translated UX specifications into pixel-perfect accessible front-end code.',
    tags: ['Figma', 'UI/UX', 'Wireframing', 'Design Systems'],
  },
  {
    role: 'Mobile & Cloud Application Builder',
    org: 'Nandha Engineering College',
    period: '2023 - 2024',
    description: 'Developed cross-platform mobile solutions using Flutter & Dart, integrated local SQLite and cloud databases, and configured CI/CD automated build pipelines.',
    tags: ['Flutter', 'Dart', 'Docker', 'Git'],
  },
];

const educationData = [
  {
    role: 'B.Tech - Information Technology',
    org: 'Nandha Engineering College, Erode',
    period: '2023 - 2027 (Current)',
    description: 'Pursuing undergraduate degree focused on Software Engineering, Data Structures & Algorithms, Database Management, and Human-Computer Interaction.',
    tags: ['CGPA: Excellent', 'IT Department', 'Anna University Affiliated'],
  },
  {
    role: 'Higher Secondary Education (HSC)',
    org: 'State Board of Tamil Nadu',
    period: 'Completed 2023',
    description: 'Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science.',
    tags: ['Computer Science', 'Mathematics'],
  },
];

const achievementsData = [
  { count: '3+', label: 'Hackathons & Contests', icon: FaStar, desc: 'Participated in regional engineering hackathons and algorithmic contests.' },
  { count: '2+', label: 'Project Showcases', icon: FaFileAlt, desc: 'Presented technical projects on ML educational analytics and mobile trackers.' },
  { count: '5+', label: 'Certifications', icon: FaCertificate, desc: 'Certified in UI/UX Design, Modern JavaScript, Full-Stack and Git version control.' },
];

export default function CyberExperience() {
  const [activeTab, setActiveTab] = useState('work');

  const getTimelineItems = () => {
    if (activeTab === 'education') return educationData;
    return workData;
  };

  return (
    <section id="experience" className="py-20 relative border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading & Filter Tabs matching reference */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                [SEC-3]
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase mt-1">
                EXPERIENCE
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                My professional journey, internships, academic milestones, and key contributions.
              </p>
            </div>

            {/* Vertical Tabs */}
            <div className="space-y-2">
              {expCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playSwitch();
                      setActiveTab(cat.id);
                    }}
                    onMouseEnter={playHover}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 border text-left ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : 'border-cyan-500/20 bg-slate-900/60 text-slate-400 hover:border-cyan-500/50 hover:text-slate-200'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                    <span className="font-semibold">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Timeline Cards with Glowing Connectors */}
          <div className="lg:col-span-6 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {getTimelineItems().map((item, idx) => (
                  <div
                    key={idx}
                    className="cyber-card rounded-xl p-5 border border-cyan-500/25 relative pl-6 group hover:border-cyan-400 transition-all"
                  >
                    {/* Glowing Left Timeline Accent Node */}
                    <span className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-transparent rounded-r shadow-[0_0_8px_#00f2fe]" />

                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h3 className="text-sm sm:text-base font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/25">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 mb-2">
                      {item.org}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cyan-500/15">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 border border-cyan-500/20 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: ACHIEVEMENTS Card matching reference */}
          <div className="lg:col-span-3 cyber-card rounded-xl p-6 border border-cyan-500/30 space-y-6">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm tracking-wider uppercase font-bold border-b border-cyan-500/20 pb-3">
              <FaTrophy size={16} />
              <span>ACHIEVEMENTS</span>
            </div>

            <div className="space-y-5">
              {achievementsData.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400 transition-all flex items-start space-x-3"
                  >
                    <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-base font-bold font-mono text-slate-100 flex items-center space-x-1.5">
                        <span className="text-cyan-400">{ach.count}</span>
                        <span>{ach.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {ach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-cyan-500/20 text-center">
              <span className="text-[10px] font-mono text-cyan-400/80">
                CONTINUOUSLY EXPANDING KNOWLEDGE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

