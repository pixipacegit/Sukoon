'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CreditCard, Heart, Users, Gift, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: CreditCard,
    step: '01',
    title: 'Join for $1',
    description: 'One dollar a month. That\'s all it takes to become part of a global family committed to restoring dignity and spreading peace.',
    highlight: 'Less than a coffee. More than you can imagine.',
  },
  {
    icon: Heart,
    step: '02',
    title: 'We Remember You',
    description: 'You\'re not a number. We celebrate your birthday, acknowledge your milestones, and make you part of every story we create together.',
    highlight: 'Personal connection, not just transactions.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Meet Who You Help',
    description: 'See real faces, read real stories, and understand exactly how your contribution transforms lives across the world.',
    highlight: 'Complete transparency, always.',
  },
  {
    icon: Gift,
    step: '04',
    title: 'Watch Peace Grow',
    description: 'Track real-time impact. From clean water to education, from emergency relief to sustainable livelihoods—witness change happen.',
    highlight: 'Your dollar, documented.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="section-padding bg-[#3D2B1F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A86C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-4 h-4 text-[#C9A86C]/20" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
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
            className="inline-block text-sm font-semibold tracking-widest text-[#C9A86C] uppercase mb-4"
          >
            Simple & Powerful
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            How <span className="text-[#C9A86C] italic">$1</span> Changes Everything
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-white/70 leading-relaxed">
            We've simplified giving to its purest form. No complicated commitments,
            no hidden fees—just genuine human connection and measurable impact.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#C9A86C]/30 transition-all duration-500 hover:bg-white/10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#3D2B1F]">{step.step}</span>
                </div>

                {/* Content */}
                <div className="ml-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-2xl bg-[#C9A86C]/10 flex items-center justify-center"
                    >
                      <step.icon className="w-7 h-7 text-[#C9A86C]" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#C9A86C]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">{step.highlight}</span>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2"
                  >
                    <ArrowRight className="w-8 h-8 text-[#C9A86C]/30" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-12 py-5"
          >
            Start Your $1 Journey Today
          </motion.button>
          <p className="mt-4 text-white/40 text-sm">
            Cancel anytime. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
