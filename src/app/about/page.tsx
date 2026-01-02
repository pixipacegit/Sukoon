'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Users, Globe, Award, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'Every decision we make starts with empathy and a genuine desire to help those in need.',
    color: 'bg-rose-500',
  },
  {
    icon: Shield,
    title: '100% Transparency',
    description: 'Every dollar is tracked and reported. You always know exactly where your contribution goes.',
    color: 'bg-green-500',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We believe in the power of collective action. Together, small contributions create massive impact.',
    color: 'bg-blue-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Our network spans 82+ countries, bringing peace and support to communities worldwide.',
    color: 'bg-amber-500',
  },
];

const team = [
  {
    name: 'Sarah Ahmed',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format',
  },
  {
    name: 'Fatima Hassan',
    role: 'Head of Programs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format',
  },
  {
    name: 'David Okonkwo',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format',
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        badge="Our Story"
        title="About"
        highlight="Sukoon"
        description="Sukoon means 'peace' in Urdu. We're reimagining humanitarian work as a living community where peace isn't just delivered—it's shared."
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-amber-600" />
                <span className="text-amber-600 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Creating a World Where Every Dollar Counts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that humanitarian work shouldn't be about large donations from a few,
                but about small contributions from many. When 10,000 people give $1 each month,
                we create a powerful river of change that flows to those who need it most.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to prove that peace is achievable, one dollar at a time.
                We celebrate our members, honor their generosity, and ensure that every cent
                makes a difference in someone's life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format"
                  alt="Children smiling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">501(c)(3)</div>
                    <div className="text-gray-600">Verified Nonprofit</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Sukoon</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
