import { ProjectPortfolio } from "@/components/sections/ProjectPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Pawan Patil & Associates",
  description: "Selected architectural, structural, and commercial BIM engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <ProjectPortfolio />
    </div>
  );
}
