"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section id="services" className="py-32 bg-[#080808] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 space-y-4 sm:space-y-0">
          <div>
            <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase mb-2">
              01 // CAPABILITIES INDEX
            </div>
            <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
              INTERACTIVE <span className="text-[#FF6A00]">SERVICE EXPLORER</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9A9A] max-w-xs">
            SELECT A SERVICE TO VIEW ENGINEERING DELIVERABLES AND SPECIFICATIONS.
          </p>
        </div>

        {/* Index Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Engineering Index List */}
          <div className="lg:col-span-6 space-y-0 divide-y divide-[#1A1A1A] border-t border-b border-[#1A1A1A]">
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full py-5 px-4 text-left flex items-center justify-between transition-all duration-300 group ${
                    isActive ? "bg-[#0D0D0D]" : "hover:bg-[#0D0D0D]/50"
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <span
                      className={`font-mono text-base font-bold transition-colors duration-300 ${
                        isActive ? "text-[#FF6A00]" : "text-[#555555] group-hover:text-[#9A9A9A]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`font-mono text-sm sm:text-base font-bold uppercase transition-colors duration-300 ${
                        isActive ? "text-[#F5F5F2]" : "text-[#9A9A9A] group-hover:text-[#F5F5F2]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-[#FF6A00]" : "bg-transparent"
                      }`}
                    />
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive
                          ? "text-[#FF6A00] translate-x-1 -translate-y-1"
                          : "text-[#555555] group-hover:text-[#9A9A9A]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Detail Panel */}
          <div className="lg:col-span-6 sticky top-28 bg-[#0D0D0D] border border-[#1A1A1A] p-8 sm:p-10 space-y-8">
            {/* Active Header */}
            <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
              <span className="font-mono text-4xl font-bold text-[#FF6A00]">
                {activeService.number}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeService.disciplines.map((disc) => (
                  <span
                    key={disc}
                    className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-[#1A1A1A] text-[#9A9A9A] border border-[#2A2A2A]"
                  >
                    {disc}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold text-[#F5F5F2] uppercase">
                {activeService.title}
              </h3>
              <p className="text-sm text-[#9A9A9A] leading-relaxed">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-4 border-t border-[#1A1A1A] pt-6">
              <div className="font-mono text-xs text-[#FF6A00] tracking-widest uppercase">
                KEY DELIVERABLES & OUTPUTS
              </div>
              <ul className="space-y-3">
                {activeService.deliverables.map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-[#F5F5F2] font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service CTA */}
            <div className="border-t border-[#1A1A1A] pt-6">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center space-x-2 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-[#FF6A00] text-[#050505] font-bold hover:bg-[#CC5500] transition-colors"
              >
                <span>REQUEST QUOTATION FOR THIS SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
