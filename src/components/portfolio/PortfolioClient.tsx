"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { Maximize2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    "ALL",
    "ARCHITECTURAL BIM",
    "STRUCTURAL BIM",
    "RCC / REINFORCEMENT",
    "BIM COORDINATION",
    "DOCUMENTATION",
  ];

  const filtered =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === activeCategory || (activeCategory === "ARCHITECTURAL BIM" && p.category === "COMMERCIAL")
        );

  return (
    <div className="pt-32 pb-32 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
            ENGINEERING PORTFOLIO SHOWCASE
          </div>
          <h1 className="text-4xl sm:text-7xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
            BIM <span className="text-[#FF6A00]">PORTFOLIO</span>
          </h1>
          <p className="text-sm text-[#9A9A9A] font-mono max-w-xl">
            EXPLORE HIGH-PRECISION PARAMETRIC MODELS, STRUCTURAL DETAILED VIEWS, AND COORDINATED SHEETS.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#1A1A1A] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                activeCategory === cat
                  ? "bg-[#FF6A00] text-[#050505] border-[#FF6A00] font-bold"
                  : "bg-[#080808] text-[#9A9A9A] border-[#1A1A1A] hover:border-[#555555] hover:text-[#F5F5F2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedIndex(idx)}
              className="bg-[#080808] border border-[#1A1A1A] overflow-hidden group cursor-pointer hover:border-[#FF6A00] transition-colors"
            >
              <div className="relative aspect-[16/10] bg-[#0D0D0D] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-[#050505] border border-[#FF6A00] font-mono text-xs text-[#FF6A00] tracking-widest flex items-center space-x-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>EXPAND LIGHTBOX</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3 font-mono text-xs">
                  <span className="text-[#FF6A00] font-bold">{proj.category}</span>
                  <span className="text-[#555555]">{proj.software.join(" • ")}</span>
                </div>

                <h3 className="font-mono text-xl font-bold text-[#F5F5F2] uppercase group-hover:text-[#FF6A00] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#9A9A9A] font-sans line-clamp-2">
                  {proj.overview}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 bg-[#080808] border border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-mono text-lg font-bold text-[#F5F5F2] uppercase">
              NEED SPECIFIC REVI SHEETS OR MODEL SAMPLES?
            </h4>
            <p className="text-xs text-[#9A9A9A] font-mono">
              Contact Er. Pawan G. Patil to request tailored sample sets for your project requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-[#FF6A00] text-[#050505] font-bold flex items-center space-x-2"
          >
            <span>REQUEST SAMPLE PACK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <Lightbox
          project={filtered[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((prev) => (prev === null || prev === 0 ? filtered.length - 1 : prev - 1))
          }
          onNext={() =>
            setSelectedIndex((prev) => (prev === null || prev === filtered.length - 1 ? 0 : prev + 1))
          }
        />
      )}
    </div>
  );
}
