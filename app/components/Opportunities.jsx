import SmallTitles from "./SmallTitles";

export default function Opportunities({ icon, title, desc }) {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center gap-6">
      <SmallTitles
        icon={icon}
        title={title}
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{desc}</h1>
    </section>
  );
}
