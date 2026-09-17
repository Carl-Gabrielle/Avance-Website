import { motion } from "motion/react";
import thumbnail from "../assets/images/thumbnail1.png";

const spring = { type: "spring", stiffness: 320, damping: 24 };

function Arrow({ direction = "up" }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-8 w-8 place-items-center rounded-full border border-white/15 text-base transition-colors group-hover:border-[#d7ff5f] group-hover:bg-[#d7ff5f] group-hover:text-black ${
        direction === "down" ? "rotate-90" : "-rotate-45"
      }`}
    >
      →
    </span>
  );
}

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.11, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-[#080808] px-5 py-20 text-white sm:min-h-[calc(100svh-72px)] sm:px-7 md:px-10 lg:min-h-[calc(100vh-120px)] lg:px-10 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_42%,rgba(193,255,61,0.13),transparent_21%),radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.06),transparent_19%),linear-gradient(#0a0a0a,#080808)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-14rem] top-[16%] -z-10 h-[31rem] w-[31rem] rounded-full border border-[#d7ff5f]/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full bg-[#d7ff5f] shadow-[0_0_28px_7px_rgba(215,255,95,0.6)]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20"
      >
        <div className="relative z-10 max-w-[760px]">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 backdrop-blur-md sm:px-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#d7ff5f] opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-[#d7ff5f] shadow-[0_0_12px_2px_rgba(215,255,95,0.8)]" />
            </span>

            Independent digital studio · Available for select projects
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 max-w-[780px] text-[clamp(3.5rem,12.5vw,5.9rem)] font-medium leading-[0.88] tracking-[-0.075em] sm:mt-9 sm:text-[clamp(4.8rem,8vw,6.8rem)] lg:text-[clamp(4.8rem,5.85vw,7.2rem)]"
          >
            Digital work
            <br />
            with <span className="text-[#d7ff5f]">real pull.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-[560px] sm:mt-9"
          >
            <p className="text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/60 sm:text-[19px]">
              We turn ambitious brands into memorable digital experiences —
              through strategy, design, and technology that performs.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="group inline-flex h-14 items-center justify-between gap-8 rounded-full bg-[#d7ff5f] py-1 pl-6 pr-1.5 text-[14px] font-bold tracking-[-0.02em] text-black shadow-[0_14px_45px_rgba(194,255,57,0.18)] transition-shadow hover:shadow-[0_17px_55px_rgba(194,255,57,0.32)] sm:h-[58px] sm:pl-7 sm:text-[15px]"
            >
              Let&apos;s build something
              <Arrow />
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="group inline-flex h-14 items-center justify-between gap-8 rounded-full border border-white/15 bg-white/[0.03] py-1 pl-6 pr-1.5 text-[14px] font-semibold tracking-[-0.02em] text-white transition-colors hover:border-white/30 hover:bg-white/[0.07] sm:h-[58px] sm:pl-7 sm:text-[15px]"
            >
              Explore our work
              <Arrow direction="down" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-5 sm:mt-14"
          >
            <div className="h-px w-10 bg-white/20" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-white/35">
              Strategy · Experience · Technology
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto hidden w-full max-w-[620px] lg:block"
        >
          <motion.div
            className="absolute -left-10 top-24 h-44 w-44 rounded-full bg-[#d7ff5f]/15 blur-[75px]"
            animate={{
              scale: [0.9, 1.12, 0.9],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-white/[0.13] bg-[#111111]/95 p-2 shadow-[0_32px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-10 items-center gap-1.5 px-3">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <div className="mx-auto h-5 w-36 rounded-full border border-white/[0.07] bg-white/[0.04]" />
            </div>

            <div className="relative overflow-hidden rounded-[21px] border border-white/[0.08] bg-[#171717] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(215,255,95,0.18),transparent_30%)]" />

              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-bold tracking-[-0.03em]">
                  FORWARD®
                </span>

                <span className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  Case study
                </span>
              </div>

              <div className="relative grid grid-cols-[1fr_0.82fr] gap-5 pt-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7ff5f]">
                    Built to move
                  </p>

                  <p className="mt-3 text-4xl font-medium leading-[0.9] tracking-[-0.07em]">
                    Make your next move count.
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-[#d7ff5f]" />
                    <span className="h-2 w-20 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="relative min-h-[230px] overflow-hidden rounded-2xl bg-[#d7ff5f]">
                  <img
                    src={thumbnail}
                    alt="Website design preview"
                    loading="eager"
                    className="h-full w-full object-cover mix-blend-multiply opacity-80"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(215,255,95,0.65),transparent_54%)]" />

                  <div className="absolute bottom-3 left-3 rounded-full bg-black px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                    01 / 04
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-9 -left-9 z-10 w-[200px] rounded-2xl border border-white/[0.14] bg-[#151515]/90 p-4 shadow-2xl backdrop-blur-xl"
            animate={{ y: [0, 7, 0], rotate: [-3, -2, -3] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                Momentum
              </span>

              <span className="text-xs text-[#d7ff5f]">↗ 128%</span>
            </div>

            <div className="mt-4 flex h-10 items-end gap-1.5">
              {[35, 52, 40, 66, 58, 82, 74, 100].map((height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%` }}
                  className="w-full rounded-sm bg-[#d7ff5f]/80"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;