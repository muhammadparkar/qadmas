"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Props interface for the component
export interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  images: string[];
  className?: string;
}

// Reusable Button component styled with Apple-grade polish
const ActionButton = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="btn-slide-pill group cursor-pointer inline-flex items-center"
  >
    <span className="relative z-10 transition-all duration-500">
      {children}
    </span>
    <span className="arrow-circle">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </span>
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  onCtaClick,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless continuous loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full max-w-full overflow-hidden bg-gallery-white flex flex-col items-center justify-between text-center px-4 pt-32 sm:pt-36 pb-8",
        className
      )}
    >
      {/* Ambient background glow - scaled for mobile */}
      <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[680px] h-[220px] sm:h-[340px] bg-gradient-to-tr from-sky-100/50 via-teal-50/40 to-indigo-100/40 blur-2xl sm:blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto my-auto w-full px-2 sm:px-4">
        {/* Tagline (if provided) */}
        {tagline && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-3 sm:mb-4 text-[12px] sm:text-[13px] font-medium text-slate tracking-wide"
          >
            {tagline}
          </motion.div>
        )}

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="text-[28px] sm:text-[42px] md:text-display font-medium text-ink tracking-tight leading-[1.1] sm:leading-[1.04] max-w-3xl"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.3 }}
          className="mt-4 sm:mt-6 max-w-2xl text-[15px] sm:text-[17px] text-slate font-apple leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.45 }}
          className="mt-6 sm:mt-8"
        >
          <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee - Hardware Accelerated CSS & Edge Gradient Masks */}
      <div className="relative w-full max-w-full min-w-0 h-44 sm:h-56 md:h-64 mt-8 sm:mt-12 overflow-hidden">
        {/* Soft edge gradient fades - zero CSS mask-image bugs on WebKit / iOS Safari */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-gallery-white via-gallery-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-gallery-white via-gallery-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee flex items-center gap-4 sm:gap-6 py-2 w-max will-change-transform"
          style={{ animationDuration: '32s' }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-38 sm:h-50 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-slate-200/70"
            >
              <img
                src={src}
                alt={`Digital marketing showcase ${index + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
