"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Брифинг",
      desc: "Мы созвонились с заказчиком, познакомились и более подробно обсудили задачи проекта.",
    },
    {
      number: "2",
      title: "Исследование конкурентов и целевой аудитории",
      desc: "Этот этап помогает определить, как будущий сайт будет отличаться от конкурентов и что ожидать от него пользователям.",
    },
    {
      number: "3",
      title: "Разработка структуры и прототипирование",
      desc: "Создаётся карта сайта, продумываются основные разделы и логика навигации.",
    },
    {
      number: "4",
      title: "Дизайн-концепции",
      desc: "Разрабатываются несколько вариантов визуального решения, выбирается финальный стиль.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-gray-300">Процесс</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-gray-600 transition">
              <span className="text-5xl font-bold text-gray-600">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
