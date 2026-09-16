"use client";

import { teamData } from "@/data/team";
import { CheckCircle2 } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#050505] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-4 md:space-y-0">
          <div>
            <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase mb-2">
              08 // HUMAN CAPITAL & STRUCTURE
            </div>
            <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
              OUR <span className="text-[#FF6A00]">TEAM</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9A9A] max-w-sm">
            THE PEOPLE BEHIND THE WORK. EXPERIENCED BIM MODELERS AND DRAFTING ENGINEERS.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              className="bg-[#080808] border border-[#1A1A1A] p-8 space-y-6 hover:border-[#FF6A00] transition-all duration-300 group"
            >
              {/* Index & Header */}
              <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
                <span className="font-mono text-2xl font-bold text-[#FF6A00]">
                  0{index + 1}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-[#0D0D0D] text-[#9A9A9A] border border-[#1A1A1A]">
                  {member.isFounder ? "FOUNDER" : "TECHNICAL DESK"}
                </span>
              </div>

              {/* Name & Role */}
              <div className="space-y-2">
                <h3 className="text-xl font-mono font-bold text-[#F5F5F2] uppercase group-hover:text-[#FF6A00] transition-colors">
                  {member.name}
                </h3>
                <div className="font-mono text-xs text-[#FF6A00] uppercase">
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-[#9A9A9A] font-sans leading-relaxed">
                {member.bio}
              </p>

              {/* Technical Expertise */}
              <div className="space-y-3 border-t border-[#1A1A1A] pt-4">
                <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">
                  SPECIALIZATION
                </div>
                <div className="space-y-2">
                  {member.expertise.map((exp) => (
                    <div key={exp} className="flex items-center space-x-2 text-xs font-mono text-[#F5F5F2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
