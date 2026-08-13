import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShieldCheck, BarChart3, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Vector SVG Micro Tech Icons

const ReactSvg = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current inline-block shrink-0" viewBox="0 0 24 24" strokeWidth="1.8">
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" className="fill-current" />
  </svg>
);

const TypeScriptSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-1.565-.246c-.622 0-1.07.13-1.344.389-.273.26-.41.602-.41 1.026 0 .334.088.604.264.81.176.206.425.385.748.537l.797.375c.78.363 1.37.784 1.769 1.263.399.479.599 1.11.599 1.894 0 1.132-.387 2.036-1.161 2.711-.774.675-1.897 1.013-3.368 1.013a10.22 10.22 0 0 1-1.745-.16 8.528 8.528 0 0 1-1.579-.446v-2.583a6.708 6.708 0 0 0 1.583.565 5.86 5.86 0 0 0 1.616.222c.624 0 1.082-.132 1.375-.397.293-.265.44-.627.44-1.085 0-.348-.093-.632-.279-.853-.186-.22-.445-.41-.777-.57l-.809-.379c-.773-.367-1.353-.787-1.74-1.26-.386-.473-.579-1.094-.579-1.862 0-1.076.385-1.936 1.154-2.58.77-.643 1.867-.965 3.292-.965zm-8.835.253v2.302h-2.458V21.75H4.27v-9.445H1.811V9.753h6.842z"/>
  </svg>
);

const NodeJsSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M12 1.608l10.392 6v12l-10.392 6-10.392-6v-12l10.392-6zm0 2.308l-8.392 4.849v9.699l8.392 4.849 8.392-4.849v-9.699l-8.392-4.849zm-1.5 5.5h3v7h-3v-7zm1.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
  </svg>
);

const NextJsSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5l-6.8-9.8v9.8H7.5V6.5h2.2l6.8 9.8V6.5h2.2v11h-2.2z"/>
  </svg>
);

const PostgreSQLSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-4h2v4zm0-6h-2v-2h2v2z"/>
  </svg>
);

const AwsSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.31L19.5 8 12 11.69 4.5 8 12 4.31zM4 9.58l7 3.5v7.26l-7-3.5V9.58zm16 0v7.26l-7 3.5v-7.26l7-3.5z"/>
  </svg>
);

const DockerSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.956 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.073a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.714h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.073a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.119a.187.187 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.162a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm23.013 1.547c-.557-.39-1.956-.505-3.003-.23-1.02.268-1.572.766-2.128 1.488-.337-.15-.7-.265-1.08-.344-.645-.133-1.312-.133-1.957 0h-8.08c-.732 0-1.428.217-2.023.6-.33.21-.618.474-.86.776-.474.593-.728 1.332-.728 2.1 0 3.018 3.526 5.464 8.795 5.464 4.542 0 8.04-1.848 8.683-4.57 1.056.126 2.114-.14 2.825-.806.495-.465.733-1.127.556-1.78-.124-.46-.51-.898-1.002-1.242z"/>
  </svg>
);

const WordPressSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-7.65 12c0-1.48.36-2.88 1-4.11L9.75 19.3A9.97 9.97 0 0 1 4.35 12zm7.65 9.6a9.54 9.54 0 0 1-3.64-.72l3.41-9.91 3.49 9.58a9.59 9.59 0 0 1-3.26 1.05zm1.5-12.87l3.12 8.75 2.22-6.52a9.66 9.66 0 0 0-4.04-2.88l-1.3 0.65zm6.15 3.27c0 1.2-.24 2.4-.69 3.48l-2.49 7.32a9.96 9.96 0 0 0 5.18-7.8c0-1.08-.21-2.13-.6-3.12z"/>
  </svg>
);

const ShopifySvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M15.34 2.67l3.96 1.83-2.12 15.65H6.82L4.7 4.5l3.96-1.83.68.78c.57-.46 1.34-.78 2.21-.78.87 0 1.64.32 2.21.78l.58-.78zm-3.79.88c-.52 0-.96.22-1.28.57l2.56.57c-.32-.71-.76-1.14-1.28-1.14zM8.5 7h7l.5 12h-8L8.5 7z"/>
  </svg>
);

const PythonSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M11.916 0C5.748 0 6.13.027 5.76.082c-.37.055-.72.18-1.03.376-.41.26-.74.65-.92 1.13-.13.34-.14.47-.14 3.73v3.31h3.75v-1.25h1.25v2.5H4.91V6.2h-2.5v7.51h2.5v-2.5h2.5v3.76c0 3.26.01 3.39.14 3.73.18.48.51.87.92 1.13.31.196.66.321 1.03.376.37.055.752.082 6.168.082 5.416 0 5.798-.027 6.168-.082.37-.055.72-.18 1.03-.376.41-.26.74-.65.92-1.13.13-.34.14-.47.14-3.73v-3.31h-3.75v1.25h-1.25v-2.5h3.75v3.67h2.5V6.32h-2.5v2.5h-2.5V5.06c0-3.26-.01-3.39-.14-3.73-.18-.48-.51-.87-.92-1.13-.31-.196-.66-.321-1.03-.376C17.714.027 17.332 0 11.916 0zM9.41 2.5a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88zm5.18 16.5a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88z"/>
  </svg>
);

const GcpSvg = () => (
  <svg className="w-3.5 h-3.5 fill-current inline-block shrink-0" viewBox="0 0 24 24">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
  </svg>
);

