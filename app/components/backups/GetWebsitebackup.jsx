"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button2 from "./Button2";
import {
  MessageCircleMore,
  FileText,
  Palette,
  Laptop,
  Rocket,
  Wrench,
} from "lucide-react";

// Main page
export default function GetWebsite2() {
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
      desc: "We’ll design an intuitive, modern interface that fits your brand. You’ll review and request tweaks before moving into development.",
      icon: <Palette className="w-4 h-4 " />,
    },
    {
      title: "4. Development",
      desc: "Using modern tools like React, Next.js, Tailwind, and React Native, we’ll build a fast, responsive, and scalable website or app that performs beautifully on all devices.",
      icon: <Laptop className="w-4 h-4 " />,
    },
    {
      title: "5. Launch",
      desc: "Once approved, your project goes live! we’ll handle deployment, app publishing, and domain setup so everything runs smoothly.",
      icon: <Rocket className="w-4 h-4 " />,
    },
    {
      title: "6. Support",
      desc: "Need updates or maintenance? I offer ongoing support to keep your website or app running smoothly, secure, and up to date.",
      icon: <Wrench className="w-4 h-4 " />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-around px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px] bg-[url('/hero/phone.png')] bg-contain bg-right bg-no-repeat relative">
      {/* Hero Section */}
      <h1 className="text-2xl md:text-5xl font-bold">
        How Our App & Website <br /> Creation Process works, Simplified
      </h1>

      {/* Process Section */}
      <section className="max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-neutral-700/10 backdrop-blur-xl px-6 py-4 shadow-xs border-l border-b border-neutral-800 group  transition-transform duration-300 ease-in-out transform hover:scale-102">
              <span className="flex justify-between items-center text-white group-hover:text-[var(--primary)]">
                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="mb-4">{step.icon}</p>
              </span>
              <p className=" text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-10 mt-10">
        <Button2>Get Started</Button2>
        <Link
          href="https://www.linkedin.com/in/evans-addo-462aab351/"
          className="flex items-center gap-2 border-l border-white/20 pl-10">
          <Laptop
            className="w-12 h-12 fill-white border border-white/20  px-3 rounded-full"
            fill="currentColor"
          />
          <p className="text-sm">Connect with us</p>
        </Link>
      </div>
    </div>
  );
}
