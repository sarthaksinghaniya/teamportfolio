'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Palette, Code, ExternalLink, Award, Target, ArrowRight, UserPlus, Mail, Phone, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { stats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';

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

  const teamMembers = [
    {
      name: "Nikhil Yadav",
      role: "Chief Design Officer (CDO)",
      description: "Designing intuitive, high-impact UI/UX experiences that define the TechNeekX brand.",
      badge: "Core Team",
      image: "/nikhil.jpeg",
      gradient: "from-purple-500 to-pink-500",
      contact: {
        email: "seemayadav97950@gmail.com",
        phone: "7524884044",
        linkedin: "https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/",
        github: "https://github.com/sarthaksinghaniya"
      }
    },
    {
      name: "Anshuman Soni",
      role: "Chief Marketing Officer (CMO)",
      description: "Driving growth, reach, and strategic partnerships to scale TechNeekX globally.",
      badge: "Core Team",
      image: "/image.png",
      gradient: "from-green-500 to-teal-500",
      contact: {
        email: "anshuman70k@gmail.com",
        phone: "7007659042",
        linkedin: "https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/",
        github: "https://github.com/sarthaksinghaniya"
      }
    },
    {
      name: "Hardik Talwar",
      role: "Chief Business Officer (CBO)",
      description: "Building business strategy, sponsorships, and high-value collaborations.",
      badge: "Core Team",
      image: "/hardik.jpeg",
      gradient: "from-blue-500 to-cyan-500",
      contact: {
        email: "hardiktalwar2006@gmail.com",
        phone: "7706859594",
        linkedin: "https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/",
        github: "https://github.com/sarthaksinghaniya"
      }
    }
  ];

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
          {/* Founder Spotlight */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass rounded-3xl p-8 border-2 border-orange-500/30 relative overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-bl-2xl">
              FOUNDER
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative w-48 h-48 mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-2xl overflow-hidden glow"
                  >
                    <Image
                      src="/sarthak.jpeg"
                      alt="Sarthak Singhaniya"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Sarthak Singhaniya</h3>
                <p className="text-white/70 text-lg mb-4">Founder & AI Engineer</p>
                <p className="text-white/80 text-lg mb-6 italic">
                  "Building AI-driven products and leading TechNeekX as a next-gen builder ecosystem."
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">
                    <AnimatedCounter from={0} to={stats.hackathonsNumber} suffix="+ Hackathons" />
                  </span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">AI/ML Engineer</span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">Product Builder</span>
                </div>
                
                {/* Founder Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/60" />
                    <a href="mailto:sarthaksinghaniya789@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                      sarthaksinghaniya789@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white/60" />
                    <a href="tel:6387860126" className="text-white/60 hover:text-white text-sm transition-colors">
                      6387860126
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/sarthaksinghaniya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://sarthaksinghaniya.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Connect on LinkedIn
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href="https://sarthaksinghaniya.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    View Portfolio
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Team Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center card-hover relative"
              >
                <div className="absolute top-3 right-3 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/30">
                  {member.badge}
                </div>
                
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-2xl overflow-hidden glow"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-white/60 text-sm mb-3">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      {member.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                    </a>
                    <a
                      href={member.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Open Slot Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center card-hover relative border-2 border-orange-500/30"
            >
              <div className="absolute top-3 right-3 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/30">
                Limited Spot
              </div>
              
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center glow"
                >
                  <UserPlus className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">You?</h3>
              <p className="text-white/60 text-sm mb-3">Core Team Position</p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We're looking for one more high-impact builder ready to take ownership and execute.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
              >
                Apply Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
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
