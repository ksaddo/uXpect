import Image from "next/image";
import { Users, Ellipsis, } from "lucide-react"; //prettier-ignore

export default function CountrySession() {
  const countries = [
    { name: "United States", value: 80, flag: "/flags/usa.png" },
    { name: "Ghana", value: 45, flag: "/flags/ghana.png" },
    { name: "Uk", value: 85, flag: "/flags/uk.png" },
    { name: "Japan", value: 70, flag: "/flags/japan.png" },
  ];
  return (
    <div className="w-full flex flex-col flex-1 p-4 bg-[#111217] rounded-2xl shadow-lg border border-white/10">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <p> Session by Country</p>
        <Ellipsis />
      </div>
      {/* Bars */}
      <div className="flex flex-col gap-6">
        {countries.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-3">
            {/* Image */}
            <div className="w-fit rounded-full p-2 bg-neutral-800">
              <Image
                src={item.flag}
                alt={item.name}
                width={40}
                height={40}
                className="object-contain w-6 h-6"
              />
            </div>

            {/* Bar */}
            <div className="flex flex-col flex-1 gap-1">
              <span className="flex justify-between">
                <p className="text-sm">{item.name}</p>
                <p className="text-sm">{item.value}%</p>
              </span>
              <div className="flex w-full h-3 justify-start group rounded-lg bg-neutral-700">
                <div
                  className="h-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:opacity-80"
                  style={{ width: `${item.value}%` }}
                  title={`Desktop: ${item.value}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
