import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";
import { Anchor, Waves, Navigation, Leaf, BarChart3, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | NTCPWC",
  description: "Specialized maritime and ocean engineering technical services provided by NTCPWC IIT Madras.",
};

const iconMap: Record<string, React.ElementType> = {
  Anchor,
  Waves,
  Navigation,
  Leaf,
  BarChart3,
  GraduationCap,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="relative py-16 bg-[#081a2f] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#0b1d3a] to-[#0f2b48] opacity-95" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Specialized Technical Capabilities
              </div>
              <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
                Institutional Services & Solutions
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Comprehensive advisory, numerical modeling, flume simulations, and validation services for India's major ports and waterways.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon] || Anchor;
                return (
                  <AnimatedSection key={service.id} delay={i * 0.05}>
                    <div id={service.id} className="h-full flex flex-col p-7 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                        style={{ backgroundColor: service.color + '15' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">{service.description}</p>
                      <ul className="space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-4">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>Detailed Engineering Analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>Validated Flume & Numerical Models</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>Government & Regulatory Compliance</span>
                        </li>
                      </ul>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
