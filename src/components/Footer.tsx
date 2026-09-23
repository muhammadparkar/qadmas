import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Footer() {
  const linkSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Ai - Powered CRM & ERP (Wantik-X)', href: 'https://wantikx.com/' },
        { label: 'Digital Marketing', href: '/services' },
        { label: 'Website Development', href: '/services' },
        { label: 'Mobile Application Development', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Our Studio', href: '/about' },
        { label: 'Client Case Studies', href: '/portfolio' },
        { label: 'Pre-Built Packages', href: '/#pricing' },
        { label: 'Engineering Culture', href: '/about' },
        { label: 'Direct Consultation', href: '/contact' },
      ],
    },
    {
      title: 'Regional Offices',
      links: [
        { label: 'Doha, Qatar Hub', href: '/contact' },
        { label: 'Dubai & Sharjah, UAE', href: '/contact' },
        { label: 'Mumbai & Bangalore, India', href: '/contact' },
      ],
    },
    {
      title: 'Assurance & Legal',
      links: [
        { label: 'Client Confidentiality & NDA', href: '/contact' },
        { label: 'Service Level Agreements (SLA)', href: '/contact' },
        { label: 'Code Ownership Guarantee', href: '/about' },
        { label: 'Privacy Policy', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gallery-white text-ink border-t border-slate-200/80 pt-16 pb-12 font-apple">
      <div className="w-full max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Top Header Row with Logo, Bio, and Clean Typographic Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200/80 items-start">
          <div className="lg:col-span-6 space-y-4 max-w-[460px]">
            <Link to="/" className="inline-block">
              <img 
                src="/full-logo-dark.png?v=2" 
                alt="Qadmas Technologies" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="font-apple text-[14px] text-slate leading-relaxed">
              An independent software engineering studio building production systems, custom ERPs, and fast web platforms for ambitious operations across Qatar, the UAE, and India.
            </p>
            <div className="flex items-center gap-2 text-[13px] font-apple text-slate/90 pt-1">
              <ShieldCheck size={15} className="text-apple-blue shrink-0" />
              <span>Full source code &amp; IP ownership guaranteed</span>
            </div>
          </div>

          {/* Clean Typographic Contacts (Stacked) - Positioned in between Regional Offices and Assurance & Legal */}
          <div className="lg:col-start-9 lg:col-span-4 lg:pl-12 flex flex-col gap-6 text-[13.5px] font-apple">
            <div className="space-y-2">
              <div className="text-[11px] font-apple uppercase tracking-wider text-slate-400 font-semibold">
                Direct Inquiries
              </div>
              <div className="space-y-1.5">
                <a
                  href="mailto:info@qadmastechnologies.com"
                  className="group flex items-center gap-2.5 text-ink hover:text-apple-blue transition-colors font-apple font-medium text-[14px]"
                >
                  <Mail size={15} className="text-apple-blue shrink-0" />
                  <span className="group-hover:text-apple-blue transition-colors">
                    info@qadmastechnologies.com
                  </span>
                </a>
                <div className="flex items-center gap-2 pt-0.5 text-[12px] text-slate font-apple">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Senior engineers respond within 24h</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-apple uppercase tracking-wider text-slate-400 font-semibold">
                Call Our Hubs
              </div>
              <div className="space-y-2 font-apple">
                <a
                  href="tel:+97471328520"
                  className="group flex items-center gap-2.5 text-ink hover:text-apple-blue transition-colors font-apple font-medium text-[14px]"
                >
                  <Phone size={15} className="text-apple-blue shrink-0" />
                  <span className="group-hover:text-apple-blue transition-colors">
                    +974 7132 8520
                  </span>
                  <span className="text-[12px] text-slate font-normal">Qatar</span>
                </a>

                <a
                  href="tel:+919137886399"
                  className="group flex items-center gap-2.5 text-ink hover:text-apple-blue transition-colors font-apple font-medium text-[14px]"
                >
                  <Phone size={15} className="text-apple-blue shrink-0" />
                  <span className="group-hover:text-apple-blue transition-colors">
                    +91 913 7886 399
                  </span>
                  <span className="text-[12px] text-slate font-normal">India</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-2">
          {linkSections.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h4 className="font-apple text-[14px] text-ink font-medium tracking-tight">
                {col.title}
              </h4>
              <ul className="space-y-2.5 font-apple text-[13px]">
                {col.links.map((link, lIdx) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={lIdx}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-ink transition-colors inline-flex items-center gap-1 group"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-apple-blue" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-slate hover:text-ink transition-colors inline-flex items-center gap-1 group"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-apple-blue" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-apple text-[12px] text-slate">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Qadmas Technologies. All rights reserved. Engineering across Qatar, the UAE, and India.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/97471328520"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200/80 bg-white flex items-center justify-center text-slate hover:text-apple-blue hover:border-apple-blue transition-colors shadow-2xs"
              aria-label="WhatsApp"
            >
              <MessageSquare size={13} />
            </a>
            <a
              href="mailto:info@qadmastechnologies.com"
              className="w-8 h-8 rounded-full border border-slate-200/80 bg-white flex items-center justify-center text-slate hover:text-apple-blue hover:border-apple-blue transition-colors shadow-2xs"
              aria-label="Email"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
