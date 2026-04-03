'use client';

import { motion } from 'framer-motion';
import { Calendar, Trophy, Rocket, Users, Target, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

const RealJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  const journey = [
    {
      date: "January 2024",
      title: "Started",
      description: "Founded with a vision to build India's premier AI builder ecosystem",
      icon: Calendar,
      gradient: "from-gray-500 to-gray-700",
      status: "completed",
      impact: "Foundation laid"
    },
    {
      date: "February 2024",
      title: "First Hackathon",
      description: "Participated in national hackathon with innovative AI solution",
      icon: Trophy,
      gradient: "from-blue-500 to-purple-500",
      status: "completed",
      impact: "First recognition"
    },
    {
      date: "March 2024",
      title: "First Win",
      description: "Secured top position in regional hackathon competition",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
      status: "completed",
      impact: "Validation achieved"
    },
    {
      date: "April 2024",
      title: "Team Expansion",
      description: "Brought together talented builders and innovators",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
      status: "completed",
      impact: "Team formed"
    },
    {
      date: "May 2024",
      title: "Product Launch",
      description: "Launched first AI product solving real-world problems",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
      status: "completed",
      impact: "Product delivered"
    },
    {
      date: "June 2024",
      title: "Growth Phase",
      description: "Scaling operations, expanding community, and building momentum",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      status: "current",
      impact: "Actively growing"
    }
  ];

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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'current': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 bottom-10 right-10"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-8 glow"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Our
            <br />
            <span className="text-gradient">Journey</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            This is real, not conceptual.
          </motion.p>

          {/* Current Status */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-blue-400 font-semibold text-sm">Currently in Growth Phase</span>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveMilestone(index)}
                onHoverEnd={() => setActiveMilestone(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`relative z-10 w-8 h-8 rounded-full bg-gradient-to-r ${milestone.gradient} flex items-center justify-center glow`}
                >
                  <milestone.icon className="w-4 h-4 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`ml-8 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-left' : 'md:ml-8 md:text-right'
                  }`}
                >
                  <motion.div
                    className="glass rounded-2xl p-6"
                    animate={{ 
                      scale: activeMilestone === index ? 1.02 : 1,
                      borderColor: activeMilestone === index ? 'rgba(255,255,255,0.3)' : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Date and Status */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/60 text-sm">{milestone.date}</span>
                      <span className={`px-2 py-1 rounded-full border text-xs font-semibold ${getStatusColor(milestone.status)}`}>
                        {milestone.status === 'current' ? 'NOW' : milestone.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {milestone.description}
                    </p>

                    {/* Impact */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-green-400 text-xs font-medium">{milestone.impact}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Proof */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">JOURNEY IN PROGRESS</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <p className="text-white/80 text-sm">
              Every milestone achieved through real work and dedication
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealJourney;
