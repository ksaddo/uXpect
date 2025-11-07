"use client";
import Button2 from "../components/Button2";
import { Phone, Mail, MapPin } from "lucide-react";

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border-b border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const infos = [
  { name: "Email", icon: <Mail />, value: "uxpect.team@outlook.com" },
  { name: "Phone", icon: <Phone />, value: "(+233) 246 506 590" },
  {
    name: "Address",
    icon: <MapPin />,
    value: "Chirapatre Estate, F9, Kumasi, Gh",
  },
];

export default function Portfolio() {
  return (
    <section className="flex justify-center items-center h-screen">
      <p className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black text-center text-neutral-600 mb-14 xl:mb-20 2xl:mb-0">
        COMING{" "}
        <span className="italic font-bruno text-[var(--primary)]">VERY</span>
        SOON
      </p>
    </section>
  );
}
