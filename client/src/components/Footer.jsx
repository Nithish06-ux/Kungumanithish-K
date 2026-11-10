import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const { hero } = portfolioData;

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950/80 border-t border-white/5 pt-16 pb-12 overflow-hidden z-10">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold gradient-text inline-block mb-2"
            >
              Kungumanithish
            </a>
            <p className="text-slate-400 text-sm max-w-sm">
              UI/UX Designer & Full-Stack Developer passionate about crafting elegant digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <motion.a
              href={hero.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl glass text-slate-400 hover:text-white hover:border-purple-500/30 transition-all duration-200"
              whileHover={{ y: -3 }}
            >
              <FaGithub size={16} />
            </motion.a>
            <motion.a
              href={hero.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl glass text-slate-400 hover:text-white hover:border-blue-500/30 transition-all duration-200"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin size={16} />
            </motion.a>
            <motion.a
              href={hero.socials.email}
              aria-label="Email"
              className="p-3 rounded-xl glass text-slate-400 hover:text-white hover:border-pink-500/30 transition-all duration-200"
              whileHover={{ y: -3 }}
            >
              <FaEnvelope size={16} />
            </motion.a>

            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-200 ml-2"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kungumanithish K. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-400">
              <span className="text-purple-400">P</span>ostgreSQL •{' '}
              <span className="text-pink-400">E</span>xpress •{' '}
              <span className="text-cyan-400">R</span>eact •{' '}
              <span className="text-emerald-400">N</span>ode.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

