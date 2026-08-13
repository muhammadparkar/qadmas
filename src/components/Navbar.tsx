import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to #pricing if hash matches or navigation targets pricing
  useEffect(() => {
    if (location.hash === '#pricing' || location.pathname === '/#pricing') {
      setTimeout(() => {
        const pricingEl = document.getElementById('pricing');
        if (pricingEl) {
          pricingEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  const handlePricingClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const pricingEl = document.getElementById('pricing');
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#pricing';
      }
    } else {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const pricingEl = document.getElementById('pricing');
        if (pricingEl) {
          pricingEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  };

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'PRICING', href: '#pricing', isPricing: true },
    { label: 'ABOUT US', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ];

  const isActive = (link: typeof navLinks[0]) => {
    if (link.isPricing) return location.hash === '#pricing';
    return location.pathname === link.href;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
        style={{
          backgroundColor: scrolled ? 'rgba(5, 10, 26, 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1b294b' : '1px solid transparent',
        }}
      >
        <div className="w-full px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* Left Qadmas Brand Logo */}
          <Link to="/" className="flex items-center shrink-0 h-[68px]">
            <img 
              src="/full-logo.png" 
              alt="Qadmas Technologies" 
              className="h-[95px] sm:h-[115px] md:h-[140px] max-h-[95px] sm:max-h-[115px] md:max-h-[140px] w-auto object-contain -my-4 md:-my-8 translate-y-[2px]"
            />
          </Link>

          {/* Right Nav Elements Container (Nav Links & CTA Buttons hugged together to the right) */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const active = isActive(link);
                if (link.isPricing) {
                  return (
                    <a
                      key={link.label}
                      href="#pricing"
                      onClick={handlePricingClick}
                      className="font-geist text-[13px] font-normal uppercase tracking-tight transition-colors duration-150 relative py-1 cursor-pointer"
                      style={{
                        color: active ? '#00C5C8' : '#8292b4',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#00C5C8')}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = active ? '#00C5C8' : '#8292b4')
                      }
                    >
                      {link.label}
                      {active && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C5C8]" />
                      )}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-geist text-[13px] font-normal uppercase tracking-tight transition-colors duration-150 relative py-1"
                    style={{
                      color: active ? '#00C5C8' : '#8292b4',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00C5C8')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = active ? '#00C5C8' : '#8292b4')
                    }
                  >
                    {link.label}
                    {active && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C5C8]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Button Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-dark text-[13px] px-[16px] py-[8px] rounded-[3px]"
              >
                Get a Quote
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-ghost text-[13px] px-[14px] py-[8px] rounded-none flex items-center gap-1.5"
              >
                <span>Contact Sales</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#eeeeee] p-1 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className="md:hidden py-6 px-6 flex flex-col gap-4 border-b border-[#1b294b]"
            style={{ backgroundColor: '#050a1a' }}
          >
            {navLinks.map((link) => {
              if (link.isPricing) {
                return (
                  <a
                    key={link.label}
                    href="#pricing"
                    onClick={(e) => {
                      setMenuOpen(false);
                      handlePricingClick(e);
                    }}
                    className="font-mono-geist text-[12px] uppercase text-[#eeeeee] py-1 border-b border-[#1b294b] cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono-geist text-[12px] uppercase text-[#eeeeee] py-1 border-b border-[#1b294b]"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="btn-dark w-full justify-center"
              >
                Get a Quote
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="btn-ghost w-full justify-center"
              >
                Contact Sales →
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
