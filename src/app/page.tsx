'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import MovementPositioning from '@/components/MovementPositioning';
import FOMOLayer from '@/components/FOMOLayer';
import CoreTeamHiring from '@/components/CoreTeamHiring';
import Partnership from '@/components/Partnership';
import Projects from '@/components/Projects';
import EliteClub from '@/components/EliteClub';
import ViralLoop from '@/components/ViralLoop';
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
      <MovementPositioning />
      <FOMOLayer />
      <CoreTeamHiring />
      <Partnership />
      <Projects />
      <EliteClub />
      <ViralLoop />
      <TrustElements />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}
