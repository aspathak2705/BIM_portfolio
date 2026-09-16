"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SequenceCanvas } from "./SequenceCanvas";
import { HeroStageIndicator, stages } from "./HeroStageIndicator";
import { siteConfig } from "@/data/site";

const stageStory = [
  { stage: 1, title: "DRAW", text: "Engineering information begins with precise drawings." },
  { stage: 2, title: "MODEL", text: "2D information becomes structured BIM geometry." },
  { stage: 3, title: "STRUCTURE", text: "Architectural and structural systems are developed with precision." },
  { stage: 4, title: "REINFORCE", text: "RCC and reinforcement become part of the digital model." },
  { stage: 5, title: "COORDINATE", text: "Models are reviewed and coordinated for project requirements." },
  { stage: 6, title: "DELIVER", text: "Project-ready models, drawings and documentation." },
];

export function HeroSequence() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const totalFrames = 240;

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  // Scroll listener mapping scroll Y to frame 1..240
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      // How far top of container has scrolled past top of viewport
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));
      setScrollProgress(progress);

      // Frame mapping 1 to 240
      const targetFrame = Math.max(1, Math.min(totalFrames, Math.round(progress * (totalFrames - 1)) + 1));
      setCurrentFrame(targetFrame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames, reducedMotion]);

  // Current stage calculation (1 to 6)
  const currentStageIndex = Math.min(6, Math.max(1, Math.floor(scrollProgress * 6) + 1));
  const activeStory = stageStory[currentStageIndex - 1];

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-[#050505]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Background Technical Grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        {/* Canvas Render Source */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {!reducedMotion ? (
            <SequenceCanvas
              currentFrame={currentFrame}
              totalFrames={totalFrames}
              framePath="/Pawan_Patil_BIM_Scroll_Sequence/frames/frame_"
              extension=".webp"
              onFirstFrameLoaded={() => setIsFirstFrameLoaded(true)}
              onProgress={(count) => setLoadedCount(count)}
            />
          ) : (
            // Static reduced motion fallback frame
            <img
              src="/Pawan_Patil_BIM_Scroll_Sequence/frames/frame_0240.webp"
              alt="Pawan Patil BIM Model Final State"
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Technical Loading Overlay */}
        {!isFirstFrameLoaded && !reducedMotion && (
          <div className="absolute inset-0 z-30 bg-[#050505] flex flex-col items-center justify-center space-y-4">
            <div className="font-mono text-xs tracking-widest text-[#9A9A9A]">
              INITIALIZING BIM MODEL FRAMEWORK
            </div>
            <div className="w-48 h-1 bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full bg-[#FF6A00] transition-all duration-200"
                style={{ width: `${Math.min(100, Math.round((loadedCount / totalFrames) * 100))}%` }}
              />
            </div>
            <div className="font-mono text-[10px] text-[#555555]">
              {loadedCount} / {totalFrames} FRAMES LOADED
            </div>
          </div>
        )}

        {/* Hero Top Content Layer */}
        <div className="relative z-10 pt-28 px-4 sm:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start pointer-events-none">
          {/* Main Title & Tagline */}
          <div className="max-w-2xl pointer-events-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#080808]/80 border border-[#1A1A1A] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span className="font-mono text-[11px] tracking-architectural text-[#F5F5F2] uppercase">
                {siteConfig.descriptor}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-[#F5F5F2] leading-none uppercase">
              FROM DRAWINGS <br />
              <span className="text-[#FF6A00]">TO INTELLIGENT BIM.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#9A9A9A] font-sans max-w-xl leading-relaxed">
              Professional BIM & Revit outsourcing services for architects, structural consultants, contractors and developers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#services"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-[#FF6A00] text-[#050505] font-bold hover:bg-[#CC5500] transition-colors"
              >
                EXPLORE SERVICES
              </Link>
              <Link
                href="/contact"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-transparent border border-[#F5F5F2]/20 text-[#F5F5F2] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
              >
                START A PROJECT
              </Link>
            </div>
          </div>

          {/* Right Side: Technical Stage Progress */}
          <div className="hidden md:block pointer-events-auto mt-6 md:mt-0 bg-[#080808]/80 border border-[#1A1A1A] p-4 backdrop-blur-md">
            <HeroStageIndicator currentStage={currentStageIndex} />
          </div>
        </div>

        {/* Hero Bottom Story Sync Layer */}
        <div className="relative z-10 pb-8 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-end justify-between pointer-events-none">
          {/* Synchronized Stage Story */}
          <div className="bg-[#080808]/90 border border-[#1A1A1A] p-4 max-w-md backdrop-blur-md pointer-events-auto space-y-1">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase">
              <span>STAGE {activeStory.stage < 10 ? `0${activeStory.stage}` : activeStory.stage}</span>
              <span>•</span>
              <span>{activeStory.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F5F5F2] font-mono leading-snug">
              {activeStory.text}
            </p>
          </div>

          {/* Scroll Down Prompt */}
          <div className="hidden sm:flex items-center space-x-3 font-mono text-[10px] tracking-widest text-[#9A9A9A] pointer-events-auto">
            <span>SCROLL TO TRANSFORM</span>
            <div className="w-8 h-8 rounded-full border border-[#1A1A1A] flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-[#FF6A00]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
