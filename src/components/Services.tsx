import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code, Globe, LineChart, ShieldCheck, Database, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'We craft bespoke software solutions engineered for your unique business processes — scalable, robust, and built to evolve with your operations.',
    color: '#00C5C8',
    id: 'software-dev',
  },
  {
    icon: Database,
    title: 'Enterprise Solutions',
    desc: 'Streamline complex workflows with enterprise-grade ERP and CRM platforms. From automation to real-time business intelligence, we connect your entire operation.',
    color: '#7c3aed',
    id: 'enterprise',
  },
  {
    icon: Globe,
    title: 'Custom Web Development',
    desc: 'We design and build modern, responsive, high-converting websites — mobile-first, lightning-fast, and SEO-optimised to drive real business results.',
    color: '#00C5C8',
    id: 'web-dev',
  },
  {
    icon: Smartphone,
    title: 'Application Development',
    desc: 'From intuitive iOS and Android apps to cross-platform solutions, we deliver mobile experiences that engage users and accelerate growth.',
    color: '#10b981',
    id: 'app-dev',
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    desc: 'Amplify your brand with data-driven SEO, PPC, social media, and content strategies that attract the right audience and convert them into loyal customers.',
    color: '#f59e0b',
    id: 'digital-marketing',
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Maintenance',
    desc: 'Keep your systems at peak performance with 24/7 monitoring, proactive maintenance, cybersecurity updates, and dedicated technical support.',
    color: '#10b981',
    id: 'it-support',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * (index % 2) }}
      className="relative rounded-2xl p-7 flex flex-col cursor-pointer group"
      style={{
        background: 'rgba(13,21,53,0.75)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${service.color}50`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${service.color}18`;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
    >
      {/* Step number */}
      <span className="absolute top-4 right-5 text-xs font-mono font-bold" style={{ color: 'rgba(255,255,255,0.12)' }}>
        0{index + 1}
      </span>

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
      >
        <Icon size={20} style={{ color: service.color }} strokeWidth={1.8} />
      </div>

      <h3 className="font-semibold text-white mb-2" style={{ fontSize: '17px', letterSpacing: '-0.3px' }}>
        {service.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '14px', lineHeight: 1.7 }}>
        {service.desc}
      </p>

      {/* Glow accent on hover */}
      <div
        className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${service.color}1a 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerVisible = useInView(headerRef, { once: true, margin: '-60px' });

  // Connector dots that appear between rows
  const connectorRef1 = useRef(null);
  const connectorRef2 = useRef(null);
  const conn1Visible = useInView(connectorRef1, { once: true, margin: '-40px' });
  const conn2Visible = useInView(connectorRef2, { once: true, margin: '-40px' });

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,197,200,0.06) 0%, transparent 60%),
          #05091a
        `,
      }}
    >
      {/* Section header */}
      <div ref={headerRef} className="max-w-[1280px] mx-auto px-6 xl:px-12 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
        >
          Our Provided Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-white font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px', lineHeight: 1.1 }}
        >
          Comprehensive Solutions<br />
          <span style={{ color: '#00C5C8' }}>for Your Digital Needs</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="max-w-[540px] mx-auto text-base"
          style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}
        >
          End-to-end digital solutions that help your business build, scale, and optimise — from idea to launch and beyond.
        </motion.p>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 xl:px-12">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ServiceCard service={services[0]} index={0} />
          <ServiceCard service={services[1]} index={1} />
        </div>

        {/* Connector between row 1 and row 2 */}
        <div ref={connectorRef1} className="flex items-center gap-4 py-4 px-4">
          <motion.div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,197,200,0.25), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={conn1Visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={conn1Visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: '#00C5C8', boxShadow: '0 0 8px rgba(0,197,200,0.6)' }} />
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(0,197,200,0.4)' }} />
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(0,197,200,0.2)' }} />
          </motion.div>
          <motion.div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,197,200,0.25), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={conn1Visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ServiceCard service={services[2]} index={2} />
          <ServiceCard service={services[3]} index={3} />
        </div>

        {/* Connector between row 2 and row 3 */}
        <div ref={connectorRef2} className="flex items-center gap-4 py-4 px-4">
          <motion.div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,197,200,0.25), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={conn2Visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={conn2Visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(0,197,200,0.2)' }} />
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(0,197,200,0.4)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#00C5C8', boxShadow: '0 0 8px rgba(0,197,200,0.6)' }} />
          </motion.div>
          <motion.div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,197,200,0.25), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={conn2Visible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ServiceCard service={services[4]} index={4} />
          <ServiceCard service={services[5]} index={5} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            id="services-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(0,197,200,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
          >
            Get Started with Our Services <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
