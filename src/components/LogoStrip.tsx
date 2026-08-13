export default function LogoStrip() {
  const logos = [
    { name: 'VERKIEZEN YACHTS', type: 'LUXURY YACHTING UAE' },
    { name: 'MIOZOTI TECH', type: 'SOFTWARE INFRASTRUCTURE' },
    { name: 'REDCHILLY TRADING', type: 'GLOBAL TRADING SOLUTIONS' },
    { name: 'QATAR ENTERPRISE', type: 'ENTERPRISE TECH QATAR' },
    { name: 'DUBAI LOGISTICS', type: 'SUPPLY CHAIN SOLUTIONS' },
    { name: 'INDIA TECH HUBS', type: 'OFFSHORE DEVELOPMENT' },
    { name: 'MIOZOTI GLOBAL', type: 'DIGITAL TRANSFORMATION' },
    { name: 'VERKIEZEN GROUP', type: 'YACHT FLEET MANAGEMENT' },
  ];

  return (
    <section className="py-16 bg-[#050a1a] overflow-hidden border-y border-[#1b294b]">
      <div className="max-w-[1200px] mx-auto px-6 mb-6 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C5C8]" />
          <span className="font-mono-geist text-[11px] uppercase text-[#8292b4] tracking-[0.15em]">
            TRUSTED BY 50+ LEADING COMPANIES IN UAE, QATAR & GLOBALLY
          </span>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right subtle edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050a1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050a1a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#8292b4] hover:text-[#00C5C8] transition-colors duration-150 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b294b]" />
              <span className="font-mono-geist text-[16px] tracking-widest font-normal">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
