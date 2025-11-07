"use client";
import { useState } from "react";
import Button2 from "../components/Button2";
import { Globe, Server, Clock, Handshake, RefreshCcw, Smartphone, Plus} from "lucide-react"; //prettier-ignore

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleStep = (i) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const faqs = [
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      ques: "What is UXPECT?",
      ans: "UXPECT is a creative web and app design team focused on building modern, responsive, and high-performing digital experiences. We combine strategy, design, and technology to help brands stand out online with products that look great and perform even better.",
    },
    {
      icon: <Server className="w-5 h-5 text-primary" />,
      ques: "Do we provide hosting and domain?",
      ans: "Yes — some of our plans include hosting and domain setup. If not, we’ll help you choose the best hosting provider and handle all the connections for you. Either way, we make sure your website runs smoothly and stays online without technical headaches.",
    },
    {
      icon: <Handshake className="w-5 h-5 text-primary" />,
      ques: "Can I cancel or stop a project midway?",
      ans: "Yes, you can cancel at any time if plans change. Completed stages are non-refundable, but we’ll always work with you to adjust the scope or timeline where possible. Our goal is to keep things flexible and transparent so you feel confident throughout the process.",
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-primary" />,
      ques: "Can you redesign my existing website?",
      ans: "Absolutely! We can take your current site and give it a complete refresh — improving visuals, speed, and user experience. Whether you just want a cleaner look or a full rebuild, we’ll ensure your website feels modern, fast, and aligned with your brand.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      ques: "How long does it take to build an app?",
      ans: "Simple apps typically take 2–4 weeks to develop. Medium or complex apps — like those with authentication, payments, or real-time features — may take 6–12+ weeks depending on requirements and platforms. We’ll outline a detailed plan before starting and keep you updated at every milestone until launch.",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      ques: "How long does it take to build a website?",
      ans: "Most standard websites take between 3–7 days to complete. Larger or more customized projects can take a bit longer depending on the design and functionality required. Before we begin, we’ll provide a clear timeline and keep you updated throughout so you always know when your site will go live.",
    },
  ];

  return (
    <section className="w-full h-fit flex flex-col justify-around px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px] py-16 lg:py-24 2xl:py-30 circlebg">
      <div className="mb-10 lg:mb-20">
        <p className="font-bold font-bruno text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl ">
          FREQUENTLY
          <span className="text-[var(--primary)] "> ASKED </span>
          QUESTIONS
        </p>
      </div>

      {/* pc version */}
      <div className="hidden md:grid grid-cols-2 gap-8 mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex bg-black/40 items-start gap-4 border border-dashed border-neutral-800 rounded-3xl p-6 hover:bg-neutral-900 transition-all ease-in-out duration-500">
            <div className="mt-1">{faq.icon}</div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">{faq.ques}</h3>
              <p className="text-sm text-neutral-400 mt-6 leading-6">
                {faq.ans}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* mobile version */}
      <div className="grid md:hidden gap-4 md:gap-6">
        {faqs.map((faq, i) => {
          const isOpen = openIndexes.includes(i);
          return (
            <div
              key={i}
              onClick={() => toggleStep(i)}
              className="rounded-3xl bg-black px-7 py-4 flex flex-col justify-center border border-dashed border-neutral-900 cursor-pointer transition duration-300 hover:scale-[1.02] hover:border-gray-600">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-3">
                  <p className="border border-dashed border-neutral-800 bg-neutral-950 rounded-full p-2">
                    {faq.icon}
                  </p>
                  <p className="">{faq.ques}</p>
                </span>

                {/* Animated icon */}
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}>
                  <Plus className="transition-opacity duration-300" />
                </div>
              </div>

              {/* smooth open/close */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  isOpen ? "max-h-40" : "max-h-0"
                }`}>
                <p className="font-light text-neutral-200 mt-2">{faq.ans}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/*text below */}
      <p className="text-sm md:text-base text-neutral-400 max-w-2xl my-10">
        Quick answers to questions you may have. Can’t find what you’re looking
        for?
      </p>
      <div className="">
        <Button2>Contact Us</Button2>
      </div>
    </section>
  );
}
