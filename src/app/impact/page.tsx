'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Globe, DollarSign, Droplets, BookOpen, Stethoscope, Home } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const stats = [
  { icon: DollarSign, value: '$4.5M', label: 'Total Raised', color: 'text-amber-600', bg: 'bg-amber-100' },
  { icon: Users, value: '14,203', label: 'Lives Touched', color: 'text-green-600', bg: 'bg-green-100' },
  { icon: Globe, value: '82', label: 'Countries', color: 'text-blue-600', bg: 'bg-blue-100' },
  { icon: Heart, value: '12,847', label: 'Members', color: 'text-rose-600', bg: 'bg-rose-100' },
];

const categories = [
  {
    icon: Droplets,
    title: 'Clean Water',
    amount: '$1.2M',
    projects: 45,
    lives: '5,200+',
    color: 'bg-blue-500',
  },
  {
    icon: BookOpen,
    title: 'Education',
    amount: '$980K',
    projects: 32,
    lives: '3,800+',
    color: 'bg-amber-500',
  },
  {
    icon: Stethoscope,
    title: 'Medical Aid',
    amount: '$1.5M',
    projects: 28,
    lives: '4,100+',
    color: 'bg-rose-500',
  },
  {
    icon: Home,
    title: 'Shelter',
    amount: '$820K',
    projects: 19,
    lives: '1,100+',
    color: 'bg-green-500',
  },
];

const projects = [
  {
    title: 'Clean Water for Turkana',
    location: 'Kenya',
    description: 'Built 3 wells providing clean water to 500+ families in drought-affected regions.',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&auto=format',
    raised: '$24,500',
    goal: '$25,000',
    progress: 98,
  },
  {
    title: 'School Supplies Initiative',
    location: 'Pakistan',
    description: 'Provided books, uniforms, and supplies to 1,200 children in rural schools.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format',
    raised: '$18,200',
    goal: '$20,000',
    progress: 91,
  },
  {
    title: 'Emergency Medical Relief',
    location: 'Syria',
    description: 'Delivered critical medical supplies and set up mobile clinics for displaced families.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format',
    raised: '$32,800',
    goal: '$35,000',
    progress: 94,
  },
  {
    title: 'Refugee Housing Project',
    location: 'Jordan',
    description: 'Constructed temporary shelters for 50 refugee families fleeing conflict.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format',
    raised: '$42,000',
    goal: '$45,000',
    progress: 93,
  },
];

export default function ImpactPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        badge="100% Transparent"
        title="Our"
        highlight="Impact"
        description="Every dollar is tracked. Every project is documented. See exactly where your contribution goes and the lives it touches."
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Your Dollars Go
            </h2>
            <p className="text-xl text-gray-600">
              Our impact spans four key areas of humanitarian need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Raised</span>
                    <span className="font-semibold text-gray-900">{category.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-semibold text-gray-900">{category.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lives Touched</span>
                    <span className="font-semibold text-gray-900">{category.lives}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active Projects
            </h2>
            <p className="text-xl text-gray-600">
              Real projects creating real change around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Raised: <span className="font-semibold text-gray-900">{project.raised}</span></span>
                      <span className="text-gray-600">Goal: <span className="font-semibold text-gray-900">{project.goal}</span></span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      />
                    </div>
                    <div className="text-right text-sm text-amber-600 font-medium mt-1">
                      {project.progress}% funded
                    </div>
                  </div>

                  <Link
                    href="/stories"
                    className="text-amber-600 font-medium hover:text-amber-700"
                  >
                    Read the full story →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Impact
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Your $1 joins thousands of others to create lasting change.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Join for $1/month
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
