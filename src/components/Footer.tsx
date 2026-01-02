'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Twitter, Instagram, Facebook, Linkedin, Youtube, Volume2, ArrowRight, Globe, Shield, FileText, ArrowUp } from 'lucide-react';
import SukoonLogo from './SukoonLogo';

const footerLinks = {
  'Get Involved': [
    { name: 'Become a Member', href: '#join' },
    { name: 'Birthday Archive', href: '#birthdays' },
    { name: 'Community Wall', href: '#community-wall' },
    { name: 'Give More', href: '#give-more' },
  ],
  'About Sukoon': [
    { name: 'Our Mission', href: '#mission' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Impact Stories', href: '#stories' },
    { name: 'Transparency', href: '#transparency' },
  ],
  'Resources': [
    { name: 'FAQ', href: '/faq' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partner With Us', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/sukoon', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/sukoon', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/sukoon', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/sukoon', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/sukoon', label: 'LinkedIn' },
];

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const playPronunciation = () => {
    // Create speech synthesis for pronunciation
    const utterance = new SpeechSynthesisUtterance('soo-koon');
    utterance.rate = 0.7;
    utterance.pitch = 1;

    setIsPlaying(true);
    speechSynthesis.speak(utterance);

    utterance.onend = () => setIsPlaying(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#3D2B1F] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A86C]/50 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Scroll to Top Button */}
      <div className="relative z-10 flex justify-center -mb-7">
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#C9A86C]/30 transition-shadow"
        >
          <ArrowUp className="w-6 h-6 text-[#3D2B1F]" />
        </motion.button>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 relative z-10">
        {/* Top Section - Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SukoonLogo size="lg" variant="light" showRipple={false} />

            {/* Pronunciation */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-white/80" style={{ fontFamily: 'var(--font-nastaliq), serif' }}>
                  سکون
                </span>
                <span className="text-lg text-white/40">|</span>
                <span className="text-lg text-white/60 italic font-light">soo-KOON</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playPronunciation}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isPlaying
                    ? 'bg-[#C9A86C] text-[#3D2B1F]'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
                title="Listen to pronunciation"
              >
                <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
              </motion.button>
            </div>

            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              <span className="text-[#C9A86C] font-medium">Sukoon</span> (سکون) means "peace" in Urdu—a state of tranquility
              that comes from inner calm and harmony. Our mission is to spread this
              peace, one dollar at a time.
            </p>

            {/* Accreditations */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Shield className="w-5 h-5 text-[#7A9E7E]" />
                501(c)(3) Verified
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Globe className="w-5 h-5 text-[#8BA4B4]" />
                82+ Nations Impacted
              </div>
            </div>
          </motion.div>

          {/* Right - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pl-12"
          >
            <h3 className="text-2xl font-heading font-medium mb-4">
              Stay Connected
            </h3>
            <p className="text-white/60 mb-6">
              Get monthly updates on the impact you're creating. No spam, just stories of hope.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A86C] transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#C9A86C]/20 transition-shadow"
              >
                Subscribe to Peace
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-white/40 mb-4">Follow Our Journey</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#C9A86C] hover:text-[#3D2B1F] transition-all"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * categoryIndex }}
            >
              <h4 className="text-sm font-semibold text-[#C9A86C] tracking-wider uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#C9A86C] transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-[#C9A86C] tracking-wider uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@sukoon.org"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@sukoon.org
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  123 Peace Street<br />
                  New York, NY 10001<br />
                  United States
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>© {new Date().getFullYear()} Sukoon Foundation.</span>
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[#C4A4A4]" fill="#C4A4A4" />
            </motion.span>
            <span>for humanity.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-white/40 hover:text-white transition-colors flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/40 hover:text-white transition-colors flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C4A484] via-[#7A9E7E] to-[#8BA4B4]" />
    </footer>
  );
}
