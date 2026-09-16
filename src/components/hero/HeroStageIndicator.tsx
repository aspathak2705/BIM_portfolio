"use client";

interface HeroStageIndicatorProps {
  currentStage: number; // 1 to 6
}

export const stages = [
  { id: 1, label: "01 DRAW", desc: "DRAWINGS" },
  { id: 2, label: "02 MODEL", desc: "BIM MODEL" },
  { id: 3, label: "03 STRUCTURE", desc: "FRAMING" },
  { id: 4, label: "04 REINFORCE", desc: "RCC / STEEL" },
  { id: 5, label: "05 COORDINATE", desc: "CLASH AUDIT" },
  { id: 6, label: "06 DELIVER", desc: "FINAL BIM" },
];

export function HeroStageIndicator({ currentStage }: HeroStageIndicatorProps) {
  return (
    <div className="flex flex-col space-y-3 font-mono text-[10px] tracking-widest text-[#9A9A9A]">
      <div className="flex items-center space-x-2 text-[#555555]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
        <span>BIM PROGRESSION METRIC</span>
      </div>

      <div className="flex flex-col space-y-2 border-l border-[#1A1A1A] pl-3">
        {stages.map((stg) => {
          const isActive = currentStage === stg.id;
          const isPassed = currentStage > stg.id;

          return (
            <div key={stg.id} className="flex items-center space-x-3 transition-colors duration-300">
              <div
                className={`w-1.5 h-1.5 transition-all duration-300 ${
                  isActive
                    ? "bg-[#FF6A00] scale-125 orange-glow-sm"
                    : isPassed
                    ? "bg-[#F5F5F2]"
                    : "bg-[#1A1A1A]"
                }`}
              />
              <span
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-[#FF6A00] font-bold"
                    : isPassed
                    ? "text-[#F5F5F2]"
                    : "text-[#555555]"
                }`}
              >
                {stg.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
