import { motion } from 'framer-motion';
import { ArrowRight, Globe, Code2, Building2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const posts = [
    {
      id: 'website-development',
      category: 'WEBSITE DEVELOPMENT',
      title: 'High-Converting Website Development & Web Applications',
      snippet: 'Custom responsive web architecture, modern UX design, and SEO-optimized platforms for enterprises across UAE, Qatar, and global markets.',
      icon: Globe,
      client: 'WEBSITE PORTFOLIO',
    },
    {
      id: 'software-development',
      category: 'CUSTOM CRM PLATFORM',
      title: 'Wantik-X Enterprise CRM Software System',
      snippet: 'Bespoke customer relationship management platform with automated lead dispatches, client tracking, and analytics dashboards.',
      icon: Code2,
      client: 'WANTIK-X CRM',
    },
    {
      id: 'website-development',
      category: 'YACHTING PLATFORM',
      title: 'Fleet Booking & Operations for Verkiezen Yachts UAE',
      snippet: 'Bespoke yacht rental & fleet management web application in Dubai with real-time fleet availability and booking workflows.',
      icon: Smartphone,
      client: 'VERKIEZEN YACHTS',
    },
    {
      id: 'software-development',
      category: 'ENTERPRISE ERP',
      title: 'Trading & Inventory ERP for Redchilly Trading',
      snippet: 'Multi-warehouse inventory management, automated client invoicing, and supply chain tracking system for international trading.',
      icon: Building2,
      client: 'REDCHILLY TRADING',
    },
  ];

  return (
    <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
            <span className="font-mono-geist text-[12px] uppercase text-[#8292b4] tracking-[0.15em]">
              PORTFOLIO HIGHLIGHTS
            </span>
          </div>
          <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight">
            What We Have Built
          </h2>
        </div>

        <Link to="/portfolio/website-development" className="btn-ghost text-[14px] px-4 py-2.5 rounded-none flex items-center gap-2 self-start md:self-auto">
          <span>View All Work</span>
          <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* 4 Cards Grid with Framer Motion Entrance & Hover Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, idx) => {
          const Icon = post.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                to={`/portfolio/${post.id}`}
                className="card-dark group flex flex-col justify-between hover:border-[#00C5C8] transition-colors cursor-pointer h-full"
              >
                <div>
                  {/* Visual Thumbnail Header */}
                  <div className="h-[130px] bg-[#040814] border border-[#1b294b] rounded-[6px] mb-4 p-4 flex flex-col justify-between group-hover:border-[#00C5C8]/50 transition-colors">
                    <div className="flex justify-between items-center text-[#8292b4]">
                      <span className="font-mono-geist text-[11px] uppercase text-[#00C5C8]">
                        {post.category}
                      </span>
                      <Icon size={14} className="text-[#00C5C8] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="font-mono-geist text-[11px] text-[#8292b4]">
                      {post.client}
                    </div>
                  </div>

                  <h3 className="font-geist text-[18px] text-[#eeeeee] font-normal leading-snug mb-3 group-hover:text-[#00C5C8] transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-geist text-[14px] text-[#8292b4] leading-relaxed mb-6">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1b294b] flex items-center justify-between text-[#8292b4] group-hover:text-[#00C5C8] transition-colors font-geist text-[14px]">
                  <span>Inspect Work</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
