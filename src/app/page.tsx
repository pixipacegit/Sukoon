'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import HowItWorks from '@/components/HowItWorks';
import ImpactStories from '@/components/ImpactStories';
import Transparency from '@/components/Transparency';
import Community from '@/components/Community';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <HowItWorks />
      <Transparency />
      <ImpactStories />
      <Community />
      <CallToAction />
      <Footer />
    </main>
  );
}
