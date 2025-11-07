"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Home,
  User,
  TextAlignStart,
  X,
  ShoppingBag,
  Store,
  Info,
  MessageCircleQuestionMark,
  Layers2,
  CircleUser,
} from "lucide-react";

export default function GlassNav() {
  const links = [
    { name: "HOME", icon: <Home />, href: "/" },
    { name: "PORTFOLIO", icon: <Layers2 />, href: "/portfolio" },
    { name: "ABOUT", icon: <MessageCircleQuestionMark />, href: "/about" },
    { name: "CONTACT US", icon: <CircleUser />, href: "/contact" },
    { name: "SHOP", icon: <Store />, href: "/shop" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 fixed right-0 flex flex-col items-center justify-center gap-10 z-50 h-screen">
      {/*Desktop links*/}
      <div className="w-14 h-14 flex items-center justify-center border border-white/10 shadow-lg bg-white/10 backdrop-blur-lg rounded-full">
        AD
      </div>

      <div className="w-14 flex flex-col items-center justify-center border border-white/10 shadow-lg bg-white/10 backdrop-blur-lg rounded-full">
        {links.map(({ name, icon, href }, index) => (
          <Link
            href={href}
            key={index}
            className="w-full flex items-center justify-center gap-2 py-4">
            {/* Icon visible normally, hidden on hover */}
            <div className="">{icon}</div>
          </Link>
        ))}
      </div>

      <div className="mt-40 w-10 h-10 flex items-center justify-center border border-white/10 shadow-lg bg-white/10 backdrop-blur-lg rounded-full">
        <Image
          src="/flag.png"
          alt="logo"
          width={18}
          height={18}
        />
      </div>
    </nav>
  );
}
