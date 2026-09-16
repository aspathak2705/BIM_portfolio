"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] py-16 font-mono text-xs text-[#9A9A9A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Descriptor */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-[#F5F5F2] uppercase tracking-wider">
              {siteConfig.name.toUpperCase()}
            </h3>
            <p className="text-xs text-[#FF6A00] tracking-architectural uppercase">
              {siteConfig.descriptor}
            </p>
            <p className="text-xs text-[#9A9A9A] max-w-md leading-relaxed pt-2">
              Professional BIM, Revit, structural modeling and CAD outsourcing services for architects, structural consultants, contractors and developers.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#555555] uppercase tracking-widest block font-bold">NAVIGATION</span>
            <div className="flex flex-col space-y-2">
              <Link href="/#services" className="hover:text-[#FF6A00] transition-colors">SERVICES</Link>
              <Link href="/#projects" className="hover:text-[#FF6A00] transition-colors">PROJECTS</Link>
              <Link href="/portfolio" className="hover:text-[#FF6A00] transition-colors">BIM PORTFOLIO</Link>
              <Link href="/#about" className="hover:text-[#FF6A00] transition-colors">ABOUT US</Link>
              <Link href="/#team" className="hover:text-[#FF6A00] transition-colors">OUR TEAM</Link>
              <Link href="/contact" className="hover:text-[#FF6A00] transition-colors">CONTACT</Link>
            </div>
          </div>

          {/* Direct Details */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#555555] uppercase tracking-widest block font-bold">CONTACT DIRECT</span>
            <div className="space-y-1">
              <div>{siteConfig.location}</div>
              <div>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#FF6A00] transition-colors">
                  +91 {siteConfig.phoneRaw}
                </a>
              </div>
              <div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FF6A00] transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#555555]">
          <div>
            PROJECT-BASED AND REGULAR OUTSOURCING ASSIGNMENTS WELCOME.
          </div>
          <div>
            © {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
