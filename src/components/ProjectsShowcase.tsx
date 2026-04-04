'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, Users, Award, Zap, Heart, Brain, DollarSign, Calendar, Music, Recycle, BookOpen, Bot, Globe } from 'lucide-react';
import { useState } from 'react';

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('all');

  // Projects data from project.md
  const projects = [
    {
      id: 'flowx',
      title: 'FLOWX',
      status: 'In Progress',
      category: 'Advanced AI System',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Building a next-gen intelligent system focused on scalable AI workflows and automation',
      features: [
        'Modular architecture for extensibility',
        'Real-time processing capabilities',
        'Production-grade deployment'
      ],
      techStack: ['Python', 'FastAPI', 'Node.js', 'AI/ML', 'System Design'],
      link: null,
      github: 'https://github.com/teamtechneekx',
      impact: 'Platform Engineering'
    },
    {
      id: 'fracture-vision',
      title: 'FRACTURE VISION AI',
      status: 'Live',
      category: 'Healthcare AI',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'AI-powered fracture detection system using medical imaging',
      features: [
        'Assists doctors in identifying bone fractures',
        'High accuracy detection',
        'Reduces diagnosis time and improves clinical decision-making'
      ],
      techStack: ['Python', 'OpenCV', 'Deep Learning', 'Streamlit'],
      link: 'https://fracturevision-ai.streamlit.app/',
      github: 'https://github.com/teamtechneekx',
      impact: 'Healthcare Innovation'
    },
    {
      id: 'hospital-pulse',
      title: 'HOSPITAL PULSE AI',
      status: 'Live',
      category: 'Healthcare AI',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      description: 'Predicts emergency department surges, ICU demand, and patient load',
      features: [
        'Enables proactive hospital resource allocation',
        'Focused on interpretable AI for real-world adoption',
        'Predictive analytics for healthcare'
      ],
      techStack: ['Python', 'ML Models', 'React', 'Data Analytics'],
      link: 'https://hopx.netlify.app',
      github: 'https://github.com/teamtechneekx',
      impact: 'Healthcare Analytics'
    },
    {
      id: 'investment-copilot',
      title: 'INVESTMENT AI COPILOT',
      status: 'In Development',
      category: 'FinTech AI',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-driven financial assistant for investment analysis and decision support',
      features: [
        'Provides insights and recommendations',
        'Risk evaluation capabilities',
        'Designed as a co-pilot for smarter investing'
      ],
      techStack: ['Python', 'AI/ML', 'APIs', 'Data Visualization'],
      link: null,
      github: 'https://github.com/teamtechneekx',
      impact: 'Financial Technology'
    },
    {
      id: 'reviber',
      title: 'REVIBER',
      status: 'Live',
      category: 'Music Platform',
      icon: Music,
      color: 'from-purple-500 to-indigo-500',
      description: 'Interactive platform for music-based engagement and user experience',
      features: [
        'Modern UI/UX with immersive interaction',
        'Music engagement platform',
        'User experience focused design'
      ],
      techStack: ['React', 'JavaScript', 'UI/UX Design'],
      link: 'https://reviber.netlify.app',
      github: 'https://github.com/teamtechneekx',
      impact: 'Digital Experience'
    },
    {
      id: 'revive-lab',
      title: 'REVIVE LAB',
      status: 'Live',
      category: 'Sustainability',
      icon: Recycle,
      color: 'from-green-500 to-teal-500',
      description: 'AI-powered platform for e-waste innovation and repurposing ideas',
      features: [
        'Provides guided learning and practical solutions',
        'Encourages sustainable tech practices',
        'E-waste innovation platform'
      ],
      techStack: ['Python', 'AI', 'Web Development'],
      link: 'https://revibe-lab.netlify.app',
      github: 'https://github.com/teamtechneekx',
      impact: 'Sustainability'
    },
    {
      id: 'hanu-planner',
      title: 'HANU PLANNER',
      status: 'Live',
      category: 'Productivity',
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
      description: 'AI-based timetable generator for students and institutions',
      features: [
        'Generates optimized schedules dynamically',
        'Designed to solve real academic planning problems',
        'Student-focused productivity tool'
      ],
      techStack: ['JavaScript', 'AI Logic', 'Web App'],
      link: 'https://hanuplanner.netlify.app',
      github: 'https://github.com/teamtechneekx',
      impact: 'Education Technology'
    },
    {
      id: 'hanu-youth',
      title: 'HANU YOUTH',
      status: 'Live',
      category: 'EdTech',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-500',
      description: 'Gamified learning platform for hackathons, AI/ML, and coding',
      features: [
        'Provides updates, engagement, and skill-building ecosystem',
        'Gamified learning experience',
        'Hackathon and coding focus'
      ],
      techStack: ['React', 'Node.js', 'Gamification Logic'],
      link: 'https://hanuyouthapp.netlify.app/',
      github: 'https://github.com/teamtechneekx',
      impact: 'Community Education'
    },
    {
      id: 'hani-bai',
      title: 'HANI BAI',
      status: 'In Progress',
      category: 'AI Assistant',
      icon: Bot,
      color: 'from-cyan-500 to-blue-500',
      description: 'Personal AI assistant focused on automation and interaction',
      features: [
        'Designed to integrate multiple workflows',
        'Single intelligent system',
        'Automation and interaction focus'
      ],
      techStack: ['NLP', 'Python', 'AI Systems'],
      link: null,
      github: 'https://github.com/teamtechneekx',
      impact: 'AI Innovation'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'healthcare', name: 'Healthcare AI', icon: Heart },
    { id: 'fintech', name: 'FinTech', icon: DollarSign },
    { id: 'edtech', name: 'EdTech', icon: BookOpen },
    { id: 'platform', name: 'Platform', icon: Zap },
    { id: 'sustainability', name: 'Sustainability', icon: Recycle }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase().includes(filter.toLowerCase())
      );

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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 bottom-10 left-10"
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
          {/* Premium Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-8 glow"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 heading-premium"
          >
            Real-World
            <br />
            <span className="text-gradient">AI Innovation</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
          >
            Building production-ready AI systems and full-stack applications that solve real problems across healthcare, finance, education, and community development.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">10+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">5+ Industries</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Production-Ready</span>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'glass text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-400'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-400'
                        : 'bg-blue-400'
                    }`}></div>
                    {project.status}
                  </div>
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{project.category}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{project.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span className="text-xs text-purple-300 font-medium">{project.impact}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex-1 btn-secondary flex items-center justify-center gap-2 text-sm ${
                      !project.link ? 'w-full' : ''
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    {project.link ? 'Code' : 'View Project'}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of builders, innovators, and problem-solvers. Let's create impactful solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/teamtechneekx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Explore All Projects
              </motion.a>
              <motion.a
                href="https://forms.gle/B58bPKQufVLQ71zJ6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join as Member
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
