import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService || 'Web/Apps Development');
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-slate-200/80 rounded-3xl overflow-y-auto flex flex-col md:flex-row text-ink shadow-2xl font-apple"
          >
            {/* Left Form Panel */}
            <div className="flex-1 p-8 md:p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-apple text-[26px] sm:text-[30px] font-semibold text-ink tracking-tight">
                    Start an Engineering Sprint
                  </h2>
                  <p className="font-apple text-[14px] text-slate mt-1">
                    Share your requirements. A senior architect will review and reply with options and a fixed price estimate.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-slate hover:text-ink transition-colors md:hidden"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-apple-blue/20 text-apple-blue mx-auto flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-apple text-[20px] font-semibold text-ink">Inquiry Received</h3>
                  <p className="font-apple text-[14px] text-slate max-w-sm mx-auto">
                    Thank you. A senior software engineer from our Doha or Dubai hub will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-apple text-[13px] text-ink font-medium mb-1">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-apple text-[13px] text-ink font-medium mb-1">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="tariq@company.com"
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1">
                      Project Type or Package
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 font-apple text-[14px] text-ink focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Ai - Powered CRM & ERP (Wantik-X)">Ai - Powered CRM &amp; ERP (Wantik-X)</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile Application Development">Mobile Application Development</option>
                      <option value="Standard Package (680 QR / mo)">Standard Pre-Built ERP (680 QR / mo)</option>
                      <option value="Professional Package (850 QR / mo)">Professional Suite (850 QR / mo)</option>
                      <option value="Enterprise Package (2,500 QR / mo)">Bespoke Enterprise (2,500 QR / mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1">
                      Project Goals &amp; Timeline
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you're looking to build, any current pain points, or target launch date..."
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-slide-pill justify-center text-center mt-2 group"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Submit Project Requirements
                    </span>
                    <span className="arrow-circle">
                      <Send size={14} />
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Information Sidebar */}
            <div className="w-full md:w-[280px] bg-slate-50/70 border-t md:border-t-0 md:border-l border-slate-200/80 p-8 flex flex-col justify-between relative font-apple">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-slate hover:text-ink transition-colors hidden md:block"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div className="font-apple text-[14px] font-semibold text-ink">
                  Direct Channels
                </div>

                <div className="space-y-4 font-apple text-[13px]">
                  <a
                    href="https://wa.me/97471328520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-apple-blue flex items-start gap-2.5 text-ink transition-all shadow-2xs"
                  >
                    <MessageSquare size={15} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-apple-blue">WhatsApp Chat</div>
                      <div className="text-slate text-[11px]">Instant text with engineers</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">+974 7132 8520</div>
                      <div className="text-slate text-[11px]">Qatar Office</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">+91 913 7886 399</div>
                      <div className="text-slate text-[11px]">India Hub</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail size={14} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">info@qadmastechnologies.com</div>
                      <div className="text-slate text-[11px]">Primary Inbox</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 font-mono text-[11px] text-slate mt-6">
                <div className="text-apple-blue font-medium mb-0.5 flex items-center gap-1 font-apple">
                  <ShieldCheck size={12} />
                  <span>100% Confidential</span>
                </div>
                <span>We sign bilateral NDAs before discussing proprietary business logic.</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
