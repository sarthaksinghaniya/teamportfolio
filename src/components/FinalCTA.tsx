'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const FinalCTA = () => {
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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 bottom-1/3 right-1/3"
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
        <motion.div 
          className="gradient-blob w-64 h-64 bg-gradient-to-r from-pink-500/20 to-blue-500/20 top-1/3 left-1/3"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 270, 540]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-8 glow"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Join Before
            <br />
            <span className="text-gradient">Everyone Else Does</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed subheading-premium"
          >
            Be part of the early builders shaping TechNeekX
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('member')}
              className="btn-primary btn-ripple magnetic-button glow relative overflow-hidden"
            >
              Join as Member
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('coreTeam')}
              className="btn-secondary btn-ripple magnetic-button relative overflow-hidden"
            >
              Apply for Core Team
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 text-white/60 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <span className="text-sm font-medium">Early mover advantage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-sm font-medium">Limited opportunity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-sm font-medium">First-mover benefits</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
