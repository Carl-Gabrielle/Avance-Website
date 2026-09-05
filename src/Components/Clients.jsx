import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Web Design",
    description: "Clean, purposeful interfaces built around your brand.",
  },
  {
    number: "02",
    title: "Development",
    description: "Modern websites built to be fast, responsive, and reliable.",
  },
  {
    number: "03",
    title: "UI / UX",
    description: "Simple experiences that feel natural to use.",
  },
  {
    number: "04",
    title: "Responsive",
    description: "Thoughtful layouts that work across every screen.",
  },
];

function Clients() {
  return (
    <section
      className="
        bg-[#fafaf8]
        px-5
        py-12
        text-[#111111]
        sm:px-8
        sm:py-16
        lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-black/[0.07]
            bg-[#f5f5f2]
          "
        >
          {/* Header */}
          <div
            className="
              flex
              flex-col
              gap-3
              border-b
              border-black/[0.07]
              px-6
              py-6
              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:px-8
              sm:py-7
            "
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
                What we do
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                Simple work, thoughtfully built.
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-5 text-black/40">
              From the first idea to the final detail, we focus on creating
              websites that are clear, useful, and easy to experience.
            </p>
          </div>

          {/* Capabilities */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  min-h-[150px]
                  border-b
                  border-black/[0.07]
                  px-6
                  py-6
                  transition-colors
                  duration-300
                  hover:bg-white
                  sm:px-7
                  sm:py-7
                  lg:border-b-0
                  lg:border-r
                  last:lg:border-r-0
                "
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-medium tracking-[0.15em] text-black/25">
                    {item.number}
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-black/10
                      transition-all
                      duration-300
                      group-hover:bg-[#a8cf32]
                      group-hover:shadow-[0_0_0_4px_rgba(168,207,50,0.12)]
                    "
                  />
                </div>

                <div className="mt-10">
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      tracking-[-0.035em]
                      text-black/75
                      transition-colors
                      duration-300
                      group-hover:text-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[220px] text-[11px] leading-5 text-black/40">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;