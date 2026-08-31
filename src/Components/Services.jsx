import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Brand",
    description:
      "Positioning, visual identity, and brand systems that make your business recognizable.",
    tags: ["Strategy", "Identity", "Art direction"],
  },
  {
    number: "02",
    title: "Digital",
    description:
      "Websites and digital experiences designed around clarity, conversion, and real people.",
    tags: ["UX/UI", "Web design", "Development"],
  },
  {
    number: "03",
    title: "Product",
    description:
      "Digital products that balance business goals with intuitive, considered experiences.",
    tags: ["Product strategy", "Prototyping", "Systems"],
  },
];

/* ==================================================
   ANIMATION VARIANTS
================================================== */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerVariants = {
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

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const numberVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tagVariants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ==================================================
   SERVICES
================================================== */

function Services() {
  return (
    <section
      id="services"
      className="bg-[#fafaf8] px-5 py-24 text-[#111111] sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants}>
            <SectionLabel>Capabilities</SectionLabel>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="mt-6 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-5xl"
          >
            Everything you need to make the next move.
          </motion.h2>
        </motion.div>

        {/* ==================================================
            SERVICES
        ================================================== */}

        <motion.div
          className="mt-12 divide-y divide-black/[0.08] border-y border-black/[0.08]"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={rowVariants}
              className="group relative grid gap-5 py-7 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[55px_0.8fr_1.2fr_40px] sm:items-center sm:gap-8"
            >
              {/* ==================================================
                  NUMBER
              ================================================== */}

              <motion.span
                variants={numberVariants}
                className="text-[11px] font-bold tracking-[0.08em] text-[#8aaa2c]"
              >
                {service.number}
              </motion.span>

              {/* ==================================================
                  TITLE
              ================================================== */}

              <motion.h3
                variants={contentVariants}
                className="text-2xl font-semibold tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-[#8aaa2c] sm:text-3xl"
              >
                {service.title}
              </motion.h3>

              {/* ==================================================
                  DESCRIPTION + TAGS
              ================================================== */}

              <motion.div variants={contentVariants}>
                <p className="max-w-xl text-[13px] font-medium leading-6 text-[#666666] sm:text-sm">
                  {service.description}
                </p>

                {/* Tags */}

                <motion.div
                  className="mt-4 flex flex-wrap gap-1.5"
                  variants={containerVariants}
                >
                  {service.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.04em] text-[#666666] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:border-black/[0.13] group-hover:text-[#444444]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* ==================================================
                  ARROW
              ================================================== */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 22,
                }}
                className="hidden h-9 w-9 translate-x-2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-sm text-[#111111] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex"
              >
                ↗
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
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

export default Services;