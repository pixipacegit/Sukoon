'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Droplets, BookOpen, Home, HeartPulse, TrendingUp, Eye } from 'lucide-react';

const stats = [
  {
    icon: Droplets,
    value: 12847,
    suffix: '',
    label: 'Clean Water Access',
    description: 'People with safe drinking water',
    color: '#8BA4B4',
  },
  {
    icon: BookOpen,
    value: 8432,
    suffix: '',
    label: 'Children Educated',
    description: 'Students receiving education support',
    color: '#7A9E7E',
  },
  {
    icon: Home,
    value: 3256,
    suffix: '',
    label: 'Families Sheltered',
    description: 'Homes rebuilt or restored',
    color: '#C4A4A4',
  },
  {
    icon: HeartPulse,
    value: 24891,
    suffix: '',
    label: 'Medical Aid Recipients',
    description: 'People receiving healthcare',
    color: '#C9A86C',
  },
];

const breakdown = [
  { label: 'Direct Aid', percentage: 85, color: '#C9A86C' },
  { label: 'Operations', percentage: 10, color: '#8BA4B4' },
  { label: 'Growth & Outreach', percentage: 5, color: '#7A9E7E' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function Transparency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#3D2B1F 1px, transparent 1px), linear-gradient(90deg, #3D2B1F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] mb-6"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Live Data</span>
            <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Radical <span className="text-gradient italic">Transparency</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
            Every dollar is tracked. Every impact is measured. Every story is real.
            This is your contribution in action—updated in real-time.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="premium-card p-8 text-center h-full hover:shadow-xl transition-all">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </motion.div>

                <div className="counter-number mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg font-semibold text-[#3D2B1F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.label}
                </h3>

                <p className="text-sm text-[#2C2C2C]/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fund Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="premium-card p-10">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-[#C9A86C]" />
              <h3 className="text-2xl font-semibold text-[#3D2B1F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Where Your Dollar Goes
              </h3>
            </div>

            <div className="space-y-6">
              {breakdown.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#3D2B1F]">{item.label}</span>
                    <span className="font-semibold" style={{ color: item.color }}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-3 bg-[#E8DDD4] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#C9A86C]/10 border border-[#C9A86C]/20">
              <p className="text-center text-[#3D2B1F]">
                <span className="font-semibold">85 cents</span> of every dollar goes{' '}
                <span className="text-[#C9A86C] font-semibold">directly</span> to those in need.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
