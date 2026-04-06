'use client';

import Image from 'next/image';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Camera } from 'lucide-react';

type GalleryImage = {
  src: string;
  caption: string;
  featured?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: '/gallery/main.png', caption: 'Highlights from TechNeekX', featured: true },
  { src: '/gallery/IMG_0150.JPG.jpeg', caption: 'Late-night building energy', featured: true },
  { src: '/gallery/IMG_0143.JPG.jpeg', caption: 'First hackathon smiles' },
  { src: '/gallery/IMG_0144.JPG.jpeg', caption: 'Live debugging on stage' },
  { src: '/gallery/image1.png', caption: 'Community deep-dives' },
  { src: '/gallery/image2.png', caption: 'Product design sketches' },
  { src: '/gallery/gal5.jpeg', caption: 'Brainstorm wall' },
  { src: '/gallery/IMG-2.jpg.jpeg', caption: 'Celebrating the ship', featured: true },
  { src: '/gallery/judge.jpeg', caption: 'Judging the finalist demos' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.28 PM.jpeg', caption: 'Core team sync before stage' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.29 PM.jpeg', caption: 'Backstage checklist' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.51 PM.jpeg', caption: 'Crowd settling in' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.52 PM.jpeg', caption: 'Session kick-off energy' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM (1).jpeg', caption: 'Mentors on the floor' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM.jpeg', caption: 'Builders presenting' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM (1).jpeg', caption: 'Live feedback moments' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM.jpeg', caption: 'Evening wrap-up applause' },
];

const Gallery = () => {
  const orderedImages = useMemo(() => galleryImages, []);
  const [active, setActive] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const lastScrollRef = useRef(0);
  const touchStartY = useRef<number | null>(null);

  // Tilt on hover for active card
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXSpring = useSpring(tiltX, { stiffness: 120, damping: 12 });
  const tiltYSpring = useSpring(tiltY, { stiffness: 120, damping: 12 });

  // Idle auto-advance
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!isInteracting) {
        setActive((prev) => (prev + 1) % orderedImages.length);
      }
    }, 5000);
    return () => window.clearInterval(id);
  }, [isInteracting, orderedImages.length]);

  const clampIndex = (value: number) => {
    const len = orderedImages.length;
    return (value + len) % len;
  };

  const goNext = () => setActive((prev) => clampIndex(prev + 1));
  const goPrev = () => setActive((prev) => clampIndex(prev - 1));

  // Wheel navigation (debounced)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastScrollRef.current < 450) return;
    lastScrollRef.current = now;
    setIsInteracting(true);
    if (e.deltaY > 0) goNext();
    else goPrev();
    setTimeout(() => setIsInteracting(false), 600);
  };

  // Touch swipe for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null) return;
    const delta = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(delta) > 40) {
      setIsInteracting(true);
      delta > 0 ? goPrev() : goNext();
      setTimeout(() => setIsInteracting(false), 600);
    }
    touchStartY.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(y * -10);
    tiltY.set(x * 10);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const perspective = 1000;

  return (
    <>
      <section
        className="py-20 relative overflow-hidden"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0">
          <motion.div
            className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 top-10 right-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 bottom-10 left-10"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-6 glow"
            >
              <Camera className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 heading-premium">📸 Inside TechNeekX</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed subheading-premium">
              Immersive, solitaire-style gallery — scroll or swipe to bring each moment forward.
            </p>
          </div>

          <div
            className="relative h-[70vh] sm:h-[75vh] flex items-center justify-center"
            style={{ perspective: `${perspective}px` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {orderedImages.map((image, index) => {
              const offset = ((index - active) % orderedImages.length + orderedImages.length) % orderedImages.length;
              const depth = offset === 0 ? 0 : Math.min(offset, 4);
              const isActive = offset === 0;

              const translateZ = isActive ? 180 : Math.max(60 - depth * 30, -120);
              const translateY = isActive ? 0 : depth * 20;
              const scale = isActive ? 1 : 1 - depth * 0.08;
              const opacity = isActive ? 1 : Math.max(0.2, 0.85 - depth * 0.15);
              const blur = isActive ? '0px' : `${depth * 2}px`;
              const tilt = isActive ? 0 : depth * 1.2;

              const glowColor =
                image.src.includes('gal') || image.src.includes('main') ? 'rgba(236, 72, 153, 0.35)' : 'rgba(59,130,246,0.35)';

              return (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.95, z: -150 }}
                  animate={{
                    opacity,
                    scale,
                    y: translateY,
                    z: translateZ,
                    rotateZ: isActive ? 0 : tilt * 0.6,
                    filter: `blur(${blur})`,
                  }}
                  transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                  className="absolute w-full max-w-xl rounded-[28px] overflow-hidden shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    rotateX: isActive ? tiltXSpring : tilt,
                    rotateY: isActive ? tiltYSpring : tilt * 0.4,
                    zIndex: orderedImages.length - depth,
                    boxShadow: isActive
                      ? `0 25px 60px -20px rgba(0,0,0,0.45), 0 0 45px 0 ${glowColor}`
                      : '0 20px 50px -25px rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 rounded-[28px] overflow-hidden border border-white/10">
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      sizes="(min-width: 1024px) 480px, 90vw"
                      priority={index < 2}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-white text-lg font-semibold drop-shadow-lg">{image.caption}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
