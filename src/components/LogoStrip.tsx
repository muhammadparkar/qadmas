export default function LogoStrip() {
  const clients = [
    { name: 'Verkiezen Yachts', market: 'UAE · Luxury Marine' },
    { name: 'Miozoti Tech', market: 'UAE · IT Infrastructure' },
    { name: 'Redchilly Trading', market: 'Qatar · Global Trade' },
    { name: 'Gulf Enterprise Group', market: 'Qatar · Logistics' },
    { name: 'Elite Trading', market: 'GCC · Import/Export' },
    { name: 'Miozoti Global', market: 'UAE · Enterprise Systems' },
    { name: 'Verkiezen Fleet', market: 'UAE · Marine Tech' },
  ];

  return (
    <section className="py-7 bg-slate-50/60 border-y border-slate-200/80 overflow-hidden font-apple">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand slider intro divider from hero-01 */}
        <div className="flex justify-center text-center pb-4 relative">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:block h-px w-36 bg-gradient-to-l from-slate-300 to-transparent opacity-80" />
            <p className="text-sm font-normal sm:px-2 px-6 text-slate text-center font-apple">
              Trusted by industry leaders across Qatar, the UAE &amp; India
            </p>
            <div className="hidden md:block h-px w-36 bg-gradient-to-r from-slate-300 to-transparent opacity-80" />
          </div>
        </div>

        {/* Marquee with smooth edge fade */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-14 whitespace-nowrap py-3">
            {clients.concat(clients).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 group cursor-default transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-apple-blue transition-colors" />
                <div className="flex flex-col">
                  <span className="font-apple text-[14px] font-medium text-slate group-hover:text-ink transition-colors">
                    {item.name}
                  </span>
                  <span className="font-apple text-[11px] text-slate/70 group-hover:text-apple-blue transition-colors">
                    {item.market}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
