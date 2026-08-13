import { useParams, Link } from 'react-router-dom';
import { Check, ArrowRight, Terminal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const portfolioDetails: Record<string, {
  title: string;
  categoryDesc: string;
  projects: Array<{
    id: number;
    title: string;
    desc: string;
    image: string;
    details: {
      client: string;
      category: string;
      region: string;
    };
    link?: string;
  }>;
  highlights: string[];
}> = {
  "website-development": {
    title: "Website Development & Web Applications",
    categoryDesc: "High-performing, responsive websites and web applications built using React, Next.js, and modern cloud infrastructure.",
    projects: [
      {
        id: 1,
        title: "Platform Development for Miozoti Technology",
        desc: "Crafting digital excellence, Qadmas Technologies developed and manages the web platform for UAE-based Miozoti Technology, driving online engagement up by 60%.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
        details: {
          client: "MIOZOTI TECHNOLOGY",
          category: "Website Development",
          region: "UAE",
        }
      },
      {
        id: 2,
        title: "Fleet Booking & Operations for Verkiezen Yachts",
        desc: "Developed a luxury yacht rental & fleet management web application in Dubai with real-time availability and automated reservation workflows.",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2670&auto=format&fit=crop", 
        details: {
          client: "VERKIEZEN YACHTS",
          category: "Website & Booking System",
          region: "UAE",
        }
      },
      {
        id: 3,
        title: "Corporate Portal & Commerce Web App for Redchilly",
        desc: "High-converting corporate website and trading portal with real-time product catalogs and multi-currency inquiry routing.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "REDCHILLY TRADING",
          category: "Corporate Web App",
          region: "QATAR & INDIA",
        }
      },
      {
        id: 4,
        title: "Gulf Regional Enterprise Portal",
        desc: "Enterprise web portal connecting multi-region operations across Qatar, UAE, and India with zero-latency cloud edge distribution.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "GULF ENTERPRISE GROUP",
          category: "Enterprise Web Portal",
          region: "QATAR",
        }
      },
      {
        id: 5,
        title: "Elite Global Trading Web Application",
        desc: "Modern responsive web application featuring custom UI/UX design, interactive search tools, and automated lead capture.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
        details: {
          client: "ELITE TRADING",
          category: "Web Application",
          region: "GLOBAL",
        }
      }
    ],
    highlights: [
      "Custom responsive React & Next.js architecture",
      "Sub-second page speeds with Core Web Vitals optimization",
      "Mobile-first responsive design across all viewports",
      "SEO-optimized search engine indexing & analytics"
    ]
  },
  "software-development": {
    title: "Custom Software Development & Wantik-X CRM",
    categoryDesc: "Bespoke software systems, customer relationship management platforms, and enterprise backend engineering.",
    projects: [
      {
        id: 6,
        title: "Wantik-X Enterprise CRM Platform",
        desc: "Wantik-X CRM is a custom-engineered software platform built by Qadmas Technologies to automate customer dispatches, lead scoring, multi-tier sales pipelines, and executive reporting for high-volume enterprises.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "WANTIK-X ENTERPRISE",
          category: "Custom CRM Software",
          region: "QATAR & UAE",
        }
      },
      {
        id: 7,
        title: "Automated Workflow Engine & Microservices API",
        desc: "Zero-trust microservices architecture with automated billing dispatches, client tracking APIs, and encrypted data backup pipelines.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "QADMAS CORE PLATFORM",
          category: "Software Architecture",
          region: "GLOBAL",
        }
      }
    ],
    highlights: [
      "Wantik-X CRM custom lead management & sales pipeline",
      "High-speed API optimization with sub-millisecond queries",
      "Zero-trust security compliance & data encryption",
      "Automated executive reports & analytics dispatches"
    ]
  },
  "erp-solutions": {
    title: "Enterprise ERP & Inventory Automation",
    categoryDesc: "Multi-warehouse stock tracking, client billing, supply chain automation, and enterprise resource planning.",
    projects: [
      {
        id: 8,
        title: "Redchilly Trading Multi-Warehouse ERP",
        desc: "Comprehensive ERP system featuring multi-warehouse stock sync, automated purchase orders, commercial invoice generation, and real-time inventory telemetry.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "REDCHILLY TRADING",
          category: "Enterprise ERP",
          region: "QATAR & INDIA",
        }
      }
    ],
    highlights: [
      "Multi-warehouse inventory synchronization",
      "Automated commercial invoice & billing engine",
      "Role-based access control (RBAC) security",
      "Real-time operational dashboards"
    ]
  }
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const data = portfolioDetails[id || ""] || portfolioDetails["website-development"];

  return (
    <div className="bg-[#050a1a] min-h-screen text-[#eeeeee] font-geist selection:bg-[#00C5C8] selection:text-[#050a1a]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-[#8292b4] hover:text-[#00C5C8] transition-colors mb-6 font-mono-geist text-[12px] uppercase"
        >
          <ArrowRight size={14} className="rotate-180" />
          <span>Back to All Work</span>
        </Link>

        <h1 className="font-geist text-display font-normal text-[#eeeeee] tracking-tight leading-none mb-4">
          {data.title}
        </h1>

        <p className="font-geist text-[16px] text-[#8292b4] max-w-[620px] mx-auto leading-relaxed">
          {data.categoryDesc}
        </p>
      </section>

      {/* Projects List */}
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
        <div className="space-y-20">
          {data.projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
                  <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
                  <span className="font-mono-geist text-[11px] uppercase text-[#00C5C8] tracking-wider">
                    {project.details.category}
                  </span>
                </div>
                
                <h2 className="font-geist text-[28px] md:text-[34px] text-[#eeeeee] leading-tight font-normal">
                  {project.title}
                </h2>

                <p className="font-geist text-[16px] text-[#8292b4] leading-relaxed">
                  {project.desc}
                </p>

                <div className="border border-[#1b294b] rounded-[10px] bg-[#080d1f] p-4 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-[6px] opacity-90"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>

              {/* Right Side: Details Card */}
              <div className="lg:col-span-4 border border-[#1b294b] rounded-[10px] p-8 bg-[#080d1f] text-[#eeeeee] space-y-6 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-[#1b294b] pb-3">
                  <Terminal size={16} className="text-[#00C5C8]" />
                  <span className="font-mono-geist text-[12px] uppercase font-medium text-[#00C5C8]">PROJECT DETAILS</span>
                </div>

                <div className="space-y-4 font-mono-geist text-[12px]">
                  {[
                    { label: "CLIENT", val: project.details.client },
                    { label: "CATEGORY", val: project.details.category },
                    { label: "OPERATING REGION", val: project.details.region },
                  ].map((detail, j) => (
                    <div key={j} className="border-b border-[#1b294b] pb-2">
                      <div className="text-[#eeeeee] font-medium">{detail.val}</div>
                      <div className="text-[#8292b4] text-[10px] uppercase">{detail.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
        <h3 className="font-geist text-heading text-[#eeeeee] mb-8">Category Technical Benchmarks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-geist text-[13px]">
          {data.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3 border border-[#1b294b] bg-[#080d1f] p-4 rounded-[3px] text-[#eeeeee]">
              <Check size={14} className="text-[#00C5C8]" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
