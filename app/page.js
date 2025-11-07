import Image from "next/image";
import Highlights from "./components/Highlights";
import Opportunities from "./components/Opportunities";
import { ChartLine, Sparkles, Brush, Plane, Hexagon } from "lucide-react";
import Tabs from "./components/Expertise";
import PageShowCase from "./components/PageShowCase";
import NewCategory from "./components/NewCategory";
import Testimonies from "./components/Testimonies";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import Marquee from "./components/Marquee";
import GlassHero from "./components/herosection/GlassHero";
import Lottie from "./components/lottieAnimation/Lottie";
import Button2 from "./components/Button2";
import Expertise from "./components/Expertise";
import ScrollStack from "./components/ScrollStack";
import CategoryHero from "./components/CategoryHero";
import ScrollStack2 from "./components/ScrollStack2";
import HexagonGrid from "./components/HexagonGrid";
import Process from "./components/Process";

export default function Home() {
  return (
    <div className="pb-40 space-y-36 lg:space-y-44 2xl:space-y-50">
      <GlassHero />

      <Process />
      <ScrollStack />
      <Expertise />
      <HexagonGrid />
      <Plans />
      <Faq />
      {/* <Marquee /> */}
      {/* <Lottie Got a PROJECT IN MIND?/> */}
      {/* <Opportunities
          icon={Brush}
          title="Web Experiences That Work"
          desc="We Build Modern Websites"
        /> */}
    </div>
  );
}
