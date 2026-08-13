import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6">
        {/* Dark Surface CTA Card */}
        <div className="border border-[#1b294b] rounded-[10px] p-8 md:p-14 bg-[#080d1f] text-[#eeeeee] relative overflow-hidden text-center max-w-[900px] mx-auto shadow-2xl">
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c1228] border border-[#1b294b] rounded-[3px]">
              <span className="w-2 h-2 rounded-full bg-[#00C5C8]" />
              <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
                START YOUR PROJECT WITH QADMAS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-geist text-[36px] md:text-[44px] leading-[1.1] font-normal tracking-tight text-[#eeeeee] max-w-[700px]">
              Empowering your business with cutting-edge digital solutions.
            </h2>

            {/* Subtitle */}
            <p className="font-geist text-[16px] text-[#8292b4] max-w-[560px] leading-relaxed">
              Reach out to our engineering team today to discuss custom software development, website design, enterprise ERP systems, or IT consulting.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#00C5C8] text-[#050a1a] hover:bg-[#24dcdb] font-geist text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border border-[#1b294b] text-[#eeeeee] hover:border-[#00C5C8] hover:text-[#00C5C8] font-geist text-[14px] px-6 py-3 rounded-[3px] transition-colors inline-flex items-center gap-2"
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
