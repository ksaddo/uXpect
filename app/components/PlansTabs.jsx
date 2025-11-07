import { Check } from "lucide-react";

export default function PlansTabs() {
  const plans = [
    {
      title: "Starter",
      price: "$79",
      billing: "one-time",
      desc: "Perfect for small projects",
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
      title: "Professional",
      price: "$299",
      billing: "one-time",
      desc: "Best for growing businesses",
      features: [
        "1 Year Hosting",
        "Unlimited Pages",
        "SEO Optimization",
        "Performance Analytics",
        "Priority Support (90 days)",
        "Delivery in 7 Days",
      ],
      cta: "Most Popular",
      highlight: true, // 💡 best plan
    },
    {
      title: "Premium",
      price: "$599",
      billing: "one-time",
      desc: "For big projects & companies",
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
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Plans & Pricing</h2>
        <p className="text-gray-400 mt-3">Choose a plan that fits your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-zinc-900 rounded-2xl p-8 border ${
              plan.highlight
                ? "border-red-500 shadow-red-500/40"
                : "border-zinc-700"
            } hover:scale-105 transition-transform shadow-lg flex flex-col`}>
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                Best Value
              </span>
            )}

            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-gray-400">{plan.desc}</p>
            <p className="text-4xl font-bold my-4">{plan.price}</p>
            <p className="mb-4">({plan.billing})</p>

            <ul className="space-y-3 flex-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-red-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 py-2 rounded-xl font-medium ${
                plan.highlight
                  ? "bg-blue-600 hover:bg-red-700"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
