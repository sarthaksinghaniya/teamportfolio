'use client';

import { motion } from 'framer-motion';
import { Calendar, Trophy, Rocket, Users, Target, TrendingUp, Award, Code, Zap, Globe, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const RealJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journey = [
    {
      date: "August 2025",
      title: "Started",
      description: "Founded TechNeekX with a vision to build a strong AI + builder ecosystem for students",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
      status: "completed",
      impact: "Foundation initiated"
    },
    {
      date: "September 2025",
      title: "Initial Build Phase",
      description: "Started working on core ideas, early projects, and system direction",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      status: "completed",
      impact: "Execution began"
    },
    {
      date: "October 2025",
      title: "First Projects Developed",
      description: "Built initial AI and web-based projects solving real-world problems",
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      status: "completed",
      impact: "Proof of work established"
    },
    {
      date: "November 2025",
      title: "Hackathons & Recognition",
      description: "Participated in hackathons and gained early validation",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      status: "completed",
      impact: "Validation started"
    },
    {
      date: "December 2025",
      title: "Team Formation",
      description: "Connected with developers, builders, and early contributors",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500",
      status: "completed",
      impact: "Core network formed"
    },
    {
      date: "January 2026",
      title: "Product Expansion",
      description: "Expanded into multiple domains like AI, healthcare, fintech, and productivity",
      icon: Globe,
      gradient: "from-teal-500 to-blue-500",
      status: "completed",
      impact: "Ecosystem expanding"
    },
    {
      date: "February 2026",
      title: "Community Growth",
      description: "Started shaping TechNeekX into a structured student platform",
      icon: TrendingUp,
      gradient: "from-pink-500 to-rose-500",
      status: "completed",
      impact: "Community activated"
    },
    {
      date: "March 2026",
      title: "Platform Development",
      description: "Built website, onboarding systems, and community infrastructure",
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      status: "completed",
      impact: "System building phase"
    },
    {
      date: "April 2026",
      title: "Growth Phase",
      description: "Scaling operations, expanding reach, onboarding builders, and increasing impact",
      icon: Star,
      gradient: "from-cyan-500 to-blue-500",
      status: "now",
      impact: "Actively growing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 right-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 left-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      {/* Premium Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-8 glow"
        >
          <Award className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 heading-premium"
        >
          🚀 Our Journey
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
        >
          Built through execution, learning, and real-world building — not just ideas.
        </motion.p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"
          style={{
            scaleY: Math.min(1, Math.max(0, (scrollY + 500) / 2000))
          }}
        ></motion.div>

        {/* Timeline Items */}
        <div className="relative space-y-12">
          {journey.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="relative flex items-center"
              onMouseEnter={() => setActiveMilestone(index)}
              onMouseLeave={() => setActiveMilestone(null)}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-white transform -translate-x-1/2 z-10 ${
                  milestone.status === 'now' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse' 
                    : `bg-gradient-to-r ${milestone.gradient}`
                }`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <milestone.icon className="w-3 h-3 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`ml-20 md:ml-0 md:pr-20 md:text-right ${
                  index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left md:ml-auto'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`glass rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  milestone.status === 'now' ? 'ring-2 ring-cyan-500/30 ring-offset-2 ring-offset-transparent' : ''
                }`}>
                  {/* Date and Status */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">{milestone.date}</h3>
                    {milestone.status === 'now' && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full"
                      >
                        NOW
                      </motion.div>
                    )}
                    {milestone.status === 'completed' && (
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                        COMPLETED
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-3">{milestone.title}</h4>
                  
                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-4">{milestone.description}</p>
                  
                  {/* Impact Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-purple-300 font-medium">{milestone.impact}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.div
          variants={itemVariants}
          className="glass rounded-3xl p-8 max-w-4xl mx-auto border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            JOURNEY IN PROGRESS
          </h2>
          <p className="text-lg text-white/80">
            Every milestone is backed by real execution, learning, and consistency.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RealJourney;
