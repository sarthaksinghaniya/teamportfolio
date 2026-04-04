'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, UserPlus } from 'lucide-react';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    { name: 'What We Do', href: '#what-we-do' },
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
            ? 'glass shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                <img 
                  src="/file_0000000067647206a22ff5daad754190.png" 
                  alt="TechNeekX Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-gradient">
                TechNeekX
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActiveLink(item.href) ? 'nav-link-active' : ''
                    }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
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
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
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
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
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
                className="btn-primary btn-ripple magnetic-button flex items-center gap-2 px-6 py-2 text-sm"
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
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden glass rounded-2xl mt-2 shadow-xl overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className={`text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-left ${
                        isActiveLink(item.href) ? 'nav-link-active' : ''
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
                
                {/* Mobile Join Button */}
                <div className="px-2 py-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openTeamForm('member')}
                    className="btn-primary btn-ripple w-full flex items-center justify-center gap-2"
                  >
                    <UserPlus size={16} />
                    Join as Member
                  </motion.button>
                </div>
                
                <motion.div 
                  className="flex justify-center space-x-6 pt-4 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/60 hover:text-white transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
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
