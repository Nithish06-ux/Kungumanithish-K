import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';
import portfolioData from '../data/portfolioData';

const { hero } = portfolioData;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
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

const Hero = () => {
  const typewriterText = useTypewriter(hero.subtitles, 100, 60, 2000);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full glass text-purple-300 mb-6">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-2"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text text-shadow-glow">{hero.name}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium mb-6 h-10"
            >
              <span className="text-white/80">I'm a </span>
              <span className="gradient-text-alt">{typewriterText}</span>
              <motion.span
                className="inline-block w-0.5 h-7 bg-purple-400 ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {hero.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href={hero.resumeUrl}
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-sm" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FaGithub, url: hero.socials.github, label: 'GitHub' },
                { icon: FaLinkedin, url: hero.socials.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, url: hero.socials.email, label: 'Email' },
              ].map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target={url.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass text-slate-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Dashed orbit */}
              <motion.div
                className="absolute -inset-8 rounded-full border border-dashed border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={hero.profilePhoto}
                    alt="Kungumanithish K"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"
                animate={{ y: [0, -12, 0], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-4 -left-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 rounded-md bg-gradient-to-r from-pink-500 to-orange-500 shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <FaChevronDown size={14} />
      </motion.a>
    </section>
  );
};

export default Hero;
