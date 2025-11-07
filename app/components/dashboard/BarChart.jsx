import { ChevronDown  } from "lucide-react"; //prettier-ignore

export default function BarChart() {
  const data = [
    { month: "Jan", desktop: 80, mobile: 40 },
    { month: "Feb", desktop: 100, mobile: 70 },
    { month: "Mar", desktop: 90, mobile: 50 },
    { month: "Apr", desktop: 40, mobile: 60 },
    { month: "May", desktop: 85, mobile: 55 },
    { month: "Jun", desktop: 88, mobile: 60 },
    { month: "Jul", desktop: 72, mobile: 88 },
  ];

  const totalVisitors = data.reduce((sum, d) => sum + d.desktop + d.mobile, 0);

  return (
    <div className="w-full flex flex-col flex-1 p-4 bg-[#111217] rounded-2xl shadow-lg border border-white/10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-sm">Website Interaction Overview</h2>
          {/* Legend */}
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-blue-500 rounded-sm"></span> Desktop
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span> Mobile
            </div>
          </div>
        </div>
        <div className="flex h-fit items-center gap-2 border border-neutral-600 bg-neutral-700 rounded-lg px-2 py-1 text-sm">
          Total Visitors <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-48 w-full gap-4">
        {data.map((item) => (
          <div
            key={item.month}
            className="flex flex-col items-center flex-1">
            <div className="flex items-end gap-1 w-full justify-center h-40 group">
              {/* Desktop bar */}
              <div
                className="w-5 rounded-t bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-300 group-hover:opacity-80"
                style={{ height: `${item.desktop}%` }}
                title={`Desktop: ${item.desktop}`}></div>
              {/* Mobile bar */}
              <div
                className="w-5 rounded-t bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all duration-300 group-hover:opacity-80"
                style={{ height: `${item.mobile}%` }}
                title={`Mobile: ${item.mobile}`}></div>
            </div>
            <span className="text-xs text-gray-400 mt-2 font-medium">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-sm mt-4 text-gray-400 text-center">
        📊 Engagement levels up by{" "}
        <span className="text-green-500 font-semibold">5.2%</span> this month.
      </div>
    </div>
  );
}
