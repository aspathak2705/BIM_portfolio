"use client";

import { useState, useRef } from "react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="py-32 bg-[#080808] border-t border-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
            03 // VISUAL TRANSFORMATION
          </div>
          <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
            FROM 2D <span className="text-[#FF6A00]">TO 3D.</span>
          </h2>
          <p className="text-sm text-[#9A9A9A] font-mono">
            DRAG SLIDER TO COMPARE RAW 2D DRAWINGS AGAINST PARMETRIC BIM MODEL GEOMETRY.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          className="relative w-full aspect-[16/9] max-h-[600px] border border-[#1A1A1A] bg-[#050505] overflow-hidden select-none cursor-ew-resize"
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Right Image (3D BIM Model) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/Pawan_Patil_BIM_Scroll_Sequence/frames/frame_0240.webp"
              alt="3D Coordinated BIM Model"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#050505]/80 border border-[#FF6A00] backdrop-blur-md font-mono text-xs text-[#FF6A00] tracking-widest uppercase">
              3D INTELLIGENT BIM MODEL
            </div>
          </div>

          {/* Left Image (2D CAD / Early Drawing Frame) */}
          <div
            className="absolute inset-0 h-full overflow-hidden border-r-2 border-[#FF6A00]"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full filter grayscale contrast-125">
              <img
                src="/Pawan_Patil_BIM_Scroll_Sequence/frames/frame_0001.webp"
                alt="2D Engineering CAD Drawing"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#050505]/80 border border-[#1A1A1A] backdrop-blur-md font-mono text-xs text-[#F5F5F2] tracking-widest uppercase">
              2D CONSULTANT DRAWING
            </div>
          </div>

          {/* Slider Control Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#FF6A00] cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#FF6A00] flex items-center justify-center orange-glow-sm">
              <span className="font-mono text-[10px] text-[#FF6A00] font-bold">◄ ►</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
