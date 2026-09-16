import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Portfolio | Pawan Patil & Associates",
  description: "High-precision architectural, structural, and BIM coordination portfolio showcase.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
