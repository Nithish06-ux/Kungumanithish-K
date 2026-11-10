import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaGithub, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionHeader from './SectionHeader';
import { submitContact } from '../api/portfolio';
import portfolioData from '../data/portfolioData';

const { contact } = portfolioData;

const contactCards = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: contact.email,
    link: `mailto:${contact.email}`,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: contact.location,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaClock,
    title: 'Response Time',
    value: contact.responseTime,
    gradient: 'from-orange-500 to-red-500',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    let emailSent = false;
    let dbSaved = false;

    // 1. Try EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_614l3np';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vbd2md9';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'XCr85iJdvezNE9HnB';

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
            to_email: 'kungumanithish@gmail.com',
          },
          publicKey
        );
        emailSent = true;
      } catch (err) {
        console.warn('EmailJS attempt failed:', err);
      }
    }

    // 2. Try Backend PostgreSQL API
    try {
      await submitContact(formData);
      dbSaved = true;
    } catch (err) {
      console.warn('Backend API submission skipped or failed:', err?.message);
    }

    setLoading(false);

    if (emailSent || dbSaved) {
      toast.success('Thank you! Your message has been sent successfully.', {
        style: {
          background: '#0f172a',
          color: '#f8fafc',
          border: '1px solid rgba(139, 92, 246, 0.3)',
        },
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Could not send message automatically. Please email me directly at kungumanithish@gmail.com');
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={contact.title} subtitle={contact.subtitle} />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column – Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's discuss something <span className="gradient-text">awesome</span> together
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have an upcoming project, freelance inquiry, or just want to say hi, feel free to drop me a message.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                const ContentWrapper = card.link ? 'a' : 'div';
                const wrapperProps = card.link
                  ? { href: card.link, target: card.link.startsWith('http') ? '_blank' : '_self' }
                  : {};

                return (
                  <ContentWrapper
                    key={idx}
                    {...wrapperProps}
                    className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift block cursor-pointer group border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} p-0.5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-slate-950/80 flex items-center justify-center text-white">
                        <Icon size={18} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        {card.title}
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </ContentWrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-white mb-4">
                Connect on Social Networks
              </h4>
              <div className="flex gap-3">
                <motion.a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  href={contact.socials.email}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <FaCheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl font-medium text-sm text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={loading}
                      placeholder="Project Inquiry / Hello"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      placeholder="Hi Kungumanithish, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 resize-none disabled:opacity-50"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

