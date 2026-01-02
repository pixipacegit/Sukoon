'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ChevronRight } from 'lucide-react';
import SukoonLogo from './SukoonLogo';

const navLinks = [
  { name: 'Join Us', href: '#join' },
  { name: 'Our Stories', href: '#stories' },
  { name: 'Transparency', href: '#transparency' },
  { name: 'Give More', href: '#give-more' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={mounted ? { y: -100 } : false}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#C9A86C]/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <SukoonLogo
              size="md"
              variant={isScrolled ? 'dark' : 'light'}
              showRipple={!isScrolled}
              showUrdu={true}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={mounted ? { opacity: 0, y: -20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? activeLink === link.href.slice(1)
                      ? 'text-[#C9A86C]'
                      : 'text-[#2C2C2C]/70 hover:text-[#3D2B1F]'
                    : activeLink === link.href.slice(1)
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {/* Gradient underline on active/hover */}
                <motion.span
                  className="absolute bottom-1 left-5 right-5 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #C4A484, #7A9E7E)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeLink === link.href.slice(1) ? 1 : 0
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={mounted ? { opacity: 0, scale: 0.9 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] shadow-lg shadow-[#C9A86C]/20'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
            }`}
          >
            <Heart className="w-4 h-4" fill={isScrolled ? '#3D2B1F' : 'white'} fillOpacity={0.3} />
            Become a Member
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'text-[#3D2B1F] hover:bg-[#FAF7F2]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-md bg-[#FDF8F3] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E8DDD4]">
                  <SukoonLogo size="md" variant="dark" showRipple={false} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#E8DDD4] transition-colors"
                  >
                    <X size={24} className="text-[#3D2B1F]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-8 px-6">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-xl text-lg font-medium text-[#3D2B1F] hover:bg-white hover:shadow-md transition-all group"
                      >
                        {link.name}
                        <ChevronRight className="w-5 h-5 text-[#C9A86C] group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-[#E8DDD4]">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] font-semibold text-lg shadow-lg shadow-[#C9A86C]/20 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" fill="#3D2B1F" fillOpacity={0.3} />
                    Become a Member — $1/mo
                  </motion.button>

                  <p className="text-center text-sm text-[#2C2C2C]/50 mt-4">
                    Join 12,847+ members spreading peace worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
