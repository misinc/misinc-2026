import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import logo from 'figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png';

const credentials = [
  'Founded in 1995',
  'Webflow Premium Partner',
  '30 years in web, software, and databases',
  'Trusted advisor to nonprofits, businesses, and professional organizations',
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 flex items-center justify-center">
              <img src={logo} alt="MIS, Inc." className="w-48 h-48" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              About MIS, Inc.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MIS, Inc. was founded in 1995 with a simple mission: help organizations build
              websites that actually work for their goals.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Three decades later, that mission hasn't changed — but the tools have. We combine
              deep technical expertise with a strategic, human-centered approach. We're not just
              builders — we're partners who care about your long-term success.
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-gray-700">{credential}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
              When you work with MIS, you get more than a website — you get a trusted advisor
              who understands technology and cares about your mission.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
