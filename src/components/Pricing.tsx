import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleGetPricing = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: 'STANDARD',
      price: '680 QR',
      period: '/ month',
      desc: 'Standard pre-built ERP & CRM system for growing operational workflows.',
      packageName: 'Standard Package (680 QR / mo)',
      popular: false,
    },
    {
      name: 'PROFESSIONAL',
      price: '850 QR',
      period: '/ month',
      desc: 'Advanced ERP & CRM platform with multi-warehouse tracking & analytics.',
      packageName: 'Professional Package (850 QR / mo)',
      popular: true,
    },
    {
      name: 'ENTERPRISE',
      price: '2,500 QR',
      period: '/ month',
      desc: 'Full-scale dedicated enterprise software, multi-region ERP & 24/7 SLA.',
      packageName: 'Enterprise Package (2,500 QR / mo)',
      popular: false,
    },
  ];

  return (
    <>
      <section id="pricing" className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
            <span className="font-mono-geist text-[12px] uppercase text-[#8292b4] tracking-[0.15em]">
              OUR PRE-BUILT ERP/CRM SOLUTIONS
            </span>
          </div>
          <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight mb-4">
            Transparent Pre-Built Packages (QR)
          </h2>
          <p className="font-geist text-[16px] text-[#8292b4]">
            Scale your digital capabilities with clear deliverables, zero hidden fees, and guaranteed SLAs in Qatari Riyal (QR).
          </p>
        </div>

        {/* 3 Dark Surface Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border border-[#1b294b] rounded-[10px] p-8 bg-[#080d1f] text-[#eeeeee] flex flex-col justify-between relative overflow-hidden transition-all duration-150 hover:border-[#00C5C8] ${
                plan.popular ? 'border-2 border-[#00C5C8] bg-[#0c1228]' : ''
              }`}
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono-geist text-[12px] uppercase tracking-wider text-[#00C5C8] font-medium">
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className="font-mono-geist text-[11px] uppercase bg-[#00C5C8] text-[#050a1a] font-medium px-2 py-0.5 rounded-[3px]">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-geist text-[38px] font-normal tracking-tight text-[#eeeeee]">
                      {plan.price}
                    </span>
                    <span className="font-geist text-[15px] text-[#8292b4]">
                      {plan.period}
                    </span>
                  </div>
                  <p className="font-geist text-[14px] text-[#8292b4] mt-2 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-[#1b294b]">
                <button
                  onClick={() => handleGetPricing(plan.packageName)}
                  className="w-full bg-[#00C5C8] text-[#050a1a] hover:bg-[#24dcdb] font-geist text-[14px] font-medium py-3 rounded-[3px] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Get Pricing</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedPackage}
      />
    </>
  );
}
