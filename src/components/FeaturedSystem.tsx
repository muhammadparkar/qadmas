import { ArrowUpRight } from 'lucide-react';
import BlockFeature from './ui/block-feature';

interface FeaturedSystemProps {
  onExploreClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FeaturedSystem(_props: FeaturedSystemProps = {}) {
  return (
    <section className="py-24 max-w-[1240px] mx-auto px-4 sm:px-6 relative border-t border-slate-200/80">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <a
            href="https://wantikx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-apple-blue/10 hover:bg-apple-blue text-apple-blue hover:text-white text-[12px] font-medium transition-all border border-apple-blue/20 shadow-2xs"
          >
            <span>Powered by Wantik-X CRM &amp; ERP</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
          Software built to solve real <br className="hidden sm:inline" />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            operational bottlenecks
          </span>
        </h2>

        <p className="font-apple text-[16px] sm:text-[17px] text-slate leading-relaxed max-w-2xl mx-auto mt-4">
          We don&apos;t build disposable prototypes. We architect robust software, scalable web platforms, and automated ERPs that your team can run on for the next decade.
        </p>
      </div>

      {/* 21st.dev @uiable/block-feature 6-Card Feature Highlights Grid */}
      <BlockFeature />
    </section>
  );
}
