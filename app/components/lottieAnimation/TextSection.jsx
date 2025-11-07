import Button2 from "../Button2";

export default function TextSection() {
  return (
    <div className="space-y-10 max-w-[400px]">
      {/* header */}
      <div className="font-bruno">
        <div className="md:text-5xl">Welcome to</div>
        <div className="text-lg md:text-7xl">
          u<span className="text-[var(--primary)] italic">X</span>pect
        </div>
      </div>
      <p className="text-lg text-[var(--primary)]">About</p>
      <p className="font-light">
        We’re a group of camera-shy college students who enjoy designing,
        coding, and experimenting with technology behind the scenes. This
        website was entirely built and developed by
        <span className="font-bold text-blue-600"> Addo Boateng Evans</span>,
        handling everything from the front-end and back-end to performance and
        deployment. Beyond this site, our team includes students with a wide
        range of technical skills — from web and app development to
        cybersecurity, UI/UX design, and data handling.
      </p>
      <div className="flex">
        <Button2>View more</Button2>
      </div>
    </div>
  );
}
