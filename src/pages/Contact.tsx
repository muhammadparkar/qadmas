import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Zap,
  Send
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const transition: any = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition
  };

  return (
    <div className="bg-canvas min-h-screen font-sans selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <Navbar />
      
      {/* Global Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section - Contact Us */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center z-10">
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

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="w-full"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Get In Touch
            </span>
            <h1 className="text-white font-bold text-5xl lg:text-7xl leading-tight mb-8">
              Let's Start Your <br />
              <span className="text-[#00C5C8]">Digital Journey</span>
            </h1>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Have a vision? We have the expertise to build it. Reach out to us today 
              and let's discuss how we can transform your business with cutting-edge 
              technology and digital strategies.
            </p>

            <div className="flex flex-wrap gap-12">
              {[
                { label: 'Qatar Office', val: '+974 7132 8520' },
                { label: 'India Office', val: '+91 913 7886 399' },
                { label: 'Support Email', val: 'qadmas@tech.com' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-primary font-black text-xl mb-1">{item.val}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.2em]">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Card - Styled like About cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div 
              className="relative rounded-[40px] p-8 lg:p-12 overflow-hidden"
              style={{ background: 'rgba(13,21,53,0.75)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
            >
              <h3 className="text-white font-black text-3xl mb-8">Contact Details</h3>
              <div className="space-y-8">
                {[
                  { icon: <Phone size={24} />, label: "Call Us Anytime", val: ["+974 7132 8520", "+91 913 7886 399"] },
                  { icon: <Mail size={24} />, label: "Email Support", val: ["qadmastechnologies@gmail.com"] },
                  { icon: <MapPin size={24} />, label: "Global Offices", val: ["UAE | Qatar | India"] }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'group-hover:text-canvas' })}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                      {item.val.map((v, j) => (
                        <p key={j} className="text-white font-bold text-lg">{v}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00C5C8]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Form Section - Centered and High Impact */}
      <section className="py-32 relative bg-canvas-2/30">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Drop a Message
            </span>
            <h2 className="text-white font-bold text-4xl lg:text-6xl mb-6">
              Do You <span className="text-primary">Need Help?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Our experts deliver prompt, efficient solutions to meet your needs without delay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-left">
            {[
              { label: "Your Name", placeholder: "John Doe" },
              { label: "Your Email", placeholder: "john@example.com" }
            ].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 ml-1">{field.label}</label>
                <input 
                  type="text" 
                  placeholder={field.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 focus:outline-none transition-colors"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-left"
          >
            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 ml-1">Your Message</label>
            <textarea 
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 focus:outline-none transition-colors resize-none mb-10"
            />
            <button 
              className="w-full py-5 rounded-2xl font-black text-brand-blue-deep transition-all duration-300 flex items-center justify-center gap-3 group"
              style={{ background: 'linear-gradient(135deg, #00C5C8 0%, #00a8ab 100%)' }}
            >
              Send Your Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Assurance Section - Similar to Customer Centric */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div 
              className="relative rounded-[40px] overflow-hidden p-1 bg-white/5 group"
              style={{ background: 'rgba(13,21,53,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop" 
                 alt="Assurance" 
                 className="w-full opacity-60 transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-linear-to-t from-canvas/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Trust & Security
            </span>
            <h2 className="text-white font-bold text-4xl lg:text-6xl leading-tight mb-8">
              30 Days Money <br />
              <span className="text-primary">Back Guarantee</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We prioritize your success and peace of mind. Every partnership is built on trust, 
              transparency, and a commitment to delivering world-class digital results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Clock size={20} />, title: "No Time Lost" },
                { icon: <Zap size={20} />, title: "High Value" },
                { icon: <ShieldCheck size={20} />, title: "Secure Data" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-primary/30 transition-all">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-white font-bold text-sm tracking-tight">{item.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
