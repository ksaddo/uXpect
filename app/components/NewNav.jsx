"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅
import { Ellipsis } from "lucide-react";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // ✅ get current route

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact" },
    { name: "Shop", href: "/creation" },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-transform duration-300 
      ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="flex justify-between items-center mt-8 mx-auto px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px]">
        {/* Right: Links */}
        <div className="flex w-fit justify-center items-center gap-6 px-4 py-2 text-sm backdrop-blur-sm bg-white/10 border border-white/20 rounded-full shadow-sm">
          {links.map(({ name, href }, index) => {
            const isActive = pathname === href; // ✅ check if link matches current route
            return (
              <Link
                key={index}
                href={href}
                className={`px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? "text-[var(--background)] font-semibold bg-white"
                    : "hover:text-neutral-200"
                }`}>
                {name}
              </Link>
            );
          })}
        </div>

        {/* Left: Logo */}
        <div className="flex items-center px-6 gap-2 backdrop-blur-sm bg-black/20 border border-black/10 rounded-full shadow-sm">
          <Link
            href="https://www.linkedin.com/in/evans-addo-462aab351/"
            className="font-bruno text-sm pr-4 py-4 border-r border-white">
            BOATENG
          </Link>
          <Ellipsis size={18} />
        </div>
      </div>
    </nav>
  );
}
