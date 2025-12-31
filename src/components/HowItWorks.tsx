'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CreditCard, Heart, Users, Gift, Sparkles } from 'lucide-react';

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
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="how-it-works" className="section-padding bg-[#3D2B1F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A86C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span
            initial={mounted ? { opacity: 0 } : false}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-6"
          >
            Simple & Powerful
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight font-heading">
            How <span className="text-[#C9A86C] italic">$1</span> Changes Everything
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] mx-auto mb-10 rounded-full" />

          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            We've simplified giving to its purest form. No complicated commitments,
            no hidden fees—just genuine human connection and measurable impact.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={mounted ? { opacity: 0, y: 40 } : false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 hover:border-[#C9A86C]/30 transition-all duration-500 hover:bg-white/10 h-full">
                {/* Step Number */}
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-[#3D2B1F]">{step.step}</span>
                </div>

                {/* Content */}
                <div className="ml-4 pt-4">
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-[#C9A86C]/10 flex items-center justify-center flex-shrink-0"
                    >
                      <step.icon className="w-8 h-8 text-[#C9A86C]" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white font-heading">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed text-lg mb-6">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-3 text-[#C9A86C]">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-base font-medium">{step.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-14 py-6"
          >
            Start Your $1 Journey Today
          </motion.button>
          <p className="mt-6 text-white/40 text-base">
            Cancel anytime. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
