"use client";
import { motion } from "framer-motion";
import reviews from "./reviews";
import ReviewCard from "./ReviewCard";
import Button2 from "./Button2";
import { MessageSquareText } from "lucide-react";

export default function Testimonies({ review }) {
  return (
    <section className="block lg:flex w-full h-[920px] bg-[radial-gradient(circle,_rgb(93,0,0)_10%,_transparent_60%)]">
      {/* Text Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-0 gap-5 lg:gap-10 z-20">
        <div className="flex justify-center items-center gap-2 w-fit border border-red-900 bg-[#371112] text-red-400 px-4 py-1 lg:py-1 text-sm lg:text-base rounded-lg">
          <MessageSquareText className="w-4 h-4" />
          <p> Feedback you can trust</p>
        </div>
        <h1 className="text-2xl md:text-2xl lg:text-[40px] xl:text-5xl 2xl:text-6xl">
          Why people choose us again and again
        </h1>
        <p className="hidden md:block lg:hidden text-sm md:text-lg 2xl:w-[600px] text-neutral-400">
          We transform ideas into beautiful, modern websites that highlight your
          brand
        </p>
        <Button2>Get Started</Button2>
      </div>

      {/* mobile version */}
      <div className="w-full h-[500px] lg:hidden flex flex-col items-center gap-5 overflow-hidden mt-14">
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-44%"] }}
          transition={{
            duration: 40, // Time for one full cycle
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth movement
          }}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-5"
          animate={{ x: ["-44%", "0"] }}
          transition={{
            duration: 40, // Time for one full cycle
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth movement
          }}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
            />
          ))}
        </motion.div>
      </div>

      {/* desktop version */}
      <div className="hidden w-3/5 h-full lg:grid lg:grid-cols-2 gap-5 2xl:pl-10 overflow-hidden">
        <motion.div
          className="h-full flex flex-col gap-5"
          animate={{ y: ["0%", "-60%"] }}
          transition={{
            duration: 50, // Time for one full cycle
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth movement
          }}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
            />
          ))}
        </motion.div>
        <div className="h-full flex flex-col gap-5">
          <motion.div
            className="flex flex-col gap-5"
            animate={{ y: ["-60%", "0%"] }}
            transition={{
              duration: 50, // Time for one full cycle
              repeat: Infinity, // Infinite loop
              ease: "linear", // Smooth movement
            }}>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
