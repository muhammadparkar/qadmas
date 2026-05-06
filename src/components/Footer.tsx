import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const footerLinks = {
  Services: [
    { label: 'Software Development', href: '/#services' },
    { label: 'Enterprise Solutions', href: '/#services' },
    { label: 'Web Development', href: '/#services' },
    { label: 'App Development', href: '/#services' },
    { label: 'Digital Marketing', href: '/#services' },
    { label: 'IT Support', href: '/#services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/#portfolio' },
    { label: 'ERP/CRM Solutions', href: '/#pricing' },
    { label: 'Contact Us', href: '/#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: 'https://qadmastechnologies.com/privacy-policy/' },
    { label: 'Google Maps', href: 'https://maps.app.goo.gl/fTpqiQC3rukyJUxA6' },
    { label: 'Licenses', href: '#' },
  ],
};

export default function Footer() {
  return (
    <>
      {/* Contact section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        style={{
          background: '#080e24',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(0,197,200,0.08)', border: '1px solid rgba(0,197,200,0.2)', color: '#00C5C8' }}
            >
              Contact Us
            </span>
            <h2
              className="text-white font-bold mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-1px', lineHeight: 1.1 }}
            >
              Ready to grow your<br />
              <span style={{ color: '#00C5C8' }}>business?</span>
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.8 }}>
              At Qadmas Technologies, we're dedicated to helping your business achieve its digital goals with tailored IT and marketing solutions. Contact us today to experience innovation, reliability, and measurable results.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: '+974 7132 8520', sub: 'Qatar', href: 'tel:+97471328520' },
                { icon: Phone, label: '+91 913 7886 399', sub: 'India', href: 'tel:+919137886399' },
                { icon: Mail, label: 'info@qadmastechnologies.com', sub: 'Email', href: 'mailto:info@qadmastechnologies.com' },
                { icon: MapPin, label: 'UAE · Qatar · India', sub: 'Offices', href: 'https://maps.app.goo.gl/fTpqiQC3rukyJUxA6' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 group"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,197,200,0.1)', border: '1px solid rgba(0,197,200,0.2)' }}
                    >
                      <Icon size={15} style={{ color: '#00C5C8' }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00C5C8'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; }}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(13,21,53,0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h3 className="text-white font-semibold mb-6" style={{ fontSize: '18px' }}>Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="contact-name"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.4)'; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    id="contact-email"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.4)'; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+974 or +91 ..."
                  id="contact-phone"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                  onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.4)'; }}
                  onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help your business?"
                  id="contact-message"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                  onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.4)'; }}
                  onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,197,200,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <footer
        className="py-16 relative"
        style={{ background: '#05091a', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
            {/* Brand col — 2 cols wide */}
            <div className="md:col-span-2">
              <Link to="/" className="mb-6 block">
                <img 
                  src="/full-logo.png" 
                  alt="Qadmas Technologies Logo" 
                  className="h-[250px] w-auto" 
                />
              </Link>
              <p className="text-sm mb-2 font-semibold" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Empowering Your Business with Cutting-Edge Software Solutions for a Digital Future
              </p>
              <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                Your Partner in Digital Success — Innovative Solutions that Drive Results.
                Serving UAE, Qatar &amp; India since 2020.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: InstagramIcon, href: 'https://www.instagram.com/qadmastech/', label: 'Instagram' },
                  { icon: FacebookIcon, href: 'https://www.facebook.com/people/Qadmas-Technologies/61572903006289/', label: 'Facebook' },
                  { icon: LinkedinIcon, href: 'https://in.linkedin.com/company/qadmastechnologies', label: 'LinkedIn' },
                  { icon: TwitterIcon, href: '#', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,197,200,0.12)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,197,200,0.3)';
                      (e.currentTarget as HTMLElement).style.color = '#00C5C8';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00C5C8'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div
            className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: 'rgba(0,197,200,0.05)', border: '1px solid rgba(0,197,200,0.12)' }}
          >
            <div>
              <h4 className="text-white font-semibold mb-1" style={{ fontSize: '16px' }}>Stay in the loop</h4>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Subscribe to receive updates, insights, and exclusive offers.</p>
            </div>
            <form className="flex gap-2 flex-1 max-w-[400px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full text-sm font-bold shrink-0 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #00C5C8, #00a8ab)', color: '#001a4d' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,197,200,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              © {new Date().getFullYear()} Qadmas Technologies. All rights reserved. UAE · Qatar · India.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: 'https://qadmastechnologies.com/privacy-policy/' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00C5C8'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
