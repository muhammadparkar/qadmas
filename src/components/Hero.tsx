import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

interface HeroProps {
  onGetQuoteClick?: () => void;
}

const avatarList = [
  {
    image: "https://cdn.21st.dev/assets/localized/59a2b5a0dfc1531e2d1ea42d71ae8615f37582e1f8a17e4a1b1aff9afc7ef878.jpg",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/c7097eeb66ad097b6e5f9dbb95ae857cd6b55c0ad398c1ea84f3ab90a02c631e.jpg",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/c70d48e47d3a2d79ad07d16bff3aa3cff686580be031b6102cad73a15b47d8fd.jpg",
  },
  {
    image: "https://cdn.21st.dev/assets/localized/51c9ed392f6e7fce7fd85a78648e3e06bfdcd91999ab5fa48485888231589abf.jpg",
  },
];

export default function Hero({ onGetQuoteClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full relative">
        {/* Soft Ambient Radial Glow from 21st.dev hero-01 */}
        <div className="relative w-full pt-36 md:pt-44 pb-16 md:pb-24 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100/70 before:via-white before:to-sky-50/70 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8 text-center items-center">
              
              {/* Display Headline with Serif Accent */}
              <div className="flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-display font-medium text-ink tracking-tight leading-[1.04] max-w-[980px]"
                >
                  Building the Digital World <br className="hidden sm:inline" />
                  <span className="text-apple-blue font-serif-accent font-normal italic">
                    for Today and Tomorrow
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="text-base sm:text-lg font-normal max-w-2xl text-slate leading-relaxed"
                >
                  We architect custom software, operational ERPs, and fast web platforms from scratch. No cookie-cutter templates, no bloated retainers — just working software backed by senior engineering teams across Qatar, the UAE, and India.
                </motion.p>
              </div>

              {/* Action Button & Avatar Proof Group from hero-01 */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center flex-col sm:flex-row justify-center gap-8 pt-2"
              >
                <button
                  onClick={onGetQuoteClick}
                  className="btn-slide-pill group"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Start Your Project
                  </span>
                  <span className="arrow-circle">
                    <ArrowUpRight size={16} />
                  </span>
                </button>

                <div className="flex items-center sm:gap-4 gap-3">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="-mr-2.5 z-1 hover:z-10 transition-transform hover:scale-105">
                        <img
                          src={avatar.image}
                          alt="Client"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="sm:text-sm text-xs font-normal text-slate">
                      Trusted by 100+ GCC businesses
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
