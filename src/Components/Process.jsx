const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, audience, challenge, and opportunity before making anything.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn what we learn into a clear direction, structure, and visual language.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the experience, refine the details, and make every decision intentional.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We bring the final system to life with clean, scalable, production-ready development.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="bg-[#fafaf8] px-5 py-24 text-[#111111] sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Left */}
          <div>
            <SectionLabel>How we work</SectionLabel>

            <h2 className="mt-6 max-w-md text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-5xl">
              Simple process. Serious results.
            </h2>
          </div>

          {/* Right */}
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 py-7 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[60px_180px_1fr]"
              >
                <span className="text-xs font-bold text-[#8aaa2c]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111111]">
                  {step.title}
                </h3>

                <p className="text-sm font-medium leading-6 text-[#666666]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c9825]">
      <span className="h-px w-7 bg-[#a8cf32]" />
      {children}
    </div>
  );
}

export default Process;