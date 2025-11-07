"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button2 from "./Button2";
import { MessageCircleMore, FileText, Palette, Laptop, Rocket, Wrench, X, Plus} from "lucide-react"; //prettier-ignore

import Signupemail from "./Signupemail";
import { useState } from "react";

// Main page
export default function Process() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleStep = (i) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const steps = [
    {
      title: "1. Discovery",
      desc: "We start with a quick chat to understand your goals, style, and what kind of website or app you need. Just a simple conversation to get on the same page.",
      icon: <MessageCircleMore className="w-4 h-4 " />,
    },
    {
      title: "2. Proposal",
      desc: "You’ll receive a clear quote and timeline tailored to your project — whether it’s a website, mobile app, or both. No hidden fees, just full transparency.",
      icon: <FileText className="w-4 h-4 " />,
    },
    {
      title: "3. Design",
      desc: "We’ll design an intuitive, modern interface that fits your brand or product. You’ll review and request tweaks before moving into development.",
      icon: <Palette className="w-4 h-4 " />,
    },
    {
      title: "4. Development",
      desc: "Using modern tools like React, Next.js, Tailwind, and React Native, we’ll build a fast, responsive, and scalable website or app that performs beautifully on all devices.",
      icon: <Laptop className="w-4 h-4 " />,
    },
    {
      title: "5. Launch & Support",
      desc: "Once approved, your project goes live! we’ll handle deployment, app publishing, domain setup and support to keep your website or app running smoothly",
      icon: <Rocket className="w-4 h-4 " />,
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px]">
      {/* Hero Section */}
      <div className="mb-10 lg:mb-20">
        <p className="font-bold font-bruno text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl ">
          OUR
          <span className="text-[var(--primary)] "> CREATION </span>
          PROCESS
        </p>
      </div>

      {/* Process Section */}
      <section className="mx-auto w-full 2xl:max-w-7xl">
        {/* pc version */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-3xl pattern4 backdrop-blur-sm border border-dashed border-neutral-700 px-7 py-6 flex flex-col justify-center gap-3 hover:border-neutral-600 hover:border-solid transition ease-in-out transform hover:scale-102">
              <span className="flex justify-between items-center group-hover:text-[var(--primary)]">
                <h3 className="text-lg mb-0 md:mb-4">{step.title}</h3>
                <p className="mb-0 md:mb-4 border border-neutral-700 rounded-full p-2">
                  {step.icon}
                </p>
              </span>
              <p className="font-light text-neutral-200">{step.desc}</p>
            </div>
          ))}
          <Signupemail />
        </div>

        {/* mobile version */}
        <div className="grid md:hidden gap-4 md:gap-6">
          {steps.map((step, i) => {
            const isOpen = openIndexes.includes(i);
            return (
              <div
                key={i}
                onClick={() => toggleStep(i)}
                className="rounded-3xl bg-black px-7 py-4 flex flex-col justify-center border border-dashed border-neutral-900 cursor-pointer transition duration-300 hover:scale-[1.02] hover:border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-4">
                    <p className="border border-dashed border-neutral-800 bg-neutral-950 rounded-full p-2">
                      {step.icon}
                    </p>
                    <p className="text-lg">{step.title}</p>
                  </span>

                  {/* Animated icon */}
                  <div
                    className={`transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}>
                    <Plus className="transition-opacity duration-300" />
                  </div>
                </div>

                {/* smooth open/close */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}>
                  <p className="font-light text-neutral-200 mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full h-[50px] md:w-fit flex justify-between md:justify-normal gap-4 md:gap-10 mt-14 xl:mt-20 2xl:mt-20">
        <Button2 />
        <span className="w-0.5 h-full border border-white/20"></span>
        <Link
          href="https://www.linkedin.com/in/evans-addo-462aab351/"
          className="flex items-center gap-2 ">
          <Laptop
            className="w-12 h-12 fill-white border border-white/20 px-3 rounded-full"
            fill="currentColor"
          />
          <p className="text-sm">Connect with us</p>
        </Link>
      </div>
    </div>
  );
}
