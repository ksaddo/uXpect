import Image from "next/image";
import Logo from "../components/Logo";
import { PanelLeft, BadgeCent, LayoutDashboard, ChartPie, Calendar1, ClipboardClock, CircleGauge, Settings2, HelpCircle, ListFilter, ChartColumnIncreasing} from "lucide-react"; //prettier-ignore
import TopAnalytics from "../components/dashboard/TopAnalytics";
import BarChart from "../components/dashboard/BarChart";
import CountrySession from "../components/dashboard/CountrySession";
import BottomAnalytics from "../components/dashboard/BottomAnalytics";

export default function Dashboard() {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Transactions", icon: <BadgeCent className="w-4 h-4" /> },
    { name: "Analytics", icon: <ChartPie className="w-4 h-4" /> },
    { name: "Schedule", icon: <Calendar1 className="w-4 h-4" /> },
    { name: "Tasks", icon: <ClipboardClock className="w-4 h-4" /> },
    { name: "Performance", icon: <CircleGauge className="w-4 h-4" /> },
    { name: "Report", icon: <ChartColumnIncreasing className="w-4 h-4" /> },
    { name: "Help Center", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Settings", icon: <Settings2 className="w-4 h-4" /> },
  ];

  return (
    <div className="flex w-full bg-black mt-50 mb-30">
      {/* Sidebar */}
      <aside className="w-80 h-full border-r border-neutral-800 px-5 py-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
            <p className="font-bruno text-lg md:text-2xl">
              u<span className="text-[var(--primary)] italic">X</span>pect
            </p>
            <PanelLeft className="w-5 h-5" />
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 rounded-lg transition-all cursor-pointer">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xs text-neutral-500 text-center mt-6">
          © {new Date().getFullYear()} Your Company
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full px-8 py-6 space-y-6">
        {/* Header */}
        <div className="w-full flex items-center justify-between border-b border-neutral-800 pb-4">
          <p className="text-2xl font-semibold">Dashboard</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 border border-neutral-600 bg-neutral-700 rounded-lg p-2 text-sm">
              <Calendar1 className="w-4 h-4" /> 01 Sep - 30 Nov, 2025
            </span>
            <span className="flex items-center gap-2 border border-neutral-600 bg-neutral-700 rounded-lg p-2 text-sm">
              <ListFilter className="w-4 h-4" /> Filter
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <TopAnalytics />
          <div className="grid grid-cols-2 gap-6">
            <BarChart />
            <CountrySession />
            <div className="col-span-2">
              <BottomAnalytics />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
