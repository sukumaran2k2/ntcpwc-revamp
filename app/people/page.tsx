import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "People & Leadership | NTCPWC",
  description: "Leadership team, domain heads, researchers, and technical faculty at NTCPWC IIT Madras.",
};

export default function PeoplePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="relative py-16 bg-[#081a2f] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#0b1d3a] to-[#0f2b48] opacity-95" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Scientific & Engineering Faculty
              </div>
              <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
                Leadership & Domain Heads
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                World-class scientists, ocean engineers, and research faculty from IIT Madras leading national maritime research.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {teamMembers.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.08}>
                  <div className="rounded-xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col h-full text-center">
                    <div className="relative h-64 bg-slate-900 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{member.name}</h3>
                      <div className="text-xs font-semibold text-blue-600 mb-2">{member.title}</div>
                      <div className="text-xs text-slate-500">{member.qualification}</div>
                      <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-center gap-3 text-slate-400">
                        <span className="text-[11px] font-medium text-slate-500">Department of Ocean Engineering</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
