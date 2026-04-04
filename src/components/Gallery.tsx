'use client';

import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Users, Trophy, Code, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const galleryImages = [
    { 
      src: "/gallery/frame-by-frame-1.jpg", 
      title: "Frame by Frame Event",
      category: "Media",
      height: "h-64"
    },
    { 
      src: "/gallery/innvedx-hackathon-1.jpg", 
      title: "InnVedX Hackathon",
      category: "Hackathon",
      height: "h-80"
    },
    { 
      src: "/gallery/vibe-designing-1.jpg", 
      title: "Vibe Designing Competition",
      category: "Design",
      height: "h-56"
    },
    { 
      src: "/gallery/kalpathon-2.jpg", 
      title: "Kalpathon 2.0 Hackathon",
      category: "Hackathon",
      height: "h-72"
    },
    { 
      src: "/gallery/frame-by-frame-2.jpg", 
      title: "Photography Workshop",
      category: "Media",
      height: "h-60"
    },
    { 
      src: "/gallery/innvedx-hackathon-2.jpg", 
      title: "Hackathon Winners",
      category: "Hackathon",
      height: "h-64"
    },
    { 
      src: "/gallery/vibe-designing-2.jpg", 
      title: "UI/UX Design Session",
      category: "Design",
      height: "h-80"
    },
    { 
      src: "/gallery/team-collaboration.jpg", 
      title: "Team Collaboration",
      category: "Community",
      height: "h-56"
    },
    { 
      src: "/gallery/presentation-1.jpg", 
      title: "Project Presentation",
      category: "Hackathon",
      height: "h-72"
    },
    { 
      src: "/gallery/networking-1.jpg", 
      title: "Community Networking",
      category: "Community",
      height: "h-64"
    },
    { 
      src: "/gallery/award-ceremony.jpg", 
      title: "Award Ceremony",
      category: "Event",
      height: "h-56"
    },
    { 
      src: "/gallery/brainstorming-1.jpg", 
      title: "Team Brainstorming",
      category: "Community",
      height: "h-80"
    }
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
    hidden: { opacity: 0, y: 30 },
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
    <>
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
            className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 left-10"
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
              <Camera className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 heading-premium"
            >
              📸 Inside TechNeekX
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
            >
              Real moments from our events, builders, and community.
            </motion.p>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Image */}
                  <div className={`${image.height} relative`}>
                    {/* Blur placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
                    
                    {/* Actual image */}
                    <img
                      src={image.src}
                      alt={image.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Image info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-white/60 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {galleryImages[selectedImage].category}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
