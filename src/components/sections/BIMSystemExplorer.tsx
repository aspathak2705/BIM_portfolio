"use client";

import { useState } from "react";
import { Layers, Box, Cpu, FileText } from "lucide-react";

export function BIMSystemExplorer() {
  const [activeSystem, setActiveSystem] = useState<"ARCHITECTURAL" | "STRUCTURAL" | "COORDINATION" | "DOCUMENTATION">("STRUCTURAL");

  const systemDetails = {
    ARCHITECTURAL: {
      title: "ARCHITECTURAL MODELING",
      desc: "Parametric envelope geometry, walls, curtain systems, interior partition layouts, doors, windows, and spatial schedules.",
      highlights: ["LOD 300 Exterior Envelope", "Parametric Door & Window Schedules", "Material Take-Off Matrices"],
    },
    STRUCTURAL: {
      title: "STRUCTURAL & REINFORCEMENT",
      desc: "Cast-in-place concrete framing, post-tensioned slabs, post/beam framing, footings, post-tension details, and RCC geometry.",
      highlights: ["LOD 350 RCC Framing", "Beam/Column Connection Detailing", "Quantity Extraction Schedules"],
    },
    COORDINATION: {
      title: "MULTI-DISCIPLINARY COORDINATION",
      desc: "Clash matrix audit overlaying structural framing against architectural elements to catch spatial hard and soft clashes.",
      highlights: ["Spatial Clash Audits", "RFI Resolution Logs", "Federated Navisworks Assemblies"],
    },
    DOCUMENTATION: {
      title: "2D CONSTRUCTION SHEETS",
      desc: "Fully annotated construction drawings, wall sections, plan layouts, and schedules extracted live from the BIM model.",
      highlights: ["100% Coordinated DWG / PDF Sets", "Automated Revision Tracking", "Standardized Title Blocks"],
    },
  };

  const current = systemDetails[activeSystem];

  return (
    <section className="py-32 bg-[#050505] border-t border-[#1A1A1A] relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
            02 // SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
            ONE MODEL. <br />
            <span className="text-[#FF6A00]">MULTIPLE DISCIPLINES.</span>
          </h2>
          <p className="text-sm text-[#9A9A9A] font-sans">
            HOVER OR CLICK A DISCIPLINE TO ISOLATE MODEL SYSTEMS AND ENGINEERING DATA LAYERS.
          </p>
        </div>

        {/* Central Model Interactive Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Buttons */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => setActiveSystem("ARCHITECTURAL")}
              onMouseEnter={() => setActiveSystem("ARCHITECTURAL")}
              className={`w-full p-6 text-left border transition-all duration-300 flex items-center space-x-4 ${
                activeSystem === "ARCHITECTURAL"
                  ? "bg-[#0D0D0D] border-[#FF6A00] text-[#FF6A00]"
                  : "bg-[#080808] border-[#1A1A1A] text-[#9A9A9A] hover:border-[#555555]"
              }`}
            >
              <Box className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-mono text-xs text-[#555555] uppercase">DISCIPLINE 01</div>
                <div className="font-mono text-base font-bold uppercase">ARCHITECTURAL</div>
              </div>
            </button>

            <button
              onClick={() => setActiveSystem("STRUCTURAL")}
              onMouseEnter={() => setActiveSystem("STRUCTURAL")}
              className={`w-full p-6 text-left border transition-all duration-300 flex items-center space-x-4 ${
                activeSystem === "STRUCTURAL"
                  ? "bg-[#0D0D0D] border-[#FF6A00] text-[#FF6A00]"
                  : "bg-[#080808] border-[#1A1A1A] text-[#9A9A9A] hover:border-[#555555]"
              }`}
            >
              <Layers className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-mono text-xs text-[#555555] uppercase">DISCIPLINE 02</div>
                <div className="font-mono text-base font-bold uppercase">STRUCTURAL</div>
              </div>
            </button>
          </div>

          {/* Center Graphic Visual */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-8 bg-[#080808] border border-[#1A1A1A] min-h-[320px]">
            <div className="absolute inset-0 bg-tech-dots opacity-30" />

            {/* Simulated Technical Diagram Frame */}
            <div className="relative z-10 w-full flex flex-col items-center space-y-6 text-center">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#FF6A00] flex items-center justify-center animate-spin-slow">
                <div className="w-24 h-24 rounded-full bg-[#0D0D0D] border border-[#FF6A00] flex items-center justify-center orange-glow-md">
                  <span className="font-mono text-xs font-bold text-[#FF6A00] tracking-widest">
                    {activeSystem}
                  </span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
                BIM FEDERATED MODEL COORDINATE: 0,0,0
              </div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => setActiveSystem("COORDINATION")}
              onMouseEnter={() => setActiveSystem("COORDINATION")}
              className={`w-full p-6 text-left border transition-all duration-300 flex items-center space-x-4 ${
                activeSystem === "COORDINATION"
                  ? "bg-[#0D0D0D] border-[#FF6A00] text-[#FF6A00]"
                  : "bg-[#080808] border-[#1A1A1A] text-[#9A9A9A] hover:border-[#555555]"
              }`}
            >
              <Cpu className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-mono text-xs text-[#555555] uppercase">DISCIPLINE 03</div>
                <div className="font-mono text-base font-bold uppercase">COORDINATION</div>
              </div>
            </button>

            <button
              onClick={() => setActiveSystem("DOCUMENTATION")}
              onMouseEnter={() => setActiveSystem("DOCUMENTATION")}
              className={`w-full p-6 text-left border transition-all duration-300 flex items-center space-x-4 ${
                activeSystem === "DOCUMENTATION"
                  ? "bg-[#0D0D0D] border-[#FF6A00] text-[#FF6A00]"
                  : "bg-[#080808] border-[#1A1A1A] text-[#9A9A9A] hover:border-[#555555]"
              }`}
            >
              <FileText className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-mono text-xs text-[#555555] uppercase">DISCIPLINE 04</div>
                <div className="font-mono text-base font-bold uppercase">DOCUMENTATION</div>
              </div>
            </button>
          </div>
        </div>

        {/* Selected Discipline Specs Box */}
        <div className="mt-12 bg-[#0D0D0D] border border-[#1A1A1A] p-8 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <h3 className="font-mono text-xl font-bold text-[#F5F5F2] uppercase">
              {current.title}
            </h3>
          </div>
          <p className="text-sm text-[#9A9A9A] font-mono leading-relaxed">
            {current.desc}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {current.highlights.map((hl) => (
              <span
                key={hl}
                className="font-mono text-xs px-3 py-1 bg.dark border border-[#FF6A00]/30 text-[#FF6A00]"
              >
                ✓ {hl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
