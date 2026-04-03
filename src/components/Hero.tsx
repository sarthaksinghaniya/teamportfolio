'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Sparkles, TrendingUp, Award, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';

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
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        {/* Floating gradient blobs with parallax */}
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 top-1/4 left-1/4"
          style={{ 
            x: useSpring(mousePosition.x * 0.5),
            y: useSpring(mousePosition.y * 0.5)
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 bottom-1/4 right-1/4"
          style={{ 
            x: useSpring(mousePosition.x * -0.3),
            y: useSpring(mousePosition.y * -0.3)
          }}
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div 
          className="gradient-blob w-64 h-64 bg-gradient-to-r from-pink-500 to-blue-500 top-1/2 right-1/3"
          style={{ 
            x: useSpring(mousePosition.x * 0.4),
            y: useSpring(mousePosition.y * 0.4)
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 270, 540]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto stagger-children"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand name with icon */}
        <motion.div 
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
          </motion.div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold heading-premium">
            <span className="text-gradient">
              TechNeekX
            </span>
          </h1>
        </motion.div>
        
        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight heading-premium"
        >
          India's Emerging AI
          <br />
          <span className="text-gradient">Builder Ecosystem</span>
        </motion.h2>
        
        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light subheading-premium"
        >
          We help developers, innovators, and creators build real-world tech, 
          win hackathons, and launch impactful products.
        </motion.p>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white/90"
        >
          {[
            { icon: TrendingUp, text: <AnimatedCounter from={0} to={stats.hackathonsNumber} suffix="+ Hackathons" />, color: "text-green-400" },
            { icon: Award, text: "Top National Rankings", color: "text-yellow-400" },
            { icon: Sparkles, text: <AnimatedCounter from={0} to={stats.aiProductsNumber} suffix="+ AI Products" />, color: "text-purple-400" },
            { icon: Globe, text: "International Recognition", color: "text-blue-400" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={createRipple}
            className="btn-primary btn-ripple magnetic-button glow relative overflow-hidden"
          >
            Join the Core Team
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={createRipple}
            className="btn-secondary btn-ripple magnetic-button relative overflow-hidden"
          >
            Apply to Build With Us
          </motion.button>
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
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
