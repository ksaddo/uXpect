"use client";
import Button2 from "../components/Button2";
import { Phone, Mail, MapPin } from "lucide-react";

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border-b border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const infos = [
  { name: "Email", icon: <Mail />, value: "uxpect.team@outlook.com" },
  { name: "Phone", icon: <Phone />, value: "(+233) 246 506 590" },
  {
    name: "Address",
    icon: <MapPin />,
    value: "Chirapatre Estate, F9, Kumasi, Gh",
  },
];

export default function ContactUs() {
  return (
    <section className="flex gap-20 mx-auto mt-60 mb-30 max-w-6xl">
      {/* text section */}
      <div className="w-1/2 flex flex-col gap-6 justify-between">
        {/* logo */}
        <p className="font-bruno text-lg md:text-7xl">
          u<span className="text-[var(--primary)] italic">X</span>pect
        </p>
        <h2 className="text-2xl md:text-5xl">We’d Love to Hear from You</h2>
        <p className="">
          Fill out the quick form, and we’ll get back to you as soon as possible
        </p>
        <div className="space-y-6">
          {infos.map((info, index) => (
            <div
              className="flex gap-4"
              key={index}>
              <span className="flex justify-center items-center bg-neutral-900 p-4 rounded-full ">
                {info.icon}
              </span>
              <span className="space-y-1">
                <p className="text-sm text-neutral-400">{info.name}</p>
                <p className="">{info.value}</p>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* form section */}
      <form className="w-1/2 p-8 space-y-8 md:space-y-10 text-left bg-neutral-900">
        {/* top options */}

        <div className="space-y-1">
          <Input
            required
            placeholder="Full Name"
          />
        </div>

        <div className="space-y-1">
          <Input
            type="email"
            required
            placeholder="Email"
          />
        </div>

        <div className="space-y-1">
          <Input
            type="email"
            placeholder="Subject"
          />
        </div>

        <div className="space-y-1">
          <Textarea
            rows={8}
            placeholder="What's on your mind?"
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button2>Send Message</Button2>
        </div>
      </form>
    </section>
  );
}
