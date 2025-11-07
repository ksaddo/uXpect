"use client";

import { motion } from "framer-motion";

// Simple built-in UI components
const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const base =
    "rounded-xl px-6 py-3 font-medium transition-all duration-200 shadow-sm";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800 active:scale-[0.98]",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 active:scale-[0.98]",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 ${className}`}
    {...props}
  />
);

// Main page
export default function GetWebsite() {
  const steps = [
    {
      title: "1. Discovery",
      desc: "We start with a quick chat to understand your goals, style, and what kind of website you need. No pressure — just a simple conversation.",
      icon: "💬",
    },
    {
      title: "2. Proposal",
      desc: "You’ll receive a clear quote and timeline that fits your needs and budget. No hidden fees — full transparency.",
      icon: "🧾",
    },
    {
      title: "3. Design",
      desc: "I’ll design a clean, modern layout that matches your brand. You’ll review and request tweaks before development begins.",
      icon: "🎨",
    },
    {
      title: "4. Development",
      desc: "Using modern tools like React, Next.js, and Tailwind, I build your website to be fast, responsive, and SEO-friendly.",
      icon: "💻",
    },
    {
      title: "5. Launch",
      desc: "Once approved, your site goes live! I’ll handle deployment and domain setup so everything runs smoothly.",
      icon: "🚀",
    },
    {
      title: "6. Support",
      desc: "Need updates or maintenance? I offer ongoing support to keep your website fresh and secure.",
      icon: "🔧",
    },
  ];

  return (
    <div className="w-full min-h-screen ">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bring Your Vision Online.
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8">
          I design and build modern, responsive websites that help you stand out
          and grow. Whether you’re starting a business, showcasing your work, or
          upgrading your brand — I’ll help you make it happen.
        </p>

        <div className="flex justify-center gap-4">
          <Button>Start Your Project</Button>
          <Button variant="outline">View My Work</Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className=" shadow-sm border rounded-2xl p-6 hover:shadow-md transition">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className=" text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className=" py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Your Project
          </h2>
          <p className=" mb-10">
            Fill out the quick form below, and I’ll get back to you within 24
            hours. Let’s bring your idea to life.
          </p>

          <form className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <Input placeholder="Type of Website (Portfolio, Business, E-commerce...)" />
            <Textarea
              placeholder="Tell me about your project (optional)"
              rows={4}
            />

            <div className="flex justify-center pt-4">
              <Button className="px-8 py-3 text-lg">Send Request</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Line */}
      <footer className="py-10 text-center text-sm">
        Still not sure what you need?{" "}
        <a
          href="#contact"
          className="hover:underline font-medium">
          Let’s brainstorm together
        </a>{" "}
        — I’ll help you find the right solution.
      </footer>
    </div>
  );
}
