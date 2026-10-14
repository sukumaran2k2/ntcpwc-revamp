"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description: "Every engineering recommendation backed by rigorous field surveys and validated numerical models.",
    color: "#3b82f6",
  },
  {
    icon: Globe,
    title: "Sustainable Development",
    description: "Balancing maritime infrastructure growth with environmental preservation of coastal marine ecosystems.",
    color: "#10b981",
  },
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    description: "World-class physical laboratories and international collaborations driving cutting-edge indigenous research.",
    color: "#6366f1",
  },
];

export default function MissionStrip() {
  return (
    <section className="relative py-20 bg-[#0b1d3a] text-white overflow-hidden">
      {/* Background image subtle overlay */}
      <div className="absolute inset-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=50"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071628] via-[#0b1d3a] to-[#0d2242] opacity-95" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Institutional Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display mb-4 tracking-tight">
            Safer Coasts. Smarter Waterways. <span className="text-blue-300">Stronger Nation.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Providing scientific, technical, and advisory services to the national maritime sector through world-class research and engineering excellence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${pillar.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
