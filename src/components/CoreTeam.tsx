'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Palette, Code, ExternalLink, Award, Target, ArrowRight } from 'lucide-react';

const CoreTeam = () => {
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
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 left-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 right-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Meet the Builders
            <br />
            <span className="text-gradient">Behind TechNeekX</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            A small, high-impact team building the future of AI and innovation.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {/* Founder Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -12, scale: 1.02 }}
            className="glass rounded-3xl p-8 border-2 border-purple-500/30 relative overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-bl-2xl">
              FOUNDER
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 glow">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Sarthak Singhaniya</h3>
                <p className="text-white/70 text-lg mb-4">Founder & AI Engineer</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">12+ Hackathons</span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">AI/ML Engineer</span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">Real Products</span>
                </div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Connect on LinkedIn
                    <ExternalLink size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    View Portfolio
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 glow">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <p className="text-white/80 italic">
                  "Building real-world AI solutions that make a difference."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Open Roles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Chief Technology Officer",
                icon: Code,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Chief Marketing Officer", 
                icon: Briefcase,
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Chief Design Officer",
                icon: Palette,
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((role, index) => (
              <motion.div
                key={role.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center card-hover relative"
              >
                <div className="absolute top-3 right-3 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/30">
                  Open Position
                </div>
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${role.gradient} flex items-center justify-center mb-4 glow`}
                >
                  <role.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
                <p className="text-white/70 text-sm mb-6">
                  We're looking for builders who can take ownership and execute.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Elite Filter */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Not Everyone Gets In</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Builders",
                "Hackathon participants", 
                "AI/Tech creators",
                "Execution-focused individuals"
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Join the Core Team</h3>
            <p className="text-white/70 mb-8">Limited positions • High ownership • Real impact</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Talk to Founder
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
