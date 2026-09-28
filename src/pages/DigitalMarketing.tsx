import { useState } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { AnimatedMarqueeHero } from '../components/ui/hero-3';
import GalleryHoverCarousel from '../components/ui/gallery-hover-carousel';
import TimelineBlock01 from '../components/ui/timeline-01';

const MARKETING_SHOWCASE_IMAGES = [
  "https://cdn.21st.dev/assets/mirror/9c/9c0892e59c262cc1da34c88d977221da3f36aaef35ede7924d66b80c219be979.jpg",
  "https://cdn.21st.dev/assets/mirror/cb/cb5e5ebf2a894b2cd0e47b41b1fc76a3021ca1e2d2164e68aedca123cd33144f.jpg",
  "https://cdn.21st.dev/assets/mirror/98/989f6e3fb1763ee781695ca8471c7b5c34ee8162b73cb966a692df7183434dd6.jpg",
  "https://cdn.21st.dev/assets/mirror/d4/d42e2bf7d2616d0f8b7133f77efbc40bfbd042fbe5dd5e2ae3bb0b0cd5bf0b00.jpg",
  "https://cdn.21st.dev/assets/mirror/34/34ec840fc286ece83ac48705cb38c8b7bfae31022d3869530edad1e1b1305933.jpg",
  "https://cdn.21st.dev/assets/mirror/3a/3ad7469aaf0ee239cd4a79d5cbd089e88ee36def81eff12b76288139985a8bea.jpg",
  "https://cdn.21st.dev/assets/mirror/82/82d335fc097e30d74dc1b664327e735c0c2c01f807575623c72e2379f3bb3ae6.jpg",
  "https://cdn.21st.dev/assets/mirror/d5/d55bd9d62a8a40170fdb1bab434888bb28c9f11cf7d20bd6dcbe3befe8077abe.jpg",
];

const CAROUSEL_FEATURE_ITEMS = [
  {
    id: "item-1",
    title: "Multi-Platform Social Sprints",
    summary:
      "Consistent, aesthetic editorial calendars across Instagram, LinkedIn, TikTok, and X that build audience trust.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: "item-2",
    title: "Cinema-Grade Short-Form Video",
    summary:
      "High-retention vertical reels and motion graphics tailored for organic virality and paid social reach.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: "item-3",
    title: "Master Brand Identity Systems",
    summary:
      "Bespoke typography, curated palettes, and bilingual Arabic/English brand guidelines built for regional authority.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: "item-4",
    title: "Commercial Pitch & Tender Decks",
    summary:
      "Executive company profiles, presentation decks, and collateral engineered to win high-value corporate deals.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: "item-5",
    title: "Performance Audience Scaling",
    summary:
      "Targeted paid social advertising campaigns scaling customer acquisition across Qatar, the UAE, and India.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=600&auto=format&fit=crop",
  },
];

export default function DigitalMarketing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white w-full max-w-full overflow-x-clip">
      <Navbar />

      <main className="w-full max-w-full overflow-x-clip">
        {/* Animated Marquee Hero Section */}
        <AnimatedMarqueeHero
          title={
            <>
              High-Impact Digital Marketing &amp;{' '}
              <br className="hidden sm:inline" />
              <span className="text-apple-blue font-serif-accent font-normal italic">
                Acquisition Systems.
              </span>
            </>
          }
          description="We combine engineering rigor with brand prestige: end-to-end social media management and bespoke brand identity systems structured for ambitious operations across Qatar, the UAE, and India."
          ctaText="Start Your Growth Campaign"
          onCtaClick={() => setIsModalOpen(true)}
          images={MARKETING_SHOWCASE_IMAGES}
        />

        {/* Gallery Hover Carousel Section */}
        <GalleryHoverCarousel
          heading="Featured Growth &amp; Creative Showcase"
          subheading="Explore our live creative executions, brand identity boards, and high-converting campaign systems."
          items={CAROUSEL_FEATURE_ITEMS}
        />


        {/* How we execute campaigns timeline */}
        <div className="py-8 sm:py-14 border-t border-slate-200/80 w-full bg-gallery-white">
          <TimelineBlock01 />
        </div>

        {/* Enterprise CTA Section */}
        <section className="py-20 px-6 w-full bg-gallery-white overflow-hidden">
          <div className="max-w-[1240px] mx-auto">
            <div className="rounded-3xl bg-[#0b0f17] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="hidden sm:block absolute -right-20 -bottom-20 w-[420px] h-[420px] bg-apple-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-[30px] sm:text-[42px] font-semibold tracking-tight leading-tight">
                Ready to elevate your brand presence and social lead velocity?
              </h2>

              <p className="text-[16px] text-slate-300 leading-relaxed font-apple">
                Book a direct strategy consultation with our creative directors. We’ll audit your current social channels, review your brand positioning, and draft a custom growth sprint.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-slide-pill group cursor-pointer"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Schedule Strategy Sprint
                  </span>
                  <span className="arrow-circle">
                    <ArrowUpRight size={15} />
                  </span>
                </button>

                <a
                  href="https://wa.me/97471328520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white text-[14px] font-medium transition-colors"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-apple-blue" />
                  <span>100% Vector &amp; Creative IP Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-apple-blue" />
                  <span>Dedicated Senior Creative Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Digital Marketing"
      />
    </div>
  );
}
