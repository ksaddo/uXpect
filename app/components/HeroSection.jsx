"use client";
import Image from "next/image";
import Link from "next/link";
import Button1 from "./Button1";
import Button2 from "./Button2";
export default function HeroSection() {
  return (
    <section className="relative mt-14 mb-30 w-full overflow-hidden">
      <div className="relative flex min-h-[600px] md:min-h-[660px] lg:min-h-[700px] 2xl:min-h-[920px]">
        {/* Text Section */}
        <div className="flex flex-1 flex-col justify-center items-start pl-5 gap-5 md:gap-12 z-20">
          <span className="pl-2 border-l-30 border-blue-700">
            <p className="pl-2 text-sm md:text-2xl lg:text-4xl text-neutral-400">
              MODERN WEB
            </p>
            <h1 className="font-sans font-bold text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-9xl">
              DESIGNS
            </h1>
          </span>
          <p className="pl-2 border-l-4 text-sm md:text-lg text-neutral-400">
            We transform ideas into beautiful, modern websites that highlight
            your brand and connect with your audience — Each site here tells its
            own story
          </p>

          <div className="flex gap-10">
            <Button1>View websites</Button1>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex flex-2 self-end justify-end items-end h-[600px] md:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[750px]">
          <Image
            src="/hero/amberbg.png"
            alt="Hero"
            width={600}
            height={600}
            priority
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
