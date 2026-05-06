import { motion } from 'framer-motion';
import { Code, Globe, LineChart, ShieldCheck, Database, Smartphone, Briefcase, Zap } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions built for your business processes — scalable, performant, and future-ready.',
    color: '#00C5C8',
    size: 'md:col-span-1',
    featured: false,
  },
  {
    icon: Database,
    title: 'Enterprise CRM & ERP',
    desc: 'Streamline operations with enterprise-grade tools. Workflow automation and real-time business intelligence dashboards that give you full control.',
    color: '#7c3aed',
    size: 'md:col-span-2',
    featured: true,
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Modern, responsive, high-converting websites with mobile-first design, blazing speed, and built-in SEO.',
    color: '#00C5C8',
    size: 'md:col-span-2',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform and native mobile apps with exceptional UI/UX and performance on iOS & Android.',
    color: '#10b981',
    size: 'md:col-span-1',
    featured: false,
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    desc: 'Drive traffic, engagement, and conversions with proven SEO, paid ads, and content strategies.',
    color: '#f59e0b',
    size: 'md:col-span-1',
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Security',
    desc: 'Continuous monitoring, maintenance, and security updates to keep your systems running at peak performance.',
    color: '#10b981',
    size: 'md:col-span-1',
    featured: false,
  },
  {
    icon: Briefcase,
    title: 'Business Setup (UAE)',
    desc: 'Complete support for company registration, trade licenses, and visa processes in the UAE.',
    color: '#00C5C8',
    size: 'md:col-span-1',
    featured: false,
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    desc: 'Leverage artificial intelligence and automation to reduce costs, eliminate repetitive tasks, and scale operations.',
    color: '#7c3aed',
    size: 'md:col-span-1',
    featured: false,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,197,200,0.06) 0%, transparent 60%),
          #05091a
        `,
      }}
    >
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
        >
          What We Offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px', lineHeight: 1.1 }}
        >
          Powerful features to simplify your<br />
          <span style={{ color: '#00C5C8' }}>digital journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-[540px] mx-auto text-base"
          style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}
        >
          End-to-end digital solutions designed to help your business build, scale, and optimize — all in one place.
        </motion.p>
      </div>

      {/* Cards grid */}
      <motion.div
        className="max-w-[1280px] mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.08 }}
      >
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`${feat.size} relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-pointer group`}
              style={{
                background: feat.featured
                  ? `linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(0,48,135,0.2) 100%)`
                  : 'rgba(13,21,53,0.7)',
                border: feat.featured
                  ? '1px solid rgba(124,58,237,0.3)'
                  : '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${feat.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${feat.color}15`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = feat.featured ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
              >
                <Icon size={18} style={{ color: feat.color }} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <h3 className="font-semibold text-white mb-2" style={{ fontSize: feat.featured ? '20px' : '16px', letterSpacing: '-0.3px' }}>
                {feat.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.65 }}>
                {feat.desc}
              </p>

              {/* Featured card extras */}
              {feat.featured && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Workflow Automation', 'Business Intelligence', 'Real-time Reports', 'CRM Integration'].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-2 rounded-lg text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}

              {/* Glow accent */}
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${feat.color}20 0%, transparent 70%)` }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
