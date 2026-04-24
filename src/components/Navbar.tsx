"use client";

import Link from "next/link";
import { Vote } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-saffron p-1.5 rounded-lg">
            <Vote className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Voter<span className="text-saffron">Vani</span> <span className="text-green-india">AI</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#timeline" className="text-sm font-medium hover:text-saffron transition-colors">Timeline</Link>
          <Link href="/#quiz" className="text-sm font-medium hover:text-saffron transition-colors">Quiz</Link>
          <Link href="/#checklist" className="text-sm font-medium hover:text-saffron transition-colors">Checklist</Link>
          <Link href="/about" className="text-sm font-medium hover:text-saffron transition-colors">About</Link>
        </div>
        
        <Link 
          href="https://voters.eci.gov.in/" 
          target="_blank"
          className="bg-ashoka text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md"
        >
          Official ECI Portal
        </Link>
      </div>
    </nav>
  );
}
