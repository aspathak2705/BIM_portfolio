"use client";

import { founderData } from "@/data/team";
import { CheckCircle2 } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-32 bg-[#080808] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Portrait Graphics */}
          <div className="lg:col-span-5 relative bg-[#0D0D0D] border border-[#1A1A1A] p-8 space-y-6">
            <div className="absolute top-4 right-4 font-mono text-[10px] text-[#FF6A00] tracking-widest border border-[#FF6A00] px-3 py-1">
              LEADERSHIP
            </div>

            <div className="aspect-[4/5] w-full bg-[#050505] border border-[#1A1A1A] flex flex-col justify-end p-6 relative overflow-hidden bg-tech-dots">
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-xs text-[#FF6A00] uppercase tracking-widest">
                  FOUNDER & PRINCIPAL
                </span>
                <h3 className="font-mono text-2xl font-bold text-[#F5F5F2] uppercase">
                  {founderData.name}
                </h3>
                <p className="font-mono text-xs text-[#9A9A9A]">
                  Pawan Patil & Associates
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
                07 // FOUNDER SPOTLIGHT
              </div>
              <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
                THE PERSON <br />
                <span className="text-[#FF6A00]">BEHIND THE MODEL.</span>
              </h2>
            </div>

            <p className="text-base text-[#9A9A9A] font-sans leading-relaxed">
              {founderData.bio}
            </p>

            {/* Core Competencies */}
            <div className="space-y-4 border-t border-[#1A1A1A] pt-6">
              <div className="font-mono text-xs text-[#FF6A00] tracking-widest uppercase">
                KEY TECHNICAL FOCUS AREAS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {founderData.expertise.map((exp) => (
                  <div key={exp} className="flex items-center space-x-3 text-sm text-[#F5F5F2] font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
