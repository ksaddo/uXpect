// components/GlowButton.jsx
"use client";
import { ArrowUpRight} from "lucide-react"; //prettier-ignore

export default function ButtonGlass({ children = "Click Me" }) {
  return (
    <button
      className="group relative w-fit text-sm lg:text-base px-5 py-2 lg:px-6 lg:py-3 rounded-full backdrop-blur-sm bg-neutral-400/10 border border-white/20
                 transition-all duration-200 ease-in-out items-center justify-center overflow-hidden ">
      {/* Button text and arrow */}
      <span className="relative z-10 flex justify-center items-center gap-1 text-sm">
        {children}
        <ArrowUpRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Glimmer effect */}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  );
}
