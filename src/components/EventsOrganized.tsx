'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ExternalLink, Star, TrendingUp, Award, Code, Palette, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventsOrganized = () => {
  const [counters, setCounters] = useState({
    events: 0,
    participants: 0,
    teams: 0
  });

  const events = [
    {
      id: 'frame-by-frame',
      name: 'Frame by Frame',
      type: 'Media / Creative',
      location: 'BBD University',
      description: 'Hands-on media event focused on photography, reels, and content creation',
      participants: '100+',
      tagline: 'Creativity meets execution',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      id: 'innvedx-hackathon',
      name: 'InnVedX Code Hackathon',
      type: 'Hackathon',
      description: 'Large-scale coding hackathon with real-world problem solving',
      participants: '491',
      teams: '100+',
      tagline: 'Built at scale',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: {
        text: 'View Projects',
        link: 'https://github.com/topics/innvedxhackathon'
      }
    },
    {
      id: 'vibe-designing',
      name: 'Vibe Designing',
      type: 'Design Event',
      description: 'UI/UX and creative design-focused competition',
      participants: '100+',
      teams: '50+',
      tagline: 'Design. Build. Express.',
      icon: Palette,
      gradient: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      id: 'kalpathon',
      name: 'Kalpathon 2.0 Hackathon',
      type: 'Hackathon',
      description: 'Fast-paced hackathon focused on innovation and rapid building',
      participants: '250+',
      teams: '80+',
      tagline: 'Build fast. Think big.',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      featured: false
    }
  ];

  useEffect(() => {
    const targetValues = {
      events: 4,
      participants: 800,
      teams: 230
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        events: Math.floor(targetValues.events * progress),
        participants: Math.floor(targetValues.participants * progress),
        teams: Math.floor(targetValues.teams * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Premium Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-8 glow"
          >
            <Calendar className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 heading-premium"
          >
            🎤 Events We've Organized
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
          >
            We don't just plan — we execute at scale.
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
              }}
              className={`relative group ${
                event.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full ${
                event.featured ? 'ring-2 ring-blue-500/30 ring-offset-2 ring-offset-transparent' : ''
              }`}>
                {/* Featured Badge */}
                {event.featured && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full flex items-center gap-1"
                  >
                    <Star className="w-3 h-3" />
                    FLAGSHIP EVENT
                  </motion.div>
                )}

                {/* Event Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${event.gradient}`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                        <p className="text-white/60 text-sm">{event.type}</p>
                      </div>
                    </div>
                    {event.location && (
                      <p className="text-white/60 text-sm mb-4">{event.location}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-6">{event.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-semibold">{event.participants} Participants</span>
                  </div>
                  {event.teams && (
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-green-400" />
                      <span className="text-white font-semibold">{event.teams} Teams</span>
                    </div>
                  )}
                </div>

                {/* Tagline */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 font-medium">{event.tagline}</span>
                </div>

                {/* CTA Button */}
                {event.cta && (
                  <motion.a
                    href={event.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    {event.cta.text}
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border border-white/10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            📊 Our Impact
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.events}+
              </div>
              <p className="text-white/60">Events Organized</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.participants}+
              </div>
              <p className="text-white/60">Participants</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counters.teams}+
              </div>
              <p className="text-white/60">Teams</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                ∞
              </div>
              <p className="text-white/60">Impact</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsOrganized;
