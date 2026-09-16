import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pawan Patil & Associates",
  description: "Learn about Pawan Patil & Associates, founder Er. Pawan G. Patil, and our engineering philosophy.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <WhyUsSection />
      <FounderSection />
    </div>
  );
}
