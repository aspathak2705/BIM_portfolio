import { TeamSection } from "@/components/sections/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Pawan Patil & Associates",
  description: "Meet the BIM modelers, structural specialists, and drafting engineers behind Pawan Patil & Associates.",
};

export default function TeamPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <TeamSection />
    </div>
  );
}
