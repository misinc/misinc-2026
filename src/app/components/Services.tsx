import { motion } from 'motion/react';
import { Layout, Code, ArrowRightLeft, ShoppingCart, Sparkles, Settings } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Web Design & Redesign',
    description: 'Modern, user-focused designs that reflect your brand and drive results.',
  },
  {
    icon: Code,
    title: 'Webflow Development',
    description: 'Custom, no-code solutions that are fast, scalable, and easy to update.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Website Migrations',
    description: 'Seamless transitions from WordPress, Weebly, and other platforms to modern tools.',
  },
  {
    icon: ShoppingCart,
    title: 'Square Online & E-commerce',
    description: 'Clean, conversion-focused online stores integrated with your existing systems.',
  },
  {
    icon: Sparkles,
    title: 'AI Consulting & Automation',
    description: 'Practical AI integration that improves search, engagement, and efficiency.',
  },
  {
    icon: Settings,
    title: 'Ongoing Support & Optimization',
    description: 'Long-term partnership to keep your site secure, fast, and evolving with your needs.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtful, technical solutions for organizations that value quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
