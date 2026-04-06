'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { openTeamForm } from '@/config/teamForms';

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
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,141,0.08),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.08),transparent_35%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/60 mb-6"
          >
            <Rocket className="w-8 h-8 text-[var(--accent-primary)]" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 heading-premium"
          >
            Ready to build, learn, and grow?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Get the playbook, partners, and community to ship faster than ever. Join TechNeekX and move from idea to launch with a crew that’s building alongside you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('member')}
              className="btn-primary btn-ripple w-full sm:w-auto px-7 py-3"
            >
              Start with the community
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('coreTeam')}
              className="btn-secondary btn-ripple w-full sm:w-auto px-7 py-3 flex items-center gap-2"
            >
              Lead a build sprint
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 text-slate-500 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></div>
              <span className="text-sm font-medium">Early mover advantage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]"></div>
              <span className="text-sm font-medium">Limited cohort slots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <span className="text-sm font-medium">Hands-on build partners</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
