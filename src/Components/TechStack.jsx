import TechLogo from "./TechLogo";

const technologies = [
  "HTML5",
  "React",
  "Tailwind CSS",
  "Laravel",
  "MySQL",
  "Figma",
  "GitHub",
  "Jira",
  "Vercel",
  "Netlify",
  "Hostinger",
  "npm",
];

function TechStack() {
  return (
    <section
      id="technology"
      className="overflow-hidden border-y border-black/[0.07] bg-[#fafaf8] py-14 text-[#111111] sm:py-16"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#a8cf32]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c9825]">
              Technology
            </span>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-black/25 sm:block">
            Tools we build with
          </span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-10 overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#fafaf8] to-transparent sm:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#fafaf8] to-transparent sm:w-32" />

        <div className="tech-marquee flex w-max">
          {/* First set */}
          <LogoSet />

          {/* Duplicate set for seamless animation */}
          <LogoSet />
        </div>
      </div>
    </section>
  );
}

function LogoSet() {
  return (
    <div className="flex items-center">
      {technologies.map((technology) => (
        <div
          key={technology}
          className="group mx-6 flex items-center gap-4 sm:mx-10"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-black/[0.06] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.035)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#d8ff63] group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
            <TechLogo
              name={technology}
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.02em] text-black/45 transition-colors duration-300 group-hover:text-black">
            {technology}
          </span>

          <span className="ml-3 h-1 w-1 rounded-full bg-[#a8cf32]/60" />
        </div>
      ))}
    </div>
  );
}



export default TechStack;