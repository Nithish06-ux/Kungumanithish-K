import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaFolder,
  FaGlobe,
  FaMobileAlt,
  FaBrain,
  FaCode,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCheck,
  FaCopy,
  FaShieldAlt,
  FaDatabase,
  FaLayerGroup,
  FaLightbulb,
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { playHover, playClick, playSwitch } from '../utils/cyberSound';
import portfolioData from '../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Projects', icon: FaFolder },
  { id: 'web', label: 'Web Apps', icon: FaGlobe },
  { id: 'mobile', label: 'Mobile & Cloud', icon: FaMobileAlt },
  { id: 'aiml', label: 'AI & Vision', icon: FaBrain },
  { id: 'dsa', label: 'DSA & Algorithms', icon: FaCode },
];

export default function CyberProjects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [copiedClone, setCopiedClone] = useState(false);

  const projects = portfolioData.projects;

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const pageSize = 3;
  const maxPage = Math.max(0, Math.ceil(filteredProjects.length / pageSize) - 1);
  const currentProjects = filteredProjects.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleCategorySelect = (catId) => {
    playSwitch();
    setSelectedCategory(catId);
    setCurrentPage(0);
  };

  const openCaseStudy = (project) => {
    playClick();
    setActiveCaseStudy(project);
    setCopiedClone(false);
  };

  const copyCloneCommand = (repoUrl) => {
    playClick();
    const cmd = `git clone ${repoUrl}.git`;
    navigator.clipboard.writeText(cmd);
    setCopiedClone(true);
    toast.success('Clone command copied to clipboard!');
    setTimeout(() => setCopiedClone(false), 3000);
  };

  const renderPreviewGraphic = (type, title) => {
    switch (type) {
      case 'face-scan':
        return (
          <div className="w-full h-36 bg-[#040913] border border-cyan-500/25 rounded-lg relative overflow-hidden flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <div className="relative w-20 h-20 rounded-full border border-cyan-400/40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full border border-dashed border-cyan-400 cyber-pulse" />
              <div className="absolute inset-x-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f2fe] animate-bounce-slow" />
              <FaBrain size={24} className="text-cyan-300 opacity-80" />
            </div>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/80">
              AI_CONFIDENCE: 98.4%
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-emerald-400">
              LBPH + OPENCV
            </div>
          </div>
        );
      case 'mobile-app':
        return (
          <div className="w-full h-36 bg-[#040913] border border-cyan-500/25 rounded-lg relative overflow-hidden flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <div className="w-20 h-28 rounded-lg border border-cyan-400/50 bg-slate-900/80 p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <div className="w-full h-1.5 rounded-full bg-cyan-400/40" />
              <div className="space-y-1">
                <div className="w-full h-2 rounded bg-cyan-500/30" />
                <div className="w-3/4 h-2 rounded bg-cyan-500/20" />
                <div className="w-1/2 h-2 rounded bg-cyan-500/20" />
              </div>
              <div className="w-full h-3 rounded bg-cyan-500/40 text-[7px] font-mono text-center text-cyan-200">
                CHECK-IN
              </div>
            </div>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/80">
              FLUTTER + FASTAPI
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-emerald-400">
              HMAC-SHA256
            </div>
          </div>
        );
      case 'neural':
        return (
          <div className="w-full h-36 bg-[#040913] border border-cyan-500/25 rounded-lg relative overflow-hidden flex flex-col justify-between p-3 group-hover:border-cyan-400 transition-colors font-mono">
            <div className="flex justify-between text-[9px] text-cyan-400">
              <span>TRANSFORMER_LAYERS</span>
              <span className="text-emerald-400">ATTN_WEIGHTS</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 my-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 rounded bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-[7px] text-cyan-300"
                >
                  HEAD_{i}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-slate-400">
              <span>PYTORCH // TOKENS</span>
              <span className="text-cyan-400">EMBED_DIM: 768</span>
            </div>
          </div>
        );
      case 'code':
        return (
          <div className="w-full h-36 bg-[#040913] border border-cyan-500/25 rounded-lg relative overflow-hidden p-3 flex flex-col justify-between group-hover:border-cyan-400 transition-colors font-mono text-[9px]">
            <div className="flex justify-between items-center text-cyan-400 border-b border-cyan-500/20 pb-1.5">
              <span>BST_OPTIMIZATION.JAVA</span>
              <span className="text-emerald-400">O(h) COMPLEXITY</span>
            </div>
            <div className="space-y-1 text-slate-300">
              <div className="text-cyan-300">TreeNode root = deleteNode(root, val);</div>
              <div className="text-slate-500">// In-order successor swap</div>
              <div className="text-purple-300">return validateBST(root, min, max);</div>
            </div>
            <div className="flex justify-between text-[8px] text-slate-400 pt-1 border-t border-cyan-500/20">
              <span>LEETCODE // DSA</span>
              <span className="text-emerald-400">ALL TESTS PASSED</span>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div className="w-full h-36 bg-[#040913] border border-cyan-500/25 rounded-lg relative overflow-hidden p-3 flex flex-col justify-between group-hover:border-cyan-400 transition-colors font-mono">
            <div className="flex justify-between items-center text-[9px] text-cyan-400">
              <span className="uppercase font-bold tracking-wider">{title.split('—')[0]}</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 cyber-pulse" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-cyan-950/40 border border-cyan-500/20 p-1 text-[8px] font-mono text-cyan-300">
                POSTGRESQL
              </div>
              <div className="h-10 rounded bg-cyan-950/40 border border-cyan-500/20 p-1 text-[8px] font-mono text-cyan-300">
                EXPRESS API
              </div>
              <div className="h-10 rounded bg-cyan-950/40 border border-cyan-500/20 p-1 text-[8px] font-mono text-cyan-300">
                REACT 18
              </div>
            </div>
            <div className="text-[9px] font-mono text-slate-400 flex justify-between">
              <span>STATUS: PRODUCTION</span>
              <span className="text-emerald-400">LATENCY: 12ms</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading & Category Filter Tabs */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                [SEC-2]
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase mt-1">
                PROJECTS
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Case studies and architectural breakdowns of all 11 GitHub repositories, spanning PERN stack applications, mobile systems, computer vision, and DSA algorithms.
              </p>
            </div>

            {/* Vertical Filter Tabs matching reference design */}
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    onMouseEnter={playHover}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 border text-left ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : 'border-cyan-500/20 bg-slate-900/60 text-slate-400 hover:border-cyan-500/50 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                      <span className="font-semibold">{cat.label}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400/80">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Overall Repos Status Badge */}
            <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-xs font-mono text-slate-400 space-y-1">
              <div className="text-[10px] text-cyan-400 font-bold uppercase">
                GITHUB SYNC: COMPLETE
              </div>
              <div>11 Public Repositories Indexed</div>
              <div className="text-[10px] text-slate-500">
                Click any project card to open its full architectural case study.
              </div>
            </div>
          </div>

          {/* Right Column: 3-Card Carousel / Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="cyber-card rounded-xl p-4 flex flex-col justify-between group relative border border-cyan-500/25 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                  onClick={() => openCaseStudy(project)}
                >
                  {/* External GitHub link in top right */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick();
                    }}
                    onMouseEnter={playHover}
                    title="View on GitHub"
                    className="absolute top-6 right-6 z-10 p-1.5 rounded bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={10} />
                  </a>

                  {/* Preview Graphic */}
                  <div className="mb-4">
                    {renderPreviewGraphic(project.previewType, project.title)}
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-cyan-400/90 uppercase font-semibold">
                        {project.categoryLabel || 'PROJECT'}
                      </span>
                      <span className="text-slate-500">[{project.year || '2026'}]</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Badges & Case Study Button */}
                  <div className="mt-4 pt-3 border-t border-cyan-500/20 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 border border-cyan-500/25 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono text-slate-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-1">
                      <span className="text-[11px] text-cyan-400 group-hover:underline flex items-center space-x-1 font-semibold">
                        <span>CASE STUDY</span>
                        <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {project.status || 'ACTIVE'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-cyan-500/15">
              <div className="flex items-center space-x-2">
                {Array.from({ length: maxPage + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClick();
                      setCurrentPage(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentPage === idx
                        ? 'w-7 bg-cyan-400 shadow-[0_0_8px_#00f2fe]'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-slate-400 mr-2">
                  PAGE {currentPage + 1} OF {maxPage + 1}
                </span>
                <button
                  disabled={currentPage === 0}
                  onClick={() => {
                    playClick();
                    setCurrentPage((prev) => Math.max(0, prev - 1));
                  }}
                  onMouseEnter={playHover}
                  className="p-2 rounded border border-cyan-500/25 bg-slate-900/60 text-cyan-400 hover:border-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  disabled={currentPage >= maxPage}
                  onClick={() => {
                    playClick();
                    setCurrentPage((prev) => Math.min(maxPage, prev + 1));
                  }}
                  onMouseEnter={playHover}
                  className="p-2 rounded border border-cyan-500/25 bg-slate-900/60 text-cyan-400 hover:border-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="w-full max-w-3xl cyber-card rounded-2xl p-6 sm:p-8 border border-cyan-400/70 shadow-[0_0_40px_rgba(0,242,254,0.3)] relative overflow-hidden font-mono max-h-[90vh] overflow-y-auto"
            >
              <div className="radar-line" />

              {/* Close Button */}
              <button
                onClick={() => {
                  playClick();
                  setActiveCaseStudy(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-slate-400 hover:text-cyan-300 transition-colors z-20"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Header */}
              <div className="border-b border-cyan-500/20 pb-4 mb-6">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-cyan-400 tracking-widest uppercase mb-1">
                  <span>[CASE_STUDY // REPO_ID: {activeCaseStudy.id}]</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">{activeCaseStudy.status}</span>
                  <span>•</span>
                  <span>{activeCaseStudy.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wide">
                  {activeCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300/90 font-mono mt-1">
                  {activeCaseStudy.tagline}
                </p>
              </div>

              {/* Problem & Solution Case Study Section */}
              <div className="space-y-5 text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem Statement */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-red-500/20">
                    <div className="flex items-center space-x-2 text-red-400 font-bold text-xs uppercase mb-2">
                      <FaLightbulb size={12} />
                      <span>The Challenge / Problem</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans text-xs">
                      {activeCaseStudy.problemStatement ||
                        'Organizations need efficient, scalable digital workflows without manual friction, downtime, or security oversights.'}
                    </p>
                  </div>

                  {/* Solution Architecture */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
                    <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase mb-2">
                      <FaShieldAlt size={12} />
                      <span>Engineering Solution</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans text-xs">
                      {activeCaseStudy.solution ||
                        activeCaseStudy.summary}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Breakdown Section */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/25 space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase">
                    <FaLayerGroup size={13} />
                    <span>Multi-Tier Tech Stack Breakdown</span>
                  </div>

                  {activeCaseStudy.stackBreakdown ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                      {Object.entries(activeCaseStudy.stackBreakdown).map(([tier, desc]) => (
                        <div key={tier} className="p-2.5 rounded bg-[#040811] border border-cyan-500/15">
                          <span className="text-[10px] text-cyan-400/80 uppercase font-bold block mb-0.5">
                            {tier.replace('_', ' / ')}
                          </span>
                          <span className="text-slate-200">{desc}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeCaseStudy.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-xs bg-cyan-950/60 border border-cyan-500/30 text-cyan-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Engineering Highlights */}
                {activeCaseStudy.highlights && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/25 space-y-2.5">
                    <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase">
                      <FaDatabase size={12} />
                      <span>Key Architectural Highlights & Innovations</span>
                    </div>
                    <ul className="space-y-2 pt-1">
                      {activeCaseStudy.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-300 text-[11px]">
                          <span className="text-cyan-400 mt-0.5">›</span>
                          <span className="leading-relaxed font-sans">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Executive Summary Narrative */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">
                    Executive Summary Narrative
                  </span>
                  <p className="text-slate-300 font-sans text-xs leading-relaxed">
                    {activeCaseStudy.summary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => copyCloneCommand(activeCaseStudy.github)}
                  className="px-4 py-2 rounded border border-cyan-500/30 bg-slate-900/80 text-cyan-300 hover:border-cyan-400 flex items-center space-x-2 transition-colors"
                >
                  {copiedClone ? <FaCheck size={12} className="text-emerald-400" /> : <FaCopy size={12} />}
                  <span>{copiedClone ? 'COMMAND COPIED!' : 'COPY GIT CLONE'}</span>
                </button>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="px-4 py-2 rounded border border-slate-700 text-slate-400 hover:text-slate-200"
                  >
                    CLOSE
                  </button>
                  <a
                    href={activeCaseStudy.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="px-5 py-2 rounded border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-bold flex items-center space-x-2 shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                  >
                    <FaGithub size={14} />
                    <span>VIEW ON GITHUB ↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
