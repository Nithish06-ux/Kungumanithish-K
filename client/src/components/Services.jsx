import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaCogs, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import portfolioData from '../data/portfolioData';

const { services } = portfolioData;

const iconMap = {
  palette: FaPaintBrush,
  code: FaCode,
  settings: FaCogs,
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={services.title} subtitle={services.subtitle} />

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || FaCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top glow accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                />

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-slate-950/80 flex items-center justify-center text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      What's Included
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r ${service.gradient} opacity-90 hover:opacity-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 shadow-md`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <FaArrowRight size={12} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Working Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest block mb-2">
              Workflow
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              My Working Process
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {services.process.map((step, idx) => (
              <div key={step.step} className="text-center relative">
                {/* Step Circle */}
                <div className="relative mb-5 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center font-bold font-mono text-xl text-white">
                    0{step.step}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

