import { useState } from 'react';
import './Footer.css';

const links = {
  Explore: [
    { label: 'About NTCPWC',  href: '/about' },
    { label: 'Facilities',    href: '/facilities' },
    { label: 'Services',      href: '/services' },
    { label: 'Products',      href: '/products' },
    { label: 'Research',      href: '#' },
  ],
  Learn: [
    { label: 'Training & Education', href: '#' },
    { label: 'Publications',         href: '#' },
    { label: 'Programs',             href: '#' },
    { label: 'Media',                href: '/media' },
    { label: 'Gallery',              href: '/gallery' },
  ],
  Organisation: [
    { label: 'Leadership',       href: '/about' },
    { label: 'People Directory', href: '/people' },
    { label: 'Careers',          href: '/careers' },
    { label: 'Tenders',          href: '#' },
    { label: 'RTI',              href: '#' },
  ],
  Connect: [
    { label: 'Contact Us',      href: 'mailto:ntcpwc@iitm.ac.in' },
    { label: 'IIT Madras',      href: 'https://www.iitm.ac.in' },
    { label: 'Staff Login',     href: '/login' },
    { label: 'Privacy Policy',  href: '/privacy-policy' },
    { label: 'Terms of Use',    href: '/terms-of-use' },
  ],
};

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/national-technology-centre-for-ports-waterways-and-coasts-ntcpwc/posts/?feedView=all',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Ntcpwc_offcl?s=20',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@adminntcpwc1606/videos',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer className="ftx">

      {/* ── CTA BAND ── */}
      <div className="ftx-cta-band">
        <div className="ftx-cta-inner">
          <div className="ftx-cta-text">
            <span className="ftx-eyebrow">A Centre of Excellence · IIT Madras</span>
            <h2 className="ftx-headline">
              Pioneering India's<br />blue economy.
            </h2>
          </div>

          <div className="ftx-subscribe">
            <p className="ftx-sub-label">Research &amp; programme updates</p>
            {submitted ? (
              <div className="ftx-confirmed">
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Subscribed — thank you.
              </div>
            ) : (
              <form className="ftx-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="ftx-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="ftx-sub-btn">Subscribe →</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="ftx-main">
        <div className="ftx-main-inner">

          {/* BRAND COL */}
          <div className="ftx-brand">
            <a href="/" className="ftx-logo-link">
              <img src="/assets/logo-dark.png" alt="NTCPWC" className="ftx-logo" />
            </a>
            <p className="ftx-brand-desc">
              National Technology Centre for Ports, Waterways and Coasts — advancing maritime science under the Ministry of Ports, Shipping &amp; Waterways, Government of India.
            </p>
            <div className="ftx-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="ftx-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* LOCATION CHIP */}
            <div className="ftx-location">
              <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                <path fillRule="evenodd" d="M8 0a5.5 5.5 0 00-5.5 5.5c0 3.694 4.614 8.72 5.14 9.289a.5.5 0 00.72 0C8.886 14.22 13.5 9.194 13.5 5.5A5.5 5.5 0 008 0zm0 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" clipRule="evenodd"/>
              </svg>
              Chennai, Tamil Nadu · India
            </div>
          </div>

          {/* LINKS */}
          <nav className="ftx-nav">
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className="ftx-nav-col">
                <h5 className="ftx-nav-heading">{group}</h5>
                <ul>
                  {items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="ftx-nav-link"
                        target={item.href?.startsWith('http') ? '_blank' : undefined}
                        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ftx-bottom">
        <div className="ftx-bottom-inner">
          <p className="ftx-copy">© {new Date().getFullYear()} NTCPWC · IIT Madras · All rights reserved.</p>
          <div className="ftx-legal">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Use',   href: '/terms-of-use' },
              { label: 'Cookies',        href: '#' },
              { label: 'Sitemap',        href: '#' },
            ].map((l, i) => (
              <span key={l.label} className="ftx-legal-item">
                {i > 0 && <span className="ftx-pipe">|</span>}
                <a href={l.href} className="ftx-legal-link">{l.label}</a>
              </span>
            ))}
          </div>
          <p className="ftx-govt">
            Ministry of Ports, Shipping &amp; Waterways · Government of India
          </p>
        </div>
      </div>

    </footer>
  );
}
