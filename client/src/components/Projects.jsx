import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck, FaLayerGroup } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import portfolioData from '../data/portfolioData';

const { projects } = portfolioData;

const colorMap = {
  blue: {
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    glow: 'group-hover:shadow-blue-500/20',
  },
  green: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    gradient: 'from-emerald-600 via-teal-500 to-green-400',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  purple: {
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    gradient: 'from-purple-600 via-pink-500 to-rose-400',
    glow: 'group-hover:shadow-purple-500/20',
  },
  indigo: {
    badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    gradient: 'from-indigo-600 via-purple-500 to-pink-400',
    glow: 'group-hover:shadow-indigo-500/20',
  },
  yellow: {
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
    glow: 'group-hover:shadow-amber-500/20',
  },
  pink: {
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    gradient: 'from-pink-600 via-rose-500 to-purple-400',
    glow: 'group-hover:shadow-pink-500/20',
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.items.map((p) => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects.items
    : projects.items.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={projects.title} subtitle={projects.subtitle} />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const theme = colorMap[project.color] || colorMap.purple;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className={`glass rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl ${theme.glow}`}
                >
                  <div>
                    {/* Header Banner */}
                    <div className="relative h-44 overflow-hidden bg-slate-900 flex items-center justify-center p-6">
                      {/* Gradient Backdrop */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      {/* Geometric overlay shape */}
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-700" />
                      <div className="absolute -left-6 -top-6 w-28 h-28 rounded-full border border-white/5" />

                      {/* Icon */}
                      <div className="relative z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        <FaLayerGroup className="text-purple-300 group-hover:text-white transition-colors" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium border backdrop-blur-md ${theme.badge}`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features Bullet List */}
                      {project.features && (
                        <div className="mb-6 space-y-2">
                          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                            Key Highlights
                          </span>
                          <ul className="space-y-1.5">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs text-slate-400"
                              >
                                <FaCheck className="text-purple-400 flex-shrink-0 text-[10px]" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-7 pb-7 pt-2 border-t border-white/5 flex items-center justify-between">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors group/link"
                        whileHover={{ x: 4 }}
                      >
                        <FaGithub size={16} />
                        <span>Source Code</span>
                        <FaExternalLinkAlt size={11} className="opacity-60 group-hover/link:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Looking for a customized digital solution or interested in collaboration?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build Something Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

