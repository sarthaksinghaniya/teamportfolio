'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type TeamLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
};

export type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  tagline?: string;
  links?: TeamLinks;
  className?: string;
};

export default function TeamCard({
  name,
  role,
  imageSrc,
  tagline,
  links,
  className,
}: TeamCardProps) {
  const hasLinks = Boolean(links?.github || links?.linkedin || links?.email);

  return (
    <motion.article
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={[
        'w-full min-h-[280px] rounded-2xl bg-white p-5 shadow-md',
        'border border-slate-200/80',
        'transition-transform transition-shadow duration-300 ease-out',
        'md:hover:-translate-y-2 md:hover:scale-[1.02] md:hover:shadow-lg',
        'touch-manipulation select-none',
        className ?? '',
      ].join(' ')}
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 text-sm text-slate-600">{role}</p>

        {tagline ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{tagline}</p>
        ) : null}

        {hasLinks ? (
          <div className="mt-4 flex items-center gap-2">
            {links?.github ? (
              <motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 active:bg-slate-50 active:text-slate-900 sm:hover:bg-slate-50 sm:hover:text-slate-900"
                aria-label={`${name} GitHub`}
              >
                <Github size={18} />
              </motion.a>
            ) : null}
            {links?.linkedin ? (
              <motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 active:bg-slate-50 active:text-slate-900 sm:hover:bg-slate-50 sm:hover:text-slate-900"
                aria-label={`${name} LinkedIn`}
              >
                <Linkedin size={18} />
              </motion.a>
            ) : null}
            {links?.email ? (
              <motion.a
                href={`mailto:${links.email}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 active:bg-slate-50 active:text-slate-900 sm:hover:bg-slate-50 sm:hover:text-slate-900"
                aria-label={`Email ${name}`}
              >
                <Mail size={18} />
              </motion.a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
