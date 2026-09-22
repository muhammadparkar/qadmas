import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon, Play, CheckCircle2, Cpu, Activity, ShieldCheck, Layers } from 'lucide-react';

interface HeroProps {
  onGetQuoteClick?: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'software' | 'enterprise' | 'digital'>('software');

  return (
    <section className="relative pt-32 pb-24 px-6 max-w-[1200px] mx-auto overflow-hidden bg-gallery-white">
      {/* Top Header & Copy Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-[920px] mx-auto mb-16"
      >

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sf-display text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-ink tracking-[-1.2px] leading-[1.05] mb-6 max-w-[1050px]"
        >
          Software, systems &amp; <span className="whitespace-normal md:whitespace-nowrap">websites built for</span>{' '}<br className="hidden md:inline" /><span className="text-apple-blue">ambitious enterprises</span>.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sf-text text-[17px] text-slate leading-[1.47] tracking-[-0.374px] max-w-[700px] mb-8"
        >
          From custom software to enterprise ERP and mobile engineering, Qadmas ships digital systems that scale — trusted by 50+ companies across the UAE, Qatar, India, and beyond.
        </motion.p>

        {/* Inline Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetQuoteClick}
            className="bg-pricing-blue text-white font-sf-text text-[14px] tracking-[-0.12px] px-6 py-2.5 rounded-apple-pill flex items-center gap-2"
          >
            <span>Get a Custom Quote</span>
            <Play size={14} className="fill-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetQuoteClick}
            className="border border-steel text-ink font-sf-text text-[14px] tracking-[-0.12px] px-5 py-2.5 rounded-apple-pill flex items-center gap-2"
          >
            <span>Contact Engineering</span>
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Product - Dashboard Frame previewing Qadmas Software Systems */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="dashboard-frame max-w-[1100px] mx-auto border border-hairline-silver rounded-apple-card bg-gallery-white overflow-hidden"
      >
        {/* macOS Window Header */}
        <div className="h-10 bg-studio-mist border-b border-hairline-silver px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-apple-blue inline-block opacity-90 shrink-0" />
            <div className="ml-2 sm:ml-3 flex items-center gap-2 text-slate min-w-0">
              <TerminalIcon size={13} className="text-apple-blue shrink-0" />
              <span className="font-sf-text text-[11px] uppercase tracking-wider text-slate truncate">
                <span className="sm:hidden">qadmas-core-v3.2</span>
                <span className="hidden sm:inline">qadmas-core-v3.2 — client_cluster #4109</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate shrink-0 ml-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
              <span className="font-sf-text text-[11px] uppercase text-apple-blue">ONLINE</span>
            </div>
            <span className="font-sf-text text-[11px] text-slate hidden sm:inline">100+ DEPLOYS</span>
          </div>
        </div>

        {/* Interior Control Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Sidebar */}
          <div className="lg:col-span-3 border-r border-hairline-silver bg-paper-frost p-4 flex flex-col justify-between">
            <div>
              <div className="font-sf-text text-[11px] text-slate uppercase tracking-wider mb-4 px-2">
                SOLUTIONS MODULES
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('software')}
                  className={`w-full text-left px-3 py-2 rounded-[6px] font-sf-text text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'software' ? 'bg-gallery-white text-apple-blue border border-hairline-silver' : 'text-slate hover:text-ink'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cpu size={14} className="text-apple-blue" />
                    custom-software
                  </span>
                  <span className="text-[10px] text-apple-blue">ACTIVE</span>
                </button>

                <button
                  onClick={() => setActiveTab('enterprise')}
                  className={`w-full text-left px-3 py-2 rounded-[6px] font-sf-text text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'enterprise' ? 'bg-gallery-white text-apple-blue border border-hairline-silver' : 'text-slate hover:text-ink'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers size={14} className="text-apple-blue" />
                    erp-crm-suite
                  </span>
                  <span className="text-[10px] text-steel">READY</span>
                </button>

                <button
                  onClick={() => setActiveTab('digital')}
                  className={`w-full text-left px-3 py-2 rounded-[6px] font-sf-text text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'digital' ? 'bg-gallery-white text-apple-blue border border-hairline-silver' : 'text-slate hover:text-ink'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-apple-blue" />
                    it-infrastructure
                  </span>
                  <span className="text-[10px] text-apple-blue">24/7 SLA</span>
                </button>
              </div>
            </div>

            {/* Sidebar Status Footer */}
            <div className="border-t border-hairline-silver pt-4 px-2 space-y-2">
              <div className="flex items-center justify-between font-sf-text text-[11px]">
                <span className="text-slate">GLOBAL HUBS</span>
                <span className="text-ink">UAE · QATAR · IN</span>
              </div>
              <div className="flex items-center justify-between font-sf-text text-[11px]">
                <span className="text-slate">CLIENT SATISFACTION</span>
                <span className="text-apple-blue">99.8%</span>
              </div>
            </div>
          </div>

          {/* Main Terminal / App Output */}
          <div className="lg:col-span-9 bg-gallery-white p-6 font-sf-text text-[13px] leading-relaxed overflow-x-auto flex flex-col justify-between">
            {activeTab === 'software' && (
              <div className="space-y-3">
                <div className="text-slate">
                  [00:00:01] <span className="text-ink">$ qadmas deploy --client=&quot;Miozoti Technologies&quot; --env=prod</span>
                </div>
                <div className="text-slate">
                  [00:00:02] <span className="text-steel">Initializing React + TypeScript micro-services engine...</span>
                </div>
                <div className="text-slate">
                  [00:00:03] <span className="text-apple-blue">✓ Database indexing and API gateway connected.</span>
                </div>
                <div className="p-3 bg-studio-mist border border-hairline-silver rounded-[6px] my-2">
                  <div className="flex items-center justify-between text-slate mb-2 text-[12px]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-apple-blue" />
                      VERKIEZEN YACHTS PLATFORM DEPLOYED
                    </span>
                    <span className="text-apple-blue">OPTIMIZED</span>
                  </div>
                  <div className="w-full bg-control-gray h-1.5 rounded-full overflow-hidden">
                    <div className="bg-apple-blue h-full w-[98%]" />
                  </div>
                </div>
                <div className="text-ink flex items-center gap-2">
                  <Activity size={14} className="text-apple-blue" />
                  <span>Real-time fleet tracking & booking automation live (+60% engagement)</span>
                </div>
              </div>
            )}

            {activeTab === 'enterprise' && (
              <div className="space-y-4">
                <div className="text-slate">QADMAS ENTERPRISE ERP / CRM SUITE PERFORMANCE</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-hairline-silver p-3 rounded-[6px] bg-studio-mist">
                    <div className="text-[11px] text-slate">WORKFLOW AUTOMATION</div>
                    <div className="text-[24px] text-apple-blue">100%</div>
                    <div className="text-[11px] text-apple-blue mt-1">Zero manual errors</div>
                  </div>

                  <div className="border border-hairline-silver p-3 rounded-[6px] bg-studio-mist">
                    <div className="text-[11px] text-slate">INVENTORY PRECISION</div>
                    <div className="text-[24px] text-ink">99.9%</div>
                    <div className="text-[11px] text-apple-blue mt-1">Real-time sync</div>
                  </div>

                  <div className="border border-hairline-silver p-3 rounded-[6px] bg-studio-mist">
                    <div className="text-[11px] text-slate">CLIENT RETENTION</div>
                    <div className="text-[24px] text-apple-blue">98.5%</div>
                    <div className="text-[11px] text-apple-blue mt-1">50+ Global Clients</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'digital' && (
              <div className="space-y-3">
                <div className="text-apple-blue">IT SUPPORT & MAINTENANCE DASHBOARD</div>
                <div className="text-slate">Monitoring 24/7 infrastructure across UAE, Qatar, and India</div>
                <div className="border border-hairline-silver p-4 bg-studio-mist rounded-[6px] space-y-2 text-[12px]">
                  <div className="flex justify-between border-b border-hairline-silver pb-1 text-slate">
                    <span>SERVICE MODULE</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cloud Backup & Recovery</span>
                    <span className="text-apple-blue">OPERATIONAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cybersecurity & SSL Audit</span>
                    <span className="text-apple-blue">VERIFIED SECURE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UAE & Qatar Business Setup Support</span>
                    <span className="text-apple-blue">ACTIVE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="border-t border-hairline-silver pt-3 flex items-center justify-between text-[11px] text-slate mt-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-apple-blue" />
                QADMAS SERVERS: ALL SYSTEMS OPERATIONAL
              </span>
              <span>UAE · QATAR · INDIA</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
