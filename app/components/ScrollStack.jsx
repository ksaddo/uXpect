"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button2 from "./Button2";

export default function ScrollStack() {
  const cards = [
    {
      id: 1,
      number: "Page 1.",
      title: "Saas Dashboard",
      desc: "A responsive analytics dashboard for tracking data insights and performance metrics.",
      image: "/portfolio/analytics.png",
    },
    {
      id: 2,
      number: "Page 2.",
      title: "E-commerce",
      desc: "A modern social platform built for students to connect, collaborate, and share ideas.",
      image: "/portfolio/ecommerc.png",
    },
    {
      id: 3,
      number: "Page 3.",
      title: "Marketing Insights",
      desc: "Powerful data visualization tool to monitor campaign performance in real time.",
      image: "/portfolio/analytics.png",
    },
  ];

  const languages = ["HTML", "CSS", "JS", "REACT", "TAILWIND"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          // When scrolling *down* (entering)
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }

          // When scrolling *up* (leaving viewport)
          else {
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight * 0.5) {
              setActiveIndex(index - 1 >= 0 ? index - 1 : 0);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative">
      {/* title */}
      <p className="text-2xl md:text-5xl font-bold text-center mb-10 lg:mb-20">
        Our
        <span className=" font-bruno text-[var(--primary)]"> RECENT </span>
        Work
      </p>

      {/* Stepper (sticky top) */}
      <div className="hidden lg:flex items-center justify-center gap-8 sticky top-20 ">
        {cards.map((_, i) => (
          <div
            key={i}
            className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                activeIndex === i
                  ? "bg-[var(--primary)] border-[var(--primary)] text-white scale-110 shadow-md"
                  : "border-neutral-600 text-neutral-400"
              }`}>
              {i + 1}
            </div>

            {i < cards.length - 1 && (
              <div
                className={`w-16 h-[2px] transition-all duration-300 ${
                  i < activeIndex ? "bg-[var(--primary)]" : "bg-neutral-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="mx-auto">
        {cards.map((card, i) => (
          <div
            key={card.id}
            data-index={i}
            className="scroll-card sticky top-10 lg:top-20 flex flex-col lg:flex-row justify-start lg:items-center lg:justify-center lg:gap-0 h-[60vh] md:h-[74vh] lg:h-[90vh] "
            style={{
              zIndex: i + 1,
            }}>
            {/* Left side: text */}
            <div className="flex lg:flex-1 flex-col items-start gap-6 pb-10 lg:pb-0 2xl:gap-10 text-left bg-[var(--background)]">
              <p className="block lg:hidden w-fit bg-[var(--primary)] px-3 py-1">
                {card.number}
              </p>
              <p className="text-3xl md:text-4xl">{card.title}</p>
              <p className="text-sm ">{card.desc}</p>
              <div className="hidden md:flex gap-2 flex-wrap">
                {languages.map((lang, index) => (
                  <p
                    key={index}
                    className="text-xs bg-neutral-800 rounded-3xl px-3 py-1">
                    {lang}
                  </p>
                ))}
              </div>
              <div className="hidden lg:block w-full lg:w-fit">
                <Button2>Get Template</Button2>
              </div>
            </div>

            {/* Right side: image */}
            <div className="relative w-full lg:flex-3 aspect-[16/9] rounded-sm overflow-hidden border-2 border-neutral-900">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority
                className="object-cover w-full lg:flex-3 aspect-[16/9] rounded-sm "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
