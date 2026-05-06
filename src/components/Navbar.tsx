import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(5, 9, 26, 0.92)'
            : 'rgba(5, 9, 26, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0,197,200,0.12)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6 xl:px-12 h-[64px] flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0 mt-2 pt-2" id="nav-logo">
            <img 
              src="/full-logo.png" 
              alt="Qadmas Technologies Logo" 
              className="h-[180px] w-auto" 
            />
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full relative flex items-center justify-center group whitespace-nowrap"
                  style={{ color: active ? '#fff' : 'rgba(255,255,255,0.65)' }}
                >
                  {link.label}
                  {active && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute bottom-[2px] left-4 right-4 h-[2px] bg-[#00C5C8]" 
                      style={{ boxShadow: '0 0 10px #00C5C8' }}
                    />
                  )}
                  {!active && (
                    <div className="absolute bottom-[2px] left-4 right-4 h-[2px] bg-[#00C5C8] opacity-0 group-hover:opacity-50 transition-opacity" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              id="nav-get-started"
              className="text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #00C5C8 0%, #00a8ab 100%)',
                color: '#001a4d',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(0,197,200,0.45)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className="md:hidden py-4 px-6 flex flex-col gap-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(8,14,36,0.98)' }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-2 flex items-center justify-between"
                  style={{ color: active ? '#00C5C8' : 'rgba(255,255,255,0.75)' }}
                >
                  {link.label}
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-[#00C5C8]" />}
                </Link>
              );
            })}
            <button
              className="mt-2 text-sm font-bold py-3 px-4 rounded-full text-center"
              style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
