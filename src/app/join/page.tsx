'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, User, Mail, Calendar, Shield, Globe, Gift, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const benefits = [
  {
    icon: Gift,
    title: 'Birthday Celebration',
    description: 'Receive personalized birthday wishes from our global community every year.',
  },
  {
    icon: Globe,
    title: 'Track Your Impact',
    description: 'See exactly where your dollars go with our 100% transparent dashboard.',
  },
  {
    icon: Users,
    title: 'Community Wall',
    description: 'Your name joins our living wall of members making a difference.',
  },
  {
    icon: Mail,
    title: 'Monthly Updates',
    description: 'Get stories, impact reports, and updates from the field.',
  },
];

const testimonials = [
  {
    quote: "It's just $1, but knowing I'm part of something bigger gives me so much joy. The birthday wishes were such a lovely surprise!",
    name: "Sarah M.",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format",
  },
  {
    quote: "I've donated to many charities, but Sukoon is different. The transparency and community feeling is unmatched.",
    name: "Ahmed K.",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format",
  },
  {
    quote: "My whole family is now part of Sukoon. Even my kids understand the value of giving together.",
    name: "Priya S.",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format",
  },
];

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <PageHero
        badge="Join the Movement"
        title="Become a"
        highlight="Member"
        description="For just $1 a month, join a global family that celebrates your existence and transforms your generosity into real impact."
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You Get as a Member
              </h2>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">501(c)(3) Verified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">100% Transparent</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-amber-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Join the Family
                    </h3>
                    <p className="text-gray-600">Just $1/month. Cancel anytime.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Birthday */}
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={formData.birthday}
                        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Price Display */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Monthly Contribution</span>
                        <span className="text-2xl font-bold text-gray-900">
                          $1<span className="text-sm font-normal text-gray-500">/month</span>
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/25"
                    >
                      Continue to Payment
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      Secure payment powered by Stripe. Cancel anytime.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-10 border border-green-100 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to the Family!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for joining Sukoon, {formData.name.split(' ')[0]}! Check your email for next steps.
                  </p>
                  <p className="text-sm text-gray-500">
                    You'll be redirected to complete payment shortly...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who've found meaning in giving together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
