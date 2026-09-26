const clientLogos = Array.from({ length: 26 }, (_, i) => `/logos/clients/logo-${i + 1}.png`);

export default function LogoStrip() {
  return (
    <section className="py-5 sm:py-7 bg-slate-50/60 border-y border-slate-200/80 overflow-hidden font-apple select-none pointer-events-none">
      <div className="relative w-full overflow-hidden flex items-center select-none pointer-events-none">
        {/* Smooth gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous truly infinite ticker: 2 matching tracks with identical gap and padding */}
        <div className="flex w-max items-center py-1 select-none pointer-events-none">
          {/* Primary track */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10 select-none pointer-events-none">
            {clientLogos.map((logoSrc, index) => (
              <img
                key={`logo-track1-${index}`}
                src={logoSrc}
                alt="Client Partner"
                className="h-7 sm:h-9 w-auto max-w-[120px] sm:max-w-[150px] object-contain shrink-0 select-none opacity-80 pointer-events-none"
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
            ))}
          </div>

          {/* Cloned secondary track for seamless -100% loop */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10 select-none pointer-events-none" aria-hidden="true">
            {clientLogos.map((logoSrc, index) => (
              <img
                key={`logo-track2-${index}`}
                src={logoSrc}
                alt=""
                className="h-7 sm:h-9 w-auto max-w-[120px] sm:max-w-[150px] object-contain shrink-0 select-none opacity-80 pointer-events-none"
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
