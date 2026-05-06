import { motion } from 'framer-motion';
import { Check, Zap, Star } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: '480',
    currency: 'QR/month',
    period: 'Billed monthly',
    tagline: 'Ideal for small businesses getting started',
    highlight: false,
    badge: null,
    features: [
      'Core ERP modules',
      'Up to 5 user accounts',
      'Basic CRM functionality',
      'Standard reporting dashboard',
      'Email support',
      'Monthly data backups',
      // Space reserved for more features
    ],
    comingSoon: true,
  },
  {
    name: 'Professional',
    price: '580',
    currency: 'QR/month',
    period: 'Billed monthly',
    tagline: 'Perfect for growing businesses',
    highlight: true,
    badge: 'Best Value',
    features: [
      'All Standard features',
      'Up to 15 user accounts',
      'Advanced CRM & pipeline',
      'Custom reporting tools',
      'Priority email & chat support',
      'Weekly data backups',
      'API integrations',
      // Space reserved for more features
    ],
    comingSoon: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: 'Contact for pricing',
    tagline: 'For large-scale operations',
    highlight: false,
    badge: null,
    features: [
      'All Professional features',
      'Unlimited user accounts',
      'Full ERP & CRM suite',
      'AI-powered analytics',
      'Dedicated account manager',
      '24/7 premium support',
      'Daily data backups',
      'Custom integrations',
      // Space reserved for more features
    ],
    comingSoon: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 50% 40% at 80% 50%, rgba(0,48,135,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 40% 30% at 20% 50%, rgba(0,197,200,0.06) 0%, transparent 60%),
          #05091a
        `,
      }}
    >
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 mb-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
        >
          A Plan for Every Need
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px', lineHeight: 1.1 }}
        >
          Our Prebuilt<br />
          <span style={{ color: '#00C5C8' }}>ERP / CRM Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-[520px] mx-auto text-base mb-4"
          style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}
        >
          Ready-to-deploy ERP & CRM solutions tailored for businesses across UAE, Qatar, and India.
        </motion.p>
        {/* More features coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: 'rgba(245,158,11,0.9)' }}
        >
          <Star size={11} fill="currentColor" /> More features being added soon — stay tuned!
        </motion.div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-12">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative rounded-2xl flex flex-col"
            style={{
              background: plan.highlight
                ? 'linear-gradient(145deg, rgba(0,197,200,0.1) 0%, rgba(0,48,135,0.18) 100%)'
                : 'rgba(13,21,53,0.8)',
              border: plan.highlight
                ? '1px solid rgba(0,197,200,0.3)'
                : '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              boxShadow: plan.highlight ? '0 0 60px rgba(0,197,200,0.1)' : 'none',
            }}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                <span
                  className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #00C5C8, #003087)', color: '#fff' }}
                >
                  <Zap size={10} fill="white" /> {plan.badge}
                </span>
              </div>
            )}

            <div className="p-8 flex flex-col flex-1">
              {/* Plan name & tagline */}
              <div className="mb-6">
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: plan.highlight ? '#00C5C8' : 'rgba(255,255,255,0.85)' }}
                >
                  {plan.name}
                </h3>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-white font-black" style={{ fontSize: '44px', letterSpacing: '-1.5px' }}>
                  {plan.price}
                </span>
                <span className="text-base font-bold ml-1" style={{ color: plan.highlight ? '#00C5C8' : 'rgba(255,255,255,0.5)' }}>
                  {plan.currency}
                </span>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{plan.period}</div>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: plan.highlight ? 'rgba(0,197,200,0.15)' : 'rgba(255,255,255,0.06)',
                        border: plan.highlight ? '1px solid rgba(0,197,200,0.3)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Check size={11} style={{ color: plan.highlight ? '#00C5C8' : 'rgba(255,255,255,0.5)' }} strokeWidth={3} />
                    </span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* "More features coming" placeholder */}
              <div
                className="mb-8 px-4 py-3 rounded-xl text-xs text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                ✦ &nbsp;More features coming soon
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                id={`pricing-${plan.name.toLowerCase()}`}
                className="w-full py-3 rounded-full font-bold text-sm text-center transition-all duration-200 block"
                style={plan.highlight ? {
                  background: 'linear-gradient(135deg, #00C5C8, #00a8ab)',
                  color: '#001a4d',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,197,200,0.4)';
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.3)';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  if (!plan.highlight) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                  }
                }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
