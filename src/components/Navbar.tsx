'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, UserPlus } from 'lucide-react';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Update active section based on scroll position
      const sections = ['hero', 'social-proof', 'what-we-do', 'projects', 'community'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects-showcase' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=teamtechneekx.netlify.app', label: 'Email' },
  ];

  // Smooth scroll handler
  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Check if link is active
  const isActiveLink = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

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

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: useScrollProgress() }}
      />
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-4"
            >
                <div className="w-12 h-12 overflow-hidden rounded-xl shadow-lg relative">
                  <Image 
                    src="/file_0000000067647206a22ff5daad754190.png" 
                    alt="TechNeekX Logo" 
                    fill
                    sizes="48px"
                    className="object-cover"
                    priority
                  />
                </div>
              <h1 className="text-2xl font-bold text-gradient">
                TechNeekX
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-16 flex items-center space-x-12">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                className={`relative text-slate-700 hover:text-slate-900 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActiveLink(item.href) 
                    ? 'text-slate-900 bg-white/80' 
                    : 'hover:bg-white/60'
                }`}
              >
                    {item.name}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: isActiveLink(item.href) ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right side actions */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              
              {/* Join CTA Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openTeamForm('member')}
                className="btn-primary btn-ripple magnetic-button flex items-center gap-2 px-8 py-3 text-sm font-medium shadow-lg"
              >
                <UserPlus size={16} />
                Join as Member
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-0 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />

                <motion.div
                  ref={mobileMenuRef}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-gray-900/95 to-gray-900/80 border-l border-white/10 shadow-2xl px-6 py-8 flex flex-col space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 overflow-hidden rounded-lg relative">
                        <Image
                          src="/file_0000000067647206a22ff5daad754190.png"
                          alt="TechNeekX Logo"
                          fill
                          sizes="40px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <span className="text-lg font-semibold text-white">TechNeekX</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.05 }}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-base font-semibold ${
                          isActiveLink(item.href)
                            ? 'bg-white/10 text-white'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-white/70 hover:text-white p-3 rounded-xl bg-white/5"
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => openTeamForm('member')}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
                    >
                      Join as Member
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

// Helper hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent / 100);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return progress;
}

export default Navbar;
