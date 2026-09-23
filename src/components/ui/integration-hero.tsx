"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const ICONS_ROW1 = [
  "https://cdn.21st.dev/assets/mirror/86/8622b1a4306b413670d9d200591dac7a11d02f70dc525683e44ba14b91737a90.png",
  "https://cdn.21st.dev/assets/mirror/8e/8ee5be289b25fe1868edb80dd7ebd3f8de6f9cc581c1324261bc74146a2bd0e8.png",
  "https://cdn.21st.dev/assets/mirror/b6/b6f94ff4cf6d63ecd9945dd0c6fd806c82afad8cb1f4b350cb0ff9297d6fdb74.png",
  "https://cdn.21st.dev/assets/mirror/8e/8ec92b4cf29e37b05768a5b7027ff6da920ebeec32e16b4063f5b70617fc079d.png",
  "https://cdn.21st.dev/assets/mirror/83/8387574f7ebab08465d1419134bbff0e73bc26ca7220b18d16a264d67f996116.png",
  "https://cdn.21st.dev/assets/mirror/61/61243e3e521df8314819e9929dd5d53d53dc3161545b0fc74c27edf96130190d.png",
  "https://cdn.21st.dev/assets/mirror/a1/a1a606bc6e11ae6714100008321081c24019489862df4243fe436a51adff5ab4.png",
];

const ICONS_ROW2 = [
  "https://cdn.21st.dev/assets/mirror/9e/9eb6ffcfa297dc25aebd90fd7930e9d4ad724d8cd496d4621df28ddc29631d77.png",
  "https://cdn.21st.dev/assets/mirror/e8/e899b6d586e1dc1058236c2f16969da36e3a7bdf126a51153ed723e710995823.png",
  "https://cdn.21st.dev/assets/mirror/e6/e6a8797615bf186b1e2bbe586dc3bb2a0b13a8924ba1ead2a431bd3e7d95dd70.png",
  "https://cdn.21st.dev/assets/mirror/fb/fbae1b43d23969d7c2078467a5431adc4b6b39d88d88a3710ed9b08c51a9fd3d.png",
  "https://cdn.21st.dev/assets/mirror/03/03b8741ba2f1e519cafd7c185ece02da69086370a576ec27d0d014a5864ede2e.png",
  "https://cdn.21st.dev/assets/mirror/d2/d2e9f9dda468cbbf30b63ec62ed81dfbea099e09552632d4be89570a8486ec50.png",
  "https://cdn.21st.dev/assets/mirror/a7/a7e2f5f2c86fba897e233c7a04830382b81b31603b4d1f05a46fcd5c7e4d45c8.png",
];

// Utility to repeat icons enough times for seamless continuous marquee loop
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export interface IntegrationHeroProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
  hideButton?: boolean;
}

export default function IntegrationHero({
  badge,
  title = "Integrate with favorite tools",
  description = "250+ top apps are available to integrate seamlessly with your workflow.",
  buttonText = "Get started",
  buttonHref,
  onButtonClick,
  className = "",
  hideButton = false,
}: IntegrationHeroProps) {
  return (
    <section className={`relative py-24 sm:py-28 overflow-hidden bg-transparent ${className}`}>
      {/* Light subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-5 text-[12px] font-semibold tracking-wide uppercase rounded-full border border-slate-200/90 bg-white/90 text-ink shadow-2xs backdrop-blur-xs font-apple">
            {badge}
          </span>
        )}

        <div className="max-w-3xl mx-auto">
          {typeof title === "string" ? (
            <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
              {title}
            </h2>
          ) : (
            title
          )}
        </div>

        {description && (
          <p className="mt-4 text-[16px] sm:text-[17px] font-apple text-slate max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {!hideButton && buttonText && (
          <div className="mt-8 flex justify-center">
            {buttonHref ? (
              <a href={buttonHref}>
                <Button
                  variant="default"
                  className="px-6 py-2.5 h-auto rounded-full bg-ink text-white font-apple font-medium hover:bg-slate-800 transition shadow-sm hover:shadow"
                >
                  {buttonText}
                </Button>
              </a>
            ) : (
              <Button
                variant="default"
                onClick={onButtonClick}
                className="px-6 py-2.5 h-auto rounded-full bg-ink text-white font-apple font-medium hover:bg-slate-800 transition shadow-sm hover:shadow"
              >
                {buttonText}
              </Button>
            )}
          </div>
        )}

        {/* Continuous Marquee Icon Carousels */}
        <div className="mt-14 overflow-hidden relative pb-4">
          {/* Row 1 - Leftward Infinite Scroll */}
          <div className="animate-scroll-left flex gap-6 sm:gap-8 items-center py-2">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={`r1-${i}`}
                className="h-16 w-16 sm:h-18 sm:w-18 flex-shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-3 hover:scale-108 hover:shadow-md hover:border-apple-blue/50 transition-all duration-300 group"
              >
                <img
                  src={src}
                  alt="tool integration"
                  loading="lazy"
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Rightward Infinite Scroll */}
          <div className="animate-scroll-right flex gap-6 sm:gap-8 items-center mt-5 sm:mt-6 py-2">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={`r2-${i}`}
                className="h-16 w-16 sm:h-18 sm:w-18 flex-shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-3 hover:scale-108 hover:shadow-md hover:border-apple-blue/50 transition-all duration-300 group"
              >
                <img
                  src={src}
                  alt="tool integration"
                  loading="lazy"
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Smooth side fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 sm:w-36 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-24 sm:w-36 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
