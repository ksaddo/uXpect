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
      ans: "UXPECT is a creative web and app design team focused on building modern, responsive, and high-performing digital experiences. We combine strategy, design, and technology to help brands stand out online with products that look great and perform even better.",
    },
    {
      icon: <Server className="w-5 h-5 text-primary" />,
      ques: "Do we provide hosting and domain?",
      ans: "Yes — some of our plans include hosting and domain setup. If not, we’ll help you choose the best hosting provider and handle all the connections for you. Either way, we make sure your website runs smoothly and stays online without technical headaches.",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      ques: "How long does it take to build a website?",
      ans: "Most standard websites take between 3–7 days to complete. Larger or more customized projects can take a bit longer depending on the design and functionality required. Before we begin, we’ll provide a clear timeline and keep you updated throughout so you always know when your site will go live.",
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
  ];

  return (
    <section className="w-full lg:h-screen flex flex-col justify-around ">
      <div className="mb-10">
        <p className="font-bold text-2xl md:text-2xl lg:text-[30px] xl:text-4xl 2xl:text-5xl ">
          Frequently Asked Questions
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
      <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mt-6">
        Quick answers to questions you may have. Can’t find what you’re looking
        for?
      </p>
      <div className="">
        <Button2>Contact Us</Button2>
      </div>
    </section>
  );
}
