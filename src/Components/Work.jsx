
  import { motion } from "framer-motion";
  import { ArrowRight, ArrowUpRight } from "lucide-react";
  import { Link } from "react-router-dom";
  import { projects } from "../data/projects";

  const ease = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease,
      },
    },
  };

  function Work() {
    const featured = projects[0];
    const secondary = projects.slice(1);

    return (
      <section
        id="work"
        className=" px-4 py-16 text-[#111111] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* ================================================
              SECTION HEADER
          ================================================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:text-[10px]">
                Selected work
              </span>

            <h2 className="mt-3 max-w-[12ch] text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
    Shaping the{" "}
    <span className="text-black/25">next digital experience.</span>
  </h2>
            </div>

            <p className="max-w-[280px] text-[13px] leading-5 text-black/40 sm:max-w-[240px] sm:text-right">
              Building meaningful digital experiences, one project at a time.
            </p>
          </motion.div>

          {/* ================================================
              FEATURED PROJECT
          ================================================= */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="mt-10 sm:mt-14"
          >
            <div
              className={`
                group relative min-h-[500px] overflow-hidden
                rounded-[20px] border border-black/[0.07]
                ${featured.heroClass || "bg-[#e8e8e3]"}
                sm:min-h-0 sm:aspect-[16/10]
                lg:aspect-[16/8.2] lg:rounded-[24px]
              `}
            >
              {/* Base */}
              <div className="absolute inset-0 bg-[#e7e7e2]" />

              {/* Subtle grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(17,17,17,0.08) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(17,17,17,0.08) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Soft bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white/85 via-white/35 to-transparent" />

              {/* Project content */}
              <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-5 sm:absolute sm:inset-0 sm:min-h-0 sm:p-7 lg:p-9">
                {/* Top */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40 sm:text-[10px]">
                      Selected project
                    </p>
                  </div>

                  <h3 className="max-w-[16ch] text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-black">
                    {featured.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-6 sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                  <p className="max-w-[340px] text-[12px] leading-[1.65] text-black/50 sm:text-[13px] lg:text-[14px]">
                    A project we enjoyed working on, with a focus on keeping the
                    experience simple, clear, and useful.
                  </p>

                  {/* Case Study CTA */}
                  <Link
                    to={`/work/${featured.slug}`}
                    aria-label={`View case study for ${featured.title}`}
                    className="
                      group/button
                      flex w-full items-center justify-between
                      rounded-full
                      bg-[#111111]
                      p-1.5 pl-5
                      text-[11px] font-semibold
                      text-white
                      shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#a8cf32]
                      hover:text-[#111111]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-black/30
                      focus-visible:ring-offset-2
                      sm:w-auto
                      sm:justify-start
                      sm:gap-3
                      sm:pl-5
                      sm:pr-1.5
                      sm:text-[12px]
                    "
                  >
                    <span className="whitespace-nowrap">
                      View case study
                    </span>

                    <span
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-white text-black
                        transition-all duration-300
                        group-hover/button:bg-black
                        group-hover/button:text-white
                        group-hover/button:translate-x-0.5
                      "
                    >
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ================================================
              MORE WORK
          ================================================= */}
          {secondary.length > 0 && (
            <div className="mt-12 sm:mt-16">
              {/* Header */}
              <div className="flex items-center justify-between border-t border-black/10 py-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35">
                  More work
                </span>

                <span className="text-[9px] uppercase tracking-[0.14em] text-black/25">
                  {secondary.length} projects
                </span>
              </div>

              {/* Project list */}
              <div className="border-b border-black/10">
                {secondary.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.45,
                      ease,
                    }}
                  >
                    <Link
                      to={`/work/${project.slug}`}
                      className="
                        group
                        flex min-h-[72px]
                        items-center justify-between
                        gap-4
                        px-1
                        py-4
                        transition-all duration-300
                        hover:px-2
                        sm:min-h-[80px]
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            truncate
                            text-[14px]
                            font-medium
                            tracking-[-0.025em]
                            transition-colors duration-300
                            group-hover:text-[#7c9825]
                            sm:text-[16px]
                          "
                        >
                          {project.title}
                        </h3>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-black/30 sm:text-[10px]">
                          {project.type}
                        </p>
                      </div>

                      <span
                        className="
                          flex h-9 w-9 shrink-0
                          items-center justify-center
                          rounded-full
                          border border-black/10
                          text-black/35
                          transition-all duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:border-black/20
                          group-hover:bg-[#111111]
                          group-hover:text-white
                          sm:h-10 sm:w-10
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.7}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  export default Work;
