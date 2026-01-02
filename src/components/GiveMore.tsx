'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Gift, Users, Sparkles, ArrowRight, Check, Star } from 'lucide-react';

const causes = [
  {
    id: 'education',
    title: 'Education Fund',
    description: 'Support schools and learning materials in underserved communities.',
    icon: '📚',
    raised: 45000,
    goal: 50000,
    color: 'from-[#C9A86C] to-[#D4B87A]',
  },
  {
    id: 'water',
    title: 'Clean Water Initiative',
    description: 'Provide clean drinking water and sanitation facilities.',
    icon: '💧',
    raised: 32000,
    goal: 40000,
    color: 'from-[#8BA4B4] to-[#6b8494]',
  },
  {
    id: 'health',
    title: 'Healthcare Access',
    description: 'Fund medical supplies and healthcare services for communities.',
    icon: '🏥',
    raised: 28000,
    goal: 35000,
    color: 'from-[#7A9E7E] to-[#5a8e5e]',
  },
  {
    id: 'orphan',
    title: 'Orphan Sponsorship',
    description: 'Support orphaned children with education, food, and shelter.',
    icon: '👦',
    raised: 52000,
    goal: 60000,
    color: 'from-[#C4A4A4] to-[#a08080]',
  },
];

const impactAmounts = [
  { amount: 10, impact: 'Provides school supplies for 2 children' },
  { amount: 25, impact: 'Funds a week of clean water for a family' },
  { amount: 50, impact: 'Supplies medicine for a community clinic' },
  { amount: 100, impact: 'Sponsors a child for one month' },
];

export default function GiveMore() {
  const [mounted, setMounted] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const currentAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <section id="give-more" className="section-padding bg-gradient-to-b from-[#FDF8F3] to-[#FAF7F2] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A86C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7A9E7E]/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-6"
          >
            <Gift className="w-4 h-4" />
            Beyond Membership
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-8 leading-tight font-heading">
            Want to do{' '}
            <span className="text-gradient italic">more?</span>
          </h2>

          <div className="decorative-line mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed">
            Membership is just the beginning. You can directly fund specific high-impact
            projects vetted by our team. Every dollar goes exactly where you choose.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {causes.map((cause, index) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCause(selectedCause === cause.id ? null : cause.id)}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                selectedCause === cause.id
                  ? 'bg-white shadow-2xl shadow-[#C9A86C]/20 scale-105 border-2 border-[#C9A86C]'
                  : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-transparent'
              }`}
            >
              {/* Selected Indicator */}
              {selectedCause === cause.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#C9A86C] flex items-center justify-center shadow-lg"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{cause.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-heading font-semibold text-[#3D2B1F] mb-2">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#2C2C2C]/60 mb-4 line-clamp-2">
                {cause.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#2C2C2C]/50">Raised</span>
                  <span className="font-semibold text-[#3D2B1F]">
                    ${cause.raised.toLocaleString()} / ${cause.goal.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 bg-[#E8DDD4] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(cause.raised / cause.goal) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${cause.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Donation Section */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl shadow-[#C9A86C]/10 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left - Amount Selection */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#3D2B1F] to-[#2C2C2C] text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                Choose Your Impact
              </h3>

              {/* Preset Amounts */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {impactAmounts.map((item) => (
                  <motion.button
                    key={item.amount}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAmountSelect(item.amount)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedAmount === item.amount && !customAmount
                        ? 'bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F]'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-2xl font-bold font-heading">${item.amount}</div>
                    <div className={`text-xs mt-1 ${selectedAmount === item.amount && !customAmount ? 'text-[#3D2B1F]/70' : 'text-white/60'}`}>
                      {item.impact}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-white/60">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white text-xl placeholder-white/40 focus:outline-none focus:border-[#C9A86C] transition-colors"
                />
              </div>

              {/* Impact Preview */}
              {currentAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10"
                >
                  <div className="flex items-center gap-2 text-[#C9A86C] text-sm font-medium mb-2">
                    <Sparkles className="w-4 h-4" />
                    Your Impact
                  </div>
                  <p className="text-white/80 text-sm">
                    ${currentAmount} will {currentAmount >= 100 ? 'sponsor a child for ' + Math.floor(currentAmount / 100) + ' month(s)' :
                      currentAmount >= 50 ? 'supply medicine for ' + Math.floor(currentAmount / 50) + ' clinic(s)' :
                      currentAmount >= 25 ? 'provide clean water for ' + Math.floor(currentAmount / 25) + ' week(s)' :
                      'provide supplies for ' + Math.floor(currentAmount / 5) + ' children'}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right - Summary & CTA */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#3D2B1F]">One-Time Donation</h4>
                  <p className="text-sm text-[#2C2C2C]/50">100% goes to your chosen cause</p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-[#E8DDD4]">
                  <span className="text-[#2C2C2C]/60">Donation Amount</span>
                  <span className="text-2xl font-bold text-[#3D2B1F] font-heading">
                    ${currentAmount || 0}
                  </span>
                </div>
                {selectedCause && (
                  <div className="flex justify-between items-center py-3 border-b border-[#E8DDD4]">
                    <span className="text-[#2C2C2C]/60">Selected Cause</span>
                    <span className="font-medium text-[#3D2B1F]">
                      {causes.find(c => c.id === selectedCause)?.title}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#2C2C2C]/60">Processing Fee</span>
                  <span className="text-[#7A9E7E] font-medium">$0 (Covered by Sukoon)</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/50">
                  <Star className="w-4 h-4 text-[#C9A86C]" fill="#C9A86C" />
                  4.9/5 Rating
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/50">
                  <Users className="w-4 h-4 text-[#8BA4B4]" />
                  12K+ Donors
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(201, 168, 108, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                disabled={currentAmount < 1}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] font-semibold text-lg shadow-lg shadow-[#C9A86C]/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Donate ${currentAmount || 0} Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-sm text-[#2C2C2C]/50 mt-4">
                Secure payment. Tax-deductible receipt sent instantly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#" className="text-[#C9A86C] font-medium hover:underline">
            Explore All Causes →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
