import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Services from '../components/Services';
import FeaturedSystem from '../components/FeaturedSystem';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050a1a] text-[#eeeeee] font-geist selection:bg-[#00C5C8] selection:text-[#050a1a]">
      <Navbar />
      <main>
        <Hero onGetQuoteClick={() => setIsModalOpen(true)} />
        <LogoStrip />
        <Services />
        <FeaturedSystem onExploreClick={() => setIsModalOpen(true)} />
        <Features />
        <Integrations />
        <Testimonial onCaseStudyClick={() => setIsModalOpen(true)} />
        <Pricing />
        <Process />
        <Projects />
        <CTA />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
