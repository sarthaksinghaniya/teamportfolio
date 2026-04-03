'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhatWeDo from '@/components/WhatWeDo';
import Projects from '@/components/Projects';
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
      <WhatWeDo />
      <Projects />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
