import { motion, useInView, animate } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AnimatedCounter({ to, suffix = '' }: { to: number, suffix?: string }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const stats = [
  { label: 'Static Projects', value: 100, suffix: '+' },
  { label: 'Global Client Base', value: 15, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
];

const timeline = [
  { 
    year: '2022', 
    title: 'The Vision Ignites', 
    desc: 'Our journey began with a passion for innovation — launching to redefine IT and digital marketing solutions for modern businesses.',
    image: '/Roadmap-1.webp'
  },
  { 
    year: '2023', 
    title: 'Building Breakthrough Solutions', 
    desc: 'From empowering startups to scaling enterprises, we delivered custom web, IT, and digital strategies that drove exponential growth and brand success.',
    image: '/Roadmap-2.webp'
  },
  { 
    year: '2024', 
    title: 'Growth & Transformation', 
    desc: 'Pioneering innovative solutions, we partnered with businesses across industries, delivering results-driven IT and marketing strategies.',
    image: '/Roadmap-3.webp'
  },
  { 
    year: '2025', 
    title: 'Expanding Horizons', 
    desc: 'Going global with impactful projects across the UAE, Qatar, and India. We’re continuously evolving, staying ahead of tech trends to keep your business future-ready.',
    image: '/Roadmap-4.webp'
  },
];

const testimonials = [
  {
    name: 'Karim Larkamiz',
    role: 'Verkiezen Yacht',
    text: 'QadmasTech delivered a bespoke software solution that elevated our yacht rental operations. From booking automation to real-time fleet management, the system is sleek, user-friendly, and highly efficient. We couldn’t be happier with the results!',
  },
  {
    name: 'Mhd. Arshad',
    role: 'Miozoti Technologies',
    text: 'QadmasTech transformed our digital presence with a comprehensive platform that seamlessly integrates our operations. From website development to tailored digital marketing strategies, their expertise drove a 60% increase in user engagement. A true game-changer!',
  },
  {
    name: 'Abdul Hafiz',
    role: 'Founder - Redchilly',
    text: 'Partnering with QadmasTech was the best decision for our trading business. They developed a custom solution that streamlined our operations, improved inventory tracking, and boosted client satisfaction. Their support has been exceptional every step of the way!',
  }
];

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-canvas-3/80 backdrop-blur-xl p-8 rounded-3xl border border-hairline shadow-2xl w-[350px] lg:w-[450px] shrink-0 flex flex-col gap-6 mx-3">
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} fill="white" className="text-white" />
      ))}
    </div>
    <p className="text-white/80 text-sm leading-relaxed flex-1">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4 mt-2">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
        {testimonial.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
      </div>
      <div>
        <div className="text-white font-medium text-sm">{testimonial.name}</div>
        <div className="text-white/50 text-xs">{testimonial.role}</div>
      </div>
    </div>
  </div>
);

export default function About() {
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
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

      {/* Hero Section - Why QadmasTech */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[80vh] flex items-center z-10">
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
        
        {/* Floating orbs */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, top: '10%', left: '60%', background: 'radial-gradient(circle, rgba(0,197,200,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Why QadmasTech?
            </span>
            <h1 className="text-white font-bold text-5xl lg:text-6xl leading-tight mb-8">
              Why You Should <br />
              <span className="text-[#00C5C8]">Choose Our Expertise</span>
            </h1>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We provide high-end custom software development, digital marketing, and IT consulting. 
              Our team combines technical expertise with a business-first mindset to deliver 
              solutions that drive real, measurable results for our partners.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-primary font-black text-3xl mb-1">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>

            <button 
              className="px-8 py-4 rounded-full font-bold text-brand-blue-deep transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #00C5C8 0%, #00a8ab 100%)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,197,200,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div 
              className="relative rounded-3xl p-1 bg-linear-to-br from-white/10 to-transparent"
              style={{ background: 'rgba(13,21,53,0.75)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
            >
              <img src="/full-logo.png" alt="Qadmas Team" className="w-full rounded-2xl opacity-90 p-8 lg:p-16" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00C5C8]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Redesigned with Images */}
      <section 
        className="py-32 relative bg-canvas-2/30"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-24">
            <h2 className="text-white font-bold text-4xl lg:text-5xl mb-6">
              Our Company <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              At distant inhabit amongst by. Appetite welcomed interest not. Estimable education for disposing pronounce her.
              John size good plan sent old roof own. Inquietude saw understood his friendship frequently yet.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div 
              className="absolute top-sm left-[10%] right-[10%] h-[1px] hidden lg:block"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,197,200,0.3) 10%, rgba(0,197,200,0.3) 90%, transparent)' }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Year Marker */}
                  <div className="hidden lg:flex justify-center mb-16 relative">
                    <div className="w-6 h-6 rounded-full bg-canvas border-2 border-primary relative z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    </div>
                    <div className="absolute top-10 text-primary font-black text-lg">{item.year}</div>
                  </div>

                  {/* Card */}
                  <div 
                    className="bg-surface/50 rounded-3xl overflow-hidden border border-hairline group-hover:border-primary/30 transition-all duration-500 shadow-xl"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
                      <div className="lg:hidden absolute top-4 left-4 bg-primary text-canvas px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#00C5C8] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-xs">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Centric Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 80% 50%, rgba(0,48,135,0.1) 0%, transparent 50%)' }}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div 
              className="relative rounded-3xl overflow-hidden p-1 bg-white/5"
              style={{ background: 'rgba(13,21,53,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
               <img src="/full-logo.png" alt="Approach" className="w-full opacity-60 p-12 lg:p-20" />
               <div className="absolute inset-0 bg-linear-to-t from-canvas/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="order-1 lg:order-2">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Quality & Analytics
            </span>
            <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-8">
              Customer-Centric <span className="text-primary">Approach</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We prioritize understanding your specific business challenges. Every solution we build is tailored 
              to your audience, ensuring maximum engagement and return on investment.
            </p>
            
            <div className="space-y-5">
              {['Quality Assurance', 'Timely Delivery', 'Expert Support', 'Scalable Solutions', 'Innovative Designs'].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-hairline-cyan group-hover:bg-primary group-hover:text-canvas transition-all">
                    <Check size={14} />
                  </div>
                  <span className="font-medium tracking-tight">{text}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 group flex items-center gap-3 text-white font-bold hover:text-primary transition-all duration-300">
              Explore Our Process <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section - Dual Marquee Layout */}
      <section className="py-32 relative overflow-hidden bg-linear-to-b from-canvas via-surface/30 to-canvas">
        <div className="flex flex-col gap-6 relative z-10">
          
          {/* Row 1 (Scrolling Left) */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Duplicating the array multiple times to ensure smooth infinite scroll */}
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`row1-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 (Scrolling Right) */}
          <div className="flex overflow-hidden mt-2">
            <motion.div
              className="flex min-w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`row2-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
