'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhyJoin from '@/components/WhyJoin';
import CoreTeamHiring from '@/components/CoreTeamHiring';
import Partnership from '@/components/Partnership';
import Projects from '@/components/Projects';
import TrustElements from '@/components/TrustElements';
import Community from '@/components/Community';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyJoin />
      <CoreTeamHiring />
      <Partnership />
      <Projects />
      <TrustElements />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
