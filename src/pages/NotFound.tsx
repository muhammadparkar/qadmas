import { Link } from 'react-router-dom';
import { ArrowUpRight, Home } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center items-center px-6 pt-36 pb-20 relative overflow-hidden w-full bg-gallery-white">
        {/* Ambient radial glow matching hero aesthetics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-sky-100/60 via-blue-50/40 to-sky-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-[920px] mx-auto text-center space-y-7 relative z-10 w-full">
          {/* Headline */}
          <h1 className="text-[52px] sm:text-7xl md:text-8xl font-medium tracking-tight leading-none">
            <span className="text-ink">404</span>{" "}
            <span className="text-apple-blue font-serif-accent font-normal italic">not found</span>
          </h1>

          <p className="text-[15px] sm:text-[17px] text-slate font-apple max-w-xl mx-auto leading-relaxed">
            The link you followed may be broken or the URL may have been updated. Return to the homepage or speak directly with our engineering team.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/" className="btn-slide-pill group">
              <span className="relative z-10 transition-all duration-500 flex items-center gap-2">
                <Home size={15} />
                <span>Return to Home</span>
              </span>
              <span className="arrow-circle">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link
              to="/contact"
              className="btn-slide-ghost group"
            >
              <span className="relative z-10 transition-all duration-500">
                Contact Support
              </span>
              <span className="arrow-circle">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
