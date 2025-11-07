"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button2({ href = "/creation", children = "Click Me" }) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 bg-orange-800 overflow-hidden group text-sm lg:text-base transition-all duration-200 ease-in-out">
      {/* Text + arrow */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Glimmer effect */}
      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    </Link>
  );
}
