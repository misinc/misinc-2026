import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    client: 'Regional Nonprofit',
    category: 'Webflow Migration',
    problem: 'Outdated WordPress site with security issues and poor mobile experience',
    solution: 'Migrated to Webflow with improved UX, accessibility, and donation flow',
    outcome: '40% increase in mobile traffic, 25% boost in online donations',
  },
  {
    client: 'Professional Association',
    category: 'Custom Development',
    problem: 'Needed member portal with event registration and resource library',
    solution: 'Built scalable Webflow site with custom integrations and CMS',
    outcome: 'Streamlined member experience, reduced admin time by 60%',
  },
  {
    client: 'Local Business',
    category: 'E-commerce',
    problem: 'Launching online store for the first time with inventory sync needs',
    solution: 'Set up Square Online with custom design and seamless POS integration',
    outcome: 'Live in 3 weeks, 30% of revenue now comes from online sales',
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real outcomes. See how we help organizations solve challenges and grow.
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.client}
              className="group bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-1/3">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    {project.client}
                  </h3>
                </div>
                <div className="lg:w-2/3 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Problem</div>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Solution</div>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Outcome</div>
                    <p className="text-gray-900 font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300 transition-all group">
            View Full Portfolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
