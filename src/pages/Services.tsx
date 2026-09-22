import React, { useState } from 'react';
import { 
  Code2, 
  Building2, 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShieldCheck,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const services = [
  {
    title: "Custom Software Development",
    quoteService: "Custom Software Development",
    desc: "Bespoke software systems tailored to your business operations. Engineered for scalability, high concurrency, and long-term reliability.",
    icon: <Code2 size={20} />
  },
  {
    title: "Enterprise Solutions (CRM & ERP)",
    quoteService: "Enterprise CRM / ERP Solutions",
    desc: "Streamline operations using custom CRM & ERP systems, workflow automation, and real-time business intelligence dashboards.",
    icon: <Building2 size={20} />
  },
  {
    title: "Custom Website Development",
    quoteService: "Custom Website Development",
    desc: "Crafting modern, mobile-first, responsive websites using React, Next.js, WordPress, and Shopify that convert visitors into clients.",
    icon: <Globe size={20} />
  },
  {
    title: "Application Development",
    quoteService: "Mobile Application Development (iOS/Android)",
    desc: "Cross-platform mobile applications built using Flutter, React Native, and Kotlin with intuitive UI/UX and offline database sync.",
    icon: <Smartphone size={20} />
  },
  {
    title: "Digital Marketing & SEO Growth",
    quoteService: "Digital Marketing & SEO Growth",
    desc: "Boost your brand visibility, reach qualified leads, and dominate search engines with data-driven SEO, PPC, and content strategies.",
    icon: <BarChart3 size={20} />
  },
  {
    title: "IT Support & Maintenance",
    quoteService: "IT Support & Maintenance",
    desc: "Ensure seamless business operations with 24/7 technical monitoring, infrastructure troubleshooting, and continuous optimization.",
    icon: <ShieldCheck size={20} />
  }
];

const faqs = [
  {
    q: "Do you provide post-launch support for developed software?",
    a: "Yes, we provide comprehensive post-launch support, 24/7 server monitoring, and maintenance packages to keep your systems secure and updated."
  },
  {
    q: "What information do you need to provide a custom quote?",
    a: "We typically need your core business goals, key feature requirements, target platform (web/mobile), and estimated project timeline."
  },
  {
    q: "Can I scale or expand my services as my business grows?",
    a: "Absolutely. All Qadmas software and web architectures are designed modularly to scale seamlessly as your user base and operations expand."
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "We implement zero-trust encryption, secure API gateways, regular security audits, and strict access controls to keep your business data protected."
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gallery-white min-h-screen font-geist text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">

        <h1 className="font-geist text-display font-normal text-ink tracking-tight leading-none mb-6">
          Our <span className="text-apple-blue">Provided Services</span>
        </h1>

        <p className="font-geist text-[16px] text-slate leading-relaxed max-w-[640px] mx-auto">
          Elevate your business with enterprise software, custom mobile apps, high-converting websites, and 24/7 IT consulting.
        </p>
      </section>

      {/* Services Grid (Our Provided Services Section) */}
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => handleOpenQuote(service.quoteService)}
              className="card-dark group flex flex-col justify-between hover:border-apple-blue transition-colors cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-[3px] bg-studio-mist border border-hairline-silver flex items-center justify-center text-apple-blue mb-6">
                  {service.icon}
                </div>
                <h3 className="font-geist text-[20px] text-ink font-normal mb-3 group-hover:text-apple-blue transition-colors">
                  {service.title}
                </h3>
                <p className="font-geist text-[14px] text-slate leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-hairline-silver flex items-center justify-between text-slate group-hover:text-apple-blue transition-colors font-geist text-[14px]">
                <span>Get a Quote</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivering Excellence in Our Services Section */}
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Section Picture Navigating to Excellence */}
          <div className="lg:col-span-6 border border-hairline-silver rounded-[10px] bg-gallery-white p-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
              alt="Delivering Excellence in Our Services" 
              className="w-full h-auto rounded-[6px] opacity-90"
            />
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="font-geist text-heading-lg text-ink tracking-tight">
              Delivering <span className="text-apple-blue">Excellence</span> in Our Services
            </h2>

            <p className="font-geist text-[16px] text-slate leading-relaxed">
              We hold ourselves to the highest standards of code quality, performance optimization, and rigorous QA testing. Every project we engineer is delivered on-time, within budget, and built for long-term scalability.
            </p>

            <div className="space-y-3 font-mono-geist text-[13px] text-ink">
              <div className="flex items-center gap-3 border border-hairline-silver bg-gallery-white p-3.5 rounded-[3px]">
                <Sparkles size={16} className="text-apple-blue shrink-0" />
                <span>Zero-Downtime Migration & Continuous Deployment</span>
              </div>
              <div className="flex items-center gap-3 border border-hairline-silver bg-gallery-white p-3.5 rounded-[3px]">
                <Sparkles size={16} className="text-apple-blue shrink-0" />
                <span>24/7 SLA Engineering Support Across Qatar, UAE & India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experienced Software Services Section (Featuring Wantik-X CRM) */}
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="font-geist text-heading-lg text-ink tracking-tight">
              Our Experienced Software Services & <span className="text-apple-blue">Wantik-X CRM</span>
            </h2>

            <p className="font-geist text-[16px] text-slate leading-relaxed">
              From enterprise CRM platforms like Wantik-X to multi-warehouse trading ERPs, our engineering team brings years of specialized experience in building mission-critical business software.
            </p>

            <button
              onClick={() => handleOpenQuote("Enterprise CRM / ERP Solutions")}
              className="bg-pricing-blue text-white hover:bg-[#0077ed] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
            >
              <span>Get Wantik-X CRM Quote</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Section Wantik-X Showcase Image */}
          <div className="lg:col-span-6 border border-hairline-silver rounded-[10px] bg-gallery-white p-4 shadow-2xl">
            <div className="font-mono-geist text-[12px] text-apple-blue uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>WANTIK-X CRM ENTERPRISE PLATFORM</span>
              <span className="px-2 py-0.5 bg-studio-mist border border-hairline-silver rounded-[3px] text-[10px]">100% OPERATIONAL</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
              alt="Wantik-X CRM Platform Showcase" 
              className="w-full h-auto rounded-[6px] opacity-90"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="font-geist text-heading-lg text-ink tracking-tight">
            Answers to your <span className="text-apple-blue">software service</span> questions
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-hairline-silver rounded-[6px] bg-gallery-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-geist text-[16px] text-ink"
                >
                  <span>{faq.q}</span>
                  <Plus size={18} className={`text-slate transition-transform ${isOpen ? 'rotate-45 text-apple-blue' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 font-geist text-[14px] text-slate leading-relaxed border-t border-hairline-silver pt-4">
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
