import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaTerminal, FaTools } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import portfolioData from '../data/portfolioData';

const { skills } = portfolioData;

const iconMap = {
  palette: FaPaintBrush,
  code: FaCode,
  terminal: FaTerminal,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SkillBar = ({ name, level, gradient }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-slate-300">{name}</span>
        <span className="text-purple-300 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={skills.title} subtitle={skills.subtitle} />

        {/* Skill Category Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skills.categories.map((category) => {
            const Icon = iconMap[category.icon] || FaCode;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Subtle top gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-slate-950/80 flex items-center justify-center text-white">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {category.skills.length} Specialized Areas
                    </span>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={category.gradient}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies & Tools Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <FaTools size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Technologies & Tools
            </h3>
          </div>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            The core stack, libraries, and frameworks I leverage to design and engineer scalable web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  borderColor: 'rgba(168, 85, 247, 0.4)',
                }}
                className="px-5 py-2.5 rounded-full text-sm font-medium glass text-slate-300 cursor-default transition-all duration-200 border border-white/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

