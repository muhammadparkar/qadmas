import { Check, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { label: 'Delivered production systems', value: '100+' },
  { label: 'Active regional hubs', value: '3 (QA · UAE · IN)' },
  { label: 'Years in continuous production', value: '4+' },
];

const principles = [
  {
    title: 'Direct Senior Engineering Access',
    desc: 'You work with the actual engineers architecting your database and writing your frontend. No non-technical account managers playing telephone with your requirements.',
  },
  {
    title: 'Milestone-Based Fixed Pricing',
    desc: 'Every project begins with a clear technical roadmap and fixed scope. You review working staging builds before milestone signoffs — zero hidden retainer traps.',
  },
  {
    title: 'Total Code & Asset Ownership',
    desc: 'From the initial Git commit, all source code, Docker configs, and database schemas belong 100% to you. We never lock you into proprietary black boxes.',
  },
  {
    title: 'Real Ground Support in the GCC',
    desc: 'Whenever you need in-person planning, requirement sessions, or critical deployment support, our leadership is physically present in Qatar and the UAE.',
  },
];

export default function About() {
  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[900px] mx-auto">
          Built in the Gulf. <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            Engineered for real-world reliability.
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[680px] mx-auto mb-12">
          We founded Qadmas Technologies after watching too many businesses across Qatar and the UAE get burned by agencies that overpromise, outsource to invisible subcontractors, and vanish after receiving their deposit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[840px] mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-3xl border border-slate-200/80 p-6 bg-white text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="font-apple text-[36px] font-bold text-apple-blue leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-apple text-[13px] text-slate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Statement Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
              &ldquo;Software shouldn’t be a <span className="text-apple-blue font-serif-accent font-normal italic">black box</span>&rdquo;
            </h2>

            <div className="space-y-4 font-apple text-[16px] text-slate leading-relaxed">
              <p className="text-ink font-medium text-[18px]">
                A note from our founder:
              </p>
              <p>
                When a business owner commissions custom software, they aren&apos;t buying code — they are investing in the backbone of their operations. Whether it&apos;s managing a multi-warehouse inventory across three countries or booking luxury yacht charters in the UAE, downtime or bad architecture costs real money.
              </p>
              <p>
                At Qadmas, we established two strict rules from day one: First, no junior outsourcing games. Second, total transparency on delivery dates, system architecture, and code ownership.
              </p>
              <p>
                We treat every system we build as if our own business depended on it. That is why over 90% of our clients stay on long-term support agreements with us year after year.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 font-apple">
              <div className="text-ink text-[16px] font-semibold">Tauqeer Dadarkar</div>
              <div className="text-slate text-[13px]">Founder &amp; Lead Systems Architect, Qadmas Technologies</div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-slate-200/80 p-8 bg-white space-y-6 shadow-xl">
            <div className="font-apple text-[15px] font-semibold text-ink flex items-center gap-2 border-b border-slate-200/80 pb-3.5">
              <Cpu size={16} className="text-apple-blue" />
              <span>The Gulf-India Engineering Corridor</span>
            </div>

            <p className="font-apple text-[14px] text-slate leading-relaxed">
              Our unique operating model combines on-the-ground project architects across Qatar and the UAE with high-velocity engineering hubs in India. You get GCC commercial understanding paired with deep engineering talent and rapid development cycles.
            </p>

            <div className="space-y-3 font-apple text-[14px] pt-2">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0 mt-2" />
                <span className="text-slate"><strong className="text-ink font-medium">Qatar &amp; the UAE:</strong> Project management, technical scoping, and GCC client alignment.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0 mt-2" />
                <span className="text-slate"><strong className="text-ink font-medium">India Engineering Labs:</strong> Full-stack development, database optimization, and automated testing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0 mt-2" />
                <span className="text-slate"><strong className="text-ink font-medium">24/7 SLA Support:</strong> Direct engineer access and rapid incident resolution.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-slide-pill w-full justify-center group"
              >
                <span className="relative z-10 transition-all duration-500">
                  Speak With Tauqeer &amp; The Team
                </span>
                <span className="arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            How we protect <span className="text-apple-blue font-serif-accent font-normal italic">your investment</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 hover:border-apple-blue/50 hover:shadow-lg transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-apple-blue/10 border border-apple-blue/20 flex items-center justify-center text-apple-blue shrink-0">
                  <Check size={16} />
                </div>
                <h3 className="font-apple text-[18px] font-semibold text-ink">
                  {p.title}
                </h3>
              </div>
              <p className="font-apple text-[14px] text-slate leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
