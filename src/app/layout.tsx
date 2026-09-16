import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/common/CustomCursor";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pawan Patil & Associates | BIM, Revit, Structural & CAD Services",
  description:
    "Professional BIM, Revit, structural modeling and CAD outsourcing services for architects, structural consultants, contractors and developers.",
  keywords: [
    "BIM Outsourcing",
    "Revit Structural Modeling",
    "Architectural BIM",
    "CAD Drafting",
    "2D to 3D BIM",
    "Pawan Patil & Associates",
    "Jalgaon BIM Services",
    "India BIM Outsourcing"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-[#F5F5F2] selection:bg-[#FF6A00] selection:text-[#050505]">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
