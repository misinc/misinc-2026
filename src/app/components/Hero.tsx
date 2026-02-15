import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Founded in 1995 • 30 years of experience
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Websites built to last —<br />
            <span className="font-normal">and evolve.</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MIS Web Design helps small businesses, nonprofits, and professional organizations
            build high-performing websites using Webflow, Square Online, and modern AI-powered tools.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group"
            >
              Get a Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
