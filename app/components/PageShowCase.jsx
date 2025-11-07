import Image from "next/image";

export default function PageShowCase() {
  return (
    <div
      className="relative border rounded-3xl md:min-h-[600px] 2xl:h-[820px] bg-gradient-to-r from-pink-600 to-cyan-400
                 shadow-[0_0_10px_rgba(255,27,107,0.6),0_0_20px_rgba(69,202,255,0.6)]">
      <Image
        src="/page.png"
        alt="Hero"
        fill
        priority
        className="relative object-cover rounded-3xl w-full h-[600px] md:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[820px]"
      />
    </div>
  );
}
