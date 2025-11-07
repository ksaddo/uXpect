"use client";
import Button2 from "../components/Button2";
import {
  Globe,
  Server,
  Clock,
  Handshake,
  RefreshCcw,
  Smartphone,
} from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      ques: "What is UXPECT?",
      ans: "We’re a creative web and app design team helping brands build modern, responsive, and high-performing digital experiences.",
    },
    {
      icon: <Server className="w-5 h-5 text-primary" />,
      ques: "Do we provide hosting and domain?",
      ans: "Yes, some plans include hosting and domain setup. If not, we’ll guide you through getting them connected easily.",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      ques: "How long does it take to build a website?",
      ans: "Most sites take 3–7 days. Bigger or custom projects may take longer — we’ll share a clear timeline before starting.",
    },
    {
      icon: <Handshake className="w-5 h-5 text-primary" />,
      ques: "Can I cancel or stop a project midway?",
      ans: "Yes, you can cancel anytime. Completed stages are non-refundable, but we’ll work with you to adjust if needed.",
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-primary" />,
      ques: "Can you redesign my existing website?",
      ans: "Of course! We can refresh your current site to make it faster, modern, and more user-friendly.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      ques: "How long does it take to build an app?",
      ans: "Simple apps take 2–4 weeks. Medium or complex apps can take 6–12+ weeks depending on features and platforms.",
    },
  ];

  return (
    <section className="w-full lg:h-[90vh] flex flex-col justify-around rounded-4xl border border-dashed border-neutral-700 bg-neutral px-4 md:px-[30px] xl:px-[50px] 2xl:px-[110px]">
      <div className="mb-10">
        <p className="font-bold text-2xl md:text-2xl lg:text-[30px] xl:text-4xl 2xl:text-5xl ">
          Frequently Asked Questions
        </p>
        <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mt-6">
          Quick answers to questions you may have. Can’t find what you’re
          looking for?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border border-dashed border-neutral-800 rounded-3xl p-6 hover:bg-neutral-900 transition-all duration-300">
            <div className="mt-1">{faq.icon}</div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">{faq.ques}</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {faq.ans}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mt-4">
        Quick answers to questions you may have. Can’t find what you’re looking
        for?
      </p>
      <div className="">
        <Button2>Contact Us</Button2>
      </div>
    </section>
  );
}
