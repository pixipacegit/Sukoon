'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Heart, MessageCircle, Gift, Cake, Star, Clock, ChevronLeft, ChevronRight, Share2, Send } from 'lucide-react';

// Mock birthday data - will be replaced with Firebase
const generateBirthdayCelebrations = () => {
  const names = ['Sarah Jenkins', 'David Chen', 'Amina K.', 'Ravi Patel', 'Elena R.', 'Sam Wilson', 'Maria G.', 'James O.', 'Fatima H.', 'Wei L.', 'Carlos M.', 'Priya S.'];
  const countries = ['New York, USA', 'London, UK', 'Cairo, Egypt', 'Mumbai, India', 'Rome, Italy', 'Toronto, Canada', 'Tokyo, Japan', 'Sydney, Australia'];
  const messages = [
    "Turning 28 today! Grateful for peace and community. I'm sending my love to everyone in the Sukoon family!",
    "Forty years of blessings! Celebrating with my Sukoon family today.",
    "Another year, another chance to make a difference. Thank you all for the birthday wishes!",
    "Birthday wishes from around the world - this is what peace feels like.",
    "Grateful for the joy of living. Making every day count.",
    "Sending good vibes to everyone celebrating today!"
  ];

  return names.map((name, index) => ({
    id: index,
    name,
    location: countries[index % countries.length],
    age: 25 + Math.floor(Math.random() * 35),
    message: messages[index % messages.length],
    photo: `https://i.pravatar.cc/400?img=${(index % 70) + 1}`,
    loveCount: Math.floor(Math.random() * 150) + 20,
    commentCount: Math.floor(Math.random() * 30) + 5,
    memberSince: `${2020 + Math.floor(Math.random() * 4)}`,
    rotation: (Math.random() - 0.5) * 6, // Slight random rotation for Polaroid effect
  }));
};

const tabs = [
  { id: 'today', label: 'Today', icon: Cake },
  { id: 'week', label: 'This Week', icon: Calendar },
  { id: 'milestones', label: 'Milestones', icon: Star },
  { id: 'loved', label: 'Most Loved', icon: Heart },
];

export default function BirthdayArchive() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const [celebrations, setCelebrations] = useState(generateBirthdayCelebrations());
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showLoveModal, setShowLoveModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sendLove = (id: number) => {
    setCelebrations(prev =>
      prev.map(c => c.id === id ? { ...c, loveCount: c.loveCount + 1 } : c)
    );
    setShowLoveModal(true);
    setTimeout(() => setShowLoveModal(false), 2000);
  };

  return (
    <section className="min-h-screen bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Notebook lines pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #3D2B1F 0px, #3D2B1F 1px, transparent 1px, transparent 32px)',
        }} />
        {/* Corner decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 border-l-4 border-t-4 border-[#C9A86C]/10 rounded-tl-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-4 border-b-4 border-[#C9A86C]/10 rounded-br-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10">
        {/* Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Decorative Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C9A86C]/10 text-[#C9A86C] text-sm font-medium mb-6"
          >
            <Cake className="w-4 h-4" />
            Community Scrapbook
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-[#3D2B1F] mb-6">
            Birthday Wishes{' '}
            <span className="text-gradient italic">Archive</span>
          </h1>

          <p className="text-lg text-[#2C2C2C]/60 max-w-2xl mx-auto mb-8">
            A digital scrapbook of shared joy. Celebrate life with our community
            by sending love and support to those celebrating today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] font-semibold shadow-lg shadow-[#C9A86C]/20 flex items-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Share Your Birthday
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-[#C9A86C] text-[#C9A86C] font-semibold flex items-center gap-2 hover:bg-[#C9A86C]/10 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              View Timeline
            </motion.button>
          </div>

          {/* Date Display */}
          <div className="flex items-center justify-center gap-4 text-[#2C2C2C]/50">
            <button className="p-2 rounded-full hover:bg-[#E8DDD4] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium">{todayDate}</span>
            <button className="p-2 rounded-full hover:bg-[#E8DDD4] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg shadow-[#C9A86C]/5 border border-[#E8DDD4]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] shadow-md'
                    : 'text-[#2C2C2C]/60 hover:text-[#3D2B1F]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Today's Stats */}
        <motion.div
          initial={mounted ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { label: 'Celebrating Today', value: celebrations.length },
            { label: 'Love Sent', value: '2.4K' },
            { label: 'Countries', value: '23' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-semibold text-[#C9A86C]">{stat.value}</div>
              <div className="text-sm text-[#2C2C2C]/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Polaroid Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {celebrations.map((person, index) => (
            <motion.div
              key={person.id}
              initial={mounted ? { opacity: 0, y: 40, rotate: person.rotation } : false}
              whileInView={{ opacity: 1, y: 0, rotate: person.rotation }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: Math.min(index * 0.1, 0.5) }}
              whileHover={{
                y: -10,
                rotate: 0,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedCard(selectedCard === person.id ? null : person.id)}
            >
              {/* Polaroid Card */}
              <div className="bg-white rounded-lg shadow-xl shadow-[#3D2B1F]/10 p-4 pb-6 hover:shadow-2xl hover:shadow-[#C9A86C]/20 transition-all duration-500">
                {/* Photo */}
                <div className="relative aspect-square rounded overflow-hidden mb-4">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Birthday ribbon */}
                  <div className="absolute top-4 -right-8 bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] text-xs font-bold px-10 py-1 rotate-45 shadow-md">
                    BIRTHDAY
                  </div>
                  {/* Age badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                    <span className="text-2xl font-heading font-bold text-[#C9A86C]">{person.age}</span>
                    <span className="text-sm text-[#2C2C2C]/60 ml-1">years young</span>
                  </div>
                </div>

                {/* Info - Handwritten style */}
                <div className="px-2">
                  <h3 className="text-xl font-heading font-semibold text-[#3D2B1F] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#2C2C2C]/50 mb-3">{person.location}</p>

                  {/* Message - styled like handwriting */}
                  <p className="text-[#2C2C2C]/70 italic leading-relaxed mb-4 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    "{person.message}"
                  </p>

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#E8DDD4]">
                    <div className="flex gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sendLove(person.id);
                        }}
                        className="flex items-center gap-1.5 text-[#C4A4A4] hover:text-[#e57373] transition-colors group/btn"
                      >
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                          <Heart className="w-5 h-5 group-hover/btn:fill-current" />
                        </motion.div>
                        <span className="text-sm font-medium">{person.loveCount}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#8BA4B4] hover:text-[#6b8494] transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{person.commentCount}</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] text-sm font-semibold hover:shadow-lg hover:shadow-[#C9A86C]/30 transition-all">
                      <Send className="w-4 h-4" />
                      Send Love
                    </button>
                  </div>
                </div>

                {/* Member since tag - like a sticker */}
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-[#7A9E7E] text-white text-xs font-medium rounded-full shadow-md transform rotate-12">
                  Since {person.memberSince}
                </div>
              </div>

              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#C9A86C]/20 rotate-2" />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-[#3D2B1F] text-white font-semibold shadow-xl hover:bg-[#2C2C2C] transition-colors"
          >
            Load More Memories
          </motion.button>
        </motion.div>
      </div>

      {/* Love Sent Toast */}
      <AnimatePresence>
        {showLoveModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 px-6 py-4 bg-[#C9A86C] text-[#3D2B1F] rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="font-semibold">Love sent!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
