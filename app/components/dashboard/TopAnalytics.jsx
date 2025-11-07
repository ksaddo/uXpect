import { Users, TrendingDown, Eye, Timer, Ellipsis, } from "lucide-react"; //prettier-ignore

export default function TopAnalytics() {
  const topAnalytics = [
    {
      name: "Total Visitors",
      value: "4,200",
      desc: "People visiting the site",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Page Views",
      value: "11,500",
      desc: "Pages viewed by visitors",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      name: "Average Session Time",
      value: "00:03:35",
      desc: "Time a visitor spends on the site",
      icon: <Timer className="w-6 h-6" />,
    },
    {
      name: "Bounce Rate",
      value: "47.2%",
      desc: "Visitors who leave after viewing one page",
      icon: <TrendingDown className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {topAnalytics.map((item, index) => (
        <div
          className="border border-neutral-800 rounded-2xl p-4 space-y-3 bg-[#111217]"
          key={index}>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-[#25262b] p-3 rounded-xl">{item.icon}</span>
            <Ellipsis />
          </div>
          <p className="text-sm">{item.name}</p>
          <p className="text-xl font-bold">{item.value}</p>
          <p className="text-xs text-neutral-400">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
