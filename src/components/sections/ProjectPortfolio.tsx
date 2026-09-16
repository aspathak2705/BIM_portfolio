"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Lightbox } from "@/components/portfolio/Lightbox";

export function ProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const categories = ["ALL", "STRUCTURAL BIM", "COMMERCIAL", "RESIDENTIAL", "BIM COORDINATION"];

  const filteredProjects =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-[#050505] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase mb-2">
              04 // PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
              SELECTED <span className="text-[#FF6A00]">PROJECTS</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Editorial Project Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#080808] border border-[#1A1A1A] grid grid-cols-1 lg:grid-cols-12 overflow-hidden group hover:border-[#FF6A00]/50 transition-all duration-300"
            >
              {/* Image Preview */}
              <div
                onClick={() => setSelectedProjectIndex(index)}
                className="lg:col-span-7 relative aspect-[16/10] bg-[#0D0D0D] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
                <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-[#050505] border border-[#FF6A00] font-mono text-xs text-[#FF6A00] tracking-widest flex items-center space-x-2">
                    <Maximize2 className="w-4 h-4" />
                    <span>VIEW LIGHTBOX</span>
                  </div>
                </div>
              </div>

              {/* Project Info Panel */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
                    <span className="font-mono text-xs text-[#FF6A00] tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#555555]">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-mono font-bold text-[#F5F5F2] uppercase group-hover:text-[#FF6A00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#9A9A9A] font-sans leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4 border-t border-[#1A1A1A] pt-4 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#555555] block">SCOPE</span>
                      <span className="text-[#F5F5F2]">{project.scope}</span>
                    </div>
                    <div>
                      <span className="text-[#555555] block">SOFTWARE</span>
                      <span className="text-[#FF6A00]">{project.software.join(", ")}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#555555] block mb-1">DELIVERABLES</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.deliverables.map((del) => (
                        <span
                          key={del}
                          className="px-2 py-0.5 bg-[#0D0D0D] border border-[#1A1A1A] text-[10px] text-[#9A9A9A]"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detail Action */}
                <div className="pt-2 border-t border-[#1A1A1A]">
                  <button
                    onClick={() => setSelectedProjectIndex(index)}
                    className="w-full flex items-center justify-between font-mono text-xs tracking-widest uppercase text-[#F5F5F2] group-hover:text-[#FF6A00] transition-colors"
                  >
                    <span>OPEN PROJECT DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Trigger */}
      {selectedProjectIndex !== null && (
        <Lightbox
          project={filteredProjects[selectedProjectIndex]}
          onClose={() => setSelectedProjectIndex(null)}
          onPrev={() =>
            setSelectedProjectIndex((prev) =>
              prev === null || prev === 0 ? filteredProjects.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setSelectedProjectIndex((prev) =>
              prev === null || prev === filteredProjects.length - 1 ? 0 : prev + 1
            )
          }
        />
      )}
    </section>
  );
}
