import { Check, Star, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { label: 'DELIVERED PROJECTS', value: '100+' },
  { label: 'GLOBAL CLIENT COUNTRIES', value: '15+' },
  { label: 'YEARS EXCELLENCE', value: '3+' },
];

const testimonials = [
  {
    name: 'Karim Larkamiz',
    role: 'Verkiezen Yacht (UAE)',
    text: 'QadmasTech delivered a bespoke software solution that elevated our yacht rental operations. From booking automation to real-time fleet management, the system is sleek, user-friendly, and highly efficient.',
  },
  {
    name: 'Mhd. Arshad',
    role: 'Miozoti Technologies (UAE)',
    text: 'QadmasTech transformed our digital presence with a comprehensive platform that seamlessly integrates our operations. Their expertise drove a 60% increase in user engagement.',
  },
  {
    name: 'Abdul Hafiz',
    role: 'Founder, Redchilly Trading',
    text: 'Partnering with QadmasTech was the best decision for our trading business. They developed a custom solution that streamlined our operations, improved inventory tracking, and boosted client satisfaction.',
  },
];

export default function About() {
  return (
    <div className="bg-[#050a1a] min-h-screen font-geist text-[#eeeeee] selection:bg-[#00C5C8] selection:text-[#050a1a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
            <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
            <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
              ABOUT QADMAS TECHNOLOGIES
            </span>
          </div>

          <h1 className="font-geist text-display text-[#eeeeee] tracking-tight leading-none mb-6">
            Building digital solutions for the modern world
          </h1>

          <p className="font-geist text-[16px] text-[#8292b4] leading-relaxed max-w-[640px] mb-8">
            We provide high-end custom software development, enterprise ERP systems, mobile applications, digital marketing, and IT consulting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[700px]">
            {stats.map((stat, i) => (
              <div key={i} className="border border-[#1b294b] rounded-[6px] p-4 bg-[#080d1f] text-center">
                <div className="font-geist text-[36px] text-[#00C5C8] font-normal leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono-geist text-[11px] uppercase text-[#8292b4] tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Message from Our Founder Section (Replaces Why choose our expertise) */}
      <section className="py-[96px] bg-[#050a1a] border-t border-[#1b294b] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
              <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
              <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
                LEADERSHIP MESSAGE
              </span>
            </div>

            <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight">
              A Message from Our Founder
            </h2>

            <div className="space-y-4 font-geist text-[16px] text-[#8292b4] leading-relaxed">
              <p className="text-[#eeeeee] font-medium text-[18px]">
                Welcome to Qadmas Technologies.
              </p>
              <p>
                When we started this journey, our goal was clear: to build software and digital solutions that do more than just function — they drive meaningful growth for your business. In an era where technology evolves daily, having a reliable digital partner isn&apos;t just an advantage; it&apos;s essential.
              </p>
              <p>
                We don&apos;t just deliver projects; we invest in long-term partnerships built on trust, quality, and measurable impact.
              </p>
              <p>
                Thank you for trusting us to be a part of your journey. We look forward to helping you shape the future of your business.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1b294b] font-mono-geist">
              <div className="text-[#00C5C8] text-[16px] font-medium">- Tauqeer Dadarkar</div>
              <div className="text-[#8292b4] text-[12px] uppercase">Founder &amp; CEO, Qadmas Technologies</div>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#1b294b] rounded-[10px] p-6 bg-[#080d1f] text-[#eeeeee] shadow-2xl space-y-4">
            <div className="font-mono-geist text-[12px] uppercase text-[#00C5C8] font-medium tracking-wider flex items-center gap-2 border-b border-[#1b294b] pb-3">
              <Cpu size={16} />
              EXECUTIVE STATEMENT
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
              alt="Qadmas Technologies Leadership Team" 
              className="w-full h-auto rounded-[6px] opacity-90 border border-[#1b294b]"
            />
            <blockquote className="font-geist text-[15px] italic leading-relaxed text-[#8292b4] pt-2">
              &quot;Building long-term partnerships built on trust, engineering quality, and measurable business impact.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Customer Centric Approach Section (With Left Photo of Smiling Customers/Team) */}
      <section className="py-[96px] bg-[#050a1a] border-t border-[#1b294b] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Photo Showing Happy Customers / Smiling Team */}
          <div className="lg:col-span-6 border border-[#1b294b] rounded-[10px] p-4 bg-[#080d1f] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
              alt="Happy Smiling Customers and Team" 
              className="w-full h-auto rounded-[6px] opacity-90"
            />
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
              <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
                CUSTOMER CENTRIC APPROACH
              </span>
            </div>
            <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight">
              Customer-centric software engineering
            </h2>
            <p className="font-geist text-[16px] text-[#8292b4] leading-relaxed">
              We prioritize understanding your specific business challenges. Every solution we build is tailored to your audience, ensuring maximum engagement and return on investment.
            </p>

            <div className="space-y-3 font-mono-geist text-[13px] text-[#eeeeee]">
              {[
                'Quality Assurance & Rigorous Testing',
                'On-Time Delivery & Clear Milestones',
                '24/7 Expert Support & Maintenance',
                'Scalable Infrastructure Built for Growth',
                'Customized UI/UX & Modern Web Standards',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 border border-[#1b294b] bg-[#080d1f] p-3 rounded-[3px]">
                  <Check size={14} className="text-[#00C5C8] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[96px] bg-[#050a1a] border-t border-[#1b294b] max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
            <span className="font-mono-geist text-[12px] uppercase text-[#8292b4] tracking-[0.15em]">
              VERIFIED CLIENT REVIEWS
            </span>
          </div>
          <h2 className="font-geist text-heading-lg text-[#eeeeee] tracking-tight">
            What business leaders say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border border-[#1b294b] rounded-[10px] p-6 bg-[#080d1f] text-[#eeeeee] flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#00C5C8]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#00C5C8" />
                  ))}
                </div>
                <blockquote className="font-geist text-[15px] leading-relaxed text-[#eeeeee]">
                  &quot;{t.text}&quot;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#1b294b] mt-6">
                <div className="font-geist text-[14px] font-medium text-[#eeeeee]">{t.name}</div>
                <div className="font-mono-geist text-[11px] text-[#8292b4] uppercase">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
