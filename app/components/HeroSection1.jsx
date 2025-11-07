"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Button1 from "./Button1";
import { DraftingCompass, Globe, Smartphone, Headset, Palette, TrendingUpDown} from "lucide-react"; //prettier-ignore
import ButtonOrange from "./ButtonOrange";

export default function HeroSection1() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const line1 = "Websites So Responsive";
  const line2 = "They’ll Text You Back.";
  const speed = 50;

  useEffect(() => {
    let i = 0;
    const typeLine1 = setInterval(() => {
      setFirst(line1.slice(0, i + 1));
      i++;
      if (i === line1.length) {
        clearInterval(typeLine1);
        setTimeout(() => {
          let j = 0;
          const typeLine2 = setInterval(() => {
            setSecond(line2.slice(0, j + 1));
            j++;
            if (j === line2.length) clearInterval(typeLine2);
          }, speed);
        }, 400); // pause between lines
      }
    }, speed);
    return () => clearInterval(typeLine1);
  }, []);

  const services = [
    { name: "Web Dev", icon: <Globe className="w-5 h-5" /> },
    { name: "Mobile App Dev", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Design & Branding", icon: <Palette className="w-5 h-5" /> },
    { name: "Consulting & Support", icon: <Headset className="w-5 h-5" /> },
  ];

  return (
    <section className="pt-20 md:pt-30 flex flex-col justify-around items-center w-full min-h-[600px] md:min-h-[660px] lg:min-h-[700px] 2xl:min-h-[920px] bg-[url('/hero/globeblue.png')] bg-cover bg-center relative">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center px-8 lg:px-0 gap-10 md:gap-20">
        <div className="w-fit flex items-center gap-2 rounded-full border border-blue-900 bg-[#0a1a2f] text-blue-400 px-4 py-1 lg:py-2 text-sm lg:text-base ">
          <TrendingUpDown className="w-4 h-4" />
          2x Faster Load Times and Performance
        </div>
        <div className="w-fit h-[130px] mb-2 text-gray-300">
          <p className="text-xl md:text-2xl lg:text-[40px] xl:text-5xl 2xl:text-6xl mb-4">
            {first}
          </p>
          <p className="text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {second}
          </p>
        </div>

        <div className="flex gap-10">
          <Button1>Portfolio</Button1>
          <ButtonOrange>Get Started</ButtonOrange>
        </div>
      </div>

      {/* Icons Section */}
      <div className="text-neutral-500 w-full flex flex-col justify-center items-center text-center px-8 lg:px-0 gap-6 ">
        <div className="flex justify-center md:justify-normal items-center gap-4 lg:gap-8 flex-wrap">
          {services.map((service, index) => (
            <div
              className="flex justify-center md:justify-normal items-center gap-2 flex-wrap shadow-fancy bg-black/20 text-gray-500 px-3 py-2 text-xs md:text-sm rounded-full"
              key={index}>
              {service.icon}
              {service.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
