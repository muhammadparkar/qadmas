import { motion, type Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Globe,
  Code2,
  Building2,
  Mail,
  Zap,
  Settings,
  BarChart3,
  Search,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    id: "website-development",
    title: "Website Development",
    desc: "Crafting modern, responsive websites that brand, boost performance, and user experience. We build with the best web standards.",
    icon: <Globe className="text-blue-400" />,
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    id: "software-development",
    title: "Software Development",
    desc: "Building powerful, scalable, and innovative software solutions we redefine the path in software development.",
    icon: <Code2 className="text-indigo-400" />,
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    desc: "Streamlining your business operations with smart, scalable, and tailored ERP solutions that drive efficiency and growth.",
    icon: <Building2 className="text-purple-400" />,
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Turning clicks into connections and ideas into impactful digital experience, that's our approach to digital marketing.",
    icon: <BarChart3 className="text-[#00C5C8]" />,
    bg: "bg-[#00C5C8]/10",
    border: "border-[#00C5C8]/20"
  },
  {
    id: "management",
    title: "Management & More",
    desc: "Empowering businesses with seamless server management, 24/7 technical support, cutting-edge cloud solutions, and advanced cybersecurity services.",
    icon: <Settings className="text-cyan-400" />,
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  }
];

export default function Portfolio() {
  const transition: Transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition
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
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        {/* Layered Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0, 197, 200, 0.15) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 80% 50%, rgba(0, 48, 135, 0.2) 0%, transparent 55%),
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
              Portfolio
            </span>
            <h1 className="text-white font-black text-5xl lg:text-7xl leading-tight mb-8">
              Our Work <span className="text-primary">Speaks for Itself</span>
            </h1>
            <p className="body-lg text-ink-muted max-w-3xl mx-auto">
              At Qadmas Technologies, we don't just deliver projects, we craft digital masterpieces that fuel business growth. 
              From sleek websites to impactful digital campaigns, our work turns bold ideas into extraordinary outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link key={i} to={`/portfolio/${cat.id}`}>
                <motion.div 
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                  className="group bg-canvas-2/50 p-8 rounded-[40px] border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-[400px] flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      {cat.icon}
                    </div>
                    <h3 className="text-white font-black text-2xl mb-4 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      View Projects <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Abstract Shape Overlay */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 relative overflow-hidden bg-canvas-2/50">
        <div className="max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Partner Companies
            </span>
            <h2 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-8">
              Our Esteemed <span className="text-primary">Partners</span>
            </h2>
            <p className="body text-ink-muted mb-12 leading-relaxed">
              At Qadmas Technologies, we believe in the power of collaboration. We are proud 
              to partner with industry-leading companies that share our vision for innovation 
              and excellence. Together, we deliver unparalleled digital solutions and IT services.
            </p>

            <div className="opacity-80 hover:opacity-100 transition-opacity duration-500 flex justify-center">
              <img 
                src="/partners-all.png" 
                alt="Our Partners" 
                className="w-full h-auto max-w-4xl grayscale brightness-200" 
              />
            </div>
          </motion.div>
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
