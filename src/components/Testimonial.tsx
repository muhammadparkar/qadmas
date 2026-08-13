import { useState } from 'react';
import { ArrowRight, Quote, Star } from 'lucide-react';
import ContactModal from './ContactModal';

interface TestimonialProps {
  onCaseStudyClick?: () => void;
}

export default function Testimonial({ onCaseStudyClick }: TestimonialProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      name: 'Karim Larkamiz',
      role: 'Verkiezen Yacht (UAE)',
      quote: 'QadmasTech delivered a bespoke software solution that elevated our yacht rental operations. From booking automation to real-time fleet management, the system is sleek, user-friendly, and highly efficient.',
    },
    {
      name: 'Mhd. Arshad',
      role: 'Miozoti Technologies (UAE)',
      quote: 'QadmasTech transformed our digital presence with a comprehensive platform that seamlessly integrates our operations. From website development to digital marketing, their expertise drove a 60% increase in user engagement.',
    },
    {
      name: 'Abdul Hafiz',
      role: 'Founder, Redchilly Trading',
      quote: 'Partnering with QadmasTech was the best decision for our trading business. They developed a custom solution that streamlined our operations, improved inventory tracking, and boosted client satisfaction.',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <>
      <section className="py-[96px] bg-[#050a1a] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Panel */}
          <div className="lg:col-span-5 relative border border-[#1b294b] rounded-[10px] bg-[#080d1f] overflow-hidden min-h-[380px] flex flex-col justify-between p-8">
            <div className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-widest relative z-20">
              CLIENT TESTIMONIALS // 0{activeIdx + 1} OF 03
            </div>

            <div className="relative z-20 space-y-3">
              <div className="flex gap-1 text-[#00C5C8]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#00C5C8" />
                ))}
              </div>
              <h3 className="font-geist text-[26px] text-[#eeeeee] font-normal leading-tight">
                {current.name}
              </h3>
              <p className="font-mono-geist text-[12px] text-[#8292b4] uppercase">
                {current.role}
              </p>
            </div>

            <div className="relative z-20 flex gap-2 pt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIdx === i ? 'w-8 bg-[#00C5C8]' : 'w-3 bg-[#1b294b]'
                  }`}
                  aria-label={`Select testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Premium Dark Surface Card */}
          <div className="lg:col-span-7 border border-[#1b294b] rounded-[10px] p-8 md:p-10 bg-[#080d1f] text-[#eeeeee] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <Quote size={24} className="text-[#00C5C8]" />
                <span className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider font-medium">
                  CLIENT FEEDBACK
                </span>
              </div>

              <blockquote className="font-geist text-[22px] md:text-[25px] text-[#eeeeee] font-normal leading-[1.3] tracking-tight">
                &quot;{current.quote}&quot;
              </blockquote>
            </div>

            <div className="relative z-10 pt-8 border-t border-[#1b294b] flex items-center justify-between mt-8">
              <div>
                <div className="font-geist text-[16px] text-[#eeeeee] font-medium">
                  {current.name}
                </div>
                <div className="font-mono-geist text-[12px] text-[#8292b4] uppercase">
                  {current.role}
                </div>
              </div>

              <button
                onClick={onCaseStudyClick || (() => setIsModalOpen(true))}
                className="bg-[#00C5C8] text-[#050a1a] hover:bg-[#24dcdb] font-geist text-[14px] font-medium px-5 py-2.5 rounded-[3px] transition-colors inline-flex items-center gap-2"
              >
                <span>Read All Reviews</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
