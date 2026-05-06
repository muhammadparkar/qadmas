import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 80% at 50% 70%, rgba(0,197,200,0.14) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0,48,135,0.4) 0%, transparent 55%),
          #05091a
        `,
      }}
    >
      {/* Glowing orb */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <motion.div
          style={{
            width: 600,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,197,200,0.18) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,197,200,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,197,200,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 80%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
        >
          Empowering Your Business
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold mb-6"
          style={{ fontSize: 'clamp(28px, 5vw, 54px)', letterSpacing: '-1.5px', lineHeight: 1.1 }}
        >
          Empowering Your Business with<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #00C5C8 0%, #33d4d6 60%, #7de8ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Cutting-Edge Software Solutions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-4 max-w-[640px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', lineHeight: 1.75 }}
        >
          Your Partner in Digital Success — Innovative Solutions that Drive Results.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mb-10 max-w-[680px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.75 }}
        >
          At Qadmas Technologies, we're dedicated to helping your business achieve its digital goals with tailored IT and marketing solutions. Whether you're looking to boost your online presence, enhance your IT infrastructure, or develop custom software, we offer unmatched expertise and a customer-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            id="cta-contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 45px rgba(0,197,200,0.55)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'none';
            }}
          >
            Contact Us Today <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00C5C8'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
          >
            Explore our services →
          </a>
        </motion.div>

        {/* Contact info pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Phone, label: '+974 7132 8520', sub: 'Qatar', href: 'tel:+97471328520' },
            { icon: Phone, label: '+91 913 7886 399', sub: 'India', href: 'tel:+919137886399' },
            { icon: Mail, label: 'info@qadmastechnologies.com', sub: 'Email', href: 'mailto:info@qadmastechnologies.com' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.3)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,197,200,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <Icon size={14} style={{ color: '#00C5C8' }} />
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,197,200,0.1)', color: '#00C5C8' }}>
                  {item.sub}
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
