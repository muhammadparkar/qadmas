import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'DISCOVERY CALL & DISCUSSION MEETING',
    desc: 'Unlock new possibilities for your business! Join us for a Discovery Call & Discussion Meeting to explore tailored solutions and achieve your goals.',
  },
  {
    title: 'PROJECT RESEARCH & STRATEGY PLANNING',
    desc: 'We dive deep into understanding your unique business requirements, industry trends, and target audience to craft a strategic plan tailored just for you.',
  },
  {
    title: 'PLAN OF ACTION & EXECUTION',
    desc: 'Our experts develop a well-structured action plan, ensuring each phase of the project is meticulously executed for maximum impact.',
  },
  {
    title: 'ON TIME DELIVERY & OPTIMIZATION',
    desc: 'Timely delivery is our promise. We continuously monitor, optimize, and fine-tune your project to deliver outstanding results that align with your business goals.',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#05091a] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Branded Block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-tr-[100px] p-12 lg:p-20 flex flex-col justify-center items-start min-h-[450px] overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #0a1230 0%, #003087 60%, #00C5C8 100%)',
            boxShadow: '0 20px 50px rgba(0,197,200,0.15)',
          }}
        >
          {/* Subtle brand glow inside the block */}
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#00C5C8]/20 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[200px] h-[200px] rounded-full bg-black/30 blur-[60px] pointer-events-none" />

          <h2 className="text-white font-bold leading-tight mb-8 relative z-10" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1.5px' }}>
            See How Our<br />Services<br />Work for You.
          </h2>
          <a
            href="#contact"
            id="process-see-how"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 relative z-10 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(0,197,200,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            See How It Works <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Right Column - Timeline */}
        <div className="relative pl-12 lg:pl-16">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <StepItem 
                key={idx} 
                step={step} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + (index * 0.4) }}
      className="relative group"
    >
      {/* Circle Indicator - 24px wide, centered on the line (left: 0 puts its left edge at 0, which is where the line container's 11px is? No.)
          Actually, since StepItem is inside the padded container, left: 0 is at the padding edge.
          The line is at left-[11px] relative to the padded container.
          So the dot at left-0 has its center at 12px.
          12px center vs 11px line (for 2px line) is perfect.
      */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: index * 0.4 
        }}
        className="absolute -left-12 top-1.5 w-6 h-6 rounded-full border-2 border-[#00C5C8] bg-[#05091a] z-10 flex items-center justify-center"
        style={{ boxShadow: '0 0 10px rgba(0,197,200,0.3)' }}
      >
        <div className="w-2 h-2 rounded-full bg-[#00C5C8]" />
      </motion.div>

      <div>
        <h3 className="text-white font-bold text-sm tracking-widest mb-2">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
