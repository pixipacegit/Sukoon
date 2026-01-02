'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Heart, DollarSign, Users, Search, Filter, ChevronDown, ExternalLink, TrendingUp, MapPin, Clock, Zap } from 'lucide-react';

// Mock impact data
const impactStories = [
  { id: 1, category: 'Education', title: 'School Supplies for Malak', description: "Sarah's birthday donation provided books for 12 students in Cairo.", donor: 'Sarah M.', recipient: 'Cairo, Egypt', amount: 45, date: '2 mins ago' },
  { id: 2, category: 'Health', title: 'Clean Water Initiative', description: 'Community fund provided water filters for a village in Kenya.', donor: 'Community', recipient: 'Nairobi, Kenya', amount: 120, date: '15 mins ago' },
  { id: 3, category: 'Food', title: 'Ramadan Food Packages', description: 'Monthly contributions fed 8 families during Ramadan.', donor: 'Ahmed K.', recipient: 'Lahore, Pakistan', amount: 80, date: '1 hour ago' },
  { id: 4, category: 'Shelter', title: 'Winter Blankets Distribution', description: 'Warm blankets delivered to refugee families in Syria.', donor: 'Elena R.', recipient: 'Damascus, Syria', amount: 65, date: '3 hours ago' },
];

const recentActivity = [
  { id: 1, name: 'Michael', action: 'shared a birthday', detail: 'Funded 3 clean water kits in Kenya', avatar: 'M', time: '2 mins ago' },
  { id: 2, name: 'Amina', action: 'made a pledge', detail: "Supported girls' education in Pakistan", avatar: 'A', time: '18 mins ago' },
  { id: 3, name: 'John Doe', action: 'shared a birthday', detail: 'Medical supplies for a clinic in Yemen', avatar: 'J', time: '32 mins ago' },
  { id: 4, name: 'Priya', action: 'donated', detail: 'Winter blankets for families in Syria', avatar: 'P', time: '1 hour ago' },
];

const categories = ['All', 'Education', 'Health', 'Food', 'Shelter', 'Water'];
const regions = ['All Regions', 'Middle East', 'Africa', 'South Asia', 'Southeast Asia'];

// Globe animation points
const globePoints = [
  { x: 30, y: 25, country: 'Syria' },
  { x: 35, y: 35, country: 'Egypt' },
  { x: 45, y: 30, country: 'Pakistan' },
  { x: 55, y: 40, country: 'India' },
  { x: 38, y: 45, country: 'Kenya' },
  { x: 25, y: 28, country: 'Turkey' },
  { x: 60, y: 35, country: 'Bangladesh' },
  { x: 42, y: 25, country: 'Afghanistan' },
];

