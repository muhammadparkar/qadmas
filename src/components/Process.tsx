export default function Process() {
  const specs = [
    { label: 'PROJECTS DELIVERED', value: '100+', detail: 'Web, mobile & enterprise apps' },
    { label: 'GLOBAL CLIENT COUNTRIES', value: '15+', detail: 'UAE, Qatar, India, USA & Europe' },
    { label: 'YEARS EXCELLENCE', value: '3+', detail: 'Continuous digital innovation' },
    { label: 'SYSTEM UPTIME SLA', value: '99.9%', detail: '24/7 Managed IT support' },
  ];

  return (
    <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6">
      {/* Full Width War Room Spec Banner */}
      <div className="bg-studio-mist border border-hairline-silver rounded-[20px] p-8 md:p-12 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-hairline-silver pb-8">
          <div>
            <h3 className="font-geist text-[32px] md:text-[36px] text-ink font-normal leading-tight">
              Measurable results for <span className="text-apple-blue">modern businesses</span>
            </h3>
          </div>
          <div className="font-mono-geist text-[12px] text-slate uppercase tracking-wider">
            OFFICES // UAE · QATAR · INDIA
          </div>
        </div>

        {/* 4 Metric Spec Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="space-y-2 border-l border-hairline-silver pl-4">
              <div className="font-mono-geist text-[11px] uppercase text-slate tracking-tight">
                {spec.label}
              </div>
              <div className="font-geist text-[44px] text-apple-blue font-normal tracking-[-0.025em] leading-none">
                {spec.value}
              </div>
              <div className="font-geist text-[13px] text-slate">
                {spec.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
