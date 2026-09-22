import { useState } from 'react';
import { BarChart3, Globe, Building2, Settings, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuoteService, setActiveQuoteService] = useState('');

  const features = [
    {
      id: 'digital-marketing',
      label: 'Digital Marketing',
      quoteService: 'Digital Marketing & SEO Growth',
      desc: 'Boost your brand visibility, reach qualified leads, and dominate search engines with targeted SEO, PPC, and social media campaigns.',
      icon: BarChart3,
    },
    {
      id: 'web-apps-dev',
      label: 'Web/Apps Development',
      quoteService: 'Web & App Development',
      desc: 'Modern, mobile-first websites and cross-platform apps built with React, Next.js, Flutter, and React Native that convert and scale.',
      icon: Globe,
    },
    {
      id: 'ai-crm',
      label: 'AI Automated CRM',
      quoteService: 'AI Automated CRM',
      desc: 'Intelligent, self-updating CRM workflows that qualify leads, automate follow-ups, and surface insights in real time.',
      icon: Building2,
    },
    {
      id: 'erp',
      label: 'Pre Built / Custom Built ERP',
      quoteService: 'Pre Built / Custom Built ERP',
      desc: 'Launch fast with a pre-built ERP or go fully custom — inventory, billing, and operations unified in one platform.',
      icon: Settings,
    },
  ];

  const handleRequestQuote = (serviceName: string) => {
    setActiveQuoteService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-geist text-heading-lg text-ink tracking-tight mb-4 max-w-[750px]">
            Comprehensive Solutions for<br /><span className="text-apple-blue">Your Digital Needs</span>
          </h2>
          <p className="font-geist text-[16px] text-slate max-w-[620px]">
            We combine technical engineering with strategic execution to build software, websites, and enterprise systems that scale.
          </p>
        </div>

        {/* Grid with shared hairline dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-hairline-silver">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="group border-r border-b border-hairline-silver p-8">
                <Icon size={22} className="text-apple-blue mb-4" />

                <h3 className="font-geist text-[18px] text-ink font-medium leading-tight mb-2">
                  {item.label}
                </h3>

                <p className="font-geist text-[13px] text-slate leading-relaxed mb-4">
                  {item.desc}
                </p>

                <button
                  onClick={() => handleRequestQuote(item.quoteService)}
                  className="inline-flex items-center gap-1.5 font-geist text-[14px] font-medium text-apple-blue"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            );
          })}
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
