"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button2 from "./Button2";

export default function FaqBackup() {
  const faqs = [
    {
      ques: "What is ADDO?",
      ans: "We are a web design and development team dedicated to helping businesses and individuals build a powerful online presence. Our focus is on creating modern, responsive, and user-friendly websites that not only look great but also perform effectively. Whether you’re starting small or aiming big, we provide affordable solutions tailored to your goals.",
    },
    {
      ques: "Do we provide hosting and domain?",
      ans: "Yes, we provide hosting and domain services depending on the plan you choose. For plans that include them, we’ll take care of setting everything up so your website is live and ready without extra hassle. If your chosen plan doesn’t cover hosting or a domain, we can still guide you step by step in purchasing them and ensure everything is connected seamlessly.",
    },
    {
      ques: "How long does it take to build a website?",
      ans: "Most small projects are completed in 3–7 days, while larger websites or projects with advanced features may take longer. We always provide a clear timeline before starting, and we keep you updated along the way so you’ll know exactly when to expect your website to go live.",
    },
    {
      ques: "Can I cancel or stop a project midway?",
      ans: "Yes, projects can be canceled at any point. However, payments for completed stages of the work are non-refundable. We keep communication open and transparent, so you’ll always know what stage the project is in. If something changes along the way, we’ll work with you to find the best solution.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full rounded-4xl border border-dashed border-neutral-700 bg-neutra">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full md:h-[440px] xl:h-[530px]">
        {/* Text section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-0 gap-5 lg:gap-10 z-20">
          <h1 className="text-2xl md:text-2xl lg:text-[30px] xl:text-4xl 2xl:text-5xl">
            Find the answers to common questions.
          </h1>
          <p className="text-sm md:text-lg 2xl:w-[600px] text-neutral-400">
            We transform ideas into beautiful, modern websites that highlight
            your brand
          </p>
          <Button2>Get Started</Button2>
        </div>

        {/* FAQ section */}
        <div className="w-full md:w-1/2 p-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-neutral-700 last:border-b-0 py-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex justify-between w-full text-left items-center">
                  <p className="text-xl">{faq.ques}</p>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {/* Smooth expand/collapse */}
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                  <div className="overflow-hidden">
                    <p className="text-neutral-400 px-1 py-2">{faq.ans}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
