import Link from "next/link";
import {  Play} from "lucide-react"; //prettier-ignore
import SocialIcons from "../SocialIcons";

export default function HeroInfo() {
  return (
    <div className="hidden lg:flex items-center justify-between w-full py-10 backdrop-blur-sm bg-black/40 hover:bg-black/70 transition duration-300 px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px] ">
      {/* play div */}
      <div className="flex items-center gap-2">
        <Play
          className="w-14 h-14 fill-white border border-white/20 px-3 rounded-full"
          fill="currentColor"
        />
        <p className="text-sm">View more</p>
      </div>

      <span className="w-0.5 h-full border border-white/20"></span>
      {/* text div */}
      <div className="md:flex items-center gap-6">
        <p className="text-sm w-10 h-10 flex items-center justify-center rounded-full border border-white/40 ">
          1
        </p>
        <p className="text-sm whitespace-pre-line">
          Design-oriented: Our excellent UI/UX design <br /> team has abundant
          expertise in building visually
          <br />
          appealing and functional digital products.
        </p>
      </div>
      {/* text div */}
      <div className="flex items-center gap-6">
        <p className="text-sm w-10 h-10 flex items-center justify-center rounded-full border border-white/40 ">
          2
        </p>
        <p className="text-sm whitespace-pre-line">
          Security: Over 30,000 sites get hacked every day <br />
          We make sure yours isn’t one of them — with
          <br /> encryption, firewalls, and constant updates.
        </p>
      </div>
      <span className="w-0.5 h-full border border-white/20"></span>
      {/* socials section */}
      <SocialIcons />
    </div>
  );
}
