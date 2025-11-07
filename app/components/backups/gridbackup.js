"use client";
import { useRef } from "react";

const cardData = [
  { title: "Analytics", description: "Track user behavior", label: "Insights" },
  {
    title: "Dashboard",
    description: "Centralized data view",
    label: "Overview",
  },
  {
    title: "Collaboration",
    description: "Work together seamlessly",
    label: "Teamwork",
  },
  {
    title: "Automation",
    description: "Streamline workflows",
    label: "Efficiency",
  },
  {
    title: "Integration",
    description: "Connect favorite tools",
    label: "Connectivity",
  },
  {
    title: "Security",
    description: "Enterprise-grade protection",
    label: "Protection",
  },
];

const ParticleCard = ({ children, className = "", style }) => {
  const cardRef = useRef(null);
  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-[20px] border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(132,0,255,0.4)] ${className}`}
      style={{ backgroundColor: "#060010", ...style }}>
      {children}
    </div>
  );
};

export default function MagicBentoSimplified() {
  return (
    <div className="max-w-7xl mx-auto p-6 border border-neutral-700 rounded">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-[700px]">
        {cardData.map((card, i) => {
          let className = "";
          if (i === 2) className = "lg:col-span-2 lg:row-span-2"; // item 3
          if (i === 3)
            className =
              "lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-2"; // item 4
          if (i === 5) className = "lg:col-start-4 lg:row-start-3"; // item 6

          return (
            <ParticleCard
              key={i}
              className={className}>
              <div className="p-5 flex flex-col justify-between h-full text-white">
                <span className="text-base mb-2">{card.label}</span>
                <div>
                  <h3 className="text-base font-normal mb-1">{card.title}</h3>
                  <p className="text-xs opacity-80">{card.description}</p>
                </div>
              </div>
            </ParticleCard>
          );
        })}
      </div>
    </div>
  );
}
