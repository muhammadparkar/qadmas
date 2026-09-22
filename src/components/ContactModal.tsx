import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService || 'Custom Software Development');

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gallery-white/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="ambient-lift relative w-full max-w-4xl max-h-[92vh] bg-gallery-white rounded-[28px] overflow-y-auto flex flex-col md:flex-row text-ink"
          >
            {/* Left Form Panel */}
            <div className="flex-1 p-8 md:p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-geist text-[32px] text-ink font-normal tracking-tight">
                    Get a Free Quote
                  </h2>
                  <p className="font-geist text-[14px] text-slate mt-1">
                    Fill out the form below and our engineering team will respond within 24 hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate hover:text-ink transition-colors md:hidden"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-5 pt-2" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-geist text-[13px] text-slate mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full bg-transparent border-b border-hairline-silver pb-2.5 font-geist text-[15px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-geist text-[13px] text-slate mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-b border-hairline-silver pb-2.5 font-geist text-[15px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-geist text-[13px] text-slate mb-1.5">
                    Service / Package Type
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-transparent border-b border-hairline-silver pb-2.5 font-geist text-[15px] text-ink focus:border-apple-blue focus:outline-none transition-colors"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Enterprise CRM / ERP Solutions">Enterprise CRM / ERP Solutions</option>
                    <option value="Custom Website Development">Custom Website Development</option>
                    <option value="Mobile Application Development (iOS/Android)">Mobile Application Development (iOS/Android)</option>
                    <option value="Digital Marketing & SEO Growth">Digital Marketing & SEO Growth</option>
                    <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                    <option value="Standard Package (680 QR / mo)">Standard Package (680 QR / mo)</option>
                    <option value="Professional Package (850 QR / mo)">Professional Package (850 QR / mo)</option>
                    <option value="Enterprise Package (2,500 QR / mo)">Enterprise Package (2,500 QR / mo)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-geist text-[13px] text-slate mb-1.5">
                    Project Overview / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project goals, desired features, or estimated timeline..."
                    className="w-full bg-transparent border-b border-hairline-silver pb-2.5 font-geist text-[15px] text-ink placeholder-steel focus:border-apple-blue focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-dark py-3.5 rounded-full flex items-center justify-center gap-2 mt-4"
                >
                  <span>Send Inquiry</span>
                  <Send size={14} />
                </button>
              </form>
            </div>

            {/* Right Information Sidebar */}
            <div className="w-full md:w-[320px] bg-studio-mist/50 p-8 flex flex-col justify-between relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 text-slate hover:text-ink transition-colors hidden md:block"
              >
                <X size={20} />
              </button>

              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/full-logo.png"
                    alt="Qadmas"
                    className="h-8 w-auto object-contain"
                  />
                </div>

                <div className="space-y-5 font-geist text-[14px]">
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">+974 7132 8520</div>
                      <div className="text-slate text-[13px]">Qatar office</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">+91 913 7886 399</div>
                      <div className="text-slate text-[13px]">India office</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">info@qadmastechnologies.com</div>
                      <div className="text-slate text-[13px]">Inquiries &amp; support</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-apple-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-ink">Operating in Qatar, UAE, India</div>
                      <div className="text-slate text-[13px]">Regional hub presence</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-hairline-silver font-geist text-[13px] text-slate">
                <div className="text-apple-blue font-medium mb-1">50+ global clients</div>
                <span>Trusted worldwide for cutting-edge digital transformation.</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
