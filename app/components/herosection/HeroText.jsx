import Link from "next/link";
import Image from "next/image";
import Button2 from "../Button2";
import { Linkedin } from "lucide-react";

export default function HeroText() {
  return (
    <div className="flex flex-col justify-around lg:justify-center h-full w-full p-4 lg:p-0">
      <p className="font-bruno text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left">
        u<span className="text-[var(--primary)] italic">X</span>pect
      </p>
      <p className="text-lg lg:text-xl 2xl:text-2xl text-center lg:text-left lg:mt-10">
        We develop Mobile Apps and Websites that <br /> look good, work well,
        and feel effortless to use.
      </p>
      {/* <p className="text-sm  text-neutral-400">
        Click the button below to get started on your project with us.
      </p> */}
      <div className="w-full h-[50px] lg:w-fit flex justify-between lg:justify-normal gap-4 lg:gap-10 lg:mt-14">
        <Button2 />
        <span className="w-0.5 h-full border border-white/20"></span>
        <Link
          href="https://www.linkedin.com/in/evans-addo-462aab351/"
          className="flex items-center gap-2 ">
          <Linkedin
            className="w-12 h-12 fill-white border border-white/20 px-3 rounded-full"
            fill="currentColor"
          />
          <p className="text-sm">Connect with us</p>
        </Link>
      </div>
    </div>
  );
}
