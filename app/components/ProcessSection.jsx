import { Lightbulb, Brush, Code, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10 text-red-500" />,
      title: "1. Discovery",
      desc: "Understanding your goals, audience, and vision.",
    },
    {
      icon: <Brush className="w-10 h-10 text-red-500" />,
      title: "2. Design",
      desc: "Crafting wireframes, prototypes, and beautiful interfaces.",
    },
    {
      icon: <Code className="w-10 h-10 text-red-500" />,
      title: "3. Development",
      desc: "Building responsive, optimized, and scalable websites.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-red-500" />,
      title: "4. Launch",
      desc: "Testing, deployment, and delivering the final product.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">My Process</h2>
        <p className="text-gray-400 mt-3">
          A simple 4-step approach to creating impactful websites
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 px-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-2xl hover:shadow-lg hover:shadow-red-900/40 transition">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
