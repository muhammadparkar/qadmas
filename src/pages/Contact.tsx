import { Phone, Mail, MapPin, Send, Terminal, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-[#050a1a] min-h-screen font-geist text-[#eeeeee] selection:bg-[#00C5C8] selection:text-[#050a1a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
          <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
          <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
            GET IN TOUCH WITH QADMAS
          </span>
        </div>

        <h1 className="font-geist text-display font-normal text-[#eeeeee] tracking-tight leading-none mb-6">
          Connect with our engineering team
        </h1>

        <p className="font-geist text-[16px] text-[#8292b4] leading-relaxed max-w-[640px] mx-auto">
          Have a vision for your software, website, or enterprise ERP? Reach out to our team Operating in (Qatar, UAE, India).
        </p>
      </section>

      {/* Trust & Guarantee Showcase Banner with Left Section Image */}
      <section className="py-[64px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#1b294b] rounded-[10px] bg-[#080d1f] p-6 md:p-8 shadow-2xl">
          {/* Left Guarantee Showcase Image */}
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop" 
              alt="Qadmas Quality Guarantee & Trust" 
              className="w-full h-auto rounded-[6px] opacity-90 border border-[#1b294b]"
            />
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
              <ShieldCheck size={14} className="text-[#00C5C8]" />
              <span className="font-mono-geist text-[11px] uppercase text-[#00C5C8] tracking-wider">
                100% SERVICE GUARANTEE
              </span>
            </div>

            <h3 className="font-geist text-[26px] md:text-[32px] text-[#eeeeee] leading-tight font-normal">
              Engineering Guarantee & SLA Commitment
            </h3>

            <p className="font-geist text-[15px] text-[#8292b4] leading-relaxed">
              We guarantee 24-hour initial response times, strict zero-downtime deployments, transparent pricing in Qatari Riyal (QR), and dedicated post-launch maintenance for every client across Qatar, UAE, and India.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Direct Details Grid */}
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6 border-t border-[#1b294b]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-8 border border-[#1b294b] rounded-[10px] bg-[#080d1f] p-8 md:p-12 space-y-6">
            <h2 className="font-geist text-[28px] text-[#eeeeee] font-normal tracking-tight">
              Submit an Inquiry
            </h2>
            <p className="font-geist text-[14px] text-[#8292b4]">
              Fill out the form below and we will get back to you within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-geist text-[11px] uppercase text-[#8292b4] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full bg-[#050a1a] border border-[#1b294b] rounded-[3px] px-4 py-3 font-geist text-[14px] text-[#eeeeee] placeholder-[#2b3d68] focus:border-[#00C5C8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono-geist text-[11px] uppercase text-[#8292b4] mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="info@qadmastechnologies.com"
                    className="w-full bg-[#050a1a] border border-[#1b294b] rounded-[3px] px-4 py-3 font-geist text-[14px] text-[#eeeeee] placeholder-[#2b3d68] focus:border-[#00C5C8] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-geist text-[11px] uppercase text-[#8292b4] mb-1.5">
                  Project Overview & Requirements
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project goals, desired features, or estimated timeline..."
                  className="w-full bg-[#050a1a] border border-[#1b294b] rounded-[3px] px-4 py-3 font-geist text-[14px] text-[#eeeeee] placeholder-[#2b3d68] focus:border-[#00C5C8] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-dark w-full py-3.5 rounded-[3px] flex items-center justify-center gap-2 mt-2"
              >
                <span>Send Inquiry</span>
                <Send size={15} />
              </button>
            </form>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-4 border border-[#1b294b] rounded-[10px] p-8 bg-[#080d1f] text-[#eeeeee] space-y-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-[#1b294b] pb-3">
                <Terminal size={18} className="text-[#00C5C8]" />
                <span className="font-mono-geist text-[12px] uppercase tracking-wider text-[#00C5C8] font-medium">
                  CALL US ANYTIME & DIRECT CONTACT
                </span>
              </div>

              <div className="space-y-4 font-mono-geist text-[12px]">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#00C5C8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#eeeeee] font-medium">+974 7132 8520</div>
                    <div className="text-[#8292b4] text-[11px]">QATAR OFFICE</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#00C5C8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#eeeeee] font-medium">+91 913 7886 399</div>
                    <div className="text-[#8292b4] text-[11px]">INDIA OFFICE</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#00C5C8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#eeeeee] font-medium">info@qadmastechnologies.com</div>
                    <div className="text-[#8292b4] text-[11px]">PRIMARY EMAIL</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#00C5C8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#eeeeee] font-medium">Operating in (Qatar, UAE, India)</div>
                    <div className="text-[#8292b4] text-[11px]">REGIONAL PRESENCE</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1b294b] font-mono-geist text-[11px] text-[#8292b4]">
              <div className="text-[#00C5C8] font-medium mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C5C8]" />
                <span>24/7 SUPPORT SLA</span>
              </div>
              <span>Guaranteed response within 24 hours.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
