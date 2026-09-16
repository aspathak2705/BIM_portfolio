"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function EngineeringTransition() {
  return (
    <section className="relative w-full py-32 sm:py-48 bg-[#050505] border-t border-[#1A1A1A] overflow-hidden">
      {/* Background Technical Lines */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Huge Typography */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-architectural text-[#FF6A00] uppercase">
              <span className="w-8 h-[1px] bg-[#FF6A00]" />
              <span>CORE CREATIVE METAPHOR</span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-mono font-bold tracking-tight text-[#F5F5F2] uppercase leading-[0.9]">
              ENGINEERING <br />
              <span className="text-[#FF6A00]">MEETS BIM.</span>
            </h2>

            <p className="text-lg sm:text-2xl font-mono text-[#9A9A9A] leading-relaxed max-w-3xl pt-4">
              Pawan Patil & Associates provides BIM, Revit and CAD services for architects, structural consultants, contractors and developers worldwide.
            </p>
          </div>

          {/* Right Editorial Block */}
          <div className="lg:col-span-4 space-y-6 border-l border-[#1A1A1A] lg:pl-8">
            <div className="font-mono text-xs text-[#555555] tracking-widest uppercase">
              01 // PRACTICE STATEMENT
            </div>

            <p className="text-sm text-[#9A9A9A] leading-relaxed">
              We bridge traditional 2D consultant drawings and high-end 3D parametric BIM models with strict engineering rigor and zero-clash tolerances.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest text-[#FF6A00] hover:text-[#F5F5F2] transition-colors"
              >
                <span>CONSULT OUR ENGINEERING TEAM</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
