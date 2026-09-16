"use client";

import { siteConfig } from "@/data/site";
import { Globe2 } from "lucide-react";

export function GlobalMarkets() {
  return (
    <section className="py-32 bg-[#080808] border-t border-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase flex items-center justify-center space-x-2">
            <Globe2 className="w-4 h-4 text-[#FF6A00]" />
            <span>09 // SERVICE REACH & DELIVERY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
            BUILT IN INDIA. <br />
            <span className="text-[#FF6A00]">READY FOR GLOBAL PROJECTS.</span>
          </h2>
          <p className="text-sm text-[#9A9A9A] font-mono">
            PROVIDING HIGH-PRECISION BIM OUTSOURCING & REVIT DRAFTING SERVICES ACROSS INTERNATIONAL REGIONS.
          </p>
        </div>

        {/* Technical Minimal Map Simulation */}
        <div className="bg-[#050505] border border-[#1A1A1A] p-8 sm:p-12 relative mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {siteConfig.targetMarkets.map((m) => (
              <div
                key={m.code}
                className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 space-y-4 hover:border-[#FF6A00] transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
                  <span className="font-mono text-xl font-bold text-[#F5F5F2]">
                    {m.name.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FF6A00] px-2 py-1 bg-[#050505] border border-[#FF6A00]/40">
                    {m.code}
                  </span>
                </div>

                <p className="text-xs text-[#9A9A9A] font-mono leading-relaxed">
                  {m.desc}
                </p>

                <div className="flex items-center space-x-2 text-[10px] font-mono text-[#555555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                  <span>TARGET SERVICE REGION</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
