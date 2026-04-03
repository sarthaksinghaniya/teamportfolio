'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Palette, Cpu, ArrowRight, Crown, Users, Rocket } from 'lucide-react';
import { useState } from 'react';

const CoreTeamHiring = () => {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  
  const roles = [
    {
      icon: Crown,
      title: "Co-Founder & CEO",
      subtitle: "Vision & Execution",
      description: "Scale TechNeekX into India's premier AI builder ecosystem. Lead strategy, drive growth, and build the future of tech talent.",
      requirements: [
        "5+ years in tech/startup leadership",
        "Proven track record scaling products",
        "Deep understanding of AI/tech landscape",
        "Strong network in VC/investor ecosystem",
        "Previous founder or senior leadership experience"
      ],
      gradient: "from-orange-500 to-red-500",
      delay: 0.1,
      badge: "CO-FOUNDER OPPORTUNITY",
      highlighted: true
    },
    {
      icon: TrendingUp,
      title: "Chief Marketing Officer",
      subtitle: "Growth & Reach",
      description: "Lead our growth strategy, build brand presence, and scale our builder ecosystem across India.",
      requirements: [
        "Experience in growth marketing",
        "Strong network in tech/startup ecosystem",
        "Understanding of developer communities"
      ],
      gradient: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: Palette,
      title: "Chief Design Officer",
      subtitle: "UI/UX & Brand",
      description: "Shape our visual identity, create exceptional user experiences, and build a world-class design system.",
      requirements: [
        "Strong portfolio in product design",
        "Experience with design systems",
        "Understanding of developer tools"
      ],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Cpu,
      title: "Chief Technology Officer",
      subtitle: "Tech Lead",
      description: "Drive our technical vision, architect scalable solutions, and lead our engineering team.",
      requirements: [
        "Strong technical background",
        "Experience with AI/ML projects",
        "Leadership in tech teams"
      ],
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
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
    <section id="core-team" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/10 to-green-500/10 bottom-10 left-10"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Crown icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 glow"
          >
            <Crown className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            We're Building the
            <span className="text-gradient"> Core Team</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Join the leadership team that's shaping India's AI builder ecosystem.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-white/60"
          >
            <span className="text-sm">Limited positions</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="text-sm">High ownership</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="text-sm">Real impact</span>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredRole(index)}
              onHoverEnd={() => setHoveredRole(null)}
              className={`card-hover card-tilt rounded-2xl p-6 group relative ${
                role.highlighted ? 'border-2 border-orange-500/30' : ''
              }`}
            >
              {/* Badge for highlighted roles */}
              {role.badge && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full z-20">
                  {role.badge}
                </div>
              )}
              
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredRole === index ? 0.15 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${role.gradient} flex items-center justify-center mb-4 glow relative z-10`}
              >
                <role.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300 relative z-10"
                animate={{ 
                  scale: hoveredRole === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {role.title}
              </motion.h3>
              
              {/* Subtitle */}
              <motion.p 
                className="text-white/60 text-sm font-medium mb-3 relative z-10"
                animate={{ 
                  y: hoveredRole === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {role.subtitle}
              </motion.p>
              
              {/* Description */}
              <motion.p 
                className="text-white/70 text-sm leading-relaxed mb-4 relative z-10"
              >
                {role.description}
              </motion.p>

              {/* Requirements */}
              <div className="space-y-2 mb-6 relative z-10">
                {role.requirements.map((req, reqIndex) => (
                  <motion.div
                    key={reqIndex}
                    className="flex items-start gap-2"
                    animate={{ 
                      x: hoveredRole === index ? 2 : 0,
                      transition: { delay: reqIndex * 0.05 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/60 text-xs">{req}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${role.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredRole === index ? 0.2 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Lead?
            </h3>
            <p className="text-white/70 mb-6">
              This is your chance to build something meaningful with a team of passionate builders.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              Apply Now
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTeamHiring;
