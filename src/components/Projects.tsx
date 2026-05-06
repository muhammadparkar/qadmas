import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Settings, Cloud, Server } from 'lucide-react';

const projects = [
  {
    id: 'app-development',
    tag: 'Application Development',
    icon: Smartphone,
    color: '#10b981',
    title: 'Mobile & Desktop App Solutions',
    desc: 'We specialise in application development, crafting powerful, intuitive, and high-performance apps tailored to your business needs. From seamless user experiences to robust backend integrations, our solutions are built to scale — delivering measurable impact across every platform.',
  },
  {
    id: 'management-support',
    tag: 'Management & Support',
    icon: Settings,
    color: '#00C5C8',
    title: 'End-to-End IT Management',
    desc: 'Our management and support services ensure your operations never skip a beat. We provide proactive monitoring, rapid incident response, and comprehensive system maintenance — so your team can focus on what matters most while we keep your technology running flawlessly.',
  },
  {
    id: 'serverless-computing',
    tag: 'Serverless Computing',
    icon: Cloud,
    color: '#7c3aed',
    title: 'Scalable Cloud-Native Architecture',
    desc: 'Harness the power of serverless computing to build agile, cost-efficient, and infinitely scalable applications. We architect cloud-native solutions that auto-scale with your demand — eliminating infrastructure overhead and accelerating your time-to-market.',
  },
  {
    id: 'web-hosting',
    tag: 'Web Hosting',
    icon: Server,
    color: '#f59e0b',
    title: 'Reliable, High-Performance Hosting',
    desc: 'We deliver enterprise-grade web hosting with 99.9% uptime guarantees, lightning-fast load times, and bulletproof security. Whether you\'re running a startup site or a high-traffic platform, our hosting solutions are engineered for reliability, speed, and peace of mind.',
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 50% 40% at 30% 50%, rgba(0,48,135,0.15) 0%, transparent 60%),
          #05091a
        `,
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Our Latest Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white font-bold"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px', lineHeight: 1.1 }}
            >
              What We've Built
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-[400px] text-sm pb-1"
            style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
          >
            Across industries, we've delivered cutting-edge solutions that drive real results for our clients.
          </motion.p>
        </div>
      </div>

      {/* Project cards */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (idx % 2) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(13,21,53,0.75)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${project.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 48px ${project.color}12`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }} />

              <div className="p-8">
                {/* Tag row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                    >
                      <Icon size={17} style={{ color: project.color }} strokeWidth={1.8} />
                    </div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: project.color }}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.4)' }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold mb-3" style={{ fontSize: '20px', letterSpacing: '-0.4px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.75 }}>
                  {project.desc}
                </p>

                {/* Mock UI preview */}
                <div
                  className="mt-8 rounded-xl p-4 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: project.color, opacity: 0.7 }} />
                    <div className="h-2 rounded" style={{ background: 'rgba(255,255,255,0.08)', width: '40%' }} />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '90%' }} />
                    <div className="h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '70%' }} />
                    <div className="h-2.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: '80%' }} />
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${project.color}18 0%, transparent 70%)` }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
