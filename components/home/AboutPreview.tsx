"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight, BookOpen, Anchor, FileCheck2, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";

const institutionalStats = [
  {
    value: 156,
    suffix: "+",
    label: "Publications & Patents",
    sub: "Peer-reviewed international research",
    icon: BookOpen,
    color: "#0f2b48",
  },
  {
    value: 42,
    suffix: "+",
    label: "Active Major Port Projects",
    sub: "Major ports & Sagarmala corridor",
    icon: Anchor,
    color: "#0284c7",
  },
  {
    value: 89,
    suffix: "+",
    label: "Technical Guidelines Published",
    sub: "Adopted by Indian port authorities",
    icon: FileCheck2,
    color: "#059669",
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of Academic Heritage",
    sub: "Rooted in IIT Madras Ocean Eng.",
    icon: Award,
    color: "#d97706",
  },
];

const highlights = [
  "Centre of Excellence under Sagarmala Programme",
  "Physical 3D Wave Basin & 2D Hydraulic Wave Flumes",
  "Numerical Modeling Suite (DELFT3D, MIKE, OpenFOAM)",
  "Real-Time Coastal Monitoring Network across 2,000+ km",
];

export default function AboutPreview() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Centre of Excellence &bull; Sagarmala Programme</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-[1.15] mb-6">
                Apex National Centre for{" "}
                <span className="text-blue-700">
                  Maritime & Coastal Engineering
                </span>
              </h2>

              <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 font-normal">
                The <strong>National Technology Centre for Ports, Waterways and Coasts (NTCPWC)</strong> was established under the Ministry of Ports, Shipping and Waterways at the <strong>IIT Madras Discovery Campus</strong>. Serving as the primary technological arm of the Government of India, the centre provides breakthrough indigenous R&D, physical flume modeling, and ocean computational simulations for safe, economical, and climate-resilient waterways.
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {institutionalStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
                      </div>
                      <div className="text-2xl font-black text-slate-900 font-display">
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs font-bold text-slate-700 mt-0.5">{stat.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{stat.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Action Link */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-colors"
                >
                  <span>Institutional Profile & Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  <span>Explore Hydraulic Laboratories</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Media Showcase */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
                  alt="NTCPWC Discovery Campus"
                  className="w-full h-[460px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071628]/80 via-transparent to-transparent" />

                {/* Floating Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoOpen(true)}
                    aria-label="Play institutional video"
                    className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                    IIT Madras Discovery Campus &bull; Thaiyur
                  </div>
                  <div className="text-base font-bold mt-1">
                    World-Class Coastal & Ocean Engineering Facility
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="bg-slate-900 rounded-xl overflow-hidden max-w-3xl w-full p-4 border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center text-white mb-3">
              <span className="font-bold text-sm">NTCPWC Discovery Campus Showcase</span>
              <button onClick={() => setVideoOpen(false)} className="text-slate-400 hover:text-white text-sm font-bold">Close</button>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black flex items-center justify-center text-slate-400 text-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="NTCPWC Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
