import { Phone, Mail, MapPin, Send, Terminal, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-gallery-white min-h-screen font-geist text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">

        <h1 className="font-geist text-display font-normal text-ink tracking-tight leading-none mb-6">
          Connect with our <span className="text-apple-blue">engineering team</span>
        </h1>

        <p className="font-geist text-[16px] text-slate leading-relaxed max-w-[640px] mx-auto">
          Have a vision for your software, website, or enterprise ERP? Reach out to our team Operating in (Qatar, UAE, India).
        </p>
      </section>

      {/* Trust & Guarantee Showcase Banner with Left Section Image */}
      <section className="py-[64px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-hairline-silver rounded-[10px] bg-gallery-white p-6 md:p-8 shadow-2xl">
          {/* Left Guarantee Showcase Image */}
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop" 
              alt="Qadmas Quality Guarantee & Trust" 
              className="w-full h-auto rounded-[6px] opacity-90 border border-hairline-silver"
            />
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-studio-mist border border-hairline-silver rounded-[3px]">
              <ShieldCheck size={14} className="text-apple-blue" />
              <span className="font-mono-geist text-[11px] uppercase text-apple-blue tracking-wider">
                100% SERVICE GUARANTEE
              </span>
            </div>

            <h3 className="font-geist text-[26px] md:text-[32px] text-ink leading-tight font-normal">
              Engineering Guarantee & SLA Commitment
            </h3>

            <p className="font-geist text-[15px] text-slate leading-relaxed">
              We guarantee 24-hour initial response times, strict zero-downtime deployments, transparent pricing in Qatari Riyal (QR), and dedicated post-launch maintenance for every client across Qatar, UAE, and India.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Direct Details Grid */}
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6 border-t border-hairline-silver">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-8 border border-hairline-silver rounded-[10px] bg-gallery-white p-8 md:p-12 space-y-6">
            <h2 className="font-geist text-[28px] text-ink font-normal tracking-tight">
              Submit an Inquiry
            </h2>
            <p className="font-geist text-[14px] text-slate">
              Fill out the form below and we will get back to you within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-geist text-[11px] uppercase text-slate mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full bg-gallery-white border border-hairline-silver rounded-[3px] px-4 py-3 font-geist text-[14px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono-geist text-[11px] uppercase text-slate mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="info@qadmastechnologies.com"
                    className="w-full bg-gallery-white border border-hairline-silver rounded-[3px] px-4 py-3 font-geist text-[14px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-geist text-[11px] uppercase text-slate mb-1.5">
                  Project Overview & Requirements
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project goals, desired features, or estimated timeline..."
                  className="w-full bg-gallery-white border border-hairline-silver rounded-[3px] px-4 py-3 font-geist text-[14px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none resize-none"
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
          <div className="lg:col-span-4 border border-hairline-silver rounded-[10px] p-8 bg-gallery-white text-ink space-y-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-hairline-silver pb-3">
                <Terminal size={18} className="text-apple-blue" />
                <span className="font-mono-geist text-[12px] uppercase tracking-wider text-apple-blue font-medium">
                  CALL US ANYTIME & DIRECT CONTACT
                </span>
              </div>

              <div className="space-y-4 font-mono-geist text-[12px]">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-apple-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="text-ink font-medium">+974 7132 8520</div>
                    <div className="text-slate text-[11px]">QATAR OFFICE</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-apple-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="text-ink font-medium">+91 913 7886 399</div>
                    <div className="text-slate text-[11px]">INDIA OFFICE</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-apple-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="text-ink font-medium">info@qadmastechnologies.com</div>
                    <div className="text-slate text-[11px]">PRIMARY EMAIL</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-apple-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="text-ink font-medium">Operating in (Qatar, UAE, India)</div>
                    <div className="text-slate text-[11px]">REGIONAL PRESENCE</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-hairline-silver font-mono-geist text-[11px] text-slate">
              <div className="text-apple-blue font-medium mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
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
