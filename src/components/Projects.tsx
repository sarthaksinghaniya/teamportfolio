'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "ReviveLab",
      oneLiner: "AI-powered E-waste management solution",
      description: "An innovative AI platform that transforms e-waste management through intelligent sorting, recycling recommendations, and environmental impact tracking.",
      image: "/f3efe143-3bd0-4dc5-8f55-e5fa6c051f61.png",
      tags: ["AI", "SaaS", "Sustainability"],
      gradient: "from-green-500 to-teal-500",
      links: {
        demo: "https://reviber.netlify.app",
        github: "https://github.com/sarthaksinghaniya/reviber"
      },
      status: "Live",
      category: "AI Product"
    },
    {
      title: "HanuBot",
      oneLiner: "Intelligent AI chatbot assistant",
      description: "A sophisticated conversational AI that provides intelligent responses, learns from interactions, and delivers personalized user experiences.",
      image: "/f3efe143-3bd0-4dc5-8f55-e5fa6c051f61.png",
      tags: ["AI", "Chatbot", "NLP"],
      gradient: "from-purple-500 to-pink-500",
      links: {
        demo: "https://revibe-lab.netlify.app",
        github: "https://github.com/sarthaksinghaniya/revibe-lab"
      },
      status: "Beta",
      category: "AI Tool"
    },
    {
      title: "HanuPlanner",
      oneLiner: "AI-powered scheduling and planning",
      description: "Smart scheduling assistant that uses AI to optimize time management, automate planning, and enhance productivity through intelligent recommendations.",
      image: "/ChatGPT Image Sep 7, 2025, 10_41_17 AM.png",
      tags: ["AI", "Productivity", "SaaS"],
      gradient: "from-blue-500 to-cyan-500",
      links: {
        demo: "https://hanu-planner.netlify.app",
        github: "https://github.com/sarthaksinghaniya/Hanu-Planner"
      },
      status: "Development",
      category: "Productivity Tool"
    },
    {
      title: "Hospital Pulse AI",
      oneLiner: "Healthcare operational stress predictor",
      description: "Predictive analytics system that forecasts hospital operational stress and provides preventive recommendations to optimize healthcare delivery.",
      image: "/ChatGPT Image Jan 7, 2026, 10_51_37 AM.png",
      tags: ["Healthcare", "AI", "Analytics"],
      gradient: "from-red-500 to-orange-500",
      links: {
        demo: "https://github.com/ByteQuest-2025/GFGBQ-Team-hopx",
        github: "https://github.com/ByteQuest-2025/GFGBQ-Team-hopx"
      },
      status: "Beta",
      category: "Healthcare AI"
    },
    {
      title: "Path Sarthi",
      oneLiner: "Career roadmap and performance tracker",
      description: "Comprehensive career development platform integrated with LinkedIn and Unstop, providing personalized roadmaps and skill tracking.",
      image: "/d4009897-c04d-4fe5-859d-f145042c645a.png",
      tags: ["Career", "SaaS", "Analytics"],
      gradient: "from-indigo-500 to-purple-600",
      links: {
        demo: "https://path-sarthi--sarthakshubh.replit.app",
        github: "https://github.com/sarthaksinghaniya/Path-Sarthi"
      },
      status: "Beta",
      category: "Career Tool"
    },
    {
      title: "HANU-YOUTH",
      oneLiner: "Global youth empowerment platform",
      description: "Comprehensive platform uniting knowledge, innovation, and communities with gamified learning, hackathons, and AI assistance.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      tags: ["Community", "Education", "AI"],
      gradient: "from-yellow-500 to-orange-500",
      links: {
        demo: "https://68b572cc01f02e00082d1c34--hanuyouthapp.netlify.app/",
        github: "https://github.com/sarthaksinghaniya/hanu-youth"
      },
      status: "Development",
      category: "Community Platform"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-blue-500';
      case 'Development': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Product': return 'from-purple-500 to-pink-500';
      case 'AI Tool': return 'from-blue-500 to-cyan-500';
      case 'Productivity Tool': return 'from-green-500 to-teal-500';
      case 'Healthcare AI': return 'from-red-500 to-orange-500';
      case 'Career Tool': return 'from-indigo-500 to-purple-600';
      case 'Community Platform': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 bottom-10 left-10"
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
            Our
            <span className="text-gradient"> Projects</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            From AI-powered solutions to community platforms, our projects showcase 
            our commitment to innovation and excellence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="card-hover card-tilt rounded-2xl overflow-hidden group relative project-card"
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0"
                style={{ backgroundImage: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})` }}
                animate={{ 
                  opacity: hoveredProject === index ? 0.3 : 0 
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Project Header */}
              <div className="relative p-6 pb-0 z-10">
                {/* Category badge */}
                <motion.div
                  animate={{ 
                    y: hoveredProject === index ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold mb-4`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.category}
                </motion.div>
                
                {/* Title and one-liner */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300"
                  animate={{ 
                    scale: hoveredProject === index ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-white/70 font-medium mb-4"
                  animate={{ 
                    y: hoveredProject === index ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.oneLiner}
                </motion.p>
              </div>

              {/* Project Image */}
              <div className="relative mx-6 mb-6 rounded-xl overflow-hidden z-10">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  animate={{ 
                    scale: hoveredProject === index ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                  animate={{ 
                    opacity: hoveredProject === index ? 0.3 : 0.2 
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Status Badge */}
                <motion.div 
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(project.status)} backdrop-blur-sm`}
                  animate={{ 
                    scale: hoveredProject === index ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.status}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="px-6 pb-6 z-10">
                {/* Description */}
                <motion.p 
                  className="text-white/60 text-sm leading-relaxed mb-4"
                  animate={{ 
                    y: hoveredProject === index ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 glass rounded-full text-white/70 text-xs font-medium group-hover:bg-white/20 transition-colors duration-300"
                      animate={{ 
                        y: hoveredProject === index ? -2 : 0,
                        transition: { delay: tagIndex * 0.05 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Hover overlay with "View Project" */}
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredProject === index ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ 
                    y: hoveredProject === index ? 0 : 20 
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <span>View Project</span>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            View All Projects
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
