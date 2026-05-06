import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Building2, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Settings, 
  Briefcase,
  CheckCircle2,
  Plus,
  ArrowRight,
  Database,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: "Software Development",
    desc: "Transform your ideas into reality with our software development services. We deliver scalable, secure, and innovative solutions to drive your business forward.",
    icon: <Code2 size={24} />
  },
  {
    title: "Enterprise Solutions",
    desc: "We provide comprehensive Enterprise Solution Services, including ERP systems & CRM platforms and advanced data management and analytics solutions.",
    icon: <Building2 size={24} />
  },
  {
    title: "Custom Website Development",
    desc: "Unlock your digital potential with our Custom Website Development services, leveraging cutting-edge technologies like WordPress, Shopify, and Magento.",
    icon: <Globe size={24} />
  },
  {
    title: "Application Development",
    desc: "Transform your ideas into powerful digital solutions with our Application Development services using leading technologies like Flutter, React Native, and Kotlin.",
    icon: <Smartphone size={24} />
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand's visibility and engagement with our expert Digital Marketing services. From SEO and social media management to content marketing.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "IT Support and Maintenance",
    desc: "Ensure seamless operations with our reliable IT Support and Maintenance services. We provide 24/7 monitoring, troubleshooting, and optimization.",
    icon: <Settings size={24} />
  },
  {
    title: "Business Setup - UAE",
    desc: "We offer comprehensive business setup services in the UAE, guiding you through licensing, registration, office space, and visa processing.",
    icon: <Briefcase size={24} />
  }
];

const faqs = [
  {
    q: "Do you provide support for the software you develop?",
    a: "Yes, we provide comprehensive post-launch support and maintenance packages to ensure your systems remain secure, updated, and optimized for peak performance."
  },
  {
    q: "Do you offer any discounts for long-term projects?",
    a: "We value long-term partnerships and offer flexible pricing models and volume-based discounts for multi-phase projects and ongoing service agreements."
  },
  {
    q: "What information do you need to provide a quote?",
    a: "To provide an accurate quote, we typically need your project goals, desired features, target audience, technical requirements, and an estimated timeline."
  },
  {
    q: "Can I change my plan or services after signing up?",
    a: "Yes, we understand that business needs evolve. You can easily upgrade or scale your services with us at any time as your requirements grow."
  },
  {
    q: "How do you ensure the security of our data?",
    a: "We implement industry-standard encryption, secure coding practices, regular security audits, and robust access controls to keep your data protected at all times."
  },
  {
    q: "Are your services compliant with industry standards?",
    a: "Yes, our development and operational processes align with major international standards to ensure quality, security, and reliability in everything we deliver."
  },
  {
    q: "Is there a knowledge base or documentation available?",
    a: "Absolutely. We provide detailed documentation for all custom software we build and offer access to a knowledge base for ongoing support."
  }
];

interface FAQ {
  q: string;
  a: string;
}

const AccordionItem = ({ faq, isOpen, onClick }: { faq: FAQ, isOpen: boolean, onClick: () => void }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
        isOpen ? 'bg-primary/10 border-hairline-cyan' : 'bg-surface/50 border-hairline hover:border-white/10'
      }`}
    >
      <span className="text-white font-bold text-sm text-left pr-8">{faq.q}</span>
      <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
        <Plus size={20} className={isOpen ? 'text-primary' : 'text-ink-subtle'} />
      </div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
    >
      <div className="p-6 text-white/50 text-sm leading-relaxed">
        {faq.a}
      </div>
    </motion.div>
  </div>
);

export default function Services() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" } as any
  };

  return (
    <div className="bg-canvas min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Global Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        {/* Layered Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0, 197, 200, 0.15) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 80% 50%, rgba(0, 48, 135, 0.25) 0%, transparent 55%),
              radial-gradient(ellipse 40% 30% at 20% 60%, rgba(0, 48, 135, 0.15) 0%, transparent 50%),
              transparent
            `,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,197,200,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,197,200,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 80%)',
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Services
            </span>
            <h1 className="text-white font-black text-5xl lg:text-7xl leading-tight mb-8">
              Our Provided <span className="text-[#00C5C8]">Services</span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Unlock endless possibilities with our world-class services, delivered seamlessly across the globe. 
              Elevate your business with innovation, expertise, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-surface/40 backdrop-blur-xl p-8 rounded-3xl border border-hairline hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 border border-hairline-cyan">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                {service.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden bg-canvas-2/30 border-y border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-1 bg-white/5 border border-white/10 shadow-2xl">
              <img src="/full-logo.png" alt="Working" className="w-full opacity-60 p-12 lg:p-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05091a]/80 to-transparent" />
            </div>
            {/* Abstract Orbs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00C5C8]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div {...fadeInUp}>
            <span className="text-[#00C5C8] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">How It Works</span>
            <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-8">
              Delivering Excellence in <br />
              <span className="text-[#00C5C8]">Our Services</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              At QadmasTech, we offer a wide range of services designed to elevate your business with innovation and precision.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Custom Web Development: Tailored websites and applications",
                "Digital Marketing: Result-driven strategies to boost presence",
                "Software Development: Bespoke solutions to streamline operations",
                "IT Support & Maintenance: Ongoing support for secure systems"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-white/80 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-hairline-cyan group-hover:bg-primary group-hover:text-canvas transition-all">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-medium text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-linear-to-r from-primary/10 to-transparent border border-hairline-cyan">
              <p className="text-primary font-bold text-sm">
                Committed to delivering excellence! We provide top-tier services that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: 'url("/grid-pattern.png")' }} />
        
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[#00C5C8] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Our Experience</span>
              <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-12">
                Our Experience <br />
                <span className="text-[#00C5C8]">Software Services</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="text-[#00C5C8]" />, title: "99.9% Quality Services", desc: "Delivering precision and innovation to exceed expectations." },
                  { icon: <Database className="text-[#00C5C8]" />, title: "Data Centers", desc: "Secure, scalable, and high-performance infrastructure." },
                  { icon: <Globe2 className="text-[#00C5C8]" />, title: "50+ Global Projects", desc: "Trusted worldwide across diverse industries." }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{stat.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-3xl relative">
                <img src="/full-logo.png" alt="Experience" className="w-full h-full object-cover opacity-20 p-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C5C8]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-canvas-2/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-white font-bold text-4xl mb-4">
              Answers to Your <br className="md:hidden" />
              <span className="text-[#00C5C8]"> Software Service Questions</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Empowering Your Business with Cutting-Edge Software Solutions for a Digital Future
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className="flex flex-col">
              {faqs.slice(0, 4).map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  faq={faq} 
                  isOpen={openIndex === i} 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                />
              ))}
            </div>
            <div className="flex flex-col">
              {faqs.slice(4).map((faq, i) => (
                <AccordionItem 
                  key={i + 4} 
                  faq={faq} 
                  isOpen={openIndex === i + 4} 
                  onClick={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden p-12 lg:p-20 text-center"
          >
            {/* Background for CTA */}
            <div className="absolute inset-0 bg-surface z-0" />
            <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[100px] -z-10" />
            
            <div className="relative z-10">
              <h2 className="text-white font-black text-3xl lg:text-5xl mb-10 max-w-4xl mx-auto leading-tight">
                Empowering Your Business with Cutting-Edge Software Solutions for a Digital Future
              </h2>
              <button className="px-10 py-5 rounded-full font-bold bg-primary text-canvas hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(0,197,200,0.3)]">
                Contact Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
