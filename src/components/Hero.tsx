import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon, Play, CheckCircle2, Cpu, Activity, ShieldCheck, Layers } from 'lucide-react';

interface HeroProps {
  onGetQuoteClick?: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'software' | 'enterprise' | 'digital'>('software');

  return (
    <section className="relative pt-32 pb-24 px-6 max-w-[1200px] mx-auto overflow-hidden">
      {/* Top Header & Copy Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-[920px] mx-auto mb-16"
      >
        {/* Status Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C5C8] animate-pulse shrink-0" />
          <span className="font-mono-geist text-[10px] sm:text-[12px] uppercase text-[#00C5C8] tracking-wider whitespace-nowrap">
            <span className="sm:hidden">QADMAS // DIGITAL SOLUTIONS</span>
            <span className="hidden sm:inline">QADMAS TECHNOLOGIES // GLOBAL DIGITAL SOLUTIONS</span>
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-geist text-[30px] sm:text-[44px] md:text-[58px] lg:text-[68px] font-normal text-[#eeeeee] tracking-[-0.03em] leading-[1.1] mb-6 uppercase max-w-[1050px]"
        >
          <span className="whitespace-normal md:whitespace-nowrap">BUILDING DIGITAL SOLUTIONS</span>{' '}<br className="hidden md:inline" />FOR THE MODERN WORLD
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-geist text-[16px] text-[#8292b4] leading-[1.5] max-w-[700px] mb-8"
        >
          Qadmas Technologies provides enterprise software development, custom web applications, mobile engineering, and IT consulting across the UAE, Qatar, India, and global markets.
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
            className="btn-dark text-[14px] px-6 py-2.5 rounded-[3px] flex items-center gap-2"
          >
            <span>Get a Custom Quote</span>
            <Play size={14} className="fill-[#050a1a]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetQuoteClick}
            className="btn-ghost text-[14px] px-5 py-2.5 rounded-none flex items-center gap-2"
          >
            <span>Contact Engineering</span>
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Product - Dashboard macOS Frame previewing Qadmas Software Systems */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="dashboard-frame max-w-[1100px] mx-auto border border-[#1b294b] rounded-[10px] bg-[#080d1f] shadow-2xl overflow-hidden"
      >
        {/* macOS Window Header */}
        <div className="h-10 bg-[#0c1228] border-b border-[#1b294b] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#00C5C8] inline-block opacity-90 shrink-0" />
            <div className="ml-2 sm:ml-3 flex items-center gap-2 text-[#8292b4] min-w-0">
              <TerminalIcon size={13} className="text-[#00C5C8] shrink-0" />
              <span className="font-mono-geist text-[11px] uppercase tracking-wider text-[#b0c0e0] truncate">
                <span className="sm:hidden">qadmas-core-v3.2</span>
                <span className="hidden sm:inline">qadmas-core-v3.2 — client_cluster #4109</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#8292b4] shrink-0 ml-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C5C8]" />
              <span className="font-mono-geist text-[11px] uppercase text-[#00C5C8]">ONLINE</span>
            </div>
            <span className="font-mono-geist text-[11px] text-[#8292b4] hidden sm:inline">100+ DEPLOYS</span>
          </div>
        </div>

        {/* Interior Control Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Sidebar */}
          <div className="lg:col-span-3 border-r border-[#1b294b] bg-[#050a1a] p-4 flex flex-col justify-between">
            <div>
              <div className="font-mono-geist text-[11px] text-[#8292b4] uppercase tracking-wider mb-4 px-2">
                SOLUTIONS MODULES
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('software')}
                  className={`w-full text-left px-3 py-2 rounded-[3px] font-mono-geist text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'software' ? 'bg-[#0c1228] text-[#00C5C8] border border-[#1b294b]' : 'text-[#8292b4] hover:text-[#eeeeee]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cpu size={14} className="text-[#00C5C8]" />
                    custom-software
                  </span>
                  <span className="text-[10px] text-[#00C5C8]">ACTIVE</span>
                </button>

                <button
                  onClick={() => setActiveTab('enterprise')}
                  className={`w-full text-left px-3 py-2 rounded-[3px] font-mono-geist text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'enterprise' ? 'bg-[#0c1228] text-[#00C5C8] border border-[#1b294b]' : 'text-[#8292b4] hover:text-[#eeeeee]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers size={14} className="text-[#00C5C8]" />
                    erp-crm-suite
                  </span>
                  <span className="text-[10px] text-[#b0c0e0]">READY</span>
                </button>

                <button
                  onClick={() => setActiveTab('digital')}
                  className={`w-full text-left px-3 py-2 rounded-[3px] font-mono-geist text-[12px] flex items-center justify-between transition-colors ${
                    activeTab === 'digital' ? 'bg-[#0c1228] text-[#00C5C8] border border-[#1b294b]' : 'text-[#8292b4] hover:text-[#eeeeee]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#00C5C8]" />
                    it-infrastructure
                  </span>
                  <span className="text-[10px] text-[#00C5C8]">24/7 SLA</span>
                </button>
              </div>
            </div>

            {/* Sidebar Status Footer */}
            <div className="border-t border-[#1b294b] pt-4 px-2 space-y-2">
              <div className="flex items-center justify-between font-mono-geist text-[11px]">
                <span className="text-[#8292b4]">GLOBAL HUBS</span>
                <span className="text-[#eeeeee]">UAE · QATAR · IN</span>
              </div>
              <div className="flex items-center justify-between font-mono-geist text-[11px]">
                <span className="text-[#8292b4]">CLIENT SATISFACTION</span>
                <span className="text-[#00C5C8]">99.8%</span>
              </div>
            </div>
          </div>

          {/* Main Terminal / App Output */}
          <div className="lg:col-span-9 bg-[#040814] p-6 font-mono-geist text-[13px] leading-relaxed overflow-x-auto flex flex-col justify-between">
            {activeTab === 'software' && (
              <div className="space-y-3">
                <div className="text-[#8292b4]">
                  [00:00:01] <span className="text-[#eeeeee]">$ qadmas deploy --client=&quot;Miozoti Technologies&quot; --env=prod</span>
                </div>
                <div className="text-[#8292b4]">
                  [00:00:02] <span className="text-[#b0c0e0]">Initializing React + TypeScript micro-services engine...</span>
                </div>
                <div className="text-[#8292b4]">
                  [00:00:03] <span className="text-[#00C5C8]">✓ Database indexing and API gateway connected.</span>
                </div>
                <div className="p-3 bg-[#080d1f] border border-[#1b294b] rounded-[3px] my-2">
                  <div className="flex items-center justify-between text-[#b0c0e0] mb-2 text-[12px]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#00C5C8]" />
                      VERKIEZEN YACHTS PLATFORM DEPLOYED
                    </span>
                    <span className="text-[#00C5C8]">OPTIMIZED</span>
                  </div>
                  <div className="w-full bg-[#1b294b] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00C5C8] h-full w-[98%]" />
                  </div>
                </div>
                <div className="text-[#eeeeee] flex items-center gap-2">
                  <Activity size={14} className="text-[#00C5C8]" />
                  <span>Real-time fleet tracking & booking automation live (+60% engagement)</span>
                </div>
              </div>
            )}

            {activeTab === 'enterprise' && (
              <div className="space-y-4">
                <div className="text-[#b0c0e0]">QADMAS ENTERPRISE ERP / CRM SUITE PERFORMANCE</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-[#1b294b] p-3 rounded-[3px] bg-[#050a1a]">
                    <div className="text-[11px] text-[#8292b4]">WORKFLOW AUTOMATION</div>
                    <div className="text-[24px] text-[#00C5C8]">100%</div>
                    <div className="text-[11px] text-[#00C5C8] mt-1">Zero manual errors</div>
                  </div>

                  <div className="border border-[#1b294b] p-3 rounded-[3px] bg-[#050a1a]">
                    <div className="text-[11px] text-[#8292b4]">INVENTORY PRECISION</div>
                    <div className="text-[24px] text-[#eeeeee]">99.9%</div>
                    <div className="text-[11px] text-[#00C5C8] mt-1">Real-time sync</div>
                  </div>

                  <div className="border border-[#1b294b] p-3 rounded-[3px] bg-[#050a1a]">
                    <div className="text-[11px] text-[#8292b4]">CLIENT RETENTION</div>
                    <div className="text-[24px] text-[#00C5C8]">98.5%</div>
                    <div className="text-[11px] text-[#00C5C8] mt-1">50+ Global Clients</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'digital' && (
              <div className="space-y-3">
                <div className="text-[#00C5C8]">IT SUPPORT & MAINTENANCE DASHBOARD</div>
                <div className="text-[#8292b4]">Monitoring 24/7 infrastructure across UAE, Qatar, and India</div>
                <div className="border border-[#1b294b] p-4 bg-[#050a1a] rounded-[3px] space-y-2 text-[12px]">
                  <div className="flex justify-between border-b border-[#1b294b] pb-1 text-[#b0c0e0]">
                    <span>SERVICE MODULE</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cloud Backup & Recovery</span>
                    <span className="text-[#00C5C8]">OPERATIONAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cybersecurity & SSL Audit</span>
                    <span className="text-[#00C5C8]">VERIFIED SECURE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UAE & Qatar Business Setup Support</span>
                    <span className="text-[#00C5C8]">ACTIVE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="border-t border-[#1b294b] pt-3 flex items-center justify-between text-[11px] text-[#8292b4] mt-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
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
