import { ContactIntake } from "@/components/sections/ContactIntake";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pawan Patil & Associates",
  description: "Discuss project brief, request BIM / Revit / CAD quotations, or contact Er. Pawan G. Patil directly.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <ContactIntake />
    </div>
  );
}
