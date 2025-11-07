"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FancyButton from "./ui/FancyButton";
import { ArrowUpRight,ChartLine, Database, ChartNoAxesCombined, TrendingUpDown, Activity, Globe, AtSign, UsersRound, Brush, Type, Sparkles, Leaf,} from "lucide-react"; //prettier-ignore
import Image from "next/image";

export default function Highlights() {
  const texts = [
    {
      header: "1. Expand Your Reach",
      title: "Global Reach, Local Insight",
      desc: "From digital presence to global connections, we help you tap into new opportunities and audiences.",
      image: "/phone/screen2.jpg",
      subTitles: [
        { name: "Market Expansion", icon: <ChartLine className="w-4 h-4" /> },
        { name: "Digital Presence", icon: <AtSign className="w-4 h-4" /> },
        { name: "Optimize Your Visibility", icon: <Globe className="w-4 h-4" /> }, //prettier-ignore
      ],
    },

    {
      header: "2. Smarter Growth",
      title: "Data-Driven Decision Making",
      desc: "With real-time insights and performance tracking, we help you make informed decisions that drive sustainable business growth.",
      image: "/phone/screen.jpg",

      subTitles: [
        {
          name: "Performance Tracking",
          icon: <TrendingUpDown className="w-4 h-4" />,
        },
        {
          name: "Predictive Analytics",
          icon: <Database className="w-4 h-4" />,
        },
        { name: "Sustainable Growth", icon: <Leaf className="w-4 h-4" /> }, //prettier-ignore
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [texts.length]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section className="flex flex-col items-center w-full h-fit mt-10 border border-neutral-800 rounded-2xl">
      <div className="w-full h-fit block md:flex">
        <AnimatePresence mode="wait">
          {/* text section */}
          <motion.div
            key={index}
            className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-4 md:gap-2 py-4 md:pr-10 mb-6 md:mb-0"
            initial="hidden"
            animate="visible"
            exit="exit">
            <motion.p
              custom={0}
              variants={variants}>
              {texts[index].header}
            </motion.p>
            <motion.h2
              custom={1}
              variants={variants}
              className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {texts[index].title}
            </motion.h2>
            <motion.p
              custom={2}
              variants={variants}>
              {texts[index].desc}
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-normal items-center gap-2 mt-3 flex-wrap"
              custom={3}
              variants={variants}>
              {texts[index].subTitles.map((sub, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 border border-neutral-600 bg-neutral-800 text-neutral-300 px-3 py-1 text-xs md:text-sm rounded-full"
                  custom={i}
                  variants={variants}>
                  {sub.icon} {sub.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Image Placeholder */}
        <motion.div
          key={`image-${index}`}
          className="relative flex items-end w-full h-[390px] md:h-[500px] lg:h-[600px] md:w-1/2 bg-gradient-to-b from-black to-red-950 border border-neutral-500 rounded-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          exit={{ opacity: 0, x: -40 }}>
          <Image
            src={texts[index].image}
            alt={texts[index].title}
            width={800}
            height={800}
            className="relative w-full h-[350px] md:h-[400px] lg:h-[540px] object-contain"
          />

          {/* Mobile button */}
          <div className="block lg:hidden absolute bottom-8 left-10 w-[200px] py-3 px-4 space-y-2 bg-neutral-900 z-10 rounded-xl border border-neutral-400">
            <p className="text-sm text-center mb-3">Sign Up for Email</p>

            <div className="flex gap-2 items-center w-full bg-[#2c2c2c] rounded-full">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full py-2 text-center outline-none placeholder-white text-xs text-white"
              />
            </div>
            <button className="flex justify-center items-center w-full py-1 gap-2 bg-red-700 rounded-full text-xs">
              Subscribe
              <ArrowUpRight className="w-4" />
            </button>
          </div>

          {/* Desktop button */}
          <div className="hidden lg:block absolute md:bottom-16 left-10 xl:left-20 w-[300px] py-4 px-4 space-y-5 bg-neutral-900 z-10 rounded-2xl border border-neutral-400">
            <p className="text-xl text-center">Sign Up for Email</p>

            <p className=" text-sm text-gray-300 text-center">
              Join the list for updates, events & members-only offers!
            </p>

            <div className="flex gap-2 justify-around items-center w-full bg-[#2c2c2c] rounded-full pl-4 pr-2 py-2">
              <input
                type="text"
                placeholder="Email address"
                className="flex flex-1 bg-transparent outline-none placeholder-white text-sm text-white"
              />
              <FancyButton>Join</FancyButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-2 mt-10 mb-6 ">
        {texts.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 2xl:h-4 2xl:w-4 rounded-full transition-all ${
              i === index ? "bg-neutral-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
