import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Building2, 
  Globe, 
  Bot, 
  Plus,
  ArrowRight,
  ArrowUpRight,
  Check
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

interface ServiceItem {
  id: string;
  title: string;
  quoteService: string;
  category: string;
  desc: string;
  deliverables: string[];
  tech: string;
  timeline: string;
  icon: typeof Bot;
  externalLink?: string;
  pageUrl?: string;
}

const detailedServices: ServiceItem[] = [
  {
    id: 'ai-crm-erp',
    title: 'Ai - Powered CRM & ERP (Wantik-X)',
    quoteService: 'Ai - Powered CRM & ERP (Wantik-X)',
    category: 'INTELLIGENT PIPELINES & OPERATIONAL ERP',
    externalLink: 'https://wantikx.com/',
    desc: 'Autonomous lead intake, 24/7 WhatsApp AI qualification agents, and unified multi-warehouse inventory telemetry with automated GCC VAT compliance—powered by Wantik-X.',
    deliverables: [
      '24/7 WhatsApp AI qualification & smart pipeline dispatch',
      'Multi-warehouse stock sync with real-time barcode telemetry',
      'Automated GCC VAT & customs invoice PDF generator',
      'Executive financial, stock-turn, and profit telemetry dashboards',
    ],
    tech: 'Wantik-X Engine · Python · WhatsApp API · PostgreSQL · Redis',
    timeline: 'Ready-to-Deploy / 2 to 4 Weeks',
    icon: Bot,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    pageUrl: '/services/digital-marketing',
    quoteService: 'Digital Marketing',
    category: 'PERFORMANCE & GROWTH MARKETING',
    desc: 'Precision performance advertising campaigns, advanced search engine optimization (SEO), and conversion-engineered funnels structured to capture high-intent B2B and consumer clients across Qatar and the GCC.',
    deliverables: [
      'Meta & Google Ads performance campaigns with ROI attribution',
      'Technical on-page & off-page Search Engine Optimization (SEO)',
      'High-converting landing page funnels & A/B conversion testing',
      'Multi-channel tracking, analytics dashboards & lead telemetry',
    ],
    tech: 'Google Ads · Meta Ads Manager · GA4 · SEMrush · Hotjar',
    timeline: 'Ongoing / 2 to 4 Weeks Sprint',
    icon: TrendingUp,
  },
  {
    id: 'website-development',
    title: 'Website Development',
    quoteService: 'Website Development',
    category: 'HIGH-CONVERTING WEB PLATFORMS',
    desc: 'Custom web platforms built with React and Next.js 15 for businesses that demand sub-second load times, booking funnels, and high commercial conversion.',
    deliverables: [
      'Sub-0.5s Core Web Vitals performance benchmarks',
      'Mobile-first responsive UX across all screen sizes',
      'Custom booking engines, customer portals & checkout funnels',
      'Full technical SEO architecture for search engine rankings',
    ],
    tech: 'Next.js 15 · React · Tailwind CSS · Cloudflare Edge',
    timeline: '2 to 4 Weeks',
    icon: Globe,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile Application Development',
    quoteService: 'Mobile Application Development',
    category: 'CROSS-PLATFORM MOBILE ENGINEERING',
    desc: 'Native-feel iOS and Android applications developed with Flutter and React Native. Built for smooth interactions, push notifications, and offline data sync in field operations.',
    deliverables: [
      'Single codebase for rapid iOS and Android deployment',
      'Local database caching for offline operation in field work',
      'Biometric authentication & secure payment integrations',
      'App Store and Google Play compliance submission',
    ],
    tech: 'Flutter · Dart · React Native · SQLite',
    timeline: '4 to 8 Weeks',
    icon: Building2,
  },
];

