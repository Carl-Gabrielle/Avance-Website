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
      y: 20,
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
      background: "bg-[#eef4dc]",
      iconBackground: "bg-[#dcebb2]",
      iconColor: "text-[#708d1d]",
      accent: "bg-[#a8cf32]",
    },
    {
      title: "Design",
      description:
        "We turn that direction into a clear visual system that feels considered, distinctive, and easy to use.",
      icon: Palette,
      background: "bg-[#f0edf6]",
      iconBackground: "bg-[#e1daed]",
      iconColor: "text-[#74668d]",
      accent: "bg-[#b5a6cf]",
    },
    {
      title: "Development",
      description:
        "We bring the design to life with responsive, reliable experiences built for real-world use.",
      icon: Code2,
      background: "bg-[#eaf0ef]",
      iconBackground: "bg-[#d8e4e1]",
      iconColor: "text-[#54716a]",
      accent: "bg-[#8da9a1]",
    },
  ];

  return (
    <section
      id="about"
      className="
        bg-[#f7f8fa]
        px-5
        py-10
        text-[#111]
        sm:px-7
        sm:py-12
        md:px-10
        lg:px-10
        lg:py-14
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* INTRO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7f941f]">
                How we work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
            >
              Thoughtful from
              <br />
              <span className="text-[#969693]">
                first idea to final build.
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="max-w-md lg:justify-self-end">
            <div className="mb-3 h-px w-10 bg-[#a8cf32]" />
            <p className="text-[15px] leading-relaxed text-[#5f5f5c] sm:text-[15.5px]">
              We keep the process focused and collaborative. Every project
              starts with understanding the problem, then moves through
              strategy, design, and development with purpose.
            </p>
          </motion.div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`
                    group relative flex flex-col overflow-hidden rounded-2xl
                    border border-black/[0.04] p-6 sm:p-7
                    shadow-[0_2px_8px_rgba(0,0,0,0.03)]
                    transition-all duration-300
                    hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)]
                    ${service.background}
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-xl
                      ${service.iconBackground} ${service.iconColor}
                      transition-transform duration-300 group-hover:-translate-y-0.5
                    `}
                  >
                    <Icon size={17} strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[#111]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.55] text-black/50">
                      {service.description}
                    </p>
                  </div>

                  {/* Accent bar */}
                  <div
                    className={`
                      absolute bottom-0 left-0 h-[3px] w-0
                      ${service.accent}
                      transition-all duration-500 ease-out
                      group-hover:w-full
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CLOSING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-10 flex max-w-2xl items-start gap-3.5 sm:mt-12"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a8cf32]" />
          <p className="text-[13.5px] leading-relaxed text-[#858582] sm:text-[14px]">
            No unnecessary layers or complicated process. Just clear thinking,
            strong design, and technology used where it matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;