'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cake, Gift, Star, MessageCircle, Users, Heart, Sparkles } from 'lucide-react';

const celebrations = [
  {
    type: 'birthday',
    icon: Cake,
    name: 'Sarah M.',
    message: 'Happy Birthday from the Sukoon family! You\'ve helped 23 families this year.',
    time: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'milestone',
    icon: Star,
    name: 'The Johnson Family',
    message: 'Celebrating 1 year with Sukoon! Your $12 has provided clean water to an entire village.',
    time: '5 hours ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'welcome',
    icon: Heart,
    name: 'Ahmed K.',
    message: 'Welcome to the family! Your first dollar is already making waves.',
    time: '1 day ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'impact',
    icon: Gift,
    name: 'Lisa & Tom',
    message: 'Your contribution just funded school supplies for 15 children in Yemen!',
    time: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
];

const communityStats = [
  { label: 'Active Members', value: '12,847', icon: Users },
  { label: 'Birthdays Celebrated', value: '3,241', icon: Cake },
  { label: 'Messages Shared', value: '45,892', icon: MessageCircle },
  { label: 'Milestones Reached', value: '8,764', icon: Star },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="community" className="section-padding bg-gradient-to-b from-[#FDF8F3] to-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C4A4A4]/5 rounded-full blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart className="w-5 h-5 text-[#C9A86C]/15" fill="rgba(201, 168, 108, 0.1)" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-6"
          >
            More Than Donors
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-8 leading-tight font-heading">
            You're <span className="text-gradient italic">Family</span>
          </h2>

          <div className="decorative-line mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed">
            We celebrate your milestones, remember your birthdays, and share in your joy.
            Because when you join Sukoon, you become part of something bigger—a global
            family united by compassion.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-8"
            >
              <stat.icon className="w-10 h-10 text-[#C9A86C] mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-semibold text-[#3D2B1F] mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm text-[#2C2C2C]/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Celebration Feed */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Live Feed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-[#C9A86C]" />
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#7A9E7E] rounded-full"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#3D2B1F] font-heading">
                Live Celebrations
              </h3>
            </div>

            <div className="space-y-6">
              {celebrations.map((celebration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="premium-card p-7 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-5">
                    <div className="relative flex-shrink-0">
                      <img
                        src={celebration.avatar}
                        alt={celebration.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center shadow">
                        <celebration.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-[#3D2B1F] text-lg">{celebration.name}</span>
                        <span className="text-xs text-[#2C2C2C]/40">{celebration.time}</span>
                      </div>
                      <p className="text-[#2C2C2C]/70 leading-relaxed">
                        {celebration.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
                alt="Community gathering"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="glass-dark rounded-2xl p-8"
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-heading">
                    Join Our Global Celebration
                  </h4>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    When you join Sukoon, we don't just take your dollar. We celebrate your existence.
                    Your birthday becomes our celebration. Your milestones become our pride.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
                      Birthday wishes
                    </span>
                    <span className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
                      Impact updates
                    </span>
                    <span className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
                      Personal letters
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