const faqs = [
  {
    q: 'Do you build custom software or use pre-made templates?',
    a: 'We build production software from the ground up using React, Next.js, and Node/Python so you have 100% control over the codebase and scalability. For operational platforms, we also offer pre-built ERP modules if you need to launch in under 2 weeks.'
  },
  {
    q: 'How do milestone payments work?',
    a: 'We work on transparent fixed-price milestones. Typically: 30% upon architecture signoff, 40% after testing working staging builds, and 30% upon production deployment. You never pay for unseen work.'
  },
  {
    q: 'Who owns the code and intellectual property?',
    a: 'You do. From Day 1, all Git repositories, infrastructure scripts, and databases belong entirely to your company. We never hold client code hostage or charge arbitrary licensing fees.'
  },
  {
    q: 'What happens if a server crashes in the middle of the night?',
    a: 'Our 24/7 SLA monitoring tracks uptime around the clock with automated alerts. If a critical incident occurs, our on-call engineers address it immediately within our guaranteed < 15 minute response window.'
  },
  {
    q: 'Can we expand and add new features as our business grows?',
    a: 'Yes. All our codebases are built modularly using strict architectural patterns and clear documentation. You can have our team continue sprint cycles or transition the project to your in-house team effortlessly.'
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[900px] mx-auto">
          Engineering capabilities built for <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            production reliability
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[660px] mx-auto">
          We don&apos;t bill by the hour or sell vague consulting slide decks. We architect, build, and deploy production-ready software systems with clear milestone deliverables.
        </p>
      </section>

      {/* Services Breakdown List */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="space-y-8">
          {detailedServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 hover:border-apple-blue/50 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      {service.pageUrl ? (
                        <Link
                          to={service.pageUrl}
                          className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-apple-blue/10 border border-slate-200/80 hover:border-apple-blue/30 flex items-center justify-center text-apple-blue transition-colors"
                          title="Explore dedicated page"
                        >
                          <Icon size={20} />
                        </Link>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-apple-blue">
                          <Icon size={20} />
                        </div>
                      )}
                      <h2 className="font-apple text-[26px] sm:text-[30px] font-semibold text-ink tracking-tight flex flex-wrap items-center gap-3">
                        {service.pageUrl ? (
                          <Link
                            to={service.pageUrl}
                            className="hover:text-apple-blue transition-colors inline-flex items-center gap-2 group/title"
                          >
                            <span>{service.title}</span>
                          </Link>
                        ) : (
                          <span>{service.title}</span>
                        )}
                        {'externalLink' in service && service.externalLink && (
                          <a
                            href={service.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-blue/10 hover:bg-apple-blue text-apple-blue hover:text-white text-[12px] font-medium transition-all border border-apple-blue/20"
                            title="Visit Wantik-X Platform"
                          >
                            <span>wantikx.com</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                        {service.pageUrl && (
                          <Link
                            to={service.pageUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-blue/10 hover:bg-apple-blue text-apple-blue hover:text-white text-[12px] font-medium transition-all border border-apple-blue/20"
                            title="Explore Dedicated Page"
                          >
                            <span>Explore Page</span>
                            <ArrowRight size={13} />
                          </Link>
                        )}
                      </h2>
                    </div>

                    <p className="font-apple text-[15px] text-slate leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 space-y-2.5 font-apple text-[14px] text-ink/90">
                      <div className="text-slate text-[13px] font-medium mb-1">
                        Key deliverables included:
                      </div>
                      {service.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-[13px]">
                          <div className="w-4 h-4 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0">
                            <Check size={11} className="text-apple-blue" />
                          </div>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Scope Card */}
                  <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 space-y-5 font-apple text-[13px]">
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate">Tech stack</span>
                        <span className="text-ink text-right font-medium max-w-[200px]">{service.tech}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate">Sprint duration</span>
                        <span className="text-apple-blue font-medium">{service.timeline}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate">Code ownership</span>
                        <span className="text-ink font-medium">100% Client IP</span>
                      </div>
                    </div>

                    {service.pageUrl ? (
                      <div className="space-y-2.5">
                        <Link
                          to={service.pageUrl}
                          className="btn-slide-pill w-full justify-center group"
                        >
                          <span className="relative z-10 transition-all duration-500">
                            Explore {service.title}
                          </span>
                          <span className="arrow-circle">
                            <ArrowRight size={14} />
                          </span>
                        </Link>
                        <button
                          onClick={() => handleOpenQuote(service.quoteService)}
                          className="w-full py-2.5 rounded-full border border-slate-200/80 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 hover:text-ink text-[13px] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Discuss Project Scope</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleOpenQuote(service.quoteService)}
                        className="btn-slide-pill w-full justify-center group"
                      >
                        <span className="relative z-10 transition-all duration-500">
                          Discuss Project Scope
                        </span>
                        <span className="arrow-circle">
                          <ArrowRight size={14} />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparent FAQ Section */}
      <section className="py-24 max-w-[960px] mx-auto px-6 border-t border-slate-200/80">
        <div className="text-center mb-16">
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            Straight answers about <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">how we build</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-apple text-[17px] font-medium text-ink hover:text-apple-blue transition-colors"
                >
                  <span>{faq.q}</span>
                  <Plus
                    size={18}
                    className={`text-slate shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45 text-apple-blue' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 font-apple text-[14px] text-slate leading-relaxed border-t border-slate-200/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedService}
      />

      <Footer />
    </div>
  );
}
