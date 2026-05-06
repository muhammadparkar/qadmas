import { useParams, Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { 
  Check, 
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Portfolio Data
const portfolioDetails: Record<string, {
  title: string;
  projects: Array<{
    id: number;
    title: string;
    desc: string;
    image: string;
    details: {
      client: string;
      category: string;
      country: string;
      phone: string;
    };
  }>;
  highlights: string[];
}> = {
  "website-development": {
    title: "Website Development",
    projects: [
      {
        id: 1,
        title: "Website Development & Management",
        desc: "Crafting digital excellence, Qadmas Technologies proudly developed and manages the cutting-edge website for UAE-based Miozoti Technology. Our seamless design and robust functionality empower their online presence, driving growth and innovation in the tech landscape.",
        image: "/portfolio/miozoti.png", 
        details: {
          client: "MIOZOTI",
          category: "Website Development",
          country: "UAE",
          phone: "+971 58 520 0424"
        }
      },
      {
        id: 2,
        title: "Website Development",
        desc: "Crafting digital excellence, Qadmas Technologies proudly developed and manages the cutting-edge website for UAE-based Verkiezen Yachts. Our seamless design and robust functionality empower their online presence, driving growth and innovation in the tech landscape.",
        image: "/portfolio/verkiezen.png",
        details: {
          client: "Verkiezen Yachts",
          category: "Website Development",
          country: "UAE",
          phone: "+971 52 467 8745"
        }
      }
    ],
    highlights: [
      "Innovative Technology",
      "On-Time Support & Delivery",
      "Monthly/Quarterly strategy sessions",
      "Customized strategies to fit your unique business needs.",
      "24/7 Technical Assistance – Always available when you need us.",
      "Scalable Solutions – Built to grow with your business seamlessly."
    ]
  },
  "software-development": {
    title: "Software Development",
    projects: [
      {
        id: 3,
        title: "Enterprise Software Solution",
        desc: "At Qadmas Technologies, we lead with purpose and develop with precision, delivering solutions that drive business growth.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "Global Tech",
          category: "Software Development",
          country: "Qatar",
          phone: "+974 7132 8520"
        }
      }
    ],
    highlights: [
      "Custom Architecture",
      "Database Optimization",
      "Seamless API Integrations",
      "Enterprise-Grade Security"
    ]
  }
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const data = portfolioDetails[id || ""] || portfolioDetails["website-development"];
  
  const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] } as any;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition
  };

  return (
    <div className="bg-canvas min-h-screen text-white relative overflow-hidden">
      {/* Background Decor - Consistent with Portfolio/About */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      {/* Hero Header - Same style as Contact/About */}
      <section className="relative pt-40 pb-24 overflow-hidden z-10">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0, 197, 200, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 20% 40%, rgba(0, 197, 200, 0.1) 0%, transparent 50%),
              transparent
            `,
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="flex flex-col items-center text-center"
          >
            <Link 
              to="/portfolio" 
              className="group flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              </div>
              Back to Portfolio
            </Link>

             <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Case Study
            </span>
            <h1 className="text-white font-black text-6xl lg:text-8xl leading-tight">
              {data.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 space-y-40">
          {data.projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              {/* Left Side: Content & Image */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-8 space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-white font-black text-4xl lg:text-5xl">{project.title}</h2>
                  <p className="text-white/60 leading-relaxed text-lg max-w-2xl">
                    {project.desc}
                  </p>
                </div>
                
                <div className="relative rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl bg-white/5 p-1">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-[38px] transition-transform duration-700 group-hover:scale-[1.02]" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-canvas/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>

              {/* Right Side: Details Card */}
              <motion.div 
                {...fadeInUp}
                transition={{ ...transition, delay: 0.3 }}
                className="lg:col-span-4 bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-12 backdrop-blur-xl sticky top-32 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-white font-black text-3xl mb-12 relative z-10">Project Details</h3>
                <div className="space-y-8 relative z-10">
                  {[
                    { label: "Client Name", val: project.details.client },
                    { label: "Category", val: project.details.category },
                    { label: "Country", val: project.details.country },
                    { label: "Phone Number", val: project.details.phone }
                  ].map((detail, j) => (
                    <div key={j} className="border-b border-white/10 pb-6 last:border-0">
                      <p className="text-primary font-bold text-xl mb-1">{detail.val}</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{detail.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Points Section - Consistent with About Us */}
      <section className="py-32 relative bg-canvas-2/30 z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp}>
             <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Excellence in Action
            </span>
            <h2 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-8">
              Leadership & Development: Powering <span className="text-primary">Innovation with Excellence</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              At <strong>Qadmas Technologies</strong>, we lead with purpose and develop with precision, 
              delivering solutions that drive business growth. Our commitment to excellence is 
              reflected in these unique points of service:
            </p>
            
            <div className="space-y-6">
              {data.highlights.map((text: string, i: number) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-canvas transition-all">
                    <Check size={16} />
                  </div>
                  <span className="font-medium text-lg tracking-tight">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-primary font-bold mt-12 text-xl italic">
              Let's lead the way to digital transformation together.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className="relative"
          >
            <div className="bg-white/5 rounded-[50px] p-1 border border-white/10 overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                alt="Innovation" 
                className="w-full h-auto rounded-[48px] opacity-70 group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-canvas to-transparent opacity-40" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA - High Converting */}
      <section className="py-32 relative overflow-hidden z-10 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-white font-black text-5xl lg:text-7xl leading-tight mb-12 max-w-5xl mx-auto">
              Empowering Your Business with Cutting-Edge Software Solutions for a <span className="text-primary">Digital Future</span>
            </h2>
            <button 
              className="bg-[#ff3b5c] hover:bg-white hover:text-[#ff3b5c] text-white font-black px-16 py-6 rounded-full text-xl transition-all duration-300 shadow-2xl hover:shadow-[#ff3b5c]/40 group flex items-center gap-4 mx-auto"
            >
              Contact Us Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
}
