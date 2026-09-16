"use client";

import { ShieldCheck, Cpu, Layers, MessageSquare } from "lucide-react";

export function WhyUsSection() {
  const points = [
    {
      icon: Cpu,
      num: "01",
      title: "ENGINEERING UNDERSTANDING",
      desc: "Deep background in structural concepts and architectural drafting ensures model geometry reflects physical structural behavior, not just visual graphics.",
    },
    {
      icon: Layers,
      num: "02",
      title: "FLEXIBLE OUTSOURCING",
      desc: "Tailored engagement models—whether you need one-off project support or a long-term virtual BIM modeling desk.",
    },
    {
      icon: ShieldCheck,
      num: "03",
      title: "DRAWING-TO-MODEL CAPABILITY",
      desc: "Proven ability to ingest legacy 2D CAD DWG files, hand sketches, and structural consultant PDFs into synchronized 3D Revit models.",
    },
    {
      icon: MessageSquare,
      num: "04",
      title: "PROJECT-FOCUSED DELIVERY",
      desc: "Clear milestone updates, prompt RFI communication, and strict adherence to consultant deadlines and drawing formats.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-4 md:space-y-0">
          <div>
            <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase mb-2">
              06 // WHY PAWAN PATIL & ASSOCIATES
            </div>
            <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
              WHY WORK <span className="text-[#FF6A00]">WITH US</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9A9A] max-w-sm">
            ENGINEERING RIGOR COMBINED WITH MODERN PARAMETRIC BIM OUTSOURCING INFRASTRUCTURE.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={pt.num}
                className="bg-[#080808] border border-[#1A1A1A] p-8 sm:p-10 space-y-6 hover:border-[#FF6A00]/50 transition-colors group"
              >
                <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
                  <span className="font-mono text-3xl font-bold text-[#FF6A00]">{pt.num}</span>
                  <IconComponent className="w-8 h-8 text-[#555555] group-hover:text-[#FF6A00] transition-colors" />
                </div>

                <h3 className="text-2xl font-mono font-bold text-[#F5F5F2] uppercase group-hover:text-[#FF6A00] transition-colors">
                  {pt.title}
                </h3>

                <p className="text-sm text-[#9A9A9A] font-sans leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