// Tech Badge Helper Renderer
function renderTechBadgeIcon(techName: string) {
  switch (techName) {
    case 'REACT.JS': return <ReactSvg />;
    case 'NEXT.JS': return <NextJsSvg />;
    case 'WORDPRESS': return <WordPressSvg />;
    case 'SHOPIFY': return <ShopifySvg />;
    case 'TYPESCRIPT': return <TypeScriptSvg />;
    case 'NODE.JS': return <NodeJsSvg />;
    case 'PYTHON': return <PythonSvg />;
    case 'POSTGRESQL': return <PostgreSQLSvg />;
    case 'DOCKER': return <DockerSvg />;
    case 'AWS CLOUD': return <AwsSvg />;
    case 'GCP EDGE': return <GcpSvg />;
    case 'SEO AUDIT': case 'GOOGLE ANALYTICS': case 'PPC CAMPAIGNS': return <BarChart3 size={13} className="shrink-0" />;
    case '24/7 SLA SUPPORT': return <ShieldCheck size={13} className="shrink-0" />;
    default: return <Settings size={13} className="shrink-0" />;
  }
}

const topCategories = [
  {
    id: "website-development",
    title: "Custom Website Platforms",
    desc: "Stark, high-performance web applications built for zero-latency execution.",
    techStack: ["REACT.JS", "NEXT.JS", "WORDPRESS", "SHOPIFY"],
    icon: ReactSvg,
  },
  {
    title: "Custom Software Systems",
    id: "software-development",
    desc: "Enterprise backend architecture and custom database management engines.",
    techStack: ["TYPESCRIPT", "NODE.JS", "PYTHON", "POSTGRESQL"],
    icon: TypeScriptSvg,
  },
  {
    id: "erp-solutions",
    title: "Enterprise ERP & CRM Solutions",
    desc: "Unified operational control surfaces with live telemetry and inventory automation.",
    techStack: ["WANTIK-X CRM", "ERP AUTOMATION", "DOCKER"],
    icon: DockerSvg,
  },
];

const bottomCategories = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Analytics",
    desc: "Data-driven search engine optimization, PPC, and brand growth campaigns.",
    techStack: ["SEO AUDIT", "GOOGLE ANALYTICS", "PPC CAMPAIGNS"],
    icon: BarChart3,
  },
  {
    id: "management",
    title: "Managed IT & Infrastructure",
    desc: "Cloud deployment, server monitoring, security auditing, and 24/7 SLAs.",
    techStack: ["AWS CLOUD", "GCP EDGE", "24/7 SLA SUPPORT"],
    icon: AwsSvg,
  }
];

export default function Portfolio() {
  return (
    <div className="bg-[#050a1a] min-h-screen font-geist text-[#eeeeee] selection:bg-[#00C5C8] selection:text-[#050a1a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
          <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
          <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
            PORTFOLIO & CASE STUDIES
          </span>
        </div>

        <h1 className="font-geist text-display font-normal text-[#eeeeee] tracking-tight leading-none mb-6">
          Our work speaks for itself
        </h1>

        <p className="font-geist text-[16px] text-[#8292b4] leading-relaxed max-w-[640px] mx-auto">
          Explore production deployments, system benchmarks, and enterprise software built for leading companies across UAE, Qatar, India, and globally.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b] space-y-6">
        {/* Top 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={i} to={`/portfolio/${cat.id}`}>
                <div className="card-dark group flex flex-col justify-between hover:border-[#00C5C8] transition-colors h-[350px]">
                  <div>
                    <div className="w-10 h-10 rounded-[3px] bg-[#0c1228] border border-[#1b294b] flex items-center justify-center text-[#00C5C8] mb-6 group-hover:scale-105 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="font-geist text-[20px] text-[#eeeeee] font-normal mb-3 group-hover:text-[#00C5C8] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-geist text-[14px] text-[#8292b4] leading-relaxed mb-4">
                      {cat.desc}
                    </p>

                    {/* Tech Stack Badges Row with SVG Micro Icons */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="font-mono-geist text-[10px] uppercase bg-[#0c1228] text-[#00C5C8] border border-[#1b294b] px-2.5 py-1 rounded-[3px] flex items-center gap-1.5"
                        >
                          {renderTechBadgeIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1b294b] flex items-center justify-between text-[#8292b4] group-hover:text-[#00C5C8] transition-colors font-geist text-[14px]">
                    <span className="flex items-center gap-2">
                      Inspect Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom 2 Cards Row - Centered Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[790px] mx-auto gap-6">
          {bottomCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={i} to={`/portfolio/${cat.id}`}>
                <div className="card-dark group flex flex-col justify-between hover:border-[#00C5C8] transition-colors h-[350px]">
                  <div>
                    <div className="w-10 h-10 rounded-[3px] bg-[#0c1228] border border-[#1b294b] flex items-center justify-center text-[#00C5C8] mb-6 group-hover:scale-105 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="font-geist text-[20px] text-[#eeeeee] font-normal mb-3 group-hover:text-[#00C5C8] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-geist text-[14px] text-[#8292b4] leading-relaxed mb-4">
                      {cat.desc}
                    </p>

                    {/* Tech Stack Badges Row with SVG Micro Icons */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="font-mono-geist text-[10px] uppercase bg-[#0c1228] text-[#00C5C8] border border-[#1b294b] px-2.5 py-1 rounded-[3px] flex items-center gap-1.5"
                        >
                          {renderTechBadgeIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1b294b] flex items-center justify-between text-[#8292b4] group-hover:text-[#00C5C8] transition-colors font-geist text-[14px]">
                    <span className="flex items-center gap-2">
                      Inspect Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
