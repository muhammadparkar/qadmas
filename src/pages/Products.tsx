import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Layers, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import ContactModal from '../components/ContactModal';

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('Ai - Powered CRM & ERP (Wantik-X)');

  const openContact = (service: string) => {
    setDefaultService(service);
    setIsModalOpen(true);
  };

  const productList = [
    {
      badge: 'FLAGSHIP PLATFORM',
      name: 'Wantik-X ERP & CRM',
      tagline: 'Automated Sales Pipelines, Lead Dispatch & Operations',
      desc: 'An AI-powered operational operating system built for regional trading, services, and multi-branch companies. Replaces disconnected spreadsheets and slow legacy software with unified real-time dashboards.',
      link: 'https://wantikx.com/',
      features: [
        'Automated WhatsApp lead qualification & instant routing',
        'Multi-branch inventory synchronization with barcode scanning',
        'AI voice agents for front-line customer inquiry triage',
        'Seamless social media campaign and inbound lead capture',
        'GCC VAT-compliant commercial invoicing & ledger tracking',
      ],
      ctaText: 'Visit Wantik-X Platform',
      external: true,
      serviceName: 'Ai - Powered CRM & ERP (Wantik-X)',
    },
    {
      badge: 'SUPPLY CHAIN & PROCUREMENT',
      name: 'Sila Vendor System',
      tagline: 'End-to-End Procurement & Supplier Reconciliation',
      desc: 'Centralized vendor management system designed for fast-paced commercial operations. Streamlines RFQ bidding, purchase order approvals, supplier invoice audit trails, and warehouse delivery validation.',
      internalLink: '/products/sila',
      features: [
        'Automated supplier quotation comparison and RFQ dispatch',
        'Custom multi-tier approval matrices for purchase orders',
        'Real-time delivery verification against warehouse receipts',
        'Automated 3-way matching: PO, delivery note, and invoice',
        'Granular vendor performance metrics and delivery scorecards',
      ],
      ctaText: 'Explore Sila Platform',
      external: false,
      serviceName: 'Sila Vendor System',
    },
    {
      badge: 'BESPOKE ARCHITECTURE',
      name: 'Custom Engineered Platforms',
      tagline: '100% Tailored Software Built for Your Exact Workflows',
      desc: 'When pre-packaged SaaS doesn’t match your operational reality, we architect bespoke enterprise systems from the ground up. You own 100% of the code, IP, and database schemas with zero vendor lock-in.',
      features: [
        'Next.js 15, Python/FastAPI, Node.js & high-concurrency PostgreSQL',
        'Native-feel mobile apps for iOS and Android with offline-first sync',
        'Complete Git repository transfer & containerized Docker deployments',
        'Custom hardware, API, payment gateway, and legacy system integrations',
        'Dedicated senior systems architect and guaranteed 15-minute SLA',
      ],
      ctaText: 'Start an Engineering Sprint',
      external: false,
      serviceName: 'Bespoke Enterprise (2,500 QR / mo)',
    },
  ];

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
      

        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[920px] mx-auto">
          Software engines built for <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            production velocity &amp; scale.
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[700px] mx-auto mb-10">
          Explore our production-ready ERP &amp; CRM suites, procurement portals, and transparent subscription packages engineered across Qatar, the UAE, and India.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-slide-pill group"
          >
            <span className="relative z-10 transition-all duration-500">
              View Pricing Packages
            </span>
            <span className="arrow-circle">
              <ArrowUpRight size={15} />
            </span>
          </a>

          <button
            onClick={() => openContact('Ai - Powered CRM & ERP (Wantik-X)')}
            className="px-6 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-ink text-[14px] font-medium transition-colors cursor-pointer shadow-2xs"
          >
            Book Platform Demo
          </button>
        </div>
      </section>

      {/* Products Deep-Dive Section */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="space-y-16">
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block px-3 py-1 rounded-md bg-apple-blue/10 text-apple-blue font-semibold text-[11px] tracking-wider uppercase font-apple">
                  {product.badge}
                </div>

                <div>
                  <h2 className="text-[26px] sm:text-[32px] font-semibold text-ink tracking-tight font-apple">
                    {product.name}
                  </h2>
                  <p className="text-[15px] text-apple-blue font-medium mt-1">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-[15px] text-slate leading-relaxed font-apple">
                  {product.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-[14px] text-slate">
                      <CheckCircle2 size={16} className="text-apple-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  {product.external ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-slide-pill group"
                    >
                      <span className="relative z-10 transition-all duration-500">
                        {product.ctaText}
                      </span>
                      <span className="arrow-circle">
                        <ArrowUpRight size={14} />
                      </span>
                    </a>
                  ) : product.internalLink ? (
                    <Link
                      to={product.internalLink}
                      className="inline-flex items-center gap-2 btn-slide-pill group"
                    >
                      <span className="relative z-10 transition-all duration-500">
                        {product.ctaText}
                      </span>
                      <span className="arrow-circle">
                        <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => openContact(product.serviceName)}
                      className="inline-flex items-center gap-2 btn-slide-pill group cursor-pointer"
                    >
                      <span className="relative z-10 transition-all duration-500">
                        {product.ctaText}
                      </span>
                      <span className="arrow-circle">
                        <ArrowUpRight size={14} />
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Card / Highlights */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-apple-blue shadow-2xs">
                    {idx === 0 ? <Zap size={18} /> : idx === 1 ? <Layers size={18} /> : <ShieldCheck size={18} />}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-ink">Key Architecture</div>
                    <div className="text-[12px] text-slate">Sub-second real-time sync</div>
                  </div>
                </div>

                <div className="space-y-3.5 text-[13px] text-slate">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span>Code Ownership</span>
                    <span className="font-semibold text-ink">100% Client Owned</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span>Regional Telemetry</span>
                    <span className="font-semibold text-ink">Qatar · UAE · India</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200/50">
                    <span>Database Latency</span>
                    <span className="font-semibold text-emerald-600">&lt; 15ms Edge</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span>Support Tier</span>
                    <span className="font-semibold text-ink">Direct Senior Engineer</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/97471328520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-[13px] font-medium transition-colors"
                  >
                    <MessageSquare size={14} className="text-apple-blue" />
                    <span>WhatsApp Inquiry for {product.name}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section Moved Here */}
      <section id="pricing" className="scroll-mt-20">
        <Pricing />
      </section>

      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={defaultService}
      />
    </div>
  );
}
