import Link from "next/link";
import { Anchor, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About NTCPWC", href: "/about" },
    { label: "Research Areas", href: "/research" },
    { label: "Publications & Guidelines", href: "/publications" },
    { label: "Hydraulic Facilities", href: "/facilities" },
    { label: "News & Events", href: "/news-events" },
    { label: "Media Gallery", href: "/gallery" },
  ];

  const usefulLinks = [
    { label: "Ministry of Ports, Shipping & Waterways", href: "https://shipmin.gov.in" },
    { label: "Sagarmala Programme Portal", href: "http://sagarmala.gov.in" },
    { label: "IIT Madras Official Site", href: "https://www.iitm.ac.in" },
    { label: "Inland Waterways Authority of India", href: "https://iwai.nic.in" },
    { label: "Indian Ports Association", href: "http://ipa.nic.in" },
  ];

  return (
    <footer className="bg-[#071526] text-slate-300">
      {/* Newsletter */}
      <div className="bg-[#0b1e36] border-b border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white">Subscribe to NTCPWC Research Bulletins</h3>
            <p className="text-slate-300 text-sm mt-1">Receive technical guidelines, conference announcements, and maritime research reports.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              id="footer-newsletter-input"
              type="email"
              placeholder="Enter your official email"
              className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-white/10 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              id="footer-newsletter-btn"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap shadow-xs"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-white leading-none">NTCPWC</span>
                <span className="block text-[10px] text-blue-300 font-bold uppercase tracking-wider mt-0.5">IIT Madras</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Apex National Centre of Excellence under the Sagarmala Programme, Ministry of Ports, Shipping and Waterways, Government of India.
            </p>
            <div className="text-xs text-slate-400 space-y-2">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>IIT Madras Discovery Campus, Thaiyur, Chennai - 600 130</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteData.phone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteData.email}</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government / Partner portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Official Portals</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditation & Mandate */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">National Mandate</h4>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 text-xs text-slate-300 leading-relaxed mb-3">
              Mandated to provide 24/7 technical validation for major Indian port master plans, coastal resilience projects, and smart dredging technology.
            </div>
            <div className="text-[11px] text-slate-400">
              Affiliated with Department of Ocean Engineering, IIT Madras.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {currentYear} NTCPWC, IIT Madras. Government of India. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300">RTI & Disclosures</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
