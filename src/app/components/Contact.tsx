import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Let's build something solid.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No pressure, no sales pitch. Just a conversation about your goals and how we
            might be able to help.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <a href="mailto:info@misinc.com" className="text-gray-900 hover:text-orange-500 transition-colors">
                info@misinc.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <div className="text-sm text-gray-500 mb-1">Phone</div>
              <a href="tel:+15555551995" className="text-gray-900 hover:text-orange-500 transition-colors">
                (555) 555-1995
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={24} />
              </div>
              <div className="text-sm text-gray-500 mb-1">Schedule</div>
              <button className="text-gray-900 hover:text-orange-500 transition-colors">
                Book a call
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="What are you looking to build or improve?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                Schedule a Free Consultation
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
