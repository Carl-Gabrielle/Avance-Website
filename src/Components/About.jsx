import { motion } from "motion/react";
import {
  ArrowUpRight,
  Lightbulb,
  Palette,
  Code2,
} from "lucide-react";

function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 22,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const disciplines = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We find the right direction before we start building.",
      icon: Lightbulb,
      cardClass: "bg-[#e9f0d7]",
      iconClass: "bg-[#d7e8a7] text-[#536b16]",
      accentClass: "bg-[#a8cf32]",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We turn ideas into experiences that feel clear and memorable.",
      icon: Palette,
      cardClass: "bg-[#e9e5f2]",
      iconClass: "bg-[#d8d0e9] text-[#62547e]",
      accentClass: "bg-[#9583bd]",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build responsive websites designed to perform and last.",
      icon: Code2,
      cardClass: "bg-[#e5eceb]",
      iconClass: "bg-[#cededb] text-[#45655d]",
      accentClass: "bg-[#71988e]",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f5f2] px-5 py-16 text-[#111111] sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="mb-12 border-t border-black/[0.08] pt-5 sm:mb-14"
        >
          <div className="flex items-start justify-between">
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c9825]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#a8cf32]" />

              About Avance
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="hidden text-right sm:block"
            >
              <p className="text-xs font-medium text-[#555555]">
                Your digital partner
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#999999]">
                Strategy × Design × Development
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div className="relative grid gap-10 lg:grid-cols-[0.7fr_2.3fr] lg:gap-12">
          {/* ==================================================
              LEFT VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <span className="absolute -left-5 -top-10 select-none text-[clamp(10rem,16vw,16rem)] font-semibold leading-none tracking-[-0.11em] text-black/[0.045]">
              01
            </span>

            <div className="absolute left-1 top-[225px] flex flex-col gap-4">
              <span className="h-10 w-px bg-[#a8cf32]" />

              <span
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#888888]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                Who we are
              </span>
            </div>
          </motion.div>

          {/* ==================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={containerVariants}
            className="min-w-0"
          >
            {/* Mobile label */}

            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3 lg:hidden"
            >
              <span className="h-px w-7 bg-[#a8cf32]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c9825]">
                Who we are
              </span>
            </motion.div>

            {/* ==================================================
                HEADLINE
            ================================================== */}

            <motion.h2
              variants={fadeUp}
              className="max-w-6xl text-balance text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.87] tracking-[-0.078em]"
            >
              We turn ideas
              <br />

              <span className="text-[#8b8b86]">
                into digital experiences.
              </span>
            </motion.h2>

            {/* ==================================================
                INTRO
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-8 sm:mt-12 lg:mt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14"
            >
              {/* Main description */}

              <div>
                <p className="max-w-2xl text-lg leading-8 text-[#4f4f4c] sm:text-xl sm:leading-8">
                  Avance partners with businesses to create websites that
                  communicate clearly, look distinctive, and help move their
                  goals forward.
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#777777]">
                  We bring strategy, design, and development together to turn
                  your ideas into digital experiences built around your
                  audience and your business.
                </p>
              </div>

              {/* What matters */}

              <div className="border-l border-black/[0.08] pl-5 sm:pl-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#999999]">
                  What matters
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-[#555555]">
                  Clear thinking.
                  <br />
                  Strong design.
                  <br />
                  Thoughtful technology.
                </p>
              </div>
            </motion.div>

            {/* ==================================================
                DISCIPLINES
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-14 border-t border-black/[0.08] pt-5 sm:mt-18"
            >
              {/* Header */}

              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#888888]">
                    What we bring
                  </span>
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#aaaaaa]">
                  03 disciplines
                </span>
              </div>

              {/* Cards */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {disciplines.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      variants={cardVariants}
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`group relative min-h-[280px] overflow-hidden rounded-[3px] border border-black/[0.07] p-6 sm:min-h-[300px] sm:p-7 ${
                        item.cardClass
                      } ${
                        index === 1
                          ? "sm:translate-y-4 lg:translate-y-6"
                          : ""
                      }`}
                    >
                      {/* Decorative circles */}

                      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full border border-black/[0.06] transition-transform duration-700 group-hover:scale-125" />

                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-black/[0.05]" />

                      {/* Top */}

                      <div className="relative flex items-start justify-between">
                        <span className="text-[11px] font-semibold tracking-[0.08em] text-black/40">
                          {item.number}
                        </span>

                        <div
                          className={`grid h-9 w-9 place-items-center rounded-full ${item.iconClass}`}
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>

                      {/* Text */}

                      <div className="relative mt-16 sm:mt-20">
                        <h3 className="text-2xl font-semibold tracking-[-0.045em] text-[#111111] sm:text-[1.6rem]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-xs text-sm leading-6 text-black/55">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom */}

                      <div className="absolute bottom-5 left-6 right-6 sm:bottom-6 sm:left-7 sm:right-7">
                        <div className="h-px w-full bg-black/[0.09]">
                          <motion.div
                            initial={{
                              width: "0%",
                            }}
                            whileInView={{
                              width: "30%",
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.12,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`h-full ${item.accentClass}`}
                          />
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                            Avance
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="text-black/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ==================================================
                CLOSING
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col gap-4 border-b border-black/[0.08] pb-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-lg text-sm leading-6 text-[#777777]">
                From first idea to final interaction, we stay close to the
                work and focused on what matters.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#a8cf32]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#555555]">
                  Your digital partner
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;