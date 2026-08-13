import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const linkColumns = [
    {
      title: 'Navigation',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Works', href: '/portfolio' },
        { label: 'Pricing', href: '/#pricing' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Software', href: '/services' },
        { label: 'ERP / CRM', href: '/services' },
      ],
    },
    {
      title: 'Platforms',
      links: [
        { label: 'Web Apps', href: '/services' },
        { label: 'Mobile Apps', href: '/services' },
        { label: 'Cloud Hosting', href: '/services' },
      ],
    },
    {
      title: 'Growth',
      links: [
        { label: 'Marketing', href: '/services' },
        { label: 'SEO Audits', href: '/services' },
        { label: 'Analytics', href: '/services' },
      ],
    },
    {
      title: 'Operating In',
      links: [
        { label: 'Qatar', href: '/contact' },
        { label: 'UAE', href: '/contact' },
        { label: 'India', href: '/contact' },
      ],
    },
    {
      title: 'Legal & Help',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Terms', href: '/contact' },
        { label: 'Privacy', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#050a1a] text-[#eeeeee] border-t border-[#1b294b] pt-16 pb-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Top Intro Section with Logo and Blurb */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-[#1b294b]">
          <div className="flex items-center gap-4 shrink-0">
            <img 
              src="/full-logo.png" 
              alt="Qadmas Technologies" 
              className="h-[105px] md:h-[135px] w-auto object-contain -my-4 md:-my-6" 
            />
          </div>
          
          <p className="font-geist text-[14px] text-[#8292b4] leading-relaxed max-w-[840px]">
            Welcome to Qadmas Technologies, where technical engineering meets strategic execution. We specialize in crafting custom software architecture, enterprise CRM & ERP platforms, and high-converting web applications across Qatar, UAE, India, and global markets.
          </p>
        </div>

        {/* 6-Column Navigation Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-2">
          {linkColumns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-mono-geist text-[12px] uppercase text-[#00C5C8] tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5 font-geist text-[14px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.href}
                      className="text-[#8292b4] hover:text-[#eeeeee] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00C5C8]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1b294b]" />

        {/* Social Icon Pills Row (Mail, Instagram, LinkedIn, WhatsApp) */}
        <div className="flex items-center justify-center gap-4">
          {/* Mail */}
          <a
            href="mailto:info@qadmastechnologies.com"
            aria-label="Email"
            className="w-11 h-11 rounded-full border border-[#1b294b] bg-[#0c1228] flex items-center justify-center text-[#8292b4] hover:text-[#00C5C8] hover:border-[#00C5C8] transition-all duration-150 shadow-md"
          >
            <Mail size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-[#1b294b] bg-[#0c1228] flex items-center justify-center text-[#8292b4] hover:text-[#00C5C8] hover:border-[#00C5C8] transition-all duration-150 shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-full border border-[#1b294b] bg-[#0c1228] flex items-center justify-center text-[#8292b4] hover:text-[#00C5C8] hover:border-[#00C5C8] transition-all duration-150 shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/97471328520"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-[#1b294b] bg-[#0c1228] flex items-center justify-center text-[#8292b4] hover:text-[#00C5C8] hover:border-[#00C5C8] transition-all duration-150 shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>

        {/* Copyright & Branding Footer */}
        <div className="text-center font-mono-geist text-[12px] text-[#8292b4] pt-2">
          © {new Date().getFullYear()} Made with precision by <span className="text-[#eeeeee]">Qadmas Technologies</span> — Operating in Qatar · UAE · India
        </div>
      </div>
    </footer>
  );
}
