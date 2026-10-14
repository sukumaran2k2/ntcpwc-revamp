import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Education | NTCPWC",
  description: "Specialized training programmes, capacity building courses, and maritime workshops organized by NTCPWC IIT Madras.",
};

const courses = [
  {
    title: "Advanced Port Planning & Harbor Numerical Modeling",
    duration: "5 Days Intensive",
    type: "Executive Professional",
    date: "15 - 19 Nov 2025",
    desc: "Hands-on masterclass covering DELFT3D hydrodynamic simulation, sediment transport modeling, and navigational channel design for port engineers.",
  },
  {
    title: "Coastal Erosion Mitigation & Shoreline Management",
    duration: "3 Days Workshop",
    type: "Industry & Regulators",
    date: "08 - 10 Dec 2025",
    desc: "Field-oriented workshop on soft & hard coastal defense structures, wave energy dissipation, and coastal climate change adaptation strategies.",
  },
  {
    title: "Maritime Autonomous Vessels & Inland Waterway Intelligence",
    duration: "2 Days Seminar",
    type: "Technology & Research",
    date: "22 - 23 Jan 2026",
    desc: "Comprehensive insights into uncrewed surface vehicles (USVs), automated dredging surveillance, and digital navigational aids.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="relative py-16 bg-[#081a2f] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#0b1d3a] to-[#0f2b48] opacity-95" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Academic & Professional Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
                Training & Capacity Building
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Specialized executive programmes, certified workshops, and technical training modules for maritime port engineers and officers.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              {courses.map((course, idx) => (
                <AnimatedSection key={course.title} delay={idx * 0.08}>
                  <div className="p-7 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
                          {course.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.date}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-500">({course.duration})</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 font-display mb-2">{course.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{course.desc}</p>
                    </div>

                    <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors whitespace-nowrap shadow-xs shrink-0">
                      Register Interest
                    </button>
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
