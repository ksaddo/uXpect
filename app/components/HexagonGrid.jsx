"use client";
import Image from "next/image";
import { MessageCircleMore, FileText, Palette, Laptop, Rocket, Wrench, Hexagon,} from "lucide-react"; //prettier-ignore

export default function HexagonGrid() {
  const hexagons = [
    {
      title: "REACT NATIVE",
      img: "/icons/react1.png",
      sub: ["UI Components", "State Management", "Cross-Platform"],
    },
    {
      title: "NEXT JS",
      img: "/icons/next.jpeg",
      sub: ["SSR / SSG", "API Routes", "Optimization"],
    },
    {
      title: "NODE JS",
      img: "/icons/node.png",
      sub: ["Express.js", "Realtime Apps", "API Design"],
    },
    {
      title: "PYTHON",
      img: "/icons/python.png",
      sub: ["Automation", "Data Analysis", "Flask / Django"],
    },
    {
      title: "BLENDER",
      img: "/icons/blender.png",
      sub: ["Modelling", "Texturing", "Sculpting"],
    },
    {
      title: "MONGO DB",
      img: "/icons/php.jpeg",
      sub: ["Schema Design", "Aggregation", "Atlas Integration"],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12 lg:gap-0 lg:flex-row lg:items-center lg:justify-around lg:bg-neutral-900 lg:border border-dashed border-neutral-700 rounded-3xl py-0 lg:py-6 2xl:py-10">
      {/* hexagon section */}
      <div className="flex flex-col items-center space-y-[-30px] lg:space-y-[-40px]">
        {/* Row 1: 3 */}
        <div className="flex gap-2 justify-center">
          {hexagons.slice(0, 3).map((item, i) => (
            <Hex
              key={i}
              {...item}
            />
          ))}
        </div>

        {/* Row 2: 2 */}
        <div className="flex gap-2 justify-center">
          {hexagons.slice(3, 5).map((item, i) => (
            <Hex
              key={i}
              {...item}
            />
          ))}
        </div>

        {/* Row 3: 1 */}
        <div className="flex justify-center">
          <Hex {...hexagons[5]} />
        </div>
      </div>

      {/* table section */}
      <div className=" overflow-x-auto">
        <table className="w-full lg:w-fit border-collapse text-left">
          <tbody>
            {hexagons.map((skill) => (
              <tr
                key={skill.title}
                className="border-b border-dashed border-neutral-700">
                {/* Left - Title */}
                <td className="p-3 w-fit">{skill.title}</td>

                {/* Right - Subcategories */}
                {skill.sub.map((item, index) => (
                  <td
                    key={index}
                    className={`px-4 py-6 text-gray-400 w-fit ${
                      index > 1
                        ? "hidden md:table-cell lg:hidden xl:table-cell"
                        : ""
                    }`}>
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Hex({ title, img }) {
  return (
    <div
      className="relative w-[120px] h-[130px] md:w-[200px] md:h-[220px] lg:w-[150px] lg:h-[170px] 2xl:w-[180px] 2xl:h-[200px] p-[1px] bg-gray-700 hover:bg-orange-500 hover:scale-105 cursor-pointer transition-transform duration-300"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}>
      <div
        className="w-full h-full bg-black flex flex-col items-center justify-center text-center"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}>
        {/* <p className="mt-2 text-xs ">{desc}</p> */}
        <div className="">
          <Image
            src={img}
            alt={title}
            width={60}
            height={60}
            className="h-11 w-11 lg:h-14 lg:w-14 object-contain"
          />
        </div>
        <p className="text-sm lg:text-lg px-5 py-1">{title}</p>
      </div>
    </div>
  );
}
