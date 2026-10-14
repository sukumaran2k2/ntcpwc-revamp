import './PolicyPage.css';

const sections = [
  { id: 'introduction',    title: '1. Introduction' },
  { id: 'information',     title: '2. Information We Collect' },
  { id: 'use',             title: '3. How We Use Your Information' },
  { id: 'sharing',         title: '4. Data Sharing' },
  { id: 'retention',       title: '5. Data Retention' },
  { id: 'cookies',         title: '6. Cookies' },
  { id: 'third-party',     title: '7. Third-Party Links' },
  { id: 'security',        title: '8. Security' },
  { id: 'rights',          title: '9. Your Rights' },
  { id: 'changes',         title: '10. Changes to This Policy' },
  { id: 'contact',         title: '11. Contact' },
];

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="policy-hero__inner">
          <p className="policy-eyebrow">Legal</p>
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-date">Last updated: March 2026</p>
        </div>
      </div>

      <div className="policy-body">

        {/* TOC */}
        <aside className="policy-toc">
          <p className="policy-toc__title">On this page</p>
          <ul className="policy-toc__list">
            {sections.map(s => (
              <li key={s.id} className="policy-toc__item">
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENT */}
        <div className="policy-content">

          <div className="policy-section" id="introduction">
            <h2>1. Introduction</h2>
            <p>The National Technology Centre for Ports, Waterways and Coasts (NTCPWC), established at IIT Madras under the Ministry of Ports, Shipping and Waterways, Government of India, is committed to protecting the privacy of all visitors to this website.</p>
            <p>This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit <strong>ntcpwc.iitm.ac.in</strong>. Please read this policy carefully.</p>
          </div>

          <div className="policy-section" id="information">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li><strong>Personal Information</strong> — name, email address and phone number, only when voluntarily submitted through contact forms, newsletter subscriptions or career applications.</li>
              <li><strong>Usage Data</strong> — pages visited, time spent on site, browser type, device information and referring URLs, collected automatically through analytics tools.</li>
              <li><strong>Cookies</strong> — small data files stored on your browser to improve your experience. See Section 6 for full details.</li>
            </ul>
          </div>

          <div className="policy-section" id="use">
            <h2>3. How We Use Your Information</h2>
            <p>Information collected is used solely to:</p>
            <ul>
              <li>Respond to enquiries and support requests</li>
              <li>Send research updates and programme announcements (only if subscribed)</li>
              <li>Improve the website's content, structure and performance</li>
              <li>Process career or collaboration applications</li>
              <li>Comply with legal and regulatory obligations under Indian law</li>
            </ul>
            <p>We do not sell, rent or trade your personal information to any third party for commercial purposes.</p>
          </div>

          <div className="policy-section" id="sharing">
            <h2>4. Data Sharing</h2>
            <p>NTCPWC may share your data only with:</p>
            <ul>
              <li><strong>IIT Madras administration</strong> — as required for institutional compliance and reporting</li>
              <li><strong>Ministry of Ports, Shipping and Waterways</strong> — for programme reporting under the Sagarmala initiative</li>
              <li><strong>Service providers</strong> — such as website hosting and analytics vendors, bound by confidentiality agreements</li>
            </ul>
            <p>We do not share personal data with commercial advertisers or unrelated third parties.</p>
          </div>

          <div className="policy-section" id="retention">
            <h2>5. Data Retention</h2>
            <p>Personal information submitted through forms is retained only as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Newsletter subscribers may unsubscribe at any time by contacting us.</p>
          </div>

          <div className="policy-section" id="cookies">
            <h2>6. Cookies</h2>
            <p>This website uses the following categories of cookies:</p>
            <ul>
              <li><strong>Necessary cookies</strong> — essential for the website to function. Cannot be disabled.</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors interact with the site. Set only with your consent.</li>
              <li><strong>Functional cookies</strong> — store your preferences such as language selection and accessibility settings.</li>
            </ul>
            <p>You can manage cookie preferences at any time through the cookie settings panel on this website.</p>
          </div>

          <div className="policy-section" id="third-party">
            <h2>7. Third-Party Links</h2>
            <p>This website may contain links to external websites including IIT Madras, the Ministry of Ports, Shipping and Waterways and partner organisations. NTCPWC is not responsible for the privacy practices or content of those external websites. We encourage you to review their privacy policies before providing personal information.</p>
          </div>

          <div className="policy-section" id="security">
            <h2>8. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className="policy-section" id="rights">
            <h2>9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of any inaccurate or incomplete data</li>
              <li>Request deletion of your personal data (subject to legal requirements)</li>
              <li>Withdraw consent for analytics or functional cookies at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:ntcpwc@iitm.ac.in">ntcpwc@iitm.ac.in</a>.</p>
          </div>

          <div className="policy-section" id="changes">
            <h2>10. Changes to This Policy</h2>
            <p>NTCPWC reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised date. Continued use of the website after changes are posted constitutes your acceptance of the revised policy.</p>
          </div>

          <div className="policy-section" id="contact">
            <h2>11. Contact</h2>
            <p>For questions or concerns regarding this Privacy Policy, please contact:</p>
            <div className="policy-contact">
              <strong>NTCPWC — National Technology Centre for Ports, Waterways and Coasts</strong><br />
              IIT Madras Campus, Chennai — 600 036, Tamil Nadu, India<br />
              Email: <a href="mailto:ntcpwc@iitm.ac.in">ntcpwc@iitm.ac.in</a><br />
              Phone: +91 44 22578915
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}