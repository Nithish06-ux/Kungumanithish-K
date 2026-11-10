import { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 40,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.08 + 0.02,
      color: [
        'from-purple-500/20 to-pink-500/20',
        'from-blue-500/20 to-cyan-500/20',
        'from-pink-500/20 to-purple-500/20',
        'from-indigo-500/20 to-blue-500/20',
        'from-violet-500/20 to-fuchsia-500/20',
      ][i % 5],
    }));
  }, []);

  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
      type: ['circle', 'square', 'triangle'][i % 3],
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      {particles.map((particle) => (
        <motion.div
          key={`p-${particle.id}`}
          className={`absolute rounded-full bg-gradient-to-br ${particle.color} blur-3xl`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`s-${shape.id}`}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full border border-purple-500/20"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="border border-pink-500/20 rotate-45"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="border-l border-b border-blue-500/20"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
        </motion.div>
      ))}

      {/* Ambient gradient overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-900/8 rounded-full blur-[128px]" />
    </div>
  );
};

export default ParticleBackground;
