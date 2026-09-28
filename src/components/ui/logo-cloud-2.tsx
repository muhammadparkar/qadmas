import React from "react";

export interface LogoItem {
  name: string;
  svg?: React.ReactNode;
  iconSrc?: string;
  href?: string;
}

export interface LogoCloud2Props {
  title?: React.ReactNode;
  subtitle?: string;
  logos?: LogoItem[];
  className?: string;
}

// Plus crosshair marker positioned at grid intersections
const PlusIntersection = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute w-3.5 h-3.5 flex items-center justify-center text-slate-300 pointer-events-none select-none z-10 ${className}`}
    aria-hidden="true"
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-300 stroke-current"
    >
      <path d="M6 1V11M1 6H11" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  </div>
);

export const LogoCloud2: React.FC<LogoCloud2Props> = ({
  title = (
    <>
      Companies we{" "}
      <span className="font-semibold text-ink">collaborate</span> with.
    </>
  ),
  subtitle,
  logos = [],
  className = "",
}) => {
  return (
    <section className={`w-full bg-gallery-white py-14 sm:py-20 overflow-hidden font-apple ${className}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-slate leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Logo Grid with Clean Borders and '+' Intersections */}
        <div className="relative max-w-5xl mx-auto">
          {/* Border framed grid container */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-slate-200/80 relative">
            {logos.map((logo, index) => {
              // Precise borders: strictly no right border on Figma (index 3) or right edge of mobile (index 1 & 3)
              const borderClass =
                index === 0
                  ? "border-r border-b md:border-b-0 border-slate-200/80"
                  : index === 1
                  ? "border-b md:border-b-0 md:border-r border-slate-200/80"
                  : index === 2
                  ? "border-r md:border-r border-slate-200/80"
                  : "border-r-0 border-b-0";

              const content = (
                <div className="h-32 sm:h-44 px-6 py-6 flex items-center justify-center group transition-colors duration-300 hover:bg-white/60">
                  {logo.svg ? (
                    <div className="w-auto max-w-[220px] flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                      {logo.svg}
                    </div>
                  ) : logo.iconSrc ? (
                    <img
                      src={logo.iconSrc}
                      alt={logo.name}
                      className="h-8 sm:h-10 w-auto max-w-[140px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-slate-700 tracking-tight group-hover:text-ink transition-colors">
                      {logo.name}
                    </span>
                  )}
                </div>
              );

              return (
                <div key={index} className={`relative ${borderClass}`}>
                  {logo.href ? (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue rounded-lg"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}

            {/* Desktop '+' Crosshair Intersections between columns (at 25%, 50%, 75%) */}
            <PlusIntersection className="hidden md:flex top-0 left-1/4 -translate-x-1/2 -translate-y-1/2" />
            <PlusIntersection className="hidden md:flex top-0 left-2/4 -translate-x-1/2 -translate-y-1/2" />
            <PlusIntersection className="hidden md:flex top-0 left-3/4 -translate-x-1/2 -translate-y-1/2" />
            <PlusIntersection className="hidden md:flex bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2" />
            <PlusIntersection className="hidden md:flex bottom-0 left-2/4 -translate-x-1/2 translate-y-1/2" />
            <PlusIntersection className="hidden md:flex bottom-0 left-3/4 -translate-x-1/2 translate-y-1/2" />

            {/* Mobile '+' Crosshairs at the intersection of the 4 quadrants */}
            <PlusIntersection className="md:hidden top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <PlusIntersection className="md:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <PlusIntersection className="md:hidden bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud2;
