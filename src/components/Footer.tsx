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
    <footer className="w-full bg-white text-ink border-t border-slate-200/80 pt-16 pb-12 font-apple">
      <div className="w-full max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Top Header Row with Logo and Grounded Studio Bio */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-10 border-b border-slate-200/80">
          <div className="space-y-4 max-w-[420px]">
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
            <div className="flex items-center gap-2 text-[13px] font-apple text-slate">
              <ShieldCheck size={15} className="text-apple-blue" />
              <span>Full source code &amp; IP ownership guaranteed</span>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-[12px]">
            <a
              href="tel:+97471328520"
              className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:border-apple-blue hover:bg-white transition-all flex items-center gap-2.5 text-ink shadow-2xs"
            >
              <Phone size={14} className="text-apple-blue" />
              <div>
                <div className="text-[11px] text-slate">Qatar office</div>
                <div className="font-medium">+974 7132 8520</div>
              </div>
            </a>

            <a
              href="tel:+919137886399"
              className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:border-apple-blue hover:bg-white transition-all flex items-center gap-2.5 text-ink shadow-2xs"
            >
              <Phone size={14} className="text-apple-blue" />
              <div>
                <div className="text-[11px] text-slate">India office</div>
                <div className="font-medium">+91 913 7886 399</div>
              </div>
            </a>

            <a
              href="mailto:info@qadmastechnologies.com"
              className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:border-apple-blue hover:bg-white transition-all flex items-center gap-2.5 text-ink shadow-2xs"
            >
              <Mail size={14} className="text-apple-blue" />
              <div>
                <div className="text-[11px] text-slate">Direct inquiries</div>
                <div className="font-medium">info@qadmastechnologies.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-2">
          {linkSections.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-apple text-[14px] text-ink font-semibold">
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
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate">
          <div>
            © {new Date().getFullYear()} Qadmas Technologies. All rights reserved. Engineering across Doha, Dubai, and Mumbai.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/97471328520"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border border-slate-200/80 bg-slate-50 flex items-center justify-center text-slate hover:text-apple-blue hover:border-apple-blue transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare size={14} />
            </a>
            <a
              href="mailto:info@qadmastechnologies.com"
              className="w-8 h-8 rounded-xl border border-slate-200/80 bg-slate-50 flex items-center justify-center text-slate hover:text-apple-blue hover:border-apple-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
