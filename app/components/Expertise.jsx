"use client";
import { ChartNoAxesCombined, ShoppingBag, Globe, UsersRound, Database, Brush } from "lucide-react"; //prettier-ignore

// --- Reusable Subcomponents ---
const CardIcon = ({ icon }) => (
  <div className="w-fit md:rounded-xl md:p-[2px] md:bg-gradient-to-tr from-neutral-500 via-neutral-700 to-neutral-900">
    <div className="hidden rounded-lg p-2 md:p-3 bg-neutral-900 md:flex items-center justify-center">
      {icon}
    </div>
    <div className="md:hidden flex items-center justify-center">{icon}</div>
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="font-light md:font-semibold">{children}</h3>
);

const CardDesc = ({ children }) => (
  <p className=" text-[15px] md:max-w-[300px] font-light w-full text-left">
    {children}
  </p>
);

// --- Reusable Card ---
const Card = ({ icon, title, desc, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-3xl border border-dashed border-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-solid hover:scale-[1.02] ${className}`}>
    <div className="relative z-10 px-4 py-3 md:px-7 md:py-5 rounded-3xl h-full flex md:flex-col justify-center gap-2 md:gap-4 text-left flex-wrap md:flex-nowrap">
      <CardIcon icon={icon} />
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </div>
  </div>
);

// --- Main Component ---
export default function Expertise() {
  return (
    <section
      className="max-w-7xl mx-auto relative "
      aria-labelledby="expertise-heading">
      <p className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black text-center text-neutral-600 mb-14 xl:mb-20 2xl:mb-0">
        OUR <span className="italic font-bruno text-[var(--primary)]">X</span>
        PERTISE
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 w-full rounded-3xl">
        <Card
          icon={<ChartNoAxesCombined className="w-5 h-5" />}
          title="Insightful Analytics"
          desc="We look at the numbers and give insights that actually help."
        />
        <Card
          icon={<ShoppingBag className="w-5 h-5" />}
          title="Performance"
          desc="We optimize for speed and stability. Keeping CLS low & CLP fast."
        />
        <Card
          icon={<Globe className="w-5 h-5" />}
          title="Creative Design"
          desc="We help you put together designs that actually make sense and look good. Nothing over the top just clean, clear, and something people will actually notice and remember."
          className="col-span-2 row-span-2 bg-none md:bg-[url('/hero/phonetop.png')] md:bg-no-repeat md:bg-right-bottom bg-contain"
        />
        <Card
          icon={<UsersRound className="w-5 h-5" />}
          title="Cross-Platform Systems"
          desc="We build systems that adapt seamlessly across platforms. Web, mobile, or desktop, everything stays consistent and responsive."
          className="col-span-2 row-span-2 lg:col-start-1 lg:row-start-2 bg-none md:bg-[url('/hero/pc.png')] md:bg-no-repeat md:bg-right bg-contain"
        />
        <Card
          icon={<Database className="w-5 h-5" />}
          title="Data-Driven"
          desc="Clear insights that help make smarter decisions."
        />
        <Card
          icon={<Brush className="w-5 h-5" />}
          title="Global Reach"
          desc="Get your brand noticed by people around the world."
        />
      </div>
    </section>
  );
}
