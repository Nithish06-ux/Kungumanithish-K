import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import useCounter from '../hooks/useCounter';
import portfolioData from '../data/portfolioData';

const { about } = portfolioData;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const StatCard = ({ label, value, suffix }) => {
  const { count, ref } = useCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 glass rounded-2xl hover-lift"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={about.title} subtitle={about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-15 blur-2xl" />

              {/* Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <img
                    src="/profile-photo.jpg"
                    alt="Kungumanithish K"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Who I Am
              </h3>
              <div className="space-y-4">
                {about.description.map((text, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 mb-8 hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {about.education.degree}
                  </h4>
                  <p className="text-purple-300 font-medium">
                    {about.education.institution}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    {about.education.year}
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    {about.education.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4"
            >
              {about.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
