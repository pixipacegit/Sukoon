'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Mail, User, Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  birthday: string;
}

export default function MembershipForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    birthday: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Trigger confetti celebration
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#C9A86C', '#D4B87A', '#7A9E7E', '#E8D4A8', '#C4A4A4'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#C9A86C', '#D4B87A', '#7A9E7E', '#E8D4A8', '#C4A4A4'],
      });
    }, 250);
  };

  const inputClasses = (fieldName: string) => `
    w-full px-6 py-5 rounded-2xl bg-white border-2
    ${focusedField === fieldName ? 'border-[#C9A86C] shadow-lg shadow-[#C9A86C]/20' : 'border-[#E8DDD4]'}
    text-[#3D2B1F] placeholder-[#2C2C2C]/40 text-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:border-[#C9A86C] focus:shadow-lg focus:shadow-[#C9A86C]/20
    hover:border-[#C9A86C]/50
  `;

  return (
    <section id="join" className="section-padding bg-gradient-to-b from-[#FAF7F2] to-[#FDF8F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A86C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7A9E7E]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={mounted ? { opacity: 0, x: -40 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-6"
            >
              <Heart className="w-4 h-4" fill="#C9A86C" />
              Join the Movement
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-8 leading-tight font-heading">
              Your peace begins{' '}
              <span className="text-gradient italic">today</span>
            </h2>

            <div className="decorative-line mb-10" />

            <p className="text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed mb-10">
              For just $1 a month, become part of a global family that celebrates
              your existence, honors your milestones, and transforms your generosity
              into real impact stories you can see and feel.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {[
                'Personal birthday wishes from the Sukoon family',
                'Real-time impact updates on your contributions',
                'Your name on our Living Community Wall',
                'Access to exclusive member stories and celebrations',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={mounted ? { opacity: 0, x: -20 } : false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#7A9E7E]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#7A9E7E]" />
                  </div>
                  <span className="text-[#2C2C2C]/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            ref={formRef}
            initial={mounted ? { opacity: 0, y: 40 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A86C]/20 via-[#D4B87A]/20 to-[#C9A86C]/20 rounded-[40px] blur-2xl opacity-60" />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-10 md:p-12 shadow-2xl shadow-[#C9A86C]/10 border border-[#E8DDD4]/50">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {/* Form Header */}
                      <div className="text-center mb-10">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] mb-6"
                        >
                          <Sparkles className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#3D2B1F] font-heading mb-3">
                          Become a Member
                        </h3>
                        <p className="text-[#2C2C2C]/60">
                          Just $1/month. Cancel anytime.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A86C]" />
                          <input
                            type="text"
                            placeholder="Your full name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`${inputClasses('name')} pl-14`}
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A86C]" />
                          <input
                            type="email"
                            placeholder="your@email.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`${inputClasses('email')} pl-14`}
                          />
                        </div>

                        {/* Birthday Field */}
                        <div className="relative">
                          <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A86C]" />
                          <input
                            type="date"
                            required
                            value={formData.birthday}
                            onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                            onFocus={() => setFocusedField('birthday')}
                            onBlur={() => setFocusedField(null)}
                            className={`${inputClasses('birthday')} pl-14`}
                          />
                        </div>

                        {/* Monthly Amount Display */}
                        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DDD4]">
                          <div className="flex items-center justify-between">
                            <span className="text-[#2C2C2C]/70">Monthly Contribution</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-bold text-[#3D2B1F] font-heading">$1</span>
                              <span className="text-[#2C2C2C]/50">/month</span>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isLoading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#C9A86C] via-[#D4B87A] to-[#C9A86C] text-[#3D2B1F] font-semibold text-lg shadow-lg shadow-[#C9A86C]/30 hover:shadow-xl hover:shadow-[#C9A86C]/40 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-6 h-6 border-2 border-[#3D2B1F]/30 border-t-[#3D2B1F] rounded-full"
                            />
                          ) : (
                            <>
                              Join the Family
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>

                        <p className="text-center text-sm text-[#2C2C2C]/50 mt-4">
                          Secure payment powered by Stripe. Cancel anytime.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="text-center py-10"
                    >
                      {/* Success Animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#7A9E7E] to-[#5a8e5e] mb-8"
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Check className="w-12 h-12 text-white" strokeWidth={3} />
                        </motion.div>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-semibold text-[#3D2B1F] font-heading mb-4"
                      >
                        Welcome home, {formData.name.split(' ')[0]}!
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-[#2C2C2C]/70 mb-8"
                      >
                        Your peace begins today.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#FAF7F2] rounded-2xl p-6 text-left"
                      >
                        <p className="text-[#2C2C2C]/80 leading-relaxed">
                          We've sent a confirmation to <strong>{formData.email}</strong>.
                          Look out for your welcome letter and get ready to be celebrated
                          on your special days!
                        </p>
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-[#C9A86C] font-medium hover:underline"
                      >
                        Add another family member
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
