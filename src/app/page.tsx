'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MembershipForm from '@/components/MembershipForm';
import CommunityWall from '@/components/CommunityWall';
import BirthdayArchive from '@/components/BirthdayArchive';
import TransparencyDashboard from '@/components/TransparencyDashboard';
import Stories from '@/components/Stories';
import GiveMore from '@/components/GiveMore';
import Footer from '@/components/Footer';

// Page transition wrapper component
function PageSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <AnimatePresence>
      <main className="relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Hero - Full viewport cinematic section */}
        <Hero />

        {/* Membership Form - Join the movement */}
        <PageSection>
          <MembershipForm />
        </PageSection>

        {/* Stories - Impact narratives */}
        <PageSection>
          <Stories />
        </PageSection>

        {/* Community Wall - Living mosaic of members */}
        <PageSection>
          <CommunityWall />
        </PageSection>

        {/* Birthday Archive - Scrapbook style celebrations */}
        <PageSection>
          <BirthdayArchive />
        </PageSection>

        {/* Transparency Dashboard - Interactive globe */}
        <PageSection>
          <TransparencyDashboard />
        </PageSection>

        {/* Give More - Additional donations */}
        <PageSection>
          <GiveMore />
        </PageSection>

        {/* Footer */}
        <Footer />
      </main>
    </AnimatePresence>
  );
}
