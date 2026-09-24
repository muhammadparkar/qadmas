const clientLogos = Array.from({ length: 26 }, (_, i) => `/logos/clients/logo-${i + 1}.png`);

export default function LogoStrip() {
  // Duplicating for seamless infinite scroll (0% -> -50%)
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="py-6 sm:py-7 bg-slate-50/60 border-y border-slate-200/80 overflow-hidden font-apple">
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Smooth gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous ticker with no text, close and even spacing */}
        <div 
          className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap py-1"
          style={{ animationDuration: '40s' }}
        >
          {marqueeItems.map((logoSrc, index) => (
            <img
              key={index}
              src={logoSrc}
              alt="Client Partner"
              className="h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain shrink-0 select-none opacity-85 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
