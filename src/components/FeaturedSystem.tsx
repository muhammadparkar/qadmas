import { ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedSystemProps {
  onExploreClick?: () => void;
}

export default function FeaturedSystem({ onExploreClick }: FeaturedSystemProps) {
  return (
    <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6">
      {/* Premium Dark Surface Card */}
      <div className="border border-hairline-silver rounded-[10px] p-8 md:p-12 relative overflow-hidden bg-gallery-white text-ink shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-geist text-[36px] md:text-[44px] leading-[1.1] font-normal tracking-tight text-ink">
              Empowering Your Business with Cutting-Edge Software Solutions
            </h3>

            <p className="font-geist text-[16px] text-slate leading-[1.5] max-w-[560px]">
              Qadmas Technologies develops bespoke enterprise platforms, automated workflows, and high-converting web applications tailored to your specific business requirements across UAE, Qatar, and international markets.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="bg-pricing-blue text-white hover:bg-[#0077ed] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
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
          <div className="lg:col-span-5 border border-hairline-silver bg-gallery-white p-6 rounded-[8px] text-ink space-y-4 font-mono-geist">
            <div className="flex items-center justify-between border-b border-hairline-silver pb-3">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-apple-blue" />
                <span className="text-[12px] uppercase tracking-wider text-ink">
                  QADMAS_PLATFORM #104
                </span>
              </div>
              <span className="text-[11px] text-apple-blue px-2 py-0.5 border border-hairline-silver rounded-[3px]">
                ACTIVE
              </span>
            </div>

            <div className="space-y-2 text-[12px]">
              <div className="flex justify-between text-slate">
                <span>CLIENT DISPATCH</span>
                <span>STATUS</span>
              </div>
              <p className="text-slate">
                &quot;Wantik-X CRM, Miozoti Technology & Verkiezen Yachts operations streamlined&quot;
              </p>
            </div>

            <div className="bg-studio-mist p-3 rounded-[3px] space-y-1.5 text-[11px] border border-hairline-silver">
              <div className="flex justify-between text-ink">
                <span>Wantik-X CRM Workflow</span>
                <span className="text-apple-blue">100% LIVE</span>
              </div>
              <div className="flex justify-between text-ink">
                <span>Inventory & Fleet Sync</span>
                <span className="text-apple-blue">REAL-TIME</span>
              </div>
              <div className="flex justify-between text-ink">
                <span>User Engagement Boost</span>
                <span className="text-apple-blue">+60% INCREASE</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate pt-1">
              <Sparkles size={13} className="text-apple-blue" />
              <span>Trusted by 50+ business partners globally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
