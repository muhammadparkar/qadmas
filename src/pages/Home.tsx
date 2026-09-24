import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Services from '../components/Services';
import FeaturedSystem from '../components/FeaturedSystem';
import Integrations from '../components/Integrations';
import Testimonial from '../components/Testimonial';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gallery-white text-ink font-apple selection:bg-apple-blue selection:text-white">
      <Navbar />
      <main>
        <Hero onGetQuoteClick={() => setIsModalOpen(true)} />
        <LogoStrip />
        <Services />
        <FeaturedSystem onExploreClick={() => setIsModalOpen(true)} />
        <Integrations />
        <Testimonial onCaseStudyClick={() => setIsModalOpen(true)} />
        <Process />
        <CTA />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
