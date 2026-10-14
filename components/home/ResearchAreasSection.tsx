"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Leaf, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { researchAreas } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "port-infrastructure": Layers,
  "coastal-offshore": Shield,
  "marine-geosciences": Compass,
  "environmental": Leaf,
};

export default function ResearchAreasSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/70">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Core R&D Domains</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
              Flagship Maritime Research Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3">
              Delivering breakthrough technological intelligence, wave-flume physical simulations, and computational hydrodynamic modeling to India&apos;s maritime corridor.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <Link
              href="/research"
              id="research-view-all-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:shadow-md transition-all group"
            >
              <span>View All Specialized Domains</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.id] || Layers;

            return (
              <AnimatedSection key={area.id} delay={i * 0.08} direction="up">
                <Link
                  href={`/research#${area.id}`}
                  className="group flex flex-col h-full rounded-xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071628]/70 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm text-slate-800 font-bold text-[11px] shadow-sm">
                      {area.category}
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>{area.projects} Active Studies</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-blue-700 transition-colors mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3 mb-4">
                      {area.description}
                    </p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>Explore domain</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
