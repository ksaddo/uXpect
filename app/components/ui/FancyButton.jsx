import { ArrowUpRight} from "lucide-react"; //prettier-ignore

export default function FancyButton({ children }) {
  return (
    <button className="group relative flex flex-1 h-10 items-center justify-center overflow-hidden rounded-full bg-red-700 text-white">
      {/* Button text and arrow */}
      <span className="relative z-10 flex items-center gap-1 text-sm">
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
