'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import MovementPositioning from '@/components/MovementPositioning';
import FOMOLayer from '@/components/FOMOLayer';
import CoreTeam from '@/components/CoreTeam';
import CoreTeamHiring from '@/components/CoreTeamHiring';
import Partnership from '@/components/Partnership';
import Projects from '@/components/Projects';
import CurrentProjects from '@/components/CurrentProjects';
import EliteClub from '@/components/EliteClub';
import ViralLoop from '@/components/ViralLoop';
import CommunityPartnersWall from '@/components/CommunityPartnersWall';
import RealJourney from '@/components/RealJourney';
import TrustElements from '@/components/TrustElements';
import Community from '@/components/Community';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import LiveActivityFeed from '@/components/LiveActivityFeed';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <SocialProof />
      <MovementPositioning />
      <FOMOLayer />
      <CoreTeam />
      <CurrentProjects />
      <CoreTeamHiring />
      <Partnership />
      <Projects />
      <EliteClub />
      <ViralLoop />
      <CommunityPartnersWall />
      <RealJourney />
      <TrustElements />
      <Community />
      <FinalCTA />
      <Footer />
      <LiveActivityFeed />
    </main>
  );
}
