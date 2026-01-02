'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Heart, Search, Filter, ChevronDown, Cake, Clock } from 'lucide-react';

// Mock member data - replace with real data from Firebase
const generateMembers = (count: number, startId: number = 0) => {
  const countries = ['United States', 'United Kingdom', 'Canada', 'Pakistan', 'India', 'Egypt', 'Kenya', 'Japan', 'Germany', 'Brazil', 'Australia', 'France', 'Italy', 'Spain', 'Mexico'];
  const firstNames = ['Sarah', 'Ahmed', 'Fatima', 'David', 'Maria', 'Wei', 'John', 'Priya', 'Carlos', 'Elena', 'Kenji', 'Amina', 'Michael', 'Aisha', 'James', 'Yuki', 'Omar', 'Sofia'];
  const lastInitials = ['M', 'K', 'R', 'S', 'J', 'L', 'C', 'P', 'A', 'B', 'T', 'N', 'H', 'W'];

  const avatarStyles = [
    'bg-gradient-to-br from-[#C9A86C] to-[#8B7355]',
    'bg-gradient-to-br from-[#7A9E7E] to-[#5a8e5e]',
    'bg-gradient-to-br from-[#C4A4A4] to-[#a08080]',
    'bg-gradient-to-br from-[#8BA4B4] to-[#6b8494]',
    'bg-gradient-to-br from-[#D4B87A] to-[#b4985a]',
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = startId + i;
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const joinDate = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);
    const birthdayMonth = Math.floor(Math.random() * 12);
    const birthdayDay = Math.floor(Math.random() * 28) + 1;

    // Calculate days until birthday
    const today = new Date();
    const thisYearBirthday = new Date(today.getFullYear(), birthdayMonth, birthdayDay);
    const nextBirthday = thisYearBirthday < today
      ? new Date(today.getFullYear() + 1, birthdayMonth, birthdayDay)
      : thisYearBirthday;
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return {
      id,
      name: `${firstName} ${lastInitial}.`,
      country,
      joinDate: joinDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      avatarStyle: avatarStyles[Math.floor(Math.random() * avatarStyles.length)],
      daysUntilBirthday,
      hasPhoto: Math.random() > 0.3,
      photoUrl: `https://i.pravatar.cc/300?img=${(id % 70) + 1}`,
    };
  });
};

export default function CommunityWall() {
  const [mounted, setMounted] = useState(false);
  const [members, setMembers] = useState(() => generateMembers(24));
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Infinite scroll handler
  const loadMore = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setMembers(prev => [...prev, ...generateMembers(12, prev.length)]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  const countries = ['All', ...new Set(members.map(m => m.country))].slice(0, 10);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || member.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <section id="community-wall" className="py-20 md:py-28 bg-[#FDF8F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9A86C]/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7A9E7E]/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-4"
              >
                The Movement
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] leading-tight font-heading">
                Living Community{' '}
                <span className="text-gradient italic">Wall</span>
              </h2>
              <p className="mt-4 text-lg text-[#2C2C2C]/60 max-w-xl">
                Celebrating {members.length.toLocaleString()}+ lives sharing peace from around the globe.
                Join this tapestry of stories.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C2C]/40" />
                <input
                  type="text"
                  placeholder="Find a community member..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-72 pl-12 pr-4 py-3 rounded-xl bg-white border border-[#E8DDD4] text-[#3D2B1F] placeholder-[#2C2C2C]/40 focus:outline-none focus:border-[#C9A86C] transition-colors"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E8DDD4] text-[#3D2B1F] hover:border-[#C9A86C] transition-colors"
                >
                  <Filter className="w-5 h-5 text-[#C9A86C]" />
                  <span>{selectedCountry}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#E8DDD4] overflow-hidden z-50"
                    >
                      {countries.map((country) => (
                        <button
                          key={country}
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowFilters(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-[#FAF7F2] transition-colors ${
                            selectedCountry === country ? 'bg-[#C9A86C]/10 text-[#C9A86C]' : 'text-[#3D2B1F]'
                          }`}
                        >
                          {country}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] font-semibold shadow-lg shadow-[#C9A86C]/20 flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Add Your Light
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={mounted ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: Math.min(index * 0.03, 0.3) }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#C9A86C]/20 transition-all duration-500 border border-transparent hover:border-[#C9A86C]/30"
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                  className="absolute -inset-[2px] bg-gradient-to-r from-[#C9A86C] via-[#D4B87A] to-[#C9A86C] rounded-2xl -z-10 blur-sm"
                />

                {/* Avatar */}
                <div className="relative aspect-square overflow-hidden">
                  {member.hasPhoto ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full ${member.avatarStyle} flex items-center justify-center`}>
                      <span className="text-3xl font-heading text-white/90">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Birthday Badge */}
                  {member.daysUntilBirthday <= 7 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 px-2 py-1 rounded-full bg-[#C9A86C] text-white text-xs font-semibold flex items-center gap-1 shadow-lg"
                    >
                      <Cake className="w-3 h-3" />
                      {member.daysUntilBirthday === 0 ? 'Today!' : `${member.daysUntilBirthday}d`}
                    </motion.div>
                  )}

                  {/* Hover Overlay with Countdown */}
                  <AnimatePresence>
                    {hoveredMember === member.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/50 to-transparent flex flex-col justify-end p-4"
                      >
                        <div className="text-white">
                          <div className="flex items-center gap-1 text-xs text-white/80 mb-1">
                            <Clock className="w-3 h-3" />
                            Birthday countdown
                          </div>
                          <div className="text-2xl font-heading font-semibold">
                            {member.daysUntilBirthday} days
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-[#3D2B1F] truncate">{member.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-[#2C2C2C]/50 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{member.country}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#2C2C2C]/40 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Loading indicator / Infinite scroll trigger */}
        <div ref={observerRef} className="flex justify-center py-12">
          {isLoading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 border-3 border-[#E8DDD4] border-t-[#C9A86C] rounded-full"
            />
          )}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center text-[#2C2C2C]/40"
          >
            <span className="text-sm">Scroll for more stories</span>
            <ChevronDown className="w-5 h-5 mt-1" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
