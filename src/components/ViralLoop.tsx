'use client';

import { motion } from 'framer-motion';
import { Users, Share2, Rocket, ArrowRight, Plus, X, Trophy } from 'lucide-react';
import { useState } from 'react';

const ViralLoop = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [emails, setEmails] = useState(['']);

  const addEmail = () => {
    if (emails.length < 5) {
      setEmails([...emails, '']);
    }
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-green-500/15 to-blue-500/15 top-10 right-10"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Share Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 mb-8 glow"
          >
            <Share2 className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Build With Your
            <br />
            <span className="text-gradient"> Network</span>
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-12"
          >
            Invite your friends and teammates. Build together, win together.
          </motion.p>

          {/* Team Builder */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Form Your Team</h3>
            
            {/* Team Size Selector */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-6 h-6 text-white/60" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTeamSize(size)}
                    className={`w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                      teamSize === size
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                        : 'glass text-white/60 hover:text-white'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Email Inputs */}
            <div className="space-y-3 mb-6">
              {emails.map((email, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <input
                    type="email"
                    placeholder={`Team member ${index + 1} email`}
                    value={email}
                    onChange={(e) => updateEmail(index, e.target.value)}
                    className="flex-1 px-4 py-3 glass rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {emails.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeEmail(index)}
                      className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Add Member Button */}
            {emails.length < 5 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addEmail}
                className="w-full py-3 glass rounded-xl text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                Add Team Member
              </motion.button>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Rocket className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Build Together</h4>
              <p className="text-white/60 text-sm">Collaborate on projects as a team</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Win Together</h4>
              <p className="text-white/60 text-sm">Compete as a team in hackathons</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Grow Together</h4>
              <p className="text-white/60 text-sm">Build your network and skills</p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Invite Your Team
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowRight size={20} />
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm mt-8"
          >
            Teams get priority access to exclusive opportunities and resources
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ViralLoop;
