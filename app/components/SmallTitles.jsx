export default function SmallTitles({ icon: Icon, title }) {
  return (
    <div className="flex justify-center items-center gap-2 w-fit rounded-full border border-orange-900 bg-orange-950 text-orange-500 px-4 py-1 lg:py-1 text-sm lg:text-base">
      {Icon && <Icon className="w-4 h-4" />}
      <p>{title}</p>
    </div>
  );
}
