'use client';

import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Users, Trophy, Code, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const galleryImages = [
    { 
      src: "/gallery/frame-by-frame-1.jpg", 
      caption: "Late night building 🔥",
      featured: true,
      size: "large"
    },
    { 
      src: "/gallery/innvedx-hackathon-1.jpg", 
      caption: "First hackathon energy",
      featured: false,
      size: "medium"
    },
    { 
      src: "/gallery/vibe-designing-1.jpg", 
      caption: "Real builders. Real work.",
      featured: false,
      size: "small"
    },
    { 
      src: "/gallery/kalpathon-2.jpg", 
      caption: "Moments that matter",
      featured: true,
      size: "large"
    },
    { 
      src: "/gallery/frame-by-frame-2.jpg", 
      caption: "Creativity unleashed",
      featured: false,
      size: "medium"
    },
    { 
      src: "/gallery/innvedx-hackathon-2.jpg", 
      caption: "Building the future",
      featured: false,
      size: "small"
    },
    { 
      src: "/gallery/vibe-designing-2.jpg", 
      caption: "Where ideas come alive",
      featured: true,
      size: "large"
    },
    { 
      src: "/gallery/team-collaboration.jpg", 
      caption: "Together we rise",
      featured: false,
      size: "medium"
    },
    { 
      src: "/gallery/presentation-1.jpg", 
      caption: "Innovation in action",
      featured: false,
      size: "small"
    },
    { 
      src: "/gallery/networking-1.jpg", 
      caption: "Community vibes only",
      featured: true,
      size: "large"
    },
    { 
      src: "/gallery/award-ceremony.jpg", 
      caption: "Celebrating wins together",
      featured: false,
      size: "medium"
    },
    { 
      src: "/gallery/brainstorming-1.jpg", 
      caption: "Magic happens here",
      featured: false,
      size: "small"
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
        staggerChildren: 0.08,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const getImageSize = (size: string) => {
    switch(size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'medium': return 'col-span-1 row-span-2';
      case 'small': return 'col-span-1 row-span-1';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 top-10 right-10"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div 
            className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 bottom-10 left-10"
            animate={{ 
              scale: [1.3, 1, 1.3],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]"></div>
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

          {/* Dynamic Masonry + Floating Layout */}
          <div className="relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${getImageSize(image.size)} relative group cursor-pointer`}
                  onClick={() => openLightbox(index)}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 1,
                    zIndex: 10
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transform: `translateY(${Math.sin(index * 0.5) * 8}px)`
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                    {/* Blur placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
                    
                    {/* Actual image */}
                    <img
                      src={image.src}
                      alt={image.caption}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                      } ${hoveredImage === index ? 'scale-110' : 'scale-100'}`}
                      onLoad={() => handleImageLoad(index)}
                    />
                    
                    {/* Hover overlay with caption */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredImage === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-white font-medium text-sm">
                        {image.caption}
                      </p>
                    </motion.div>

                    {/* Featured badge */}
                    {image.featured && (
                      <motion.div
                        className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✨
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <motion.img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-lg font-medium">
                  {galleryImages[selectedImage].caption}
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
