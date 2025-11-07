"use client";
import Image from "next/image";
import CategoryHero from "./CategoryHero";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { name: "New Arrivals", img: "/hero/new.webp" },
  { name: "Vintage", img: "/hero/hero2low.jpg" },
  { name: "Smart", img: "/hero/hero3cut.jpg" },
  { name: "Fashion", img: "/hero/hero4cut.jpg" },
  { name: "Sports", img: "/hero/hero5cut.jpg" },
  { name: "Sale", img: "/hero/Sale.webp" },
];

export default function NewCategory() {
  return (
    <section className="border border-neutral-500 rounded-3xl bg-neutral-800 p-4 md:p-[30px] xl:px-[50px] xl:pt-[20px] xl:pb-[30px] 2xl:px-[60px] 2xl:pt-[24px] 2xl:pb-[50px] hide-scrollbar">
      <div className="flex flex-col w-full pb-[60px]">
        <h1 className="text-[22px] md:text-[32px] xl:text-[38px] md:text-center mb-4 md:mb-6 xl:mb-8">
          Shop By Categories
        </h1>

        {/* Wrapper for centering on md+ */}
        <div className="w-full flex md:justify-center">
          <div className="flex gap-4 md:gap-6 xl:gap-8 2xl:gap-10 overflow-x-auto hide-scrollbar">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center shrink-0">
                <button
                  className="relative w-[75px] h-[75px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden group shrink-0 shadow-md"
                  aria-label={`Shop ${cat.name}`}>
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </button>
                <span className="mt-2 text-sm">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-black rounded-4xl">
        <div className="flex flex-col-reverse md:flex-row w-full md:h-[440px] xl:h-[530px]">
          {/* Text section */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:h-full space-y-4 pt-6 pb-8 px-2 md:py-0 text-center mx-auto">
            <h1 className="text-[28px] md:text-4xl xl:text-[46px]">
              Simplicity in Motion
            </h1>
            <p className="text-sm text-neutral-300">
              A subtle statement piece that speaks through its quiet elegance.
            </p>
            <button className="group flex items-center w-fit gap-1 border-b md:mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-red-700">
              <span>Shop collection</span>
              <ArrowUpRight className="text-sm transform transition-transform duration-500 group-hover:translate-x-3" />
            </button>
          </div>

          {/* Image section */}
          <div className="relative w-full md:w-1/2 h-[260px] md:h-full overflow-hidden rounded-r-4xl">
            <Image
              src="/hero/newhero7.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
