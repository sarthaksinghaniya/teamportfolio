'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0s' }}></div>
        <div className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 top-1/3 right-1/4" style={{ animationDelay: '2s' }}></div>
        <div className="gradient-blob w-64 h-64 bg-gradient-to-r from-pink-500/20 to-blue-500/20 bottom-1/3 left-1/4" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA Content */}
          <div className="glass rounded-3xl p-12 md:p-16">
            {/* Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center glow"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build
              <br />
              <span className="text-gradient">With Us?</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our community of innovators, creators, and builders. 
              Together, we're shaping the future of technology, one project at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4 glow"
              >
                <Sparkles className="w-5 h-5" />
                Join TechNeekX
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Schedule a Call
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>Join 500+ members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Start building today</span>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/50 mt-8 text-sm"
          >
            © 2024 TechNeekX. Building the future, together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
