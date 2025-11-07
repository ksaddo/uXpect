import { Check } from "lucide-react";
import Image from "next/image";
import Opportunities from "./Opportunities";
import { ChartLine, Sparkles, Brush, Plane } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      image: "/raincut.jpg",
      title: "Starter",
      price: "$60",
      billing: "to $199",
      desc: "Perfect for small projects",
      shadow: "shadow-white/20",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Basic Support (7 days)",
        "Delivery in 3 Days",
        "Hosting Setup Guidance (Hosting not included)",
      ],
      cta: "Start Small",
    },
    {
      image: "/raincut1.jpg",
      title: "Professional",
      price: "$200",
      billing: "to $499",
      desc: "Best for growing businesses",
      shadow: "shadow-red-500/40",
      features: [
        "1 Year Hosting",
        "Unlimited Pages",
        "SEO Optimization",
        "Performance Analytics",
        "Priority Support (90 days)",
        "Delivery in 7 Days",
      ],
      cta: "Most Popular",
      highlight: true, // highlight plan
    },
    {
      image: "/raincut2.jpg",
      title: "Premium",
      price: "$500",
      billing: "to $999",
      desc: "For big projects & companies",
      shadow: "shadow-white/20",
      features: [
        "Domain Setup",
        "2 Years Premium Hosting",
        "Unlimited Pages",
        "Advanced SEO",
        "Custom Integrations",
        "Ongoing Support (364 days)",
        "Delivery in 14 Days",
      ],
      cta: "Go Premium",
    },
  ];

  return (
    <section className="w-full font-light">
      <Opportunities
        icon={Brush}
        title="One time payment plans"
        desc="Get a Website Starting at just $60"
      />
      <p className="w-full text-center mt-6">
        Have unique needs? Reach out or pick a plan that works for you.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 px-0 2xl:px-10 mt-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform`}>
            {/* Glass overlay */}
            <div className="relative z-10 h-full bg-[#171718] border border-neutral-800 p-6 2xl:p-8 flex flex-col rounded-2xl transition ">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl text-white">{plan.title}</h3>
                <span className="text-xs px-3 py-1 rounded-2xl shadow-xs shadow-gray-600 text-gray-200">
                  {plan.cta}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-start gap-2 my-4 2xl:my-6">
                <p className="text-4xl text-white font-bruno">{plan.price}</p>
                <p className="text-sm mt-2 text-gray-200  font-bruno">
                  {plan.billing}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm">{plan.desc}</p>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-white/20"></div>
                <span className="mx-4 text-gray-300 text-sm">FEATURES</span>
                <div className="flex-grow border-t border-white/20"></div>
              </div>

              {/* Features */}
              <ul className="space-y-2 md:space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3">
                    <Check className="w-[24px] h-[24px] 2xl:w-[26px] 2xl:h-[26px] p-1 text-[var(--primary)] " />
                    <span className="text-sm md:text-base text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`mt-6 w-full py-2 rounded-xl font-medium transition ${
                  plan.highlight
                    ? "bg-[var(--primary)] hover:bg-red-900 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white"
                }`}>
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
