"use client";

import { motion } from "framer-motion";
import { Anchor, Waves, Navigation, Leaf, BarChart3, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Anchor,
  Waves,
  Navigation,
  Leaf,
  BarChart3,
  GraduationCap,
};

export default function ServiceCards() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Core Technological Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
            Specialized Capabilities & Technical Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Comprehensive ocean, port, and waterway engineering solutions backed by IIT Madras faculty and high-precision physical laboratories.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Anchor;
            return (
              <AnimatedSection key={service.id} delay={i * 0.04} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col h-full p-5 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center text-[12px] font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