export default function TransparencyDashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeConnection, setActiveConnection] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Animate connections
    const interval = setInterval(() => {
      setActiveConnection(prev => (prev + 1) % globePoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Heart, label: 'Lives Touched', value: '14,203', color: 'text-[#C4A4A4]' },
    { icon: DollarSign, label: 'Total Giving', value: '$4.5M', color: 'text-[#7A9E7E]' },
    { icon: Globe, label: 'Nations', value: '82', color: 'text-[#8BA4B4]' },
  ];

  return (
    <section id="transparency" className="min-h-screen bg-gradient-to-b from-[#F5F0EB] to-[#FDF8F3] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #3D2B1F 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10">
        {/* Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-4"
              >
                100% Transparent
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-[#3D2B1F] mb-4">
                Transparency{' '}
                <span className="text-gradient italic">Dashboard</span>
              </h1>
              <p className="text-lg text-[#2C2C2C]/60 max-w-xl">
                Watch how shared birthdays bring peace to the world through
                golden threads of giving.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl md:text-3xl font-heading font-bold text-[#3D2B1F]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#2C2C2C]/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Globe Visualization */}
          <motion.div
            initial={mounted ? { opacity: 0, x: -40 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-[#2C2C2C] to-[#1a1a1a] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              {/* Search within Globe */}
              <div className="absolute top-6 left-6 right-6 z-20 flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search stories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A86C] transition-colors"
                  />
                </div>
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all hidden md:block ${
                      activeCategory === cat
                        ? 'bg-[#C9A86C] text-[#3D2B1F]'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Globe Container */}
              <div className="relative h-[500px] flex items-center justify-center mt-16">
                {/* Globe SVG */}
                <div className="relative w-[400px] h-[400px]">
                  {/* Globe circles */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* Outer glow */}
                    <defs>
                      <radialGradient id="globeGlow">
                        <stop offset="0%" stopColor="#C9A86C" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#C9A86C" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#globeGlow)" />

                    {/* Globe outline */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A86C" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#C9A86C" strokeWidth="0.3" opacity="0.2" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="#C9A86C" strokeWidth="0.2" opacity="0.1" />

                    {/* Latitude/Longitude lines */}
                    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#C9A86C" strokeWidth="0.2" opacity="0.2" />
                    <ellipse cx="50" cy="50" rx="40" ry="30" fill="none" stroke="#C9A86C" strokeWidth="0.2" opacity="0.2" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="#C9A86C" strokeWidth="0.2" opacity="0.2" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="#C9A86C" strokeWidth="0.2" opacity="0.2" />

                    {/* Connection points */}
                    {globePoints.map((point, index) => (
                      <g key={point.country}>
                        {/* Point */}
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r={activeConnection === index ? 3 : 2}
                          fill="#C9A86C"
                          animate={{
                            scale: activeConnection === index ? [1, 1.5, 1] : 1,
                            opacity: activeConnection === index ? 1 : 0.5,
                          }}
                          transition={{ duration: 1, repeat: activeConnection === index ? Infinity : 0 }}
                        />
                        {/* Ripple effect */}
                        {activeConnection === index && (
                          <>
                            <motion.circle
                              cx={point.x}
                              cy={point.y}
                              r={2}
                              fill="none"
                              stroke="#C9A86C"
                              strokeWidth="0.5"
                              initial={{ r: 2, opacity: 0.8 }}
                              animate={{ r: 10, opacity: 0 }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.circle
                              cx={point.x}
                              cy={point.y}
                              r={2}
                              fill="none"
                              stroke="#C9A86C"
                              strokeWidth="0.3"
                              initial={{ r: 2, opacity: 0.6 }}
                              animate={{ r: 15, opacity: 0 }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                          </>
                        )}
                      </g>
                    ))}

                    {/* Animated connection lines (golden threads) */}
                    <motion.path
                      d={`M 50 30 Q ${globePoints[activeConnection].x} ${globePoints[activeConnection].y - 10} ${globePoints[activeConnection].x} ${globePoints[activeConnection].y}`}
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A86C" />
                        <stop offset="50%" stopColor="#D4B87A" />
                        <stop offset="100%" stopColor="#C9A86C" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Active Story Card */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeConnection}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute bottom-0 left-0 right-0 mx-auto w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[#E8DDD4]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-[#C9A86C] uppercase tracking-wider">
                            {impactStories[activeConnection % impactStories.length].category}
                          </span>
                          <h4 className="font-semibold text-[#3D2B1F] truncate">
                            {impactStories[activeConnection % impactStories.length].title}
                          </h4>
                          <p className="text-sm text-[#2C2C2C]/60 line-clamp-2">
                            {impactStories[activeConnection % impactStories.length].description}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-[#2C2C2C]/40">
                            <MapPin className="w-3 h-3" />
                            {globePoints[activeConnection].country}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Globe controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  {['+', '-', '⌖'].map((control) => (
                    <button
                      key={control}
                      className="w-10 h-10 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors flex items-center justify-center"
                    >
                      {control}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={mounted ? { opacity: 0, x: 40 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Recent Impacts */}
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-[#C9A86C]/5 border border-[#E8DDD4]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-[#3D2B1F] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#C9A86C]" />
                  Recent Impacts
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-pulse" />
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#3D2B1F]">
                        <span className="font-semibold">{activity.name}</span>{' '}
                        <span className="text-[#2C2C2C]/60">{activity.action}</span>
                      </p>
                      <p className="text-sm text-[#C9A86C] truncate">{activity.detail}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-[#2C2C2C]/40">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 rounded-xl border border-[#E8DDD4] text-[#3D2B1F] font-medium hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2">
                View All Activity
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Impact Summary Card */}
            <div className="bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] rounded-3xl p-6 text-[#3D2B1F]">
              <h3 className="font-heading font-semibold text-lg mb-4">Your Impact This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="opacity-80">Donations Made</span>
                  <span className="font-semibold">$12.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Lives Touched</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Projects Supported</span>
                  <span className="font-semibold">3</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#3D2B1F]/20">
                <p className="text-sm opacity-80">
                  "Your monthly contribution helped provide clean water to 2 families in Kenya this month."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
