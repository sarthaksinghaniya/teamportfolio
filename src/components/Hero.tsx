'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Sparkles, TrendingUp, Award, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]));
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]));
  
  // Cursor parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: (x - 0.5) * 20, y: (y - 0.5) * 20 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background with soft highlights */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,141,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.1),transparent_32%),radial-gradient(circle_at_50%_70%,rgba(15,23,42,0.06),transparent_45%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto stagger-children"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand + micro headline */}
        <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="w-7 h-7 text-[var(--accent-primary)] mr-3" />
          </motion.div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            India’s Builder Operating System
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight heading-premium"
        >
          Ship faster, win hackathons, and turn ideas into launch-ready products with TechNeekX.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We’re the student-led network that pairs hands-on build sprints, battle-tested playbooks, and a community of top operators so you can go from concept to shipped in weeks—not months.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openTeamForm('member')}
            className="btn-primary w-full sm:w-auto px-7 py-3"
          >
            Start your TechNeekX journey
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary w-full sm:w-auto px-7 py-3 flex items-center gap-2"
          >
            See how we win
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center items-center mb-4"
        >
          {[
            { icon: TrendingUp, text: <AnimatedCounter from={0} to={stats.hackathonsNumber} suffix="+ hackathons conquered" /> },
            { icon: Award, text: "Built by top student developers" },
            { icon: Sparkles, text: <AnimatedCounter from={0} to={stats.aiProductsNumber} suffix="+ AI launches" /> },
            { icon: Globe, text: "Teams across India" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl px-4 py-3 flex items-center gap-3 justify-center text-left shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <item.icon className="w-5 h-5 text-[var(--accent-secondary)]" />
              <span className="text-sm font-semibold text-[var(--text-primary)]">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#social-proof"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
