import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.span
        className="inline-block px-4 py-1.5 text-sm font-medium rounded-full glass text-purple-300 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {subtitle}
      </motion.span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      <motion.div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionHeader;
