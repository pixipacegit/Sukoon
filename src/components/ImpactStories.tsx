'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, MapPin, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: 'Fatima',
    age: 28,
    location: 'Syria',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop',
    quote: 'When I received the message that strangers across the world celebrated my daughter\'s first birthday, I cried. For the first time in years, I felt seen.',
    impact: 'Clean water access for her village',
    story: 'Fatima fled her home with nothing but her newborn daughter. Today, thanks to Sukoon members, her village has clean water and she runs a small tailoring business.',
  },
  {
    id: 2,
    name: 'Ahmad',
    age: 34,
    location: 'Yemen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop',
    quote: 'They didn\'t just give us food. They gave us hope. They wrote letters. They remembered our names. That changed everything.',
    impact: 'Emergency food relief for 200 families',
    story: 'Ahmad coordinates food distribution in his community. He says the personal connection from Sukoon members gives his people strength beyond what any aid could provide.',
  },
  {
    id: 3,
    name: 'Amira',
    age: 12,
    location: 'Palestine',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1040&auto=format&fit=crop',
    quote: 'I want to be a doctor when I grow up. Now I have books, and people who believe in me.',
    impact: 'Education supplies for 50 children',
    story: 'Despite losing her school, Amira continues her education through community learning centers funded by Sukoon. She dreams of returning one day to rebuild.',
  },
  {
    id: 4,
    name: 'Yusuf',
    age: 67,
    location: 'Sudan',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop',
    quote: 'In my 67 years, I\'ve never felt such kindness from people I\'ve never met. They restored my faith in humanity.',
    impact: 'Medical supplies for local clinic',
    story: 'Yusuf is a retired teacher who now helps distribute medical supplies in his region. He says every package carries the warmth of global compassion.',
  },
];

export default function ImpactStories() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section id="stories" className="section-padding bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#C9A86C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#C4A4A4]/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={mounted ? { opacity: 0 } : false}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-6"
          >
            Real Stories, Real Impact
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-8 leading-tight font-heading">
            Faces of <span className="text-gradient italic">Hope</span>
          </h2>

          <div className="decorative-line mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed">
            Behind every contribution is a story. Behind every story is a person who now knows
            they're not forgotten. These are their voices.
          </p>
        </motion.div>

        {/* Story Carousel */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5]">
                    <img
                      src={stories[currentIndex].image}
                      alt={stories[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Name Badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-dark rounded-2xl p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#C9A86C] flex items-center justify-center">
                          <Heart className="w-7 h-7 text-white" fill="white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white font-heading">
                            {stories[currentIndex].name}, {stories[currentIndex].age}
                          </h3>
                          <div className="flex items-center gap-2 text-white/70 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            {stories[currentIndex].location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-[#C9A86C]/30 rounded-3xl" />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 border-2 border-[#C9A86C]/20 rounded-3xl" />
              </div>

              {/* Content Side */}
              <div className="lg:pl-8">
                <div className="relative mb-10">
                  <Quote className="absolute -top-6 -left-6 w-20 h-20 text-[#C9A86C]/15" />
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#3D2B1F] leading-relaxed relative z-10 font-heading">
                    "{stories[currentIndex].quote}"
                  </blockquote>
                </div>

                <p className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-10">
                  {stories[currentIndex].story}
                </p>

                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#C9A86C]/10 border border-[#C9A86C]/20">
                  <Heart className="w-6 h-6 text-[#C9A86C]" />
                  <span className="text-[#3D2B1F] font-medium text-lg">
                    Impact: {stories[currentIndex].impact}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStory}
              className="w-14 h-14 rounded-full border-2 border-[#C9A86C] flex items-center justify-center text-[#C9A86C] hover:bg-[#C9A86C] hover:text-white transition-all"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>

            <div className="flex gap-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#C9A86C] w-10'
                      : 'bg-[#C9A86C]/30 w-3 hover:bg-[#C9A86C]/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStory}
              className="w-14 h-14 rounded-full border-2 border-[#C9A86C] flex items-center justify-center text-[#C9A86C] hover:bg-[#C9A86C] hover:text-white transition-all"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
