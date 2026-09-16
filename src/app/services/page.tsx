import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Pawan Patil & Associates",
  description: "Explore our 10 core BIM, Revit modeling, 2D CAD drafting, and structural engineering services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <ServiceExplorer />
    </div>
  );
}
