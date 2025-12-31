'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Mission', href: '#mission' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Impact', href: '#impact' },
  { name: 'Stories', href: '#stories' },
  { name: 'Community', href: '#community' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Heart
                className={`w-9 h-9 transition-colors duration-300 ${
                  isScrolled ? 'text-[#C9A86C]' : 'text-white'
                }`}
                fill={isScrolled ? '#C9A86C' : 'white'}
                fillOpacity={0.3}
              />
            </div>
            <span
              className={`text-2xl font-medium tracking-wide transition-colors duration-300 font-heading ${
                isScrolled ? 'text-[#3D2B1F]' : 'text-white'
              }`}
            >
              Sukoon
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#2C2C2C] hover:text-[#C9A86C]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:block px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] shadow-lg'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
            }`}
          >
            Join for $1/month
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#3D2B1F]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FDF8F3] pt-28"
          >
            <div className="flex flex-col items-center gap-10 p-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-[#3D2B1F] hover:text-[#C9A86C] transition-colors font-heading"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 btn-primary text-lg"
              >
                Join for $1/month
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
