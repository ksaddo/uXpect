"use client";

import { number } from "framer-motion";
import Image from "next/image";
import Button2 from "./Button2";

export default function ScrollStack2() {
  const cards = [
    {
      id: 1,
      number: "Page 1.",
      title: "Saas Dashboard",
      desc: "A sleek and responsive analytics dashboard for tracking data insights and performance metrics.",
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

  return (
    <section className="">
      {/* title */}
      <p className="text-2xl md:text-5xl font-bold text-center">
        Our
        <span className="italic font-bruno text-[var(--primary)]"> RECENT</span>
        <span className="italic font-bruno"> WORKS</span>
      </p>
      <div className=" mx-auto">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center gap-8"
            style={{
              zIndex: i + 1, // newer ones on top
            }}>
            {/* Right side: image */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-neutral-500">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
