import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, Headset } from 'lucide-react';

export default function Features() {
  const stat = { value: '100+', label: 'Projects delivered' };

  const reasons = [
    {
      icon: Zap,
      title: 'Speed without shortcuts',
      desc: 'Agile delivery cycles and zero-downtime deployments mean you see working software in weeks, not quarters.',
    },
    {
      icon: ShieldCheck,
      title: 'Built to enterprise standards',
      desc: 'Zero-trust security, rigorous QA, and infrastructure engineered for high concurrency and long-term reliability.',
    },
    {
      icon: Headset,
      title: 'Support that stays local',
      desc: '24/7 monitoring and a team on the ground across Qatar, UAE, and India — not a support ticket into the void.',
    },
  ];

  return (
    <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center max-w-[700px] mx-auto"
      >
        <h2 className="font-geist text-heading-lg text-ink tracking-tight mb-4">
          Why Businesses Choose<br /><span className="text-apple-blue">Qadmas Technologies</span>
        </h2>
        <p className="font-geist text-[16px] text-slate">
          We bring technical precision, speed, and clean modern design to every project.
        </p>
      </motion.div>

      {/* Bento: filled stat tile + open cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 rounded-[24px] bg-apple-blue text-white p-10 flex flex-col justify-between"
        >
          <Award size={28} className="text-white/80 mb-8" />
          <div>
            <div className="font-geist text-[56px] font-semibold tracking-tight leading-none mb-2">
              {stat.value}
            </div>
            <div className="font-geist text-[16px] text-white/80">
              {stat.label} for 50+ clients across the UAE, Qatar, and India — 99.8% satisfaction.
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                className="rounded-[24px] border border-hairline-silver p-6 flex flex-col justify-between"
              >
                <Icon size={20} className="text-apple-blue mb-4" />
                <div>
                  <h3 className="font-geist text-[16px] text-ink font-medium leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="font-geist text-[13px] text-slate leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
