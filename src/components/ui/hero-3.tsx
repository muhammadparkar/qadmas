"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

// Reusable Button component styled matching landing page Hero
const ActionButton = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="btn-slide-pill group cursor-pointer inline-flex items-center shadow-lg"
  >
    <span className="relative z-10 transition-all duration-500 font-medium">
      {children}
    </span>
    <span className="arrow-circle">
      <ArrowUpRight size={16} />
    </span>
  </button>
);

// The main hero component styled in unison with landing page Hero
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  onCtaClick,
  images,
  className,
}) => {
  // Quadruple images to guarantee a completely infinite, gapless loop on any screen width
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-[92vh] min-h-[660px] md:h-screen md:min-h-[740px] overflow-hidden bg-gallery-white flex flex-col items-center justify-center text-center px-4 pt-20 pb-8",
        className
      )}
    >
      {/* Soft Ambient Radial Glow from landing page Hero */}
      <div className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[360px] md:h-[460px] bg-gradient-to-r from-sky-100/70 via-white to-sky-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Hero text & CTA Container (Elevated and centered, matching landing page typography) */}
      <div className="z-20 relative flex flex-col items-center max-w-5xl mx-auto -mt-20 sm:-mt-28 md:-mt-36 px-4">
        {/* Tagline (if provided) */}
        {tagline && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 inline-block rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate shadow-xs backdrop-blur-sm"
          >
            {tagline}
          </motion.div>
        )}

        {/* Display Headline with Serif Accent — exact landing page style */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-display font-medium text-ink tracking-tight leading-[1.04] max-w-[980px]"
        >
          {title}
        </motion.h1>

        {/* Subheading — exact landing page style */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-base sm:text-lg font-normal max-w-2xl text-slate leading-relaxed mt-4 sm:mt-6"
        >
          {description}
        </motion.p>

        {/* Action Button — exact landing page style, blended right over the top edge of the marquee */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-8 relative z-30"
        >
          <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee: Positioned at bottom and blended vertically behind CTA */}
      <div className="absolute bottom-0 left-0 w-full h-[36%] md:h-[44%] overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_80%,transparent_100%)]">
        {/* Soft edge gradient fades for seamless horizontal blending */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-gallery-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-gallery-white to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee-hero-infinite flex gap-4 md:gap-5 w-max will-change-transform pt-2"
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-44 sm:h-56 md:h-64 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${(index % images.length) + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md border border-slate-200/50 select-none pointer-events-none"
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
