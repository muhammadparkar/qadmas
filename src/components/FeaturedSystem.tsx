import { ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedSystemProps {
  onExploreClick?: () => void;
}

export default function FeaturedSystem({ onExploreClick }: FeaturedSystemProps) {
  return (
    <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6">
      {/* Premium Dark Surface Card */}
      <div className="border border-[#1b294b] rounded-[10px] p-8 md:p-12 relative overflow-hidden bg-[#080d1f] text-[#eeeeee] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
              <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
              <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
                FEATURED SOLUTION // ENTERPRISE ERP & CRM
              </span>
            </div>

            <h3 className="font-geist text-[36px] md:text-[44px] leading-[1.1] font-normal tracking-tight text-[#eeeeee]">
              Empowering Your Business with Cutting-Edge Software Solutions
            </h3>

            <p className="font-geist text-[16px] text-[#8292b4] leading-[1.5] max-w-[560px]">
              Qadmas Technologies develops bespoke enterprise platforms, automated workflows, and high-converting web applications tailored to your specific business requirements across UAE, Qatar, and international markets.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="bg-[#00C5C8] text-[#050a1a] hover:bg-[#24dcdb] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>
              {onExploreClick && (
                <button
                  onClick={onExploreClick}
                  className="btn-ghost text-[14px] px-5 py-3 rounded-[3px] inline-flex items-center gap-2"
                >
                  <span>Get a Free Consultation</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Monospaced Qadmas Platform Overview Card */}
          <div className="lg:col-span-5 border border-[#1b294b] bg-[#050a1a] p-6 rounded-[8px] text-[#eeeeee] space-y-4 font-mono-geist">
            <div className="flex items-center justify-between border-b border-[#1b294b] pb-3">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-[#00C5C8]" />
                <span className="text-[12px] uppercase tracking-wider text-[#eeeeee]">
                  QADMAS_PLATFORM #104
                </span>
              </div>
              <span className="text-[11px] text-[#00C5C8] px-2 py-0.5 border border-[#1b294b] rounded-[3px]">
                ACTIVE
              </span>
            </div>

            <div className="space-y-2 text-[12px]">
              <div className="flex justify-between text-[#8292b4]">
                <span>CLIENT DISPATCH</span>
                <span>STATUS</span>
              </div>
              <p className="text-[#b0c0e0]">
                &quot;Wantik-X CRM, Miozoti Technology & Verkiezen Yachts operations streamlined&quot;
              </p>
            </div>

            <div className="bg-[#0c1228] p-3 rounded-[3px] space-y-1.5 text-[11px] border border-[#1b294b]">
              <div className="flex justify-between text-[#eeeeee]">
                <span>Wantik-X CRM Workflow</span>
                <span className="text-[#00C5C8]">100% LIVE</span>
              </div>
              <div className="flex justify-between text-[#eeeeee]">
                <span>Inventory & Fleet Sync</span>
                <span className="text-[#00C5C8]">REAL-TIME</span>
              </div>
              <div className="flex justify-between text-[#eeeeee]">
                <span>User Engagement Boost</span>
                <span className="text-[#00C5C8]">+60% INCREASE</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#8292b4] pt-1">
              <Sparkles size={13} className="text-[#00C5C8]" />
              <span>Trusted by 50+ business partners globally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
