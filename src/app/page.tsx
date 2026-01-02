import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Heart, Users, Globe, ArrowRight, Droplets, BookOpen, Stethoscope } from 'lucide-react';

const highlights = [
  {
    icon: Droplets,
    title: 'Clean Water',
    description: '45 wells built, 5,200+ lives touched',
    color: 'bg-blue-500',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: '3,800+ children supported',
    color: 'bg-amber-500',
  },
  {
    icon: Stethoscope,
    title: 'Medical Aid',
    description: '4,100+ patients treated',
    color: 'bg-rose-500',
  },
];

const steps = [
  { number: '01', title: 'Sign Up', description: 'Quick registration with just your name, email, and birthday.' },
  { number: '02', title: 'Give $1', description: 'Your small contribution joins thousands of others.' },
  { number: '03', title: 'Get Celebrated', description: 'Receive birthday wishes from our global family.' },
  { number: '04', title: 'See Impact', description: 'Track exactly where your dollar goes.' },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Quick Stats Bar */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">$4.5M</div>
              <div className="text-gray-400">Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">14,203</div>
              <div className="text-gray-400">Lives Touched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">82+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12,847</div>
              <div className="text-gray-400">Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              100% Transparent
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Your Dollar Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every contribution is tracked and reported. See the real impact of our global community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
            >
              View Full Impact Report
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple. Transparent. Impactful.
            </h2>
            <p className="text-xl text-gray-600">
              Four easy steps to become part of the movement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-amber-500 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
            >
              Learn More About How It Works
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of members who are proving that peace is achievable, one dollar at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Join for $1/month
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors"
            >
              Read Impact Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
