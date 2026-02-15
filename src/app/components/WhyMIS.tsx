import { motion } from 'motion/react';
import { Award, Users, MessageSquare, TrendingUp } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: '30 Years in Web & Technology',
    description: "We've been building websites since before most platforms existed. That perspective matters.",
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'We translate between business goals and technical execution — no jargon, no confusion.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnerships',
    description: 'We build relationships, not transactions. Many of our clients have been with us for years.',
  },
  {
    icon: TrendingUp,
    title: 'Calm, Thoughtful Approach',
    description: 'Modern tools, including AI, used strategically — not as buzzwords, but as practical solutions.',
  },
];

export function WhyMIS() {
  return (
    <section id="why-mis" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Why MIS Web Design
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not your typical agency. We're technical experts who speak your language,
            strategic partners who understand your goals, and long-term allies who care about
            your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
