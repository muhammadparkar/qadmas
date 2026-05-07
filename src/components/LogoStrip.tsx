import { motion } from 'framer-motion';

const companies = [
  { name: 'Dandoosh', abbr: 'DD', color: '#E8A838' },
  { name: 'Beauty Medical Center', abbr: 'BM', color: '#E76F8A' },
  { name: 'Techbee', abbr: 'TB', color: '#00C5C8' },
  { name: 'Catalyst Group', abbr: 'CG', color: '#7C3AED' },
  { name: 'HappyHouse Maintenance', abbr: 'HH', color: '#10B981' },
  { name: 'Red Chillies', abbr: 'RC', color: '#EF4444' },
  { name: 'Alghanim Healthcare', abbr: 'AH', color: '#3B82F6' },
  { name: 'Al Saad', abbr: 'AS', color: '#F59E0B' },
  { name: 'AMA Auto', abbr: 'AA', color: '#6366F1' },
  { name: 'Al-Hazem Auto Maint', abbr: 'AZ', color: '#14B8A6' },
  { name: 'Miozoti', abbr: 'MZ', color: '#A855F7' },
  { name: 'Northern Homes Real Estate', abbr: 'NH', color: '#0EA5E9' },
  { name: 'Arabian Yacht Company', abbr: 'AY', color: '#0284C7' },
  { name: 'Alif Marine', abbr: 'AM', color: '#06B6D4' },
  { name: 'Oufer', abbr: 'OF', color: '#EC4899' },
  { name: 'Beverly Hills Wellness', abbr: 'BH', color: '#D946EF' },
  { name: 'Ibtesam Medical Center', abbr: 'IM', color: '#22D3EE' },
  { name: 'Sarkis & Associates', abbr: 'SA', color: '#F97316' },
];

const row1 = companies.slice(0, 9);
const row2 = companies.slice(9, 18);

function LogoCard({ company }: { company: typeof companies[0] }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl shrink-0 mx-2 transition-all duration-300 group cursor-default"
      style={{
        background: 'rgba(13,21,53,0.6)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${company.color}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${company.color}15`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black tracking-tight shrink-0"
        style={{
          background: `${company.color}15`,
          color: company.color,
          border: `1px solid ${company.color}25`,
        }}
      >
        {company.abbr}
      </div>
      <span
        className="text-sm font-semibold tracking-tight whitespace-nowrap"
        style={{ color: 'rgba(255,255,255,0.7)' }}
      >
        {company.name}
      </span>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: '#05091a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Heading */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Trusted by innovative companies worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-4 relative">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #05091a, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #05091a, transparent)' }}
        />

        {/* Row 1 — scrolling left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex min-w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((c, i) => (
              <LogoCard key={`r1-${i}`} company={c} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — scrolling right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex min-w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((c, i) => (
              <LogoCard key={`r2-${i}`} company={c} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
