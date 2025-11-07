"use client";
import Button2 from "../components/Button2";

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border-b border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

const Select = ({ className = "", ...props }) => (
  <select
    className={`w-full border-b border-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-b focus:border-orange-600 ${className}`}
    {...props}
  />
);

export default function ContactSection() {
  return (
    <section className="my-30 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Start Your Project
        </h2>
        <p className="mb-10 md:mb-20 text-sm">
          Fill out the quick form below, and we’ll get back to you as soon as
          possible
        </p>

        <form className="space-y-8 md:space-y-10 text-left">
          {/* top options */}
          <div className="flex justify-between items-center">
            <button className="px-4 py-5 md:px-5 md:py-4 space-y-2 md:space-y-4 bg-[var(--primary)]">
              <p className="text-sm font-semibold">Mobile App</p>
              <p className="text-xs md:text-sm">
                Thinking about building a mobile app for your business or
                project?
              </p>
            </button>

            <p className="p-4 lg:p-10">or</p>

            <button className="px-4 py-5 md:px-5 md:py-4 space-y-2 border border-neutral-500">
              <p className="text-sm font-semibold">Website</p>
              <p className="text-xs md:text-sm">
                Are you interested in getting a new website for your brand or
                idea
              </p>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-1">
              <Input
                required
                placeholder="Full Name"
              />
            </div>

            <div className="space-y-1">
              <Input
                type="email"
                required
                placeholder="Email"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Input
              type="email"
              placeholder="Type of App/Website (Portfolio, Business, E-commerce, Blog...)"
            />
          </div>

          <div className="space-y-1">
            <Input
              type="number"
              placeholder="Budget (USD)"
            />
          </div>

          <div className="space-y-1">
            <Textarea
              rows={4}
              placeholder="Tell us about your project
"
            />
          </div>

          <div className="flex items-center gap-3 pt-0 md:pt-2">
            <input
              id="hasExisting"
              type="checkbox"
              className="w-5 h-5 accent-black"
            />
            <label
              htmlFor="hasExisting"
              className="text-sm text-neutral-400">
              I already have a website or app that needs updates or redesign
            </label>
          </div>

          <div className="flex justify-center pt-4">
            <Button2>Send Request</Button2>
          </div>
        </form>
      </div>
    </section>
  );
}
