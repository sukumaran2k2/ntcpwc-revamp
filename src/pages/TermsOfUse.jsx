import './PolicyPage.css';

const sections = [
  { id: 'acceptance',    title: '1. Acceptance of Terms' },
  { id: 'about',         title: '2. About NTCPWC' },
  { id: 'ip',            title: '3. Intellectual Property' },
  { id: 'permitted',     title: '4. Permitted Use' },
  { id: 'prohibited',    title: '5. Prohibited Use' },
  { id: 'disclaimer',    title: '6. Disclaimer of Warranties' },
  { id: 'liability',     title: '7. Limitation of Liability' },
  { id: 'external',      title: '8. External Links' },
  { id: 'research',      title: '9. Research & Technology' },
  { id: 'governing',     title: '10. Governing Law' },
  { id: 'modifications', title: '11. Modifications' },
  { id: 'contact',       title: '12. Contact' },
];

export default function TermsOfUse() {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="policy-hero__inner">
          <p className="policy-eyebrow">Legal</p>
          <h1 className="policy-title">Terms of Use</h1>
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

          <div className="policy-section" id="acceptance">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the NTCPWC website (<strong>ntcpwc.iitm.ac.in</strong>), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree to these terms, please discontinue use of this website immediately.</p>
          </div>

          <div className="policy-section" id="about">
            <h2>2. About NTCPWC</h2>
            <p>NTCPWC (National Technology Centre for Ports, Waterways and Coasts) is a Centre of Excellence established at IIT Madras under the Ministry of Ports, Shipping and Waterways, Government of India. This website is the official online presence of NTCPWC and is maintained by its team at IIT Madras.</p>
          </div>

          <div className="policy-section" id="ip">
            <h2>3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, icons, images, research publications, product descriptions and software — is the intellectual property of NTCPWC, IIT Madras or its licensors and is protected under applicable Indian and international laws.</p>
            <p>You may not reproduce, distribute, modify, transmit or use any content from this website for commercial purposes without prior written permission from NTCPWC.</p>
          </div>

          <div className="policy-section" id="permitted">
            <h2>4. Permitted Use</h2>
            <p>You are permitted to:</p>
            <ul>
              <li>Browse and access content for personal, non-commercial and informational purposes</li>
              <li>Share links to pages on this website</li>
              <li>Download materials explicitly made available for download</li>
              <li>Reference content in academic or research work with appropriate attribution to NTCPWC, IIT Madras</li>
            </ul>
          </div>

          <div className="policy-section" id="prohibited">
            <h2>5. Prohibited Use</h2>
            <p>You must not:</p>
            <ul>
              <li>Use this website for any unlawful or fraudulent purpose</li>
              <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
              <li>Transmit any harmful, offensive or disruptive content</li>
              <li>Use automated tools to scrape, crawl or harvest data without written permission</li>
              <li>Impersonate NTCPWC, IIT Madras or any of its personnel</li>
              <li>Reproduce or republish proprietary research or technology content without express written consent</li>
            </ul>
          </div>

          <div className="policy-section" id="disclaimer">
            <h2>6. Disclaimer of Warranties</h2>
            <p>This website is provided on an "as is" and "as available" basis. NTCPWC makes no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability or availability of the website or the information it contains.</p>
            <p>Technical specifications, product descriptions and research summaries are provided for informational purposes only and may be updated or revised without prior notice.</p>
          </div>

          <div className="policy-section" id="liability">
            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, NTCPWC and IIT Madras shall not be liable for any direct, indirect, incidental, special or consequential loss or damage arising from your use of, or inability to use, this website or its content.</p>
          </div>

          <div className="policy-section" id="external">
            <h2>8. External Links</h2>
            <p>This website may contain links to third-party websites including IIT Madras, the Ministry of Ports, Shipping and Waterways and partner organisations. These links are provided for convenience only. NTCPWC does not endorse and is not responsible for the content, accuracy or practices of any linked external websites.</p>
          </div>

          <div className="policy-section" id="research">
            <h2>9. Research & Technology Content</h2>
            <p>Information about NTCPWC's products, facilities and research is provided for general awareness. Detailed technical specifications, proprietary technology details and deployment information remain confidential and are subject to separate agreements. Please contact <a href="mailto:ntcpwc@iitm.ac.in">ntcpwc@iitm.ac.in</a> for licensing, collaboration or commercial enquiries.</p>
          </div>

          <div className="policy-section" id="governing">
            <h2>10. Governing Law</h2>
            <p>These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.</p>
          </div>

          <div className="policy-section" id="modifications">
            <h2>11. Modifications</h2>
            <p>NTCPWC reserves the right to revise these Terms of Use at any time without prior notice. The updated version will be posted on this page with a revised date. Continued use of the website following any changes constitutes your acceptance of those changes.</p>
          </div>

          <div className="policy-section" id="contact">
            <h2>12. Contact</h2>
            <p>For questions regarding these Terms of Use, please contact:</p>
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