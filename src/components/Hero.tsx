'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowDown, ChevronRight } from 'lucide-react';
import SukoonLogo from './SukoonLogo';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
    // Delayed content reveal for cinematic effect
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Video Element - Using a placeholder video URL */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop"
        >
          {/* Replace with your actual video URL */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-holding-a-candle-in-the-dark-4956-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Warm overlay for brand colors */}
        <div className="absolute inset-0 bg-[#3D2B1F]/20 mix-blend-multiply" />
      </motion.div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-[#C9A86C]/40 via-[#C9A86C]/10 to-transparent"
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-[#C9A86C]/30 via-[#C9A86C]/5 to-transparent"
          animate={{ x: [0, -50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#C9A86C]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 text-center"
      >
        <AnimatePresence>
          {showContent && (
            <>
              {/* Animated Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="flex justify-center mb-12"
              >
                <SukoonLogo size="xl" variant="light" showRipple={true} />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-pulse" />
                  Join 12,847+ members spreading peace worldwide
                </span>
              </motion.div>

              {/* Main Headline with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] font-heading">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Peace,
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-gradient"
                  >
                    One Dollar
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="text-white"
                  >
                    {' '}at a Time.
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
              >
                Join a global community celebrating life together.
                Where your birthday is cherished, your dollar transforms lives,
                and peace becomes personal.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(201, 168, 108, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#C9A86C] via-[#D4B87A] to-[#C9A86C] text-[#3D2B1F] font-semibold text-lg shadow-lg shadow-[#C9A86C]/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Become a Member
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#D4B87A] via-[#E8D4A8] to-[#D4B87A]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 ml-0.5" fill="white" />
                  </div>
                  <span className="font-medium">Watch Our Story</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
              >
                {[
                  { value: '100%', label: 'Transparency' },
                  { value: '$1', label: 'Monthly' },
                  { value: '50+', label: 'Countries' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-semibold text-[#C9A86C] font-heading">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 tracking-wide uppercase mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Video Controls */}
      <motion.div
        initial={mounted ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-24 right-8 z-30 flex gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleVideo}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={mounted ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-white/60"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#C9A86C]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDF8F3] to-transparent z-10" />
    </section>
  );
}
