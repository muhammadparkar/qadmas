import { useState } from 'react';
import { Code2, Building2, Globe, Smartphone, BarChart3, Settings, Server, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Services() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuoteService, setActiveQuoteService] = useState('');

  const features = [
    {
      id: 'software-dev',
      label: 'Software Development',
      title: 'Custom Software Tailored to Your Business',
      quoteService: 'Custom Software Development',
      desc: 'Transform your business processes with custom software engineering. Built for scalability, performance, security, and long-term reliability.',
      icon: Code2,
      metrics: [
        { name: 'DELIVERY RATE', val: '100%', trend: 'positive', color: '#00C5C8' },
        { name: 'CODE TEST COVERAGE', val: '99.4%', trend: 'positive', color: '#00C5C8' },
        { name: 'TECH STACK', val: 'REACT · NODE · RUST', trend: 'neutral', color: '#8292b4' },
      ],
      codeSnippet: `// Qadmas Custom Software Architecture Module
const qadmasEngine = new QadmasCore({
  cluster: "production-uae",
  microservices: ["auth", "billing", "fleet-tracker"],
  securityLevel: "zero-trust"
});
await qadmasEngine.deploy(); // Deployed in 412ms`,
    },
    {
      id: 'enterprise-erp',
      label: 'Enterprise Solutions',
      title: 'Enterprise CRM, ERP & Workflow Automation',
      quoteService: 'Enterprise CRM / ERP Solutions',
      desc: 'Streamline operations using custom CRM and ERP tools. Manage inventory, automate client billing, and gain actionable business intelligence.',
      icon: Building2,
      metrics: [
        { name: 'WORKFLOW SPEED', val: '+300%', trend: 'positive', color: '#00C5C8' },
        { name: 'INVENTORY PRECISION', val: '99.9%', trend: 'neutral', color: '#8292b4' },
        { name: 'ERROR REDUCTION', val: '-95%', trend: 'positive', color: '#00C5C8' },
      ],
      codeSnippet: `$ qadmas erp sync --module=inventory --location="Dubai Warehouse"
✓ 14,200 Stock SKUs synchronized with real-time trading portal
[AUTOMATION] Monthly financial report generated for executive review`,
    },
    {
      id: 'website-dev',
      label: 'Website Development',
      title: 'High-Performing Custom Websites & Platforms',
      quoteService: 'Custom Website Development',
      desc: 'Crafting modern, mobile-first, responsive websites using React, Next.js, WordPress, and Shopify that convert visitors into loyal clients.',
      icon: Globe,
      metrics: [
        { name: 'PAGE SPEED SCORE', val: '99 / 100', trend: 'positive', color: '#00C5C8' },
        { name: 'SEO PERFORMANCE', val: 'TOP 3 RANK', trend: 'positive', color: '#00C5C8' },
        { name: 'CONVERSION INCREASE', val: '+60%', trend: 'neutral', color: '#00C5C8' },
      ],
      codeSnippet: `$ qadmas web build --target=production --seo-optimized
✓ SSR rendered across 42 global edge regions in 12ms
[PERFORMANCE] Core Web Vitals: LCP 0.8s, FID 4ms, CLS 0.00`,
    },
    {
      id: 'mobile-app',
      label: 'Application Development',
      title: 'Cross-Platform Mobile Apps (iOS & Android)',
      quoteService: 'Mobile Application Development (iOS/Android)',
      desc: 'Deliver seamless mobile experiences using Flutter, React Native, and Kotlin with intuitive UI/UX and real-time backend sync.',
      icon: Smartphone,
      metrics: [
        { name: 'PLATFORMS', val: 'iOS + ANDROID', trend: 'neutral', color: '#8292b4' },
        { name: 'APP CRASH RATE', val: '0.001%', trend: 'positive', color: '#00C5C8' },
        { name: 'STORE APPROVAL', val: '100% PASS', trend: 'positive', color: '#00C5C8' },
      ],
      codeSnippet: `// Qadmas Cross-Platform Flutter / React Native App
import { QadmasMobileSDK } from '@qadmas/mobile';

QadmasMobileSDK.initialize({
  pushNotifications: true,
  offlineSync: true,
  biometrics: true
});`,
    },
    {
      id: 'digital-marketing',
      label: 'Digital Marketing',
      title: 'Data-Driven Digital Marketing & SEO Growth',
      quoteService: 'Digital Marketing & SEO Growth',
      desc: 'Boost your brand visibility, reach qualified leads, and dominate search engines with our targeted SEO, PPC, and social media campaigns.',
      icon: BarChart3,
      metrics: [
        { name: 'ORGANIC TRAFFIC', val: '+240%', trend: 'positive', color: '#00C5C8' },
        { name: 'LEAD GENERATION', val: '5,000+ / mo', trend: 'positive', color: '#00C5C8' },
        { name: 'ROAS', val: '4.8X', trend: 'positive', color: '#00C5C8' },
      ],
      codeSnippet: `$ qadmas campaign audit --market="UAE & Qatar"
[ANALYTICS] Impression volume: 1.2M impressions
[CONVERSION] High-intent business inquiries increased by 240%`,
    },
    {
      id: 'it-support',
      label: 'IT Support & Maintenance',
      title: '24/7 Managed IT Support & Infrastructure',
      quoteService: 'IT Support & Maintenance',
      desc: 'Ensure smooth business operations with 24/7 technical support, server monitoring, cloud backups, and proactive threat mitigation.',
      icon: Settings,
      metrics: [
        { name: 'SUPPORT SLA', val: '< 15 MINS', trend: 'positive', color: '#00C5C8' },
        { name: 'SYSTEM UPTIME', val: '99.99%', trend: 'neutral', color: '#8292b4' },
        { name: 'MONITORING', val: '24 / 7 / 365', trend: 'positive', color: '#00C5C8' },
      ],
      codeSnippet: `$ qadmas status --cluster=qatar-datacenter
● qadmas-monitoring.service - Active (Running)
✓ Zero server downtime recorded in last 365 days.`,
    },
  ];

  const current = features[selectedFeature];

  const handleRequestQuote = (serviceName: string) => {
    setActiveQuoteService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
            <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
              COMPREHENSIVE SOLUTIONS FOR YOUR DIGITAL NEEDS
            </span>
          </div>
          <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight mb-4 max-w-[750px]">
            Comprehensive Solutions for Your Digital Needs
          </h2>
          <p className="font-geist text-[16px] text-[#8292b4] max-w-[620px]">
            We combine technical engineering with strategic execution to build software, websites, and enterprise systems that scale.
          </p>
        </div>

        {/* 2-Column Split: Selector List & Terminal Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column Navigation List */}
          <div className="lg:col-span-4 space-y-1">
            {features.map((item, idx) => {
              const isSelected = selectedFeature === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFeature(idx)}
                  className={`w-full text-left px-4 py-3 rounded-[3px] border transition-colors flex items-center justify-between font-mono-geist text-[12px] uppercase tracking-wider ${
                    isSelected
                      ? 'bg-[#0c1228] border-[#1b294b] text-[#00C5C8]'
                      : 'bg-transparent border-transparent text-[#8292b4] hover:text-[#eeeeee] hover:bg-[#0c1228]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} className={isSelected ? 'text-[#00C5C8]' : 'text-[#8292b4]'} />
                    <span>{item.label}</span>
                  </div>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00C5C8]" />}
                </button>
              );
            })}
          </div>

          {/* Right Column Interactive Console */}
          <div className="lg:col-span-8 border border-[#1b294b] rounded-[10px] bg-[#080d1f] p-6 space-y-6">
            {/* Card Header */}
            <div className="border-b border-[#1b294b] pb-4 flex items-start justify-between">
              <div>
                <div className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
                  SERVICE // {current.label}
                </div>
                <h3 className="font-geist text-[24px] text-[#eeeeee] font-normal leading-tight">
                  {current.title}
                </h3>
              </div>
              <Server size={20} className="text-[#00C5C8] mt-1" />
            </div>

            <p className="font-geist text-[15px] text-[#8292b4] leading-relaxed">
              {current.desc}
            </p>

            {/* Metric Tiles Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="border border-[#1b294b] rounded-[3px] p-3 bg-[#050a1a]">
                  <div className="font-mono-geist text-[11px] uppercase text-[#b0c0e0] tracking-tight mb-1">
                    {m.name}
                  </div>
                  <div className="font-geist text-[24px] text-[#eeeeee] font-normal tracking-tight" style={{ color: m.color }}>
                    {m.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Code / Console Output Window */}
            <div className="border border-[#1b294b] rounded-[3px] bg-[#040814] p-4 font-mono-geist text-[12px] text-[#eeeeee] space-y-2">
              <div className="text-[#8292b4] text-[11px] border-b border-[#1b294b] pb-2 flex justify-between">
                <span>SYSTEM DISPATCH</span>
                <span className="text-[#00C5C8]">QADMAS CORE ENGINE</span>
              </div>
              <pre className="text-[#eeeeee] overflow-x-auto whitespace-pre-wrap font-mono-geist leading-relaxed">
                {current.codeSnippet}
              </pre>
            </div>

            {/* CTA Button Pre-selecting Service in Contact Form */}
            <div className="pt-2">
              <button
                onClick={() => handleRequestQuote(current.quoteService)}
                className="bg-[#00C5C8] text-[#050a1a] hover:bg-[#24dcdb] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <span>Get a Quote for {current.label}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={activeQuoteService}
      />
    </>
  );
}
