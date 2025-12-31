'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Twitter, Instagram, Facebook, Youtube, MapPin, Phone, ArrowUp } from 'lucide-react';

const footerLinks = {
  'About Us': ['Our Story', 'Mission', 'Team', 'Partners', 'Press'],
  'Get Involved': ['Join for $1', 'Volunteer', 'Corporate Giving', 'Fundraise', 'Events'],
  'Impact': ['Stories', 'Transparency', 'Reports', 'Projects', 'Regions'],
  'Support': ['Help Center', 'Contact Us', 'FAQ', 'Privacy Policy', 'Terms'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A86C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Scroll to Top Button */}
      <div className="relative z-10 flex justify-center -mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="w-5 h-5 text-[#3D2B1F]" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <Heart className="w-8 h-8 text-[#C9A86C] fill-[#C9A86C]/30" />
              <span className="text-2xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sukoon
              </span>
            </motion.div>

            <p className="text-white/60 leading-relaxed mb-6">
              Reimagining humanitarian work as a living community where peace isn't just
              delivered—it's shared. Join us for just $1 a month.
            </p>

            <div className="space-y-3 text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A86C]" />
                <span>123 Compassion Lane, Hope City</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A86C]" />
                <span>hello@sukoon.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A86C]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#C9A86C] transition-colors inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stay Connected
            </h4>
            <p className="text-white/60 mb-6">
              Receive stories of impact, community celebrations, and updates on how your
              contribution changes lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A86C] transition-colors flex-1 max-w-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © 2024 Sukoon. All rights reserved. Made with{' '}
            <Heart className="w-4 h-4 inline text-[#C9A86C]" /> for humanity.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#C9A86C] hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A86C] via-[#D4B87A] to-[#C9A86C]" />
    </footer>
  );
}
