import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Membership from '@/components/Membership';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Membership />
      <Impact />
      <Footer />
    </main>
  );
}
