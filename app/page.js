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
import GetWebsite from "./components/GetWebsite";
import GetWebsite2 from "./components/GetWebsite2";
import Lottie from "./components/lottieAnimation/Lottie";
import Button2 from "./components/Button2";
import Expertise from "./components/Expertise";
import ScrollStack from "./components/ScrollStack";
import CategoryHero from "./components/CategoryHero";
import ScrollStack2 from "./components/ScrollStack2";
import HexagonGrid from "./components/HexagonGrid";

export default function Home() {
  return (
    <div>
      <GlassHero />
      {/* <Marquee /> */}
      {/* <Lottie Got a PROJECT IN MIND?/> */}
      <div className="px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px] space-y-16 lg:space-y-24 2xl:space-y-30">
        <GetWebsite2 />
        <Expertise />
        {/* <Opportunities
          icon={Brush}
          title="Web Experiences That Work"
          desc="We Build Modern Websites"
        /> */}
        <HexagonGrid />
        <ScrollStack />
        <Plans />
        <Faq />
      </div>
    </div>
  );
}
