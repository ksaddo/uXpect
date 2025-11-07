import Image from "next/image";
import {ChartNoAxesCombined, ShoppingBag, Globe, UsersRound, Database,Brush, } from "lucide-react"; // prettier-ignore

export default function Tabs() {
  const tabs = [
    {
      icon: <ChartNoAxesCombined className="w-6 h-6" />,
      title: "Insightful Analytics & Tracking",
      desc: "We bring together creativity and strategy to help businesses build stronger brands, connect with customers.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-Commerce Solutions",
      desc: "Seamless online store setups that make shopping effortless for your customers and profitable for you.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      desc: "Expand your brand’s visibility worldwide with targeted campaigns and international-ready strategies.",
    },
    {
      icon: <UsersRound className="w-6 h-6" />,
      title: "Community Engagement",
      desc: "Build authentic relationships with your audience and keep them coming back with engaging experiences.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven Strategies",
      desc: "Harness real-time insights and data to make smarter decisions and maximize your ROI.",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Creative Design",
      desc: "Craft visually stunning and memorable designs that give your brand a professional edge.",
    },
  ];

  return (
    <section className="w-full mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`group relative rounded-xl p-[1px] bg-gradient-to-tr from-neutral-500 via-neutral-700 to-black transition-all duration-300 ease-out
        ${index >= 3 ? "hidden md:flex" : ""}`}>
            {/* inner card */}
            <div className="relative flex flex-col justify-end h-[280px] p-6 lg:p-7 rounded-xl bg-black">
              {/* hover background */}
              <div className="absolute inset-0 bg-[url('/tabsbg.webp')] bg-cover bg-center opacity-0 group-hover:opacity-100 rounded-xl transition duration-300 ease-out"></div>

              {/* content */}
              <div className="relative flex flex-col gap-4 z-10">
                {/* icon wrapper with gradient border */}
                <div className="w-fit rounded-xl p-[2px] bg-gradient-to-tr from-neutral-500 via-neutral-700 to-black transition-all duration-500">
                  <div className="rounded-lg p-3 bg-neutral-900 text-neutral-400 group-hover:text-white flex items-center justify-center">
                    {tab.icon}
                  </div>
                </div>

                <h3 className="text-xl text-white">{tab.title}</h3>
                <p className="text-sm text-neutral-400">{tab.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
