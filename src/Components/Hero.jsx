  import { motion } from "motion/react";

  function Hero() {
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    };

    const itemVariants = {
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

    return (
      <section
        id="home"
        className="relative isolate min-h-[850px] overflow-hidden bg-[#fafaf8] px-5 pb-24 pt-36 text-[#111111] sm:px-8 sm:pt-44"
      >
        {/* ==================================================
            AMBIENT BACKGROUND
        ================================================== */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-[-300px] -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#d8ff63]/15 blur-[140px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div className="grid-background-light pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_85%)]" />

        {/* Decorative circle */}
        <motion.div
          className="pointer-events-none absolute right-[7%] top-[30%] -z-10 hidden h-32 w-32 rounded-full border border-black/10 lg:block"
          animate={{
            rotate: 360,
            scale: [1, 1.04, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Decorative dot */}
        <motion.div
          className="pointer-events-none absolute left-[8%] top-[38%] -z-10 hidden h-2 w-2 rounded-full bg-[#a8cf32] lg:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-6xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#333333] shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              Digital Partner for Modern Businessessss
            </motion.div>

            {/* ==================================================
                HEADING
            ================================================== */}

      <motion.h1
  variants={itemVariants}
  className="
    mx-auto mt-8
    max-w-[95vw]
    text-balance
    text-[clamp(3rem,11vw,4.5rem)]
    font-semibold
    leading-[0.88]
    tracking-[-0.065em]
    text-[#111111]

    sm:text-[clamp(3.5rem,9vw,5.5rem)]
    md:text-[clamp(4rem,8vw,6.5rem)]
    lg:text-[clamp(5rem,7vw,7.8rem)]
  "
>
  We build websites.

  <span
    className="
      mt-3 block
      whitespace-normal
      text-[#4a4a4a]
      sm:whitespace-nowrap
    "
  >
    designed to{" "}
    <motion.span
      className="inline-block text-[#8aaa2c]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      move forward
    </motion.span>
  </span>
</motion.h1>
            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-8 max-w-2xl text-pretty text-base font-medium leading-7 text-[#555555] sm:text-lg"
            >
              We help businesses move forward through thoughtful design,
              modern technology, and digital experiences.
            </motion.p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              {/* Primary */}
              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <span>Start a conversation</span>

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="text-base"
                >
                  →
                </motion.span>
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#work"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-semibold text-[#333333] shadow-sm"
              >
                <span>View selected work</span>

                <motion.span
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↘
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

        

          {/* <motion.div
            className="mx-auto mt-20 max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:grid-cols-3">
              <Metric
                number="08"
                label="Years shaping digital experiences"
              />

              <Metric
                number="42+"
                label="Products, brands, and launches"
                border
              />

              <Metric
                number="94%"
                label="Clients returning for what's next"
                border
              />
            </div>
          </motion.div> */}

          {/* ==================================================
              SCROLL INDICATOR
          ================================================== */}

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="#about"
              className="group flex flex-col items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#777777]"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Explore

              <span className="h-10 w-px bg-gradient-to-b from-black/30 to-transparent transition-colors duration-300 group-hover:from-[#a8cf32]" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ==================================================
    METRIC
  ================================================== */

  function Metric({ number, label, border }) {
    return (
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        whileHover={{
          backgroundColor: "#fbfbf8",
        }}
        className={`px-6 py-7 transition-colors duration-300 sm:px-8 ${
          border
            ? "border-t border-black/10 sm:border-l sm:border-t-0"
            : ""
        }`}
      >
        <p className="text-3xl font-semibold tracking-[-0.07em] text-[#111111]">
          {number}
        </p>

        <p className="mt-2 max-w-[180px] text-xs font-medium leading-5 text-[#666666]">
          {label}
        </p>
      </motion.div>
    );
  }

  export default Hero;