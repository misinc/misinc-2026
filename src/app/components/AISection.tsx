import { motion } from 'motion/react';
import { Brain, Search, MessageCircle, Shield } from 'lucide-react';

const aiFeatures = [
  {
    icon: Search,
    title: 'Better Search Visibility',
    description: 'Optimized for AI-powered search engines (AEO) so your site gets found.',
  },
  {
    icon: MessageCircle,
    title: 'Smart Engagement',
    description: 'AI chat and automation where it actually helps — thoughtfully integrated.',
  },
  {
    icon: Brain,
    title: 'Practical Intelligence',
    description: 'Content insights, personalization, and tools that make your site smarter.',
  },
  {
    icon: Shield,
    title: 'Human Oversight',
    description: 'We prioritize clarity, accuracy, and transparency — AI is a tool, not a replacement.',
  },
];

export function AISection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            AI + Modern Tools
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We use AI strategically — not as hype, but as a practical way to build smarter,
            more effective websites. Here's how we apply it responsibly:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
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
