"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CategoryHero() {
  return (
    <section className="w-full bg-black rounded-4xl">
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
    </section>
  );
}
