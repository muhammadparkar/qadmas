import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
            className="absolute inset-0 bg-canvas/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-surface border border-hairline rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left: Form */}
            <div className="flex-1 p-10 lg:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-white font-black text-3xl mb-2">Get a Quote</h2>
                  <p className="text-white/40 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors md:hidden"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 focus:border-primary/50 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 focus:border-primary/50 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 ml-1">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 focus:border-primary/50 focus:outline-none transition-colors text-sm text-white/60">
                    <option>Website Development</option>
                    <option>Software Development</option>
                    <option>ERP Solutions</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 focus:border-primary/50 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-[#001a4d] font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right: Info (Darker side) */}
            <div className="w-full md:w-[320px] bg-white/5 p-10 lg:p-12 flex flex-col justify-between relative border-l border-white/5">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors hidden md:block"
              >
                <X size={24} />
              </button>

              <div className="space-y-8">
                <h3 className="text-white font-bold text-xl mb-6">Connect with us</h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold">+974 7132 8520</p>
                    <p className="text-white/40">Qatar Office</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold">qadmas@tech.com</p>
                    <p className="text-white/40">Inquiries</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-bold">UAE | Qatar | India</p>
                    <p className="text-white/40">Global Presence</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-white/40 text-xs leading-relaxed">
                  Trusted by 50+ companies worldwide for cutting-edge digital transformation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
