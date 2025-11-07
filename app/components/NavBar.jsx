"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Home, User, TextAlignStart, X, ShoppingBag } from "lucide-react";
import Logo from "./Logo";

export default function NavBar() {
  const links = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
    { name: "SHOP", href: "/shop" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 top-0 left-0 bg-black/10 backdrop-blur-md">
      <div className="flex h-18 justify-between items-center px-4 md:px-12">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden">
          <TextAlignStart />
        </button>

        <div
          className={`fixed top-0 left-0 h-full px-6 w-72 bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Close Menu">
              <X />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 font-medium mb-10">
            {links.map(({ name, href }, index) => (
              <Link
                href={href}
                key={index}
                className="px-4">
                {name}
              </Link>
            ))}
          </nav>

          <div>
            <p className="mb-4">
              Address: Chirapatre Estate, F9, <br />
              Kumasi, GH <br />
              Email: evansaddo12@gmail.com <br />
              Phone: +233-2465-06590
            </p>
            <p className="underline">Need Help?</p>
          </div>
        </div>

        {/*Logo*/}
        <Logo />

        {/*Desktop links*/}
        <div className="hidden md:flex text-sm">
          {links.map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              className="px-4">
              {name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 h-full">
          <Image
            src="/flag.png"
            alt="logo"
            width={18}
            height={18}
          />
          <p className="text-sm md:text-base">English</p>
        </div>
      </div>
    </nav>
  );
}
