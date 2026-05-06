import { motion } from 'framer-motion';

const logos = [
  { name: 'TechCorp', abbr: 'TC' },
  { name: 'InnovateLabs', abbr: 'IL' },
  { name: 'NexGen', abbr: 'NG' },
  { name: 'CloudSys', abbr: 'CS' },
  { name: 'DataFlow', abbr: 'DF' },
  { name: 'WebForge', abbr: 'WF' },
];

export default function LogoStrip() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: '#05091a', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Trusted by innovative companies worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2.5 transition-all duration-300"
              style={{ opacity: 0.45 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.45'; }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black"
                style={{ background: 'rgba(0,197,200,0.12)', color: '#00C5C8', border: '1px solid rgba(0,197,200,0.2)' }}
              >
                {logo.abbr[0]}
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
