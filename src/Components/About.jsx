import { motion } from "motion/react";
import {
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
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const services = [
    {
      title: "Strategy",
      description:
        "We start by understanding what you need, who you're reaching, and what the website needs to achieve.",
      icon: Lightbulb,
      bg: "bg-[#e9f0d7]",
      iconBg: "bg-[#d7e8a7]",
      iconColor: "text-[#536b16]",
    },
    {
      title: "Design",
      description:
        "We turn that direction into a clear visual system that feels considered, distinctive, and easy to use.",
      icon: Palette,
      bg: "bg-[#e9e5f2]",
      iconBg: "bg-[#d8d0e9]",
      iconColor: "text-[#62547e]",
    },
    {
      title: "Development",
      description:
        "We bring the design to life with responsive, reliable experiences built for real-world use.",
      icon: Code2,
      bg: "bg-[#e5eceb]",
      iconBg: "bg-[#cededb]",
      iconColor: "text-[#45655d]",
    },
  ];

  return (
    <section
      id="about"
      className="
         bg-[#f7f8fa]
        px-5
        py-20
        text-[#111111]
        sm:px-8
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* INTRO */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#7c9825]
              "
            >
              How We Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="
              max-w-4xl
              text-[clamp(2.7rem,6vw,5.8rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.075em]
            "
          >
            Thoughtful from
            <br />

            <span className="text-[#8b8b86]">
              first idea to final build.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-[#555552]
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            We keep the process focused and collaborative. Every project
            starts with understanding the problem, then moves through
            strategy, design, and development with purpose.
          </motion.p>
        </motion.div>

        {/* SERVICES */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div
            className="
              grid
              gap-3
              sm:grid-cols-3
              sm:gap-4
            "
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group
                    relative
                    min-h-[225px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-black/[0.05]
                    p-5
                    sm:min-h-[235px]
                    sm:p-6
                    ${service.bg}
                  `}
                >
                  {/* Decorative circles */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      h-32
                      w-32
                      rounded-full
                      border
                      border-black/[0.055]
                      transition-transform
                      duration-700
                      group-hover:scale-125
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      -top-3
                      h-16
                      w-16
                      rounded-full
                      border
                      border-black/[0.045]
                    "
                  />

                  {/* Icon */}

                  <div
                    className={`
                      relative
                      grid
                      h-9
                      w-9
                      place-items-center
                      rounded-full
                      ${service.iconBg}
                      ${service.iconColor}
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    `}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}

                  <div className="relative mt-7">
                    <h3
                      className="
                        text-[1.25rem]
                        font-semibold
                        leading-tight
                        tracking-[-0.04em]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[290px]
                        text-[13px]
                        leading-[1.55]
                        text-black/50
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CLOSING */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            mt-12
            max-w-2xl
            sm:mt-14
            lg:mt-16
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-[#777774]
              sm:text-base
              sm:leading-7
            "
          >
            No unnecessary layers or complicated process. Just clear
            thinking, strong design, and technology used where it matters.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;