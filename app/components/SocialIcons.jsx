"use client";
import { Music2, Twitter, Linkedin, Instagram } from "lucide-react";

const socialIcons = [
  { icon: Music2, bg: "bg-[#3b5999]" },
  { icon: Twitter, bg: "bg-[#55acee]" },
  { icon: Linkedin, bg: "bg-[#0077b5]" },
  { icon: Instagram, bg: "bg-[#dd4b39]" },
];

export default function SocialIcons() {
  return (
    <ul className="flex gap-3 mt-4">
      {socialIcons.map(({ icon: Icon, bg }, idx) => (
        <li key={idx}>
          <a
            className={`relative w-10 h-10 flex items-center justify-center text-white border border-neutral-500 rounded-full overflow-hidden group`}>
            <Icon className="z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
            <span
              className={`absolute inset-0 top-full transition-all duration-500 ${bg}`}></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
