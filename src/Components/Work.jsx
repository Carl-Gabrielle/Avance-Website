import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Architecture Portfolio",
    type: "Web Design · Development",
    description:
      "A minimal, responsive portfolio designed to showcase architectural work with clarity and visual impact.",
    className: "project-architecture",
  },
  {
    number: "02",
    name: "Helio Energy",
    type: "Product",
    description:
      "Making clean energy easier to understand, compare, and choose.",
    className: "project-helio",
  },
  {
    number: "03",
    name: "Finloop",
    type: "Web Platform",
    description:
      "A finance infrastructure platform designed around simplicity.",
    className: "project-finloop",
  },
];

/* --------------------------------------------------
   Animation presets
-------------------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Work() {
  return (
    <section
      id="work"
      className="bg-[#f5f5f2] px-5 py-24 text-[#111111] sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={containerVariants}
          className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Selected work</SectionLabel>

            <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-5xl">
              Work that makes the difference visible.
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xs text-sm font-medium leading-6 text-[#666666]"
          >
            A few examples of how strategy, design, and technology
            come together.
          </motion.p>
        </motion.div>

        {/* PROJECT GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <Project
              key={project.name}
              project={project}
              featured={index === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==================================================
   PROJECT
================================================== */

function Project({ project, featured }) {
  return (
    <motion.article
      variants={itemVariants}
      className={`group ${featured ? "lg:col-span-2" : ""}`}
    >
      <motion.a
        href="#contact"
        className="block"
        whileHover="hover"
      >

        {/* PROJECT VISUAL */}

        <motion.div
          className={`relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] ${
            featured ? "aspect-[2/1]" : "aspect-[1.2/1]"
          } ${project.className}`}
          initial={{
            scale: 1,
          }}
          variants={{
            hover: {
              scale: 0.985,
              transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >

          {/* ==================================================
              ARCHITECTURE PORTFOLIO
          ================================================== */}

          {project.name === "Architecture Portfolio" && (
            <>
              {/* Architectural grid */}

              <div className="absolute inset-0 bg-[#ecece7]" />

              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(17,17,17,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(17,17,17,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Main architectural composition */}

              <motion.div
                className="absolute left-[13%] top-[16%] h-[68%] w-[42%] bg-[#fafaf8] shadow-[20px_20px_50px_rgba(0,0,0,0.12)]"
                variants={{
                  hover: {
                    x: 10,
                    y: -6,
                    rotate: -1.5,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {/* Building lines */}

                <div className="absolute inset-x-[12%] top-[14%] h-px bg-black/20" />
                <div className="absolute inset-x-[12%] top-[28%] h-px bg-black/15" />
                <div className="absolute inset-x-[12%] top-[42%] h-px bg-black/15" />
                <div className="absolute inset-x-[12%] top-[56%] h-px bg-black/15" />
                <div className="absolute inset-x-[12%] top-[70%] h-px bg-black/15" />

                {/* Windows */}

                <div className="absolute left-[12%] top-[17%] h-[55%] w-[22%] bg-[#252525]" />
                <div className="absolute left-[39%] top-[17%] h-[55%] w-[22%] bg-[#d9d9d3]" />
                <div className="absolute left-[66%] top-[17%] h-[55%] w-[22%] bg-[#252525]" />

                {/* Ground */}

                <div className="absolute bottom-[10%] left-[12%] h-2 w-[76%] bg-[#111111]" />
              </motion.div>

              {/* Secondary architectural card */}

              <motion.div
                className="absolute right-[13%] top-[27%] h-[45%] w-[28%] rotate-[7deg] rounded-sm bg-[#111111] shadow-2xl"
                variants={{
                  hover: {
                    rotate: 3,
                    scale: 1.05,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <div className="absolute left-[14%] top-[16%] h-[2px] w-[45%] bg-[#d8ff63]" />

                <div className="absolute left-[14%] top-[29%] h-[35%] w-[72%] border border-white/20" />

                <div className="absolute bottom-[15%] left-[14%] text-[clamp(1.4rem,3vw,3rem)] font-semibold tracking-[-0.07em] text-white">
                  2026
                </div>
              </motion.div>

              {/* Small label */}

              <motion.div
                className="absolute bottom-[12%] right-[17%] rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#555555] shadow-sm backdrop-blur"
                variants={{
                  hover: {
                    y: -5,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
              >
                Architecture / Portfolio
              </motion.div>
            </>
          )}

          {/* ==================================================
              HELIO ENERGY
          ================================================== */}

          {project.name === "Helio Energy" && (
            <>
              <motion.div
                className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/20"
                variants={{
                  hover: {
                    scale: 1.08,
                    rotate: 8,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                    },
                  },
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-[47%] w-[47%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[25px] border-orange-400 shadow-[0_0_80px_rgba(255,165,60,.35)]"
                variants={{
                  hover: {
                    scale: 1.08,
                    rotate: -8,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 shadow-[0_0_50px_rgba(255,210,120,.6)]"
                variants={{
                  hover: {
                    scale: 1.18,
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
              />
            </>
          )}

          {/* ==================================================
              FINLOOP
          ================================================== */}

          {project.name === "Finloop" && (
            <>
              <motion.div
                className="absolute -left-[8%] top-[18%] h-[65%] w-[116%] rotate-[-10deg] rounded-3xl bg-[#27212f] shadow-2xl"
                variants={{
                  hover: {
                    rotate: -6,
                    scale: 1.05,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              />

              <motion.div
                className="absolute left-[18%] top-[36%] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.09em] text-[#e7ff66]"
                variants={{
                  hover: {
                    x: 12,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                finloop
              </motion.div>
            </>
          )}

          {/* HOVER OVERLAY */}

          <motion.div
            className="absolute inset-0 bg-black/[0.02]"
            variants={{
              hover: {
                backgroundColor: "rgba(0,0,0,0.04)",
                transition: {
                  duration: 0.4,
                },
              },
            }}
          />

          {/* ARROW */}

          <motion.div
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white text-[#111111] shadow-lg"
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.9,
            }}
            variants={{
              hover: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            ↗
          </motion.div>

          {/* PROJECT NUMBER */}

          <div className="absolute bottom-5 left-5 rounded-full border border-black/10 bg-white/85 px-3 py-1.5 text-[10px] font-bold text-[#333333] shadow-sm backdrop-blur-md">
            {project.number}
          </div>
        </motion.div>

        {/* PROJECT INFORMATION */}

        <motion.div
          className="mt-5 flex items-start justify-between gap-5"
          variants={{
            hover: {
              x: 2,
              transition: {
                duration: 0.35,
              },
            },
          }}
        >
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111111]">
              {project.name}
            </h3>

            <p className="mt-1.5 max-w-md text-sm font-medium leading-6 text-[#666666]">
              {project.description}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-black/[0.09] bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#666666] shadow-sm">
            {project.type}
          </span>
        </motion.div>
      </motion.a>
    </motion.article>
  );
}

/* ==================================================
   SECTION LABEL
================================================== */

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c9825]">
      <motion.span
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 28,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-px bg-[#a8cf32]"
      />

      {children}
    </div>
  );
}

export default Work;