'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Globe, DollarSign } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '$4.5M', label: 'Total Raised', color: 'text-amber-600' },
  { icon: Users, value: '14,203', label: 'Lives Touched', color: 'text-green-600' },
  { icon: Globe, value: '82', label: 'Countries', color: 'text-blue-600' },
  { icon: Heart, value: '12,847', label: 'Members', color: 'text-rose-600' },
];

const stories = [
  {
    title: 'Clean Water for a Village',
    location: 'Kenya',
    description: 'Our community funded a well that now provides clean water to 500+ families.',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&auto=format',
    impact: '$2,400 raised',
  },
  {
    title: 'School Supplies for Children',
    location: 'Pakistan',
    description: 'Provided books and supplies to 150 children in rural schools.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format',
    impact: '$1,800 raised',
  },
  {
    title: 'Medical Aid Distribution',
    location: 'Syria',
    description: 'Emergency medical supplies delivered to families affected by conflict.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format',
    impact: '$3,200 raised',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            100% Transparent
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Impact
            </span>{' '}
            in Numbers
          </h2>
          <p className="text-xl text-gray-600">
            Every dollar is tracked. Every impact is documented. See where your contribution goes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Recent Impact Stories
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {story.location}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h4>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{story.impact}</span>
                    <button className="text-amber-600 font-medium hover:text-amber-700">
                      Read more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            View Full Transparency Report
          </button>
        </motion.div>
      </div>
    </section>
  );
}
