import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#05091a' }}>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Process />
        <Pricing />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
