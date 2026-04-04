'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

type ImageSize = 'large' | 'medium' | 'small';

type GalleryImage = {
  src: string;
  caption: string;
  featured?: boolean;
  size: ImageSize;
};

const sizeClassMap: Record<ImageSize, string> = {
  large: 'col-span-2 row-span-2',
  medium: 'col-span-1 row-span-2',
  small: 'col-span-1 row-span-1',
};

const galleryImages: GalleryImage[] = [
  { src: '/gallery/main.png', caption: 'Highlights from TechNeekX', featured: true, size: 'large' },
  { src: '/gallery/IMG_0150.JPG.jpeg', caption: 'Late-night building energy', featured: true, size: 'large' },
  { src: '/gallery/IMG_0143.JPG.jpeg', caption: 'First hackathon smiles', size: 'medium' },
  { src: '/gallery/IMG_0144.JPG.jpeg', caption: 'Live debugging on stage', size: 'small' },
  { src: '/gallery/IMG_20260404_17034516.jpeg', caption: 'Hands-on workshops in flow', featured: true, size: 'large' },
  { src: '/gallery/IMG_20260404_17045021.jpeg', caption: 'Team sync before demo', size: 'medium' },
  { src: '/gallery/image1.png', caption: 'Community deep-dives', size: 'medium' },
  { src: '/gallery/image2.png', caption: 'Product design sketches', size: 'small' },
  { src: '/gallery/gal5.jpeg', caption: 'Brainstorm wall', size: 'medium' },
  { src: '/gallery/IMG-2.jpg.jpeg', caption: 'Celebrating the ship', featured: true, size: 'small' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [hovered, setHovered] = useState<number | null>(null);
  const [mountFallbackShown, setMountFallbackShown] = useState(false);

  const orderedImages = useMemo(() => galleryImages, []);

  const handleLoad = (index: number) => {
    setLoaded((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const open = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    setSelectedIndex((current) => {
      if (current === null) return null;
      if (direction === 'prev') return current === 0 ? orderedImages.length - 1 : current - 1;
      return current === orderedImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex]);

  // Fallback to show images even if onLoad is slow (e.g., heavy files or throttled dev server)
  useEffect(() => {
    const timer = window.setTimeout(() => setMountFallbackShown(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 top-10 right-10"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 bottom-10 left-10"
            animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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

          <div className="relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
            >
              {orderedImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  variants={itemVariants}
                  className={`${sizeClassMap[image.size]} relative group cursor-pointer`}
                  onClick={() => open(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transform: `translateY(${Math.sin(index * 0.5) * 8}px)` }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                      priority={index < 2}
                      loading={index < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                      className={`object-cover transition-all duration-400 ${
                        loaded.has(index) || mountFallbackShown ? 'opacity-100' : 'opacity-0'
                      } ${hovered === index ? 'scale-110' : 'scale-100'}`}
                      onLoad={() => handleLoad(index)}
                      placeholder="empty"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-white font-medium text-sm">{image.caption}</p>
                    </motion.div>
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

      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative">
              <motion.img
                src={orderedImages[selectedIndex].src}
                alt={orderedImages[selectedIndex].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-lg font-medium">{orderedImages[selectedIndex].caption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
