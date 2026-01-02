'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const featuredStory = {
  title: 'How $12,000 Brought Water to an Entire Village',
  location: 'Turkana County, Kenya',
  date: 'December 2024',
  image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=1200&auto=format',
  excerpt: 'When Sukoon members came together, they transformed a drought-stricken village into a thriving community with access to clean water.',
  content: `In the arid lands of Turkana County, water meant life or death. Families walked 8 kilometers daily to fetch contaminated water from a shrinking river. Children missed school. Adults couldn't work. The community was slowly dying.

Then, 12,000 Sukoon members each gave $1. In just one month, we had enough to drill a deep borewell and install a solar-powered pump system. Today, over 500 families have access to clean water right in their village.

"I never thought strangers from across the world would care about us," says Mary, a mother of four. "Now my children go to school instead of walking for water. This is a miracle."`,
};

const stories = [
  {
    title: 'School Supplies for 1,200 Children',
    location: 'Punjab, Pakistan',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format',
    excerpt: 'Our community funded books, uniforms, and supplies for rural schools, giving children a chance at education.',
    category: 'Education',
  },
  {
    title: 'Emergency Medical Relief in Aleppo',
    location: 'Syria',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format',
    excerpt: 'Mobile clinics brought critical healthcare to families affected by conflict, treating over 3,000 patients.',
    category: 'Medical',
  },
  {
    title: 'Rebuilding Homes After the Flood',
    location: 'Bangladesh',
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format',
    excerpt: '47 families received new shelters after devastating monsoon floods destroyed their homes.',
    category: 'Shelter',
  },
  {
    title: 'Solar Lights for Remote Villages',
    location: 'Rural India',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format',
    excerpt: 'Bringing light to 200 homes in villages without electricity, enabling children to study at night.',
    category: 'Infrastructure',
  },
  {
    title: 'Women\'s Vocational Training',
    location: 'Afghanistan',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&auto=format',
    excerpt: '150 women learned tailoring and handicraft skills, enabling them to support their families.',
    category: 'Empowerment',
  },
  {
    title: 'Clean Water Wells in Somalia',
    location: 'Mogadishu, Somalia',
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1541544741-c0bffc7a4944?w=600&auto=format',
    excerpt: 'Five wells now serve 2,000+ people with safe drinking water in drought-affected regions.',
    category: 'Water',
  },
];

const categoryColors: Record<string, string> = {
  Education: 'bg-amber-100 text-amber-700',
  Medical: 'bg-rose-100 text-rose-700',
  Shelter: 'bg-green-100 text-green-700',
  Infrastructure: 'bg-blue-100 text-blue-700',
  Empowerment: 'bg-purple-100 text-purple-700',
  Water: 'bg-cyan-100 text-cyan-700',
};

export default function StoriesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        badge="Real Impact"
        title="Stories of"
        highlight="Change"
        description="Every dollar has a story. Meet the people whose lives have been transformed by our global community of givers."
      />

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              Featured Story
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {featuredStory.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredStory.date}
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {featuredStory.title}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredStory.excerpt}
              </p>

              <div className="prose prose-lg text-gray-600 mb-8">
                {featuredStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
              >
                See Our Full Impact
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Impact Stories
            </h2>
            <p className="text-xl text-gray-600">
              Every project has a story of hope, resilience, and community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[story.category]}`}>
                    {story.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <button className="text-amber-600 font-medium hover:text-amber-700">
                    Read full story →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Next Story
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Your $1 could be the one that makes the difference in someone's life.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Join for $1/month
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
