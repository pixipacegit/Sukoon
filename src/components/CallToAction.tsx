'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, ArrowRight, Sparkles, Globe } from 'lucide-react';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2940&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#3D2B1F]/85" />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <Heart className="w-5 h-5 text-[#C9A86C]/30" fill="rgba(201, 168, 108, 0.2)" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-12"
        >
          <Globe className="w-5 h-5 text-[#C9A86C]" />
          <span className="text-sm font-medium">Join 12,847+ members worldwide</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-8xl font-medium text-white mb-10 leading-tight font-heading"
        >
          One Dollar.
          <br />
          <span className="text-[#C9A86C]">Infinite Impact.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Stop scrolling past suffering. Start becoming part of the solution.
          For the cost of a single coffee each month, join a movement that transforms
          lives—including yours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group btn-primary text-lg px-12 py-6"
          >
            <Heart className="w-6 h-6 group-hover:animate-heartbeat" />
            <span>Join Sukoon — $1/month</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary border-white/30 text-white hover:bg-white hover:text-[#3D2B1F] text-lg"
          >
            Learn More First
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-10 text-white/60"
        >
          {[
            'Cancel anytime',
            'No hidden fees',
            '100% transparent',
            'Tax deductible',
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-[#C9A86C]" />
              <span className="text-base">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Emotional Closer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 relative"
        >
          <div className="glass-dark rounded-3xl p-10 md:p-12 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white italic leading-relaxed font-heading">
              "The question isn't whether you can afford to give one dollar.
              <br />
              The question is whether you can afford not to be part of something
              <span className="text-[#C9A86C]"> this meaningful.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
