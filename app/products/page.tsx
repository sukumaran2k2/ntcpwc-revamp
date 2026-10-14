import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Indigenous Products & Technologies | NTCPWC",
  description: "Proprietary maritime monitoring systems, autonomous surface vessels, and numerical modeling suites developed by NTCPWC.",
};

const productsList = [
  {
    id: "usv",
    title: "Indigenous Autonomous Survey Vessel (USV)",
    category: "Autonomous Systems",
    desc: "Uncrewed surface vessel equipped with dual-frequency multi-beam echo sounders, autonomous obstacle avoidance, and real-time telemetry for inland waterways and port approaches.",
    specs: ["Hull: Carbon-composite catamaran", "Endurance: 8+ hours electric", "Payload: MBES, ADCP, LiDAR", "Navigation: RTK-GPS + INS"],
    badge: "Operational",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "monitoring",
    title: "Real-Time Coastal Monitoring Network",
    category: "Ocean Instrumentation",
    desc: "Telemetry network deployed along 2,000 km of Indian coast transmitting wave climate, sea level variations, and sediment dynamics to central MoPSW dashboard.",
    specs: ["Sensors: Acoustic wave gauges, radar tide probes", "Transmission: Satellite / 4G telemetry", "Update Interval: 15 minutes", "Coverage: Major ports"],
    badge: "Field Proven",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dredging",
    title: "AI-Powered Dredging Optimization Suite",
    category: "Software & Analytics",
    desc: "Predictive siltation algorithm combining hydrodynamic flume models with machine learning to optimize dredger deployment and annual maintenance budgets.",
    specs: ["Model: Flume calibrated AI/ML", "Accuracy: >92% volume prediction", "Supported Ports: Chennai, Haldia, Cochin", "Export: PDF/GIS format"],
    badge: "Sagarmala Patented",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "basin-sim",
    title: "Digital Twin Port Wave Simulator",
    category: "Digital Twins",
    desc: "3D digital representation of harbor basins and container terminals simulating vessel maneuvering in varying sea states, tidal currents, and extreme cyclones.",
    specs: ["Engine: 3D hydrodynamic flume solver", "Vessel Types: Capesize, ULCS, Barges", "Displays: 360-degree immersive bridge", "Accuracy: Class-A approved"],
    badge: "R&D Prototype",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="relative py-16 bg-[#081a2f] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#0b1d3a] to-[#0f2b48] opacity-95" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Indigenous Maritime Technology
              </div>
              <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
                Indigenous Products & Systems
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Cutting-edge ocean instrumentation, autonomous survey robotics, and digital twin simulation tools developed at IIT Madras.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productsList.map((prod, i) => (
                <AnimatedSection key={prod.id} delay={i * 0.08}>
                  <div id={prod.id} className="rounded-xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
                    <div className="relative h-56 bg-slate-900 overflow-hidden">
                      <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-xs">
                        {prod.category}
                      </div>
                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-blue-300 font-semibold text-xs border border-white/20">
                        {prod.badge}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 font-display mb-2">{prod.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">{prod.desc}</p>
                      <div className="mt-auto border-t border-slate-100 pt-4">
                        <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Technical Specifications</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                          {prod.specs.map((s, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span className="truncate">{s}</span>
                            </div>
                          ))}
                        </div>
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
