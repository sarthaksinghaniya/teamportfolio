'use client';

import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Award, Code, Rocket, Plus } from 'lucide-react';
import { useState } from 'react';

const CommunityPartnersWall = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.08,
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

  const partners = [
    {
      name: "Tanishq Shukla",
      role: "Innovation & Research",
      avatar: null,
      expertise: ["Genomics", "Bioinformatics", "DNA Analysis"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Anand Kumar Singh",
      role: "Frontend Development",
      avatar: null,
      expertise: ["React Native", "Mobile Dev", "JavaScript Pro"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Saksham Prajapati",
      role: "Backend Systems",
      avatar: null,
      expertise: ["Node.js", "MongoDB", "API Design"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Aman Singh",
      role: "Frontend Development",
      avatar: null,
      expertise: ["Vue.js", "CSS Expert", "Web Design"],
      gradient: "from-teal-500 to-green-500"
    },
    {
      name: "Aishwarya Pandey",
      role: "AI/ML Engineering",
      avatar: null,
      expertise: ["TensorFlow", "PyTorch", "ML Research"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Anoop Tripathi",
      role: "Full Stack Development",
      avatar: null,
      expertise: ["MERN Stack", "GraphQL", "Cloud Dev"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Harshita",
      role: "Backend Systems",
      avatar: null,
      expertise: ["Python", "Django", "PostgreSQL"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Sandeep Gupta",
      role: "Innovation & Strategy",
      avatar: null,
      expertise: ["Business Strategy", "Product Innovation", "Market Research"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Pranshu Dutta Shukla",
      role: "AI/ML Engineering",
      avatar: null,
      expertise: ["Computer Vision", "NLP", "Deep Learning"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Ananya Shukla",
      role: "Frontend Development",
      avatar: null,
      expertise: ["React", "Next.js", "UI/UX"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Ankit Kumar",
      role: "Backend Systems",
      avatar: null,
      expertise: ["Java", "Spring Boot", "Microservices"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Join as Partner",
      role: "Become Part of Ecosystem",
      avatar: null,
      expertise: ["Your Expertise", "Your Impact", "Your Growth"],
      gradient: "from-gray-500 to-gray-700",
      isCTA: true
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
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
        ></motion.div>
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
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            Community
            <span className="text-gradient"> Partners</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Builders, Innovators & Collaborators Driving TechNeekX Forward
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredPartner(index)}
              onHoverEnd={() => setHoveredPartner(null)}
              className={`glass rounded-2xl p-6 text-center card-hover relative overflow-hidden ${
                partner.isCTA ? 'border-2 border-dashed border-white/30' : ''
              }`}
            >
              {/* Gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredPartner === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Avatar */}
              <div className="relative mb-4">
                {partner.avatar ? (
                  <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-white/20">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : partner.isCTA ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                      partner.isCTA ? 'bg-gradient-to-r from-gray-500 to-gray-700' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}
                  >
                    <Plus className="w-8 h-8 text-white" />
                  </motion.div>
                ) : (
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-r ${partner.gradient}`}>
                    <span className="text-white font-bold text-xl">
                      {getInitials(partner.name)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  animate={{ 
                    scale: hoveredPartner === index ? 1.05 : 1 
                  }}
                  className="text-lg font-bold text-white mb-2"
                >
                  {partner.name}
                </motion.h3>
                
                <motion.p 
                  className="text-white/60 text-sm mb-4"
                  animate={{ 
                    y: hoveredPartner === index ? -2 : 0 
                  }}
                >
                  {partner.role}
                </motion.p>
                
                {/* Expertise Tags */}
                {!partner.isCTA && (
                  <div className="flex flex-wrap justify-center gap-1">
                    {partner.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 glass rounded-full text-white/70 text-xs"
                        animate={{ 
                          y: hoveredPartner === index ? -1 : 0,
                          transition: { delay: skillIndex * 0.05 }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* CTA Button for Join Card */}
              {partner.isCTA && (
                <motion.div
                  variants={itemVariants}
                  className="mt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    Join Community
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPartnersWall;
