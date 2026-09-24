import { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Video, 
  Palette, 
  FileText, 
  TrendingUp, 
  Layers, 
  Target, 
  BarChart3, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Play,
  Volume2,
  Globe2,
  Check,
  Activity
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { AnimatedMarqueeHero } from '../components/ui/hero-3';
import GalleryHoverCarousel from '../components/ui/gallery-hover-carousel';

const MARKETING_SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
];

const CAROUSEL_FEATURE_ITEMS = [
  {
    id: "item-1",
    title: "Multi-Platform Social Sprints",
    summary:
      "Consistent, aesthetic editorial calendars across Instagram, LinkedIn, TikTok, and X that build audience trust.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "item-2",
    title: "Cinema-Grade Short-Form Video",
    summary:
      "High-retention vertical reels and motion graphics tailored for organic virality and paid social reach.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "item-3",
    title: "Master Brand Identity Systems",
    summary:
      "Bespoke typography, curated palettes, and bilingual Arabic/English brand guidelines built for regional authority.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "item-4",
    title: "Commercial Pitch & Tender Decks",
    summary:
      "Executive company profiles, presentation decks, and collateral engineered to win high-value corporate deals.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "item-5",
    title: "Performance Audience Scaling",
    summary:
      "Targeted paid social advertising campaigns scaling customer acquisition across Qatar, the UAE, and India.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function DigitalMarketing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<'social' | 'branding'>('social');

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      <main>
        {/* Animated Marquee Hero Section */}
        <AnimatedMarqueeHero
          title={
            <>
              High-Impact Digital Marketing &amp;{' '}
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

        {/* Two Flagship Disciplines: Hero-Aligned Architecture */}
        <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-[1240px] mx-auto relative font-apple">
          {/* Ambient Lighting Glow echoing the Hero Section */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-tr from-sky-100/40 via-blue-50/30 to-indigo-100/30 blur-3xl rounded-full -z-10 pointer-events-none" />

          {/* Section Editorial Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

            <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-medium text-ink tracking-tight leading-[1.15] mb-3 sm:mb-4">
              Two core disciplines.{' '}
              <span className="text-apple-blue font-serif-accent font-normal italic block sm:inline">
                One integrated growth engine.
              </span>
            </h2>

            <p className="text-[14.5px] sm:text-[17px] text-slate font-apple leading-relaxed max-w-2xl mx-auto px-1">
              We engineer two symbiotic capabilities: algorithmic social distribution that captures commercial attention, and master brand architecture that commands pricing power across Qatar, the UAE, and India.
            </p>

            {/* Segmented Discipline Switcher optimized for phone */}
            <div className="w-full max-w-[360px] sm:max-w-md mx-auto grid grid-cols-2 p-1 sm:p-1.5 rounded-full bg-[#f1f3f7] border border-slate-200/80 shadow-2xs mt-6 sm:mt-8 gap-1 items-center">
              <button
                type="button"
                onClick={() => setActivePillar('social')}
                className={`w-full justify-center px-2 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13.5px] font-medium transition-colors cursor-pointer flex items-center gap-1.5 sm:gap-2.5 text-center ${
                  activePillar === 'social'
                    ? 'bg-white text-ink shadow-xs'
                    : 'bg-transparent text-slate-500 hover:text-ink'
                }`}
              >
                <Activity 
                  size={14} 
                  className={activePillar === 'social' ? 'text-emerald-600 stroke-[2.2]' : 'text-slate-400 stroke-[1.8]'} 
                />
                <span className="truncate">
                  <span className="hidden sm:inline">Social Media Management</span>
                  <span className="sm:hidden">Social Media</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActivePillar('branding')}
                className={`w-full justify-center px-2 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13.5px] font-medium transition-colors cursor-pointer flex items-center gap-1.5 sm:gap-2.5 text-center ${
                  activePillar === 'branding'
                    ? 'bg-white text-ink shadow-xs'
                    : 'bg-transparent text-slate-500 hover:text-ink'
                }`}
              >
                <Palette 
                  size={14} 
                  className={activePillar === 'branding' ? 'text-emerald-600 stroke-[2.2]' : 'text-slate-400 stroke-[1.8]'} 
                />
                <span className="truncate">
                  <span className="hidden sm:inline">Branding &amp; Visual Identity</span>
                  <span className="sm:hidden">Brand Identity</span>
                </span>
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PILLAR 1: SOCIAL MEDIA MANAGEMENT (INSTANT SWITCHING, NO DELAY) */}
          {/* ========================================================================= */}
          {activePillar === 'social' && (
            <div className="space-y-6 sm:space-y-8">
                {/* Main Hero Card for Social Management */}
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-10 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative overflow-hidden">
                  {/* Subtle watermarked background logo / pattern */}
                  <div className="absolute -top-16 -left-16 w-80 h-80 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

                  {/* Left Column: Narrative, Architecture & CTA */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-6 relative z-10">

                    <h3 className="text-[22px] sm:text-3xl lg:text-[34px] font-medium text-ink tracking-tight leading-[1.2]">
                      Algorithmic content systems engineered for{' '}
                      <span className="text-apple-blue font-serif-accent font-normal italic">
                        commercial velocity.
                      </span>
                    </h3>

                    <p className="text-[14.5px] sm:text-[16.5px] text-slate leading-relaxed font-apple max-w-xl">
                      We take full operational ownership of your social channels across Instagram, LinkedIn, TikTok, and X. From cinema-grade vertical reels and high-retention motion carousels to instant WhatsApp lead capture, every impression compounds your bottom line.
                    </p>

                    {/* Feature Capabilities - Clean Line-Separated 2x2 Grid (No top/bottom borders) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-2">
                      {/* A (Top Left) */}
                      <div className="py-3 sm:py-4 sm:pr-6 sm:border-r border-b border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-apple-blue shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Cinema-Grade Reel Studio</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          4K vertical video scripted &amp; color-graded for viral reach.
                        </p>
                      </div>

                      {/* B (Top Right) */}
                      <div className="py-3 sm:py-4 sm:pl-6 border-b border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-apple-blue shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Multi-Channel Calendar</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Synchronized weekly scheduling across all 4 top networks.
                        </p>
                      </div>

                      {/* C (Bottom Left) */}
                      <div className="py-3 sm:py-4 sm:pr-6 sm:border-r border-b sm:border-b-0 border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-apple-blue shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Instant WhatsApp Triage</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Inbound comments &amp; DMs routed to sales within 3 minutes.
                        </p>
                      </div>

                      {/* D (Bottom Right) */}
                      <div className="py-3 sm:py-4 sm:pl-6 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-apple-blue shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Paid Media Amplification</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Targeted Meta &amp; TikTok ad spend scaling high-performing posts.
                        </p>
                      </div>
                    </div>

                    {/* CTA Button matching the Hero Section Slide Pill */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="btn-slide-pill group cursor-pointer inline-flex items-center justify-center w-full sm:w-auto"
                      >
                        <span className="relative z-10 transition-all duration-500">
                          Commission Social Retainer
                        </span>
                        <span className="arrow-circle">
                          <ArrowUpRight size={14} />
                        </span>
                      </button>

                      <div className="text-[12px] text-slate flex items-center justify-center sm:justify-start gap-1.5 text-center">
                        <Globe2 size={13} className="text-slate-400 shrink-0" />
                        <span>Deployed across Qatar, the UAE, and India</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero-Inspired Kinetic Visual Media Deck */}
                  <div className="lg:col-span-5 relative flex justify-center items-center py-2 lg:py-0">
                    {/* Reel Preview Card (Straight, Clean, Mobile-Optimized) */}
                    <div className="relative w-full max-w-[280px] sm:max-w-[340px] mx-auto rounded-2xl sm:rounded-3xl bg-[#0b0f17] text-white p-3.5 sm:p-4 shadow-xl border border-slate-800 select-none">
                      {/* Video Frame */}
                      <div className="relative aspect-[9/14] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                        <img
                          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                          alt="Cinema-grade short-form video production"
                          className="w-full h-full object-cover opacity-85"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white flex items-center gap-1.5 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                            Viral Sprint
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-apple-blue/90 text-[11px] font-semibold text-white shadow-xs">
                            4K 60FPS
                          </span>
                        </div>

                        {/* Center Play Beacon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={22} className="text-white fill-white ml-1" />
                          </div>
                        </div>

                        {/* Bottom Live Metrics Over Video */}
                        <div className="absolute bottom-3 left-3 right-3 space-y-2">
                          <div className="flex items-center justify-between text-[11.5px] text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-1.5">
                              <Volume2 size={13} className="text-apple-blue" />
                              <span className="truncate max-w-[150px]">Original Audio · Qadmas Studio</span>
                            </div>
                            <span className="font-semibold text-emerald-400">312.4K Views</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                            <div className="bg-black/70 backdrop-blur-md py-1.5 px-2 rounded-lg border border-white/10">
                              <div className="text-white/60">Watch Retention</div>
                              <div className="text-white font-semibold">+24.8% Target</div>
                            </div>
                            <div className="bg-black/70 backdrop-blur-md py-1.5 px-2 rounded-lg border border-white/10">
                              <div className="text-white/60">WhatsApp Leads</div>
                              <div className="text-emerald-400 font-semibold">94 Captured</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                {/* 3 Editorial Feature Deep-Dive Modules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 pt-2">
                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 text-apple-blue flex items-center justify-center">
                      <Video size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">Cinema-Grade Vertical Production</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      We script, shoot, edit, and sound-design high-retention 4K vertical video tailored for sub-3-second hooks and viral algorithmic distribution.
                    </p>
                  </div>

                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <MessageSquare size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">Zero-Latency WhatsApp Funnels</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      Direct audience signals into qualified revenue pipelines: active comment triage and automated DM routing directly to your sales directors.
                    </p>
                  </div>

                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                      <BarChart3 size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">Attributed Telemetry &amp; ROAS</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      Weekly executive dashboards tracking follower velocity, profile engagement, cost-per-lead, and pipeline attribution across every network.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* PILLAR 2: BRANDING & VISUAL IDENTITY (INSTANT SWITCHING, NO DELAY) */}
            {/* ========================================================================= */}
            {activePillar === 'branding' && (
              <div className="space-y-6 sm:space-y-8">
                {/* Main Hero Card for Brand Identity */}
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-10 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative overflow-hidden">
                  <div className="absolute -top-16 -left-16 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

                  {/* Left Column: Narrative, Architecture & CTA */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-6 relative z-10">

                    <h3 className="text-[22px] sm:text-3xl lg:text-[34px] font-medium text-ink tracking-tight leading-[1.2]">
                      Visual world systems engineered to command{' '}
                      <span className="text-apple-blue font-serif-accent font-normal italic">
                        institutional prestige.
                      </span>
                    </h3>

                    <p className="text-[14.5px] sm:text-[16.5px] text-slate leading-relaxed font-apple max-w-xl">
                      Your brand identity is your ultimate commercial moat. We design comprehensive visual world systems—from bilingual Arabic/English typographic lockups and vector suites to 60+ page brand guidelines and executive pitch decks that command market trust.
                    </p>

                    {/* Feature Capabilities - Clean Line-Separated 2x2 Grid (No top/bottom borders) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-2">
                      {/* A (Top Left) */}
                      <div className="py-3 sm:py-4 sm:pr-6 sm:border-r border-b border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Bilingual Typography Pairing</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Bespoke Arabic calligraphy matched with Latin sans/serif.
                        </p>
                      </div>

                      {/* B (Top Right) */}
                      <div className="py-3 sm:py-4 sm:pl-6 border-b border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Master Vector Suite</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Full primary, secondary, favicon &amp; animated vector lockups.
                        </p>
                      </div>

                      {/* C (Bottom Left) */}
                      <div className="py-3 sm:py-4 sm:pr-6 sm:border-r border-b sm:border-b-0 border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">60+ Page Brand Manual</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Rules for spacing, negative space, color alchemy &amp; asset use.
                        </p>
                      </div>

                      {/* D (Bottom Right) */}
                      <div className="py-3 sm:py-4 sm:pl-6 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span className="text-[13px] sm:text-[13.5px] font-semibold text-ink">Executive Pitch Collateral</span>
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-slate pl-6 leading-relaxed">
                          Tender presentations, investor decks &amp; corporate profiles.
                        </p>
                      </div>
                    </div>

                    {/* CTA Button matching the Hero Section Slide Pill */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="btn-slide-pill group cursor-pointer inline-flex items-center justify-center w-full sm:w-auto"
                      >
                        <span className="relative z-10 transition-all duration-500">
                          Commission Brand Identity
                        </span>
                        <span className="arrow-circle">
                          <ArrowUpRight size={14} />
                        </span>
                      </button>

                      <div className="text-[12px] text-slate flex items-center justify-center sm:justify-start gap-1.5 text-center">
                        <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                        <span>100% Vector &amp; Copyright Transfer</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero-Inspired Obsidian Brand Specimen Board */}
                  <div className="lg:col-span-5 relative flex justify-center items-center py-2 lg:py-0">
                    {/* Dark Obsidian Surface (Straight, Clean, Mobile-Optimized) */}
                    <div className="relative w-full max-w-[310px] sm:max-w-[360px] mx-auto rounded-2xl sm:rounded-3xl bg-[#0b0f17] text-white p-4 sm:p-6 shadow-xl border border-slate-800 select-none overflow-hidden space-y-4 sm:space-y-5">
                      {/* Ambient interior glow */}
                      <div className="absolute -top-10 -right-10 w-44 h-44 bg-apple-blue/15 rounded-full blur-3xl pointer-events-none" />

                      {/* Header */}
                      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800/80 text-[11.5px] sm:text-[12px]">
                        <span className="font-semibold text-slate-200">Brand Kit Architecture</span>
                        <span className="text-emerald-400 font-medium">100% Client Owned</span>
                      </div>

                      {/* Bilingual Typographic Specimen */}
                      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[10.5px] sm:text-[11px] text-slate-400">
                          <span>Bilingual Monogram System</span>
                          <span className="text-apple-blue">Optical Kerning</span>
                        </div>
                        <div className="flex items-baseline justify-between pt-1">
                          <span className="text-xl sm:text-2xl font-serif-accent font-normal italic tracking-wide text-white">Qadmas</span>
                          <span className="text-xl sm:text-2xl font-serif-accent text-slate-300">قدمـاس</span>
                        </div>
                        <p className="text-[11px] sm:text-[11.5px] text-slate-400 leading-tight">
                          Contemporary Latin display paired with regional Arabic calligraphy.
                        </p>
                      </div>

                      {/* Curated Color Palette Tokens */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between text-[10.5px] sm:text-[11px] text-slate-400">
                          <span>Harmonized Chromatic Tokens</span>
                          <span>HSL Calibrated</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                          {[
                            { name: 'Obsidian', hex: '#0B0F17', bg: 'bg-[#0B0F17] border-slate-700' },
                            { name: 'Azure Core', hex: '#0071E3', bg: 'bg-[#0071E3] border-blue-400' },
                            { name: 'Champagne', hex: '#E5D9C5', bg: 'bg-[#E5D9C5] border-amber-200' },
                            { name: 'Slate Gray', hex: '#86868B', bg: 'bg-[#86868B] border-slate-500' },
                          ].map((token, i) => (
                            <div key={i} className="text-center space-y-1">
                              <div className={`h-7 sm:h-8 rounded-lg border ${token.bg} shadow-xs`} />
                              <div className="text-[9.5px] sm:text-[10px] text-slate-300 font-medium truncate">{token.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Native Asset Vector Stack */}
                      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px] sm:text-[11.5px]">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-white">Deliverable Master Formats</div>
                          <div className="text-slate-400">Figma · Illustrator · SVG · PDF</div>
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                          <Check size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Editorial Feature Deep-Dive Modules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 pt-2">
                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                      <Sparkles size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">Bilingual Regional Authority</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      Custom Arabic calligraphy paired with modern Latin letterforms, tuned specifically to resonate with institutional decision-makers.
                    </p>
                  </div>

                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <FileText size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">60+ Page Identity Manual</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      Rigorous design system documentation detailing spacing, typography scales, negative space rules, and clear digital token guidelines.
                    </p>
                  </div>

                  <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 sm:space-y-3 hover:border-slate-300 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                      <Layers size={17} />
                    </div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">Executive Tender &amp; Pitch Kits</h4>
                    <p className="text-[13px] sm:text-[14px] text-slate leading-relaxed">
                      High-stakes investor pitch decks, corporate profiles, and presentation templates designed to win multi-million dollar institutional tenders.
                    </p>
                  </div>
                </div>
              </div>
            )}
        </section>

        {/* 4-Step Growth Process */}
        <section className="py-20 px-6 max-w-[1240px] mx-auto border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">
              How we execute campaigns.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate font-apple leading-relaxed">
              A structured 4-stage sprint ensuring predictable brand expansion and qualified lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Market & Audience Audit',
                desc: 'We analyze your competitive landscape, ideal customer profiles, and regional market sentiment across Qatar, the UAE, and India.',
                icon: Target,
              },
              {
                step: '02',
                title: 'Creative & Identity Engine',
                desc: 'Our design studio architects custom templates, short-form video storyboards, and copy tailored for high engagement.',
                icon: Palette,
              },
              {
                step: '03',
                title: 'Multi-Channel Dispatch',
                desc: 'Content is scheduled, published, and amplified with targeted paid media campaigns for maximum reach velocity.',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Conversion & Lead Telemetry',
                desc: 'Audience signals are tracked and hot inbound inquiries are instantly funneled to your sales and WhatsApp pipelines.',
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-bold text-slate-300 font-apple">{item.step}</span>
                      <div className="w-8 h-8 rounded-lg bg-apple-blue/10 text-apple-blue flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
                    <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enterprise CTA Section */}
        <section className="py-20 px-6 max-w-[1240px] mx-auto">
          <div className="rounded-3xl bg-[#0b0f17] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] bg-apple-blue/20 rounded-full blur-[100px] pointer-events-none" />

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
