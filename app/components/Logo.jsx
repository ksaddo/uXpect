import React from "react";

export default function Logo({ className = "" }) {
  return (
    <p className={`font-bruno text-lg md:text-8xl ${className}`}>
      u<span className="text-[var(--primary)] italic">X</span>
      pect
    </p>
  );
}
