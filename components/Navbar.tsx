"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Calculator, Home as HomeIcon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <Sparkles className="w-5 h-5 text-indigo-100" />
          </div>
          <div>
            <span className="font-bold text-lg text-white group-hover:text-indigo-400 transition">
              AI Spend Audit
            </span>
            <span className="text-[10px] text-zinc-400 block -mt-1">
              Subscription Cost Tracker
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              pathname === "/"
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            href="/audit"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              pathname === "/audit"
                ? "bg-indigo-600 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Audit Tool</span>
          </Link>
        </nav>

      </div>
    </header>
  );
}
