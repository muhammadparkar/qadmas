import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-[96px] bg-gallery-white max-w-[1200px] mx-auto px-6">
        {/* Dark Surface CTA Card */}
        <div className="border border-hairline-silver rounded-[10px] p-8 md:p-14 bg-gallery-white text-ink relative overflow-hidden text-center max-w-[900px] mx-auto shadow-2xl">
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            {/* Headline */}
            <h2 className="font-geist text-[36px] md:text-[44px] leading-[1.1] font-normal tracking-tight text-ink max-w-[700px]">
              Empowering your business with cutting-edge digital solutions.
            </h2>

            {/* Subtitle */}
            <p className="font-geist text-[16px] text-slate max-w-[560px] leading-relaxed">
              Reach out to our engineering team today to discuss custom software development, website design, enterprise ERP systems, or IT consulting.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-pricing-blue text-white hover:bg-[#0077ed] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border border-hairline-silver text-ink hover:border-apple-blue hover:text-apple-blue font-geist text-[14px] px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <Phone size={15} />
                <span>Call +974 7132 8520</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
