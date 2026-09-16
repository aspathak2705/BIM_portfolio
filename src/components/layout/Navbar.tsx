"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "/#services" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "ABOUT", href: "/#about" },
    { name: "TEAM", href: "/#team" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#1A1A1A] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex flex-col">
          <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#F5F5F2] group-hover:text-[#FF6A00] transition-colors">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="font-mono text-[10px] text-[#9A9A9A] tracking-widest uppercase">
            {siteConfig.descriptor}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-mono text-xs tracking-widest transition-colors hover:text-[#FF6A00] ${
                  isActive ? "text-[#FF6A00]" : "text-[#9A9A9A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center space-x-2 font-mono text-xs tracking-widest uppercase px-4 py-2 bg-transparent border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-[#050505] transition-all duration-300"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F5F2] hover:text-[#FF6A00] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#050505]/95 backdrop-blur-xl z-30 flex flex-col justify-between p-6 border-t border-[#1A1A1A]">
          <div className="space-y-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-lg tracking-widest text-[#F5F5F2] hover:text-[#FF6A00] border-b border-[#1A1A1A] pb-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-[#1A1A1A]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 font-mono text-sm tracking-widest uppercase px-6 py-3 bg-[#FF6A00] text-[#050505] font-bold"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
