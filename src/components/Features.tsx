import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Smartphone, BarChart3, Building2, Settings, ShieldCheck, Globe } from 'lucide-react';

export default function Features() {
  const capabilities = [
    {
      icon: Code2,
      label: 'CUSTOM ARCHITECTURE',
      title: 'Scalable software engineering',
      desc: 'Bespoke web and software systems engineered for high concurrency, security, and long-term reliability.',
      codeSnippet: 'qadmas build --target=production',
    },
    {
      icon: Database,
      label: 'DATABASE & API OPTIMIZATION',
      title: 'High-speed data pipelines',
      desc: 'Optimized PostgreSQL, MongoDB, and gRPC backend endpoints with sub-millisecond query latency.',
      codeSnippet: 'qadmas db optimize --cluster=uae',
    },
    {
      icon: Smartphone,
      label: 'MOBILE APP DEVELOPMENT',
      title: 'Native iOS & Android apps',
      desc: 'Cross-platform mobile applications built using Flutter, React Native, and Kotlin with offline sync.',
      codeSnippet: 'qadmas mobile release --store=all',
    },
    {
      icon: BarChart3,
      label: 'SEO & ANALYTICS',
      title: 'Data-driven digital marketing',
      desc: 'Dominate search engines and attract high-converting leads with targeted SEO and PPC campaigns.',
      codeSnippet: 'qadmas seo audit --domain=client.com',
    },
    {
      icon: Building2,
      label: 'ENTERPRISE ERP & CRM',
      title: 'Workflow & inventory automation',
      desc: 'Streamline business operations, automate invoicing, and connect multi-warehouse inventory seamlessly.',
      codeSnippet: 'qadmas erp sync --warehouse=main',
    },
    {
      icon: Settings,
      label: '24/7 IT MAINTENANCE',
      title: 'Managed cloud & server support',
      desc: 'Round-the-clock technical monitoring, automated backups, and instant incident response SLAs.',
      codeSnippet: 'qadmas monitor status --sla=24/7',
    },
    {
      icon: ShieldCheck,
      label: 'CYBERSECURITY & AUDITING',
      title: 'Zero-trust security protection',
      desc: 'Enterprise-grade encryption, SSL auditing, and hardware credential protection for your systems.',
      codeSnippet: 'qadmas security audit --strict',
    },
    {
      icon: Globe,
      label: 'REGIONAL INFRASTRUCTURE',
      title: 'Qatar, UAE & India operations',
      desc: 'Turnkey cloud deployment, multi-region database setup, and IT integration across Qatar, UAE & India.',
      codeSnippet: 'qadmas setup verify --region=gulf',
    },
  ];

  return (
    <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center max-w-[700px] mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
          <span className="font-mono-geist text-[12px] uppercase text-[#8292b4] tracking-[0.15em]">
            QADMAS CAPABILITIES
          </span>
        </div>
        <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight mb-4">
          Why businesses choose Qadmas Technologies
        </h2>
        <p className="font-geist text-[16px] text-[#8292b4]">
          We bring technical precision, speed, and clean dark surface aesthetics to every project.
        </p>
      </motion.div>

      {/* 4x2 Card Grid with Gapless Dense Flow & Hover Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-dark group flex flex-col justify-between hover:border-[#00C5C8] transition-colors cursor-pointer"
            >
              <div>
                {/* Header Icon & Monospaced Eyebrow */}
                <div className="flex items-center justify-between mb-4 border-b border-[#1b294b] pb-3">
                  <div className="w-8 h-8 rounded-[3px] bg-[#0c1228] border border-[#1b294b] flex items-center justify-center text-[#00C5C8] group-hover:scale-110 transition-transform">
                    <Icon size={16} />
                  </div>
                  <span className="font-mono-geist text-[10px] uppercase text-[#8292b4] tracking-wider truncate max-w-[120px]">
                    {item.label}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-geist text-[18px] text-[#eeeeee] font-normal leading-snug mb-2 group-hover:text-[#00C5C8] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-geist text-[14px] text-[#8292b4] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Mini Code Terminal */}
                <div className="bg-[#040814] border border-[#1b294b] rounded-[3px] p-2.5 mb-4 font-mono-geist text-[11px] text-[#b0c0e0] truncate">
                  <span className="text-[#00C5C8]">$ </span>
                  {item.codeSnippet}
                </div>

                {/* Ghost Link Footer */}
                <div className="pt-2 border-t border-[#1b294b] flex items-center justify-between text-[#8292b4] group-hover:text-[#00C5C8] transition-colors font-geist text-[14px]">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
