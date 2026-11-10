import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaTimes, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { playHover, playClick, playSuccess } from '../utils/cyberSound';

export default function CyberContact({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Try sending via backend API first
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        // Backend failure can fallback to EmailJS or client direct
      }

      // 2. EmailJS submission
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_614l3np';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vbd2md9';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'XCr85iJdvezNE9HnB';

      if (publicKey && serviceId && templateId) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
          },
          publicKey
        );
      }

      playSuccess();
      setSubmitted(true);
      toast.success('Message transmitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 2500);
    } catch (error) {
      console.error('Contact transmission error:', error);
      toast.error('Transmission failed. Direct email: kungumanithish@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtext, Contact Details matching reference */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                [SEC-5]
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-slate-100 uppercase mt-1">
                GET IN <span className="gradient-cyan-text cyber-glow-cyan">TOUCH</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed max-w-lg">
                Have a project, opportunity, or just want to say hi? I'd love to hear from you.
              </p>
            </div>

            {/* Contact Items matching reference layout */}
            <div className="space-y-4 pt-2 font-mono text-xs sm:text-sm">
              <a
                href="mailto:kungumanithish@gmail.com"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                  <FaEnvelope size={14} />
                </div>
                <span>kungumanithish@gmail.com</span>
              </a>

              <a
                href="https://github.com/Nithish06-ux"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                  <FaGithub size={14} />
                </div>
                <span>github.com/Nithish06-ux</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kungumanithish-k"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                  <FaLinkedin size={14} />
                </div>
                <span>linkedin.com/in/kungumanithish-k</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/25 text-cyan-400">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: SEND A MESSAGE button trigger with corner brackets */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-2">
              {/* Corner Brackets */}
              <span className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
              <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

              <button
                onClick={() => {
                  playClick();
                  setIsModalOpen(true);
                }}
                onMouseEnter={playHover}
                className="px-8 py-5 rounded-lg border border-cyan-400 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all font-mono font-bold text-sm sm:text-base tracking-wider flex items-center space-x-3 group"
              >
                <span>SEND A MESSAGE</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Holographic Modal Dialog for Contact Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg cyber-card rounded-2xl p-6 md:p-8 border border-cyan-400/60 shadow-[0_0_35px_rgba(0,242,254,0.25)] relative overflow-hidden"
            >
              {/* Radar Line in Modal */}
              <div className="radar-line" />

              {/* Close Button */}
              <button
                onClick={() => {
                  playClick();
                  setIsModalOpen(false);
                }}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <FaTimes size={16} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                  [COMM_CHANNEL // ENCRYPTED]
                </span>
                <h3 className="text-xl font-bold font-mono text-slate-100 uppercase mt-0.5">
                  TRANSMIT <span className="text-cyan-400">MESSAGE</span>
                </h3>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <FaCheckCircle size={44} className="mx-auto text-cyan-400 cyber-pulse" />
                  <div className="text-base font-bold font-mono text-slate-100">TRANSMISSION RECEIVED</div>
                  <p className="text-xs text-slate-300">
                    Thank you, I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3.5 py-2.5 rounded bg-[#040811] border border-cyan-500/30 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded bg-[#040811] border border-cyan-500/30 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">SUBJECT</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded bg-[#040811] border border-cyan-500/30 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">MESSAGE *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      className="w-full px-3.5 py-2.5 rounded bg-[#040811] border border-cyan-500/30 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
                    >
                      ABORT
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 rounded border border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-bold flex items-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>SEND</span>
                          <FaPaperPlane size={11} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

