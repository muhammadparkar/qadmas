import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[140px] pb-24"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0, 197, 200, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 80% 50%, rgba(0, 48, 135, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 40% 30% at 20% 60%, rgba(0, 48, 135, 0.2) 0%, transparent 50%),
          #05091a
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,197,200,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,197,200,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, top: '10%', left: '60%', background: 'radial-gradient(circle, rgba(0,197,200,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, bottom: '15%', left: '5%', background: 'radial-gradient(circle, rgba(0,48,135,0.2) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[940px] mx-auto">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(0,197,200,0.1)',
              border: '1px solid rgba(0,197,200,0.25)',
              color: '#00C5C8',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C5C8] animate-pulse" />
            UAE · Qatar · India — Est. 2020
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white font-bold mb-6 leading-[1.05]"
          style={{ fontSize: 'clamp(36px, 6vw, 68px)', letterSpacing: '-1.5px' }}
        >
          Building the Digital World<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #00C5C8 0%, #33d4d6 50%, #7de8ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            for Today and Tomorrow
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 max-w-[680px]"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: '1.7' }}
        >
          Qadmas Technologies is a leading IT and digital marketing agency serving the UAE, Qatar, and India since 2020.
          We deliver web development, software solutions, digital marketing, and IT support to help businesses succeed in a digital-first world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a
            href="#contact"
            id="hero-get-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(0,197,200,0.5)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
          >
            Get a Quote <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            id="hero-explore-services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200"
            style={{
              color: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.35)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }}
          >
            <Play size={14} fill="currentColor" /> See How Our Services Work
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <span>✦ Serving UAE, Qatar &amp; India</span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span>✦ 150+ Projects Delivered</span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span>✦ 5+ Years of Excellence</span>
        </motion.div>
      </div>

      {/* App Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[1100px] mx-auto px-6 mt-16"
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(0,197,200,0.2)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,197,200,0.1)',
            background: '#0a1230',
          }}
        >
          {/* Mock browser bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0d1535' }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div
                className="mx-auto w-[280px] h-7 rounded-md flex items-center px-3 text-xs"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}
              >
                qadmastechnologies.com
              </div>
            </div>
          </div>

          {/* Dashboard content area */}
          <div className="p-6 grid grid-cols-4 gap-4" style={{ minHeight: 320 }}>
            {/* Sidebar */}
            <div
              className="col-span-1 rounded-xl p-4 space-y-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="h-6 rounded-md" style={{ background: 'rgba(0,197,200,0.2)', width: '70%' }} />
              {['80%', '60%', '75%', '50%', '65%'].map((w, i) => (
                <div key={i} className="h-4 rounded" style={{ background: 'rgba(255,255,255,0.05)', width: w }} />
              ))}
              <div className="mt-6 space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-8 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }} />
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="col-span-3 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Active Projects', val: '24', color: '#00C5C8' },
                  { label: 'Clients Served', val: '150+', color: '#7c3aed' },
                  { label: 'Success Rate', val: '98%', color: '#10b981' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                    <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.val}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', height: 150 }}>
                <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Business Growth</div>
                <div className="flex items-end gap-2 h-20">
                  {[30, 55, 40, 80, 60, 95, 70, 110, 85, 130, 100, 145].map((h, i) => (
                    <motion.div key={i} className="flex-1 rounded-t" style={{ height: 0, background: i === 11 ? 'linear-gradient(180deg, #00C5C8, #003087)' : `rgba(0,197,200,${0.15 + (i / 11) * 0.3})` }}
                      animate={{ height: h / 1.5 }} transition={{ duration: 0.8, delay: 0.6 + i * 0.05, ease: 'easeOut' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to top, #05091a, transparent)' }} />
      </motion.div>
    </section>
  );
}
