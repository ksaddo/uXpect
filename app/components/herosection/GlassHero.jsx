import HeroText from "./HeroText";
import HeroInfo from "./HeroInfo";
import Image from "next/image";

export default function GlassHero() {
  return (
    <section className="relative w-full h-screen mb-24 md:mb-32 lg:mb-40">
      <div className="w-full h-screen lg:flex flex-row-reverse">
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen ">
          <Image
            src="/hero/hero.webp"
            alt="Hero"
            fill
            priority
            className="relative object-cover w-full lg:w-1/2 h-[60vh] lg:h-screen" // or object-contain
          />
        </div>
        <div className="w-full h-[40vh] lg:h-full flex items-center lg:w-1/2 px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px]">
          <HeroText />
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <HeroInfo />
      </div>
    </section>
  );
}
