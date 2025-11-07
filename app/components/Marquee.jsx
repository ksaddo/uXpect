"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Marquee() {
  const items = [
    { name: "REACT", img: "/icons/react1.png" },
    { name: "NEXT JS", img: "/icons/next.jpeg" },
    { name: "NODE JS", img: "/icons/node.png" },
    { name: "PHP", img: "/icons/php.jpeg" },
    { name: "PYTHON", img: "/icons/python.png" },
    { name: "BLENDER", img: "/icons/blender.png" },
  ];

  return (
    <div className="mb-20 relative overflow-hidden bg-black text-white py-6">
      <motion.div
        className="flex gap-20 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}>
        {/* duplicate twice for perfect looping */}
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-2 shrink-0">
            <Image
              src={item.img}
              alt={item.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </motion.div>

      {/* gradient edges for a smooth look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
