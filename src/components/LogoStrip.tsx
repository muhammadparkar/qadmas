const clientLogos = Array.from({ length: 26 }, (_, i) => `/logos/clients/logo-${i + 1}.png`);

interface LogoStripProps {
  label?: string;
}

export default function LogoStrip({
  label = "Loved by 1000+ big and small brands around the world",
}: LogoStripProps) {
  return (
    <section className="pt-8 pb-8 sm:pb-12 w-full bg-gallery-white overflow-hidden font-apple select-none pointer-events-none">
      {/* Centered label with flanking divider lines matching reference */}
      {label && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 max-w-4xl mx-auto px-4 mb-10 sm:mb-10 select-none">
          <div className="h-px bg-slate-200/90 flex-1 max-w-[60px] sm:max-w-[160px]" aria-hidden="true" />
          <p className="text-xs sm:text-[13.5px] font-normal text-slate tracking-tight shrink-0 select-none">
            {label}
          </p>
          <div className="h-px bg-slate-200/90 flex-1 max-w-[60px] sm:max-w-[160px]" aria-hidden="true" />
        </div>
      )}

      <div className="relative w-full overflow-hidden flex items-center select-none pointer-events-none">
        {/* Smooth gradient edge masks blending into page background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-gallery-white via-gallery-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-gallery-white via-gallery-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous truly infinite ticker: 2 matching tracks with identical gap and padding */}
        <div className="flex w-max items-center py-1 select-none pointer-events-none">
          {/* Primary track */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12 select-none pointer-events-none">
            {clientLogos.map((logoSrc, index) => (
              <img
                key={`logo-track1-${index}`}
                src={logoSrc}
                alt="Client Partner"
                className="h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain shrink-0 select-none opacity-85 pointer-events-none"
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
            ))}
          </div>

          {/* Cloned secondary track for seamless -100% loop */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12 select-none pointer-events-none" aria-hidden="true">
            {clientLogos.map((logoSrc, index) => (
              <img
                key={`logo-track2-${index}`}
                src={logoSrc}
                alt=""
                className="h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain shrink-0 select-none opacity-85 pointer-events-none"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
