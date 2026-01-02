'use client';

import { motion } from 'framer-motion';
import { UserPlus, Heart, Gift, Globe, CreditCard, Mail, PartyPopper, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up with your name, email, and birthday. It takes less than 60 seconds to join our global family.',
    color: 'bg-amber-500',
    details: [
      'Quick and simple registration',
      'No lengthy forms or verification',
      'Your birthday helps us celebrate you',
    ],
  },
  {
    icon: CreditCard,
    title: 'Set Up Your Contribution',
    description: 'Choose to give $1 per month. Secure payment processing through Stripe ensures your information is protected.',
    color: 'bg-orange-500',
    details: [
      'Just $1/month - less than a cup of coffee',
      'Secure payment via Stripe',
      'Cancel anytime with no hassle',
    ],
  },
  {
    icon: Mail,
    title: 'Join the Community',
    description: 'Get access to our community updates, impact reports, and connect with fellow members worldwide.',
    color: 'bg-rose-500',
    details: [
      'Monthly newsletter with stories',
      'Real-time impact updates',
      'Connect with global members',
    ],
  },
  {
    icon: PartyPopper,
    title: 'Get Celebrated',
    description: 'On your birthday, receive wishes from our community. We celebrate every member because you matter.',
    color: 'bg-pink-500',
    details: [
      'Personalized birthday wishes',
      'Community celebration messages',
      'Your name on our Community Wall',
    ],
  },
  {
    icon: Globe,
    title: 'See Your Impact',
    description: 'Track exactly where your dollars go through our 100% transparent dashboard and impact reports.',
    color: 'bg-green-500',
    details: [
      'Real-time donation tracking',
      'Project progress updates',
      'Stories from beneficiaries',
    ],
  },
  {
    icon: BarChart3,
    title: 'Watch Us Grow Together',
    description: 'As our community grows, so does our impact. Be part of a movement that proves small actions create big change.',
    color: 'bg-blue-500',
    details: [
      'Collective impact metrics',
      'Community milestones',
      'Growing global family',
    ],
  },
];

const faqs = [
  {
    question: 'Why only $1 per month?',
    answer: 'We believe everyone should be able to make a difference, regardless of their financial situation. $1 is accessible to most people, and when thousands contribute together, it creates massive impact.',
  },
  {
    question: 'Where does my money go?',
    answer: 'Every dollar is tracked and reported through our transparency dashboard. Funds go directly to verified humanitarian projects including clean water, education, medical aid, and emergency relief.',
  },
  {
    question: 'Can I cancel my membership?',
    answer: 'Absolutely. You can cancel anytime with no questions asked. We believe in giving freely, not under obligation.',
  },
  {
    question: 'Why do you need my birthday?',
    answer: 'Your birthday is special to us! We celebrate every member on their birthday with community wishes. It\'s our way of saying you matter to us beyond your contribution.',
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        badge="Simple Process"
        title="How"
        highlight="Sukoon Works"
        description="Four simple steps to join a global community creating real change. Your journey to making a difference starts here."
      />

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-start mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Join thousands of members who are proving that peace is achievable, one dollar at a time.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Become a Member Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
