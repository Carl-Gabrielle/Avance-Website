import { motion } from "motion/react";
import thumbnail from "../assets/images/thumbnail1.png";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 22,
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
      className="
        relative isolate
        flex min-h-[100svh]
        flex-col justify-center
        overflow-hidden
        bg-[#fafaf8]
        px-5 py-16
        text-[#111111]
        sm:px-8 sm:py-20
        lg:block
        lg:min-h-[calc(100vh-120px)]
        lg:px-10
        lg:pb-24
        lg:pt-32
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {/* Soft lime ambient glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-150px]
          -z-10
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-[#d8ff63]/10
          blur-[90px]
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[110px]
          lg:left-[40%]
          lg:top-[-220px]
          lg:h-[520px]
          lg:w-[520px]
          lg:translate-x-0
          lg:blur-[130px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid */}

      <div
        className="
          grid-background-light
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-60
          [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_94%)]
        "
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            grid
            items-center
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-8
            xl:grid-cols-[1.05fr_0.95fr]
            xl:gap-14
          "
        >
          {/* ==================================================
              LEFT — CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              max-w-[900px]
              lg:max-w-none
            "
          >
            {/* ==================================================
                EYEBROW
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-black/[0.07]
                bg-white/75
                px-3
                py-2
                shadow-[0_5px_18px_rgba(0,0,0,0.025)]
                backdrop-blur-sm
                sm:px-3.5
                sm:py-2.5
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <motion.span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#a8cf32]
                  "
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative h-2 w-2 rounded-full bg-[#a8cf32]" />
              </span>

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#555555]
                  sm:text-[10px]
                  sm:tracking-[0.17em]
                "
              >
                Digital Partner for Modern Businesses
              </span>
            </motion.div>

            {/* ==================================================
                HEADLINE
            ================================================== */}

            <motion.h1
              variants={itemVariants}
              className="
                mt-6
                max-w-[950px]
                text-[clamp(2.75rem,9vw,4rem)]
                font-semibold
                leading-[0.96]
                tracking-[-0.055em]

                sm:mt-8
                sm:text-[clamp(3.5rem,7.5vw,5.2rem)]
                sm:leading-[0.92]
                sm:tracking-[-0.065em]

                lg:mt-9
                lg:max-w-none
                lg:text-[clamp(4.5rem,6.2vw,6.8rem)]
                lg:leading-[0.89]
                lg:tracking-[-0.075em]
              "
            >
              <span className="block lg:whitespace-nowrap">
                We build websites
              </span>

              <span
                className="
                  mt-2
                  block
                  sm:mt-3
                  lg:mt-2
                  lg:whitespace-nowrap
                "
              >
                <span className="text-[#747474]">
                  that{" "}
                </span>

                <motion.span
                  className="
                    relative
                    inline-block
                    font-semibold
                    text-[#8aaa2c]
                  "
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  move forward.
                </motion.span>
              </span>
            </motion.h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-6
                max-w-[650px]
                sm:mt-8
                lg:mt-7
                xl:mt-8
              "
            >
              <p
                className="
                  max-w-[620px]
                  text-[15px]
                  leading-6
                  text-[#666666]

                  sm:text-lg
                  sm:leading-7

                  lg:text-[17px]
                  lg:leading-7
                "
              >
                Thoughtful design and modern technology for businesses
                ready to move forward.
              </p>

              <p
                className="
                  mt-3
                  text-[14px]
                  font-semibold
                  tracking-[-0.01em]
                  text-[#303030]

                  sm:mt-4
                  sm:text-[16px]

                  lg:text-[16px]
                "
              >
                Designed with purpose. Built for growth.
              </p>
            </motion.div>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:mt-8
                sm:flex-row
                sm:items-center

                lg:mt-9
              "
            >
              {/* PRIMARY CTA */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#111111]
                  px-7
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_12px_28px_rgba(0,0,0,0.10)]
                  transition-shadow
                  hover:shadow-[0_16px_34px_rgba(0,0,0,0.14)]

                  sm:min-h-[54px]
                  sm:px-8
                  sm:text-[15px]
                "
              >
                <span>Start a conversation</span>

                <span className="text-[17px] leading-none">
                  ↗
                </span>
              </motion.a>

              {/* SECONDARY CTA */}

              <motion.a
                href="#work"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#333333]
                  shadow-[0_6px_20px_rgba(0,0,0,0.03)]
                  transition-all
                  hover:border-black/[0.14]
                  hover:shadow-[0_10px_26px_rgba(0,0,0,0.06)]

                  sm:min-h-[54px]
                  sm:px-8
                  sm:text-[15px]
                "
              >
                <span>View our work</span>

                <span className="text-[17px] leading-none text-[#8aaa2c]">
                  ↘
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT — VISUAL
              Hidden below lg
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              relative
              mx-auto
              hidden
              h-[430px]
              w-full
              max-w-[560px]

              lg:block

              xl:h-[480px]
              xl:max-w-[590px]
            "
          >
            {/* ==================================================
                AMBIENT GLOW
            ================================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#d8ff63]/10
                blur-[70px]

                xl:h-[300px]
                xl:w-[300px]
                xl:blur-[90px]
              "
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ==================================================
                BACK CARD
            ================================================== */}

            <motion.div
              className="
                absolute
                right-[2%]
                top-[3%]
                w-[82%]
                rounded-[20px]
                border
                border-black/[0.06]
                bg-white/65
                p-2
                shadow-[0_25px_70px_rgba(0,0,0,0.045)]
                backdrop-blur-md

                xl:rounded-[24px]
              "
              animate={{
                y: [0, -5, 0],
                rotate: [1.5, 1, 1.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />

                <div className="ml-auto h-2 w-20 rounded-full bg-black/[0.05]" />
              </div>

              <div className="rounded-[16px] bg-[#f3f3f0] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="h-3 w-20 rounded-full bg-black/10" />

                  <div className="flex gap-2">
                    <div className="h-2 w-10 rounded-full bg-black/[0.05]" />
                    <div className="h-2 w-10 rounded-full bg-black/[0.05]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-xl bg-black/[0.055]" />

                  <div className="h-24 rounded-xl bg-[#d8ff63]/45" />

                  <div className="h-24 rounded-xl bg-black/[0.055]" />
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                MIDDLE CARD
            ================================================== */}

            <motion.div
              className="
                absolute
                left-[2%]
                top-[19%]
                w-[82%]
                rounded-[20px]
                border
                border-black/[0.06]
                bg-white/90
                p-2
                shadow-[0_25px_70px_rgba(0,0,0,0.06)]
                backdrop-blur-md

                xl:rounded-[24px]
              "
              animate={{
                y: [0, 5, 0],
                rotate: [-1.2, -0.8, -1.2],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />

                <div className="mx-auto h-5 w-36 rounded-full bg-black/[0.035]" />
              </div>

              <div className="rounded-[16px] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111]">
                      <div className="h-2 w-2 rounded-full bg-[#d8ff63]" />
                    </div>

                    <div>
                      <div className="h-2.5 w-20 rounded-full bg-black/10" />

                      <div className="mt-1.5 h-2 w-12 rounded-full bg-black/[0.05]" />
                    </div>
                  </div>

                  <div className="h-8 w-16 rounded-full bg-black/[0.055]" />
                </div>

                <div className="mt-7 grid grid-cols-[1.15fr_0.85fr] gap-4">
                  <div>
                    <div className="h-6 w-[85%] rounded-md bg-[#111111]" />

                    <div className="mt-3 h-3 w-[65%] rounded-full bg-black/[0.08]" />

                    <div className="mt-2 h-3 w-[50%] rounded-full bg-black/[0.055]" />

                    <div className="mt-6 h-10 w-28 rounded-full bg-[#d8ff63]" />
                  </div>

                  <div
                    className="
                      relative
                      min-h-[145px]
                      overflow-hidden
                      rounded-[16px]
                      bg-[#111111]
                    "
                  >
                    <motion.div
                      className="
                        absolute
                        -right-7
                        -top-7
                        h-24
                        w-24
                        rounded-full
                        bg-[#d8ff63]
                      "
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="absolute bottom-4 left-4">
                      <div className="h-2 w-12 rounded-full bg-white/20" />

                      <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                FRONT / MAIN CARD
                Slightly larger + cleaner
            ================================================== */}

            <motion.div
              className="
                absolute
                bottom-[2%]
                right-[-1%]
                z-20
                w-[84%]
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.07]
                bg-white
                p-2
                shadow-[0_30px_80px_rgba(0,0,0,0.10)]

                xl:w-[84%]
                xl:rounded-[24px]
              "
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Browser bar */}

              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.08]" />

                <div className="ml-auto h-2 w-24 rounded-full bg-black/[0.045]" />
              </div>

              {/* ==================================================
                  IMAGE PREVIEW
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[16px]
                  bg-[#f7f7f4]
                "
              >
                <img
                  src={thumbnail}
                  alt="Website design preview"
                  className="
                    block
                    h-[250px]
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                  "
                />

                {/* Minimal subtle overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/[0.06]
                    via-transparent
                    to-white/[0.03]
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;