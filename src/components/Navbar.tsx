import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const navLinks = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Digital Marketing', href: '/services' },
      { label: 'Web/Apps Development', href: '/services' },
      { label: 'AI Automated CRM', href: '/services' },
      { label: 'Pre Built / Custom Built ERP', href: '/services' },
    ],
  },
  {
    label: 'Products',
    href: '/contact',
    children: [
      { label: 'Wantik-X (AI Automated CRM)', href: '/contact' },
      { label: 'Sila — Vendor Management System', href: '/contact' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > 60);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (link: typeof navLinks[0]) => {
    return location.pathname === link.href;
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <div
          className={`ease-spring relative mt-3 flex w-full items-center justify-between rounded-full py-2 transition-all duration-500 ${
            scrolled
              ? 'max-w-4xl border border-ink/10 bg-gallery-white/80 px-3 backdrop-blur-xl ambient-lift'
              : 'max-w-6xl border border-transparent bg-transparent px-4'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center pl-3 shrink-0">
            <img
              src="/full-logo.png"
              alt="Qadmas Technologies"
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Centered Links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link);
              const className = `ease-spring whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                active
                  ? 'bg-ink/[0.06] text-ink'
                  : 'text-slate hover:bg-ink/[0.04] hover:text-ink'
              }`;

              if (link.children) {
                return (
                  <div key={link.label} className="group relative">
                    <Link to={link.href} className={className}>
                      {link.label}
                      <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    <div className="ease-spring invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-64 rounded-[14px] border border-hairline-silver bg-gallery-white p-1.5 ambient-lift">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block rounded-[10px] px-3.5 py-2.5 text-[13px] font-medium text-slate transition-colors hover:bg-ink/[0.04] hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.label} to={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/contact"
              className={`ease-spring rounded-full px-4 py-2 text-[13px] font-medium text-slate transition-all duration-300 hover:text-ink ${
                scrolled ? 'hidden' : 'inline-flex'
              }`}
            >
              Contact Sales
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group ease-spring flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-pricing-blue py-2 pl-5 pr-2 text-[13px] font-semibold text-white transition-all duration-300 active:scale-[0.98]"
            >
              {scrolled ? 'Get Started' : 'Get a Quote'}
              <span className="ease-spring flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative mr-1 flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`ease-spring fixed inset-0 z-40 flex flex-col bg-gallery-white/95 backdrop-blur-3xl transition-all duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-2 overflow-y-auto py-10">
          {navLinks.map((link, i) => {
            const className = `ease-spring block font-geist text-3xl font-semibold tracking-tight text-ink transition-all duration-300 hover:text-apple-blue ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`;
            const style = { transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' };

            return (
              <div key={link.label} className="flex flex-col items-center overflow-hidden">
                <Link to={link.href} onClick={() => setMenuOpen(false)} className={className} style={style}>
                  {link.label}
                </Link>

                {link.children && (
                  <div
                    className={`ease-spring mt-1 flex flex-col items-center gap-1 transition-all duration-300 ${
                      menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                    style={style}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-geist text-[15px] text-slate transition-colors hover:text-apple-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div
            className={`ease-spring mt-10 flex flex-col items-center gap-4 transition-all duration-300 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? `${100 + navLinks.length * 60}ms` : '0ms' }}
          >
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-slate hover:text-ink"
            >
              Contact Sales
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="group ease-spring flex items-center gap-2 rounded-full bg-pricing-blue py-3 pl-7 pr-3 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98]"
            >
              Get a Quote
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
