"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ project, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8">
      {/* Lightbox Header */}
      <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
        <div>
          <span className="font-mono text-xs text-[#FF6A00] tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="font-mono text-lg sm:text-xl font-bold text-[#F5F5F2] uppercase">
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full border border-[#1A1A1A] text-[#F5F5F2] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain"
        />

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 p-3 bg-[#080808]/80 border border-[#1A1A1A] text-[#F5F5F2] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 p-3 bg-[#080808]/80 border border-[#1A1A1A] text-[#F5F5F2] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
          aria-label="Next Project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Footer Metadata */}
      <div className="border-t border-[#1A1A1A] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-[#9A9A9A]">
        <div>
          <span className="text-[#555555] block">SCOPE:</span>
          <span>{project.scope}</span>
        </div>
        <div>
          <span className="text-[#555555] block">SOFTWARE:</span>
          <span>{project.software.join(" • ")}</span>
        </div>
        <div>
          <span className="text-[#555555] block">DELIVERABLES:</span>
          <span>{project.deliverables.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
