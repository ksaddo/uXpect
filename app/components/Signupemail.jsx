import Button2 from "./Button2";

export default function Signupemail() {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-3 rounded-2xl bg-neutral-900 ">
      <p className="text-xl text-center">Sign Up for Email</p>

      <p className="font-light text-gray-300 text-center">
        Join the list for updates, events & members-only offers!
      </p>

      <div className="flex gap-2 justify-around items-center w-full bg-[var(--background)] rounded-full pl-4 pr-2 py-2">
        <input
          type="text"
          placeholder="Email address"
          className="flex flex-1 bg-transparent outline-none placeholder-white text-sm text-white"
        />
        <Button2>Join</Button2>
      </div>
    </div>
  );
}
