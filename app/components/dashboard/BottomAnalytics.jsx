"use client";

import {
  PanelLeft,
  Download,
  ArrowDown,
  Ellipsis,
} from "lucide-react"; //prettier-ignore

const titles = [
  { name: "Order Number", icon: <Ellipsis /> },
  { name: "Product Name" },
  { name: "Type" },
  { name: "Date", icon: <ArrowDown /> },
  { name: "Status" },
  { name: "Payment" },
]; // prettier-ignore

const values = [
  {
    order: "M5874893",
    Product: "E-commerce",
    Type: "Website",
    Date: "2025-10-01",
    Status: "Completed",
    Payment: "$500",
  },
  {
    order: "M5874894",
    Product: "Productivity",
    Type: "App",
    Date: "2025-08-12",
    Status: "Completed",
    Payment: "$800",
  },
  {
    order: "M5874895",
    Product: "Blog",
    Type: "Website",
    Date: "2025-07-14",
    Status: "Completed",
    Payment: "$99",
  },
  {
    order: "M5874896",
    Product: "Finance",
    Type: "Website",
    Date: "2025-05-04",
    Status: "Completed",
    Payment: "$2000",
  },
]; // prettier-ignore

export default function BottomAnalytics() {
  return (
    <div className="w-full border border-neutral-800 rounded-2xl bg-[#111217]  p-4 space-y-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-neutral-800 pb-4">
        <p className="text-xl font-semibold">Transaction History</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 border border-neutral-600 bg-neutral-700 rounded-lg px-3 py-2 text-sm cursor-pointer">
            <PanelLeft className="w-4 h-4" /> Customize Columns
          </span>
          <span className="flex items-center gap-2 border border-neutral-600 bg-[var(--primary)] rounded-lg px-3 py-2 text-sm cursor-pointer">
            <Download className="w-4 h-4" /> Download
          </span>
        </div>
      </div>

      {/* Column Titles */}
      <div className="grid grid-cols-6 text-sm font-semibold border-b border-neutral-800 pb-2">
        {titles.map((title, index) => (
          <div
            key={index}
            className="flex items-center gap-2">
            {title.icon} {title.name}
          </div>
        ))}
      </div>

      {/* Table Rows */}
      <div className="space-y-2">
        {values.map((value, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm py-2 border-b border-neutral-900 hover:bg-neutral-900 transition">
            <div>{value.order}</div>
            <div>{value.Product}</div>
            <div>{value.Type}</div>
            <div>{value.Date}</div>
            <div className="text-green-400">{value.Status}</div>
            <div className="font-medium">{value.Payment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
