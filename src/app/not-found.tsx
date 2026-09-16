import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase">
          404 // ROUTE NOT FOUND
        </div>

        <h1 className="font-mono text-6xl font-bold text-[#F5F5F2]">
          404
        </h1>

        <p className="font-mono text-xs text-[#9A9A9A] leading-relaxed">
          THE REQUESTED MODEL PAGE OR DIRECTORY ENTRY DOES NOT EXIST.
        </p>

        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest uppercase px-6 py-3 bg-[#FF6A00] text-[#050505] font-bold hover:bg-[#CC5500] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
