'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Heart, Share2, Tag, Calendar, User, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Mock stories data - will be replaced with CMS
const stories = [
  {
    id: 1,
    category: 'Impact',
    title: 'A Classroom for Maya: How $47 Changed Everything',
    excerpt: 'In a small village in rural Pakistan, Maya dreamed of becoming a teacher. Her classroom had no desks, no books, only determination. Then the Sukoon community stepped in.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
    author: 'Sukoon Team',
    date: 'December 28, 2024',
    readTime: '5 min read',
    featured: true,
    likes: 234,
  },
  {
    id: 2,
    category: 'Community',
    title: 'Clean Water, Better Life: The Village That Transformed',
    excerpt: 'When contaminated water was making children sick in a Kenyan village, our community came together. This is their story of resilience and hope.',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=2070&auto=format&fit=crop',
    author: 'Ahmed K.',
    date: 'December 20, 2024',
    readTime: '7 min read',
    featured: false,
    likes: 189,
  },
  {
    id: 3,
    category: 'Celebration',
    title: 'Meals for the Holidays: 50 Families, One Celebration',
    excerpt: 'This holiday season, Sukoon members came together to provide warm meals and joy to 50 families across three countries. A celebration of collective generosity.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop',
    author: 'Maria G.',
    date: 'December 15, 2024',
    readTime: '4 min read',
    featured: false,
    likes: 312,
  },
  {
    id: 4,
    category: 'Update',
    title: 'Year in Review: 2024 Impact Report',
    excerpt: "A transparent look at where every dollar went, the lives touched, and the communities transformed through your generosity.",
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop',
    author: 'Sukoon Foundation',
    date: 'December 10, 2024',
    readTime: '10 min read',
    featured: false,
    likes: 456,
  },
];

const categories = ['All', 'Impact', 'Community', 'Celebration', 'Update'];

export default function Stories() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredStories = activeCategory === 'All'
    ? stories
    : stories.filter(s => s.category === activeCategory);

  const featuredStory = stories.find(s => s.featured);
  const regularStories = filteredStories.filter(s => !s.featured);

  return (
    <section id="stories" className="section-padding bg-[#FDF8F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7A9E7E]/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#C9A86C] uppercase mb-4"
              >
                <BookOpen className="w-4 h-4" />
                Real Impact
              </motion.span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] leading-tight font-heading">
                Stories of{' '}
                <span className="text-gradient italic">Change</span>
              </h2>

              <p className="mt-4 text-lg text-[#2C2C2C]/60 max-w-xl">
                Real stories affected by your generosity. Every dollar writes a new chapter of hope.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] shadow-lg shadow-[#C9A86C]/20'
                      : 'bg-white text-[#2C2C2C]/60 hover:text-[#3D2B1F] border border-[#E8DDD4]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Story */}
        {featuredStory && activeCategory === 'All' && (
          <motion.div
            initial={mounted ? { opacity: 0, y: 40 } : false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div
              className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredStory(featuredStory.id)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                  <motion.img
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredStory === featuredStory.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />

                  {/* Video Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredStory === featuredStory.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-[#C9A86C] ml-1" fill="#C9A86C" />
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#C9A86C] to-[#D4B87A] text-[#3D2B1F] text-sm font-semibold">
                    Featured Story
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#C9A86C]/10 text-[#C9A86C] text-sm font-medium">
                      {featuredStory.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#2C2C2C]/50">
                      <Clock className="w-4 h-4" />
                      {featuredStory.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-[#3D2B1F] mb-6 leading-tight">
                    {featuredStory.title}
                  </h3>

                  <p className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-8">
                    {featuredStory.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center text-white font-semibold">
                        {featuredStory.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-[#3D2B1F]">{featuredStory.author}</p>
                        <p className="text-sm text-[#2C2C2C]/50">{featuredStory.date}</p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-[#C9A86C] font-semibold"
                    >
                      Read Story
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={mounted ? { opacity: 0, y: 40 } : false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredStory(story.id)}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C9A86C]/10 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredStory === story.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#3D2B1F] text-xs font-semibold">
                    {story.category}
                  </div>

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredStory === story.id ? 1 : 0,
                      y: hoveredStory === story.id ? 0 : 20
                    }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#C4A4A4] hover:text-[#e57373] transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#8BA4B4] hover:text-[#6b8494] transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-[#2C2C2C]/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {story.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#2C2C2C]/30" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-[#3D2B1F] mb-3 group-hover:text-[#C9A86C] transition-colors line-clamp-2">
                    {story.title}
                  </h3>

                  <p className="text-[#2C2C2C]/60 leading-relaxed line-clamp-3 mb-6">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E8DDD4]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A86C] to-[#D4B87A] flex items-center justify-center text-white text-sm font-semibold">
                        {story.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-[#3D2B1F]">{story.author}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[#C4A4A4]">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{story.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#3D2B1F] text-white font-semibold text-lg shadow-xl hover:bg-[#2C2C2C] transition-colors"
          >
            Explore All Stories
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
