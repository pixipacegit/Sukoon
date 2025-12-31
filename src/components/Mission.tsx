'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Globe, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'Every action stems from genuine care for human dignity and shared humanity.',
  },
  {
    icon: Users,
    title: 'True Connection',
    description: 'We bridge the gap between those who give and those who receive, creating lasting bonds.',
  },
  {
    icon: Globe,
    title: 'Global Family',
    description: 'Borders don\'t define our community—shared purpose does.',
  },
  {
    icon: Sparkles,
    title: 'Radical Transparency',
    description: 'Every dollar, every story, every impact—visible to all, always.',
  },
];

export default function Mission() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="mission" className="section-padding bg-[#FDF8F3] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            Our Purpose
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-8 leading-tight font-heading">
            Reimagining What It Means to{' '}
            <span className="text-gradient italic">Give</span>
          </h2>

          <div className="decorative-line mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed">
            Sukoon believes that humanitarian work should feel less like charity and more
            like family. We've created a living community where peace isn't a destination—
            it's a journey we walk together.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.95 } : false}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-32 p-12 md:p-16 bg-white rounded-3xl shadow-xl"
        >
          <span className="quote-mark top-6 left-10">"</span>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#3D2B1F] text-center leading-relaxed relative z-10 font-heading">
            This isn't charity—it's <span className="text-gradient font-semibold">belonging</span> with purpose.
          </blockquote>
          <p className="text-center text-[#2C2C2C]/60 mt-8 text-lg">
            Sustained peace comes not from grand gestures, but from thousands of people
            choosing compassionate connection every single day.
          </p>
          <span className="quote-mark bottom-6 right-10 rotate-180">"</span>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={mounted ? { opacity: 0, y: 40 } : false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="premium-card p-10 md:p-12 h-full hover:bg-white">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] mb-8 shadow-lg"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#3D2B1F] mb-4 font-heading">
                  {value.title}
                </h3>

                <p className="text-[#2C2C2C]/60 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#3D2B1F] text-white">
            <Heart className="w-6 h-6 text-[#C9A86C] animate-heartbeat" />
            <span className="text-lg font-medium">
              Every story matters. Every person belongs. Every dollar counts.
            </span>
            <Heart className="w-6 h-6 text-[#C9A86C] animate-heartbeat" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
