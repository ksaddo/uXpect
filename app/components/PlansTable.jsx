import { Check, X } from "lucide-react";

export default function PlansTable() {
  const features = [
    "Responsive Design",
    "SEO Optimization",
    "Custom Integrations",
    "Analytics Dashboard",
    "Priority Support",
  ];

  const plans = [
    {
      name: "Starter",
      price: "$99",
      includes: [true, false, false, false, false],
    },
    {
      name: "Professional",
      price: "$299",
      includes: [true, true, true, false, true],
    },
    {
      name: "Premium",
      price: "$599",
      includes: [true, true, true, true, true],
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400 mt-3">
          Choose the plan that fits your needs
        </p>
      </div>

      <div className="overflow-x-auto px-6">
        <table className="w-full border-collapse rounded-xl overflow-hidden text-left">
          <thead>
            <tr className="bg-zinc-900 text-gray-300">
              <th className="p-4">Features</th>
              {plans.map((plan, i) => (
                <th
                  key={i}
                  className="p-4 text-center font-semibold">
                  {plan.name}
                  <p className="text-xl font-bold mt-2">{plan.price}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr
                key={i}
                className="border-t border-zinc-800">
                <td className="p-4">{feature}</td>
                {plans.map((plan, j) => (
                  <td
                    key={j}
                    className="p-4 text-center">
                    {plan.includes[i] ? (
                      <Check className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
