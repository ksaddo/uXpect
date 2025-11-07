import OrangeAnimation from "./OrangeAnimation";
import TextSection from "./TextSection";

export default function Lottie() {
  return (
    <section className="w-full px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px]">
      <p
        className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-bold text-center bg-gradient-to-br from-[var(--background)] to-white bg-clip-text text-transparent"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}>
        A Bit About Us
      </p>

      <div className="w-full flex items-center justify-between">
        <OrangeAnimation />
        <TextSection />
      </div>
    </section>
  );
}
