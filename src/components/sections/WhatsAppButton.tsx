"use client";

import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/91${siteConfig.phoneRaw}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center space-x-3 bg-[#080808]/90 border border-[#FF6A00] p-3 shadow-2xl backdrop-blur-md hover:bg-[#FF6A00] transition-all duration-300 orange-glow-sm"
      aria-label="Start WhatsApp Conversation"
    >
      <div className="w-8 h-8 rounded-full bg-[#FF6A00] group-hover:bg-[#050505] flex items-center justify-center transition-colors">
        <MessageSquare className="w-4 h-4 text-[#050505] group-hover:text-[#FF6A00]" />
      </div>

      <span className="hidden sm:inline font-mono text-xs tracking-widest text-[#F5F5F2] group-hover:text-[#050505] font-bold uppercase transition-colors pr-2">
        START A CONVERSATION
      </span>
    </a>
  );
}
