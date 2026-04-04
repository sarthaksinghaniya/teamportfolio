'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import MovementPositioning from '@/components/MovementPositioning';
import FOMOLayer from '@/components/FOMOLayer';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import EventsOrganized from '@/components/EventsOrganized';
import Gallery from '@/components/Gallery';
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
import useSectionAnimation from '@/hooks/useSectionAnimation';

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default function Home() {
  useSectionAnimation(); // Initialize section animations
  
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Loader />
      <Navbar />
      <section id="hero" className="section-animate">
        <Hero />
      </section>
      <section id="social-proof" className="section-animate">
        <SocialProof />
      </section>
      <section id="about" className="section-animate">
        <MovementPositioning />
      </section>
      <section id="fomo" className="section-animate">
        <FOMOLayer />
      </section>
      <section id="projects-showcase" className="section-animate">
        <ProjectsShowcase />
      </section>
      <section id="events" className="section-animate">
        <EventsOrganized />
      </section>
      <section id="gallery" className="section-animate">
        <Gallery />
      </section>
      <section id="core-team" className="section-animate">
        <CoreTeam />
      </section>
      <section id="projects" className="section-animate">
        <CurrentProjects />
        <Projects />
      </section>
      <section id="hiring" className="section-animate">
        <CoreTeamHiring />
      </section>
      <section id="partners" className="section-animate">
        <Partnership />
      </section>
      <section id="elite" className="section-animate">
        <EliteClub />
      </section>
      <section id="invite" className="section-animate">
        <ViralLoop />
      </section>
      <section id="community" className="section-animate">
        <CommunityPartnersWall />
        <Community />
      </section>
      <section id="journey" className="section-animate">
        <RealJourney />
      </section>
      <section id="trust" className="section-animate">
        <TrustElements />
      </section>
      <section id="contact" className="section-animate">
        <FinalCTA />
      </section>
      <Footer />
      <LiveActivityFeed />
    </main>
  );
}
