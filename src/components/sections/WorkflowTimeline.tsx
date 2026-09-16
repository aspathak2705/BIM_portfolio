"use client";

import { useState } from "react";
import { workflowSteps } from "@/data/workflow";

export function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 bg-[#080808] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
            05 // EXECUTION METHODOLOGY
          </div>
          <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
            FROM BRIEF <span className="text-[#FF6A00]">TO DELIVERY.</span>
          </h2>
          <p className="text-sm text-[#9A9A9A] font-mono">
            STRUCTURAL & ARCHITECTURAL WORKFLOW PIPELINE FROM INITIAL DRAWINGS TO FINAL REVI ASSETS.
          </p>
        </div>

        {/* Timeline Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 border transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer group ${
                  isActive
                    ? "bg-[#0D0D0D] border-[#FF6A00] orange-glow-sm"
                    : "bg-[#050505] border-[#1A1A1A] hover:border-[#555555]"
                }`}
              >
                {/* Header Stage Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-3xl font-bold transition-colors ${
                      isActive ? "text-[#FF6A00]" : "text-[#555555] group-hover:text-[#9A9A9A]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-[#FF6A00]" : "bg-[#1A1A1A]"
                    }`}
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3
                    className={`font-mono text-base font-bold uppercase transition-colors ${
                      isActive ? "text-[#F5F5F2]" : "text-[#9A9A9A] group-hover:text-[#F5F5F2]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Technical Note Footer */}
                <div className="pt-4 border-t border-[#1A1A1A] font-mono text-[10px] text-[#555555] tracking-widest uppercase">
                  {step.technicalNote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
