import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section
      id="contact"
      className=" px-5 pb-20 pt-8 text-[#111111] sm:px-8 sm:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#d8ff63] sm:rounded-[32px]"
      >
        {/* Subtle grid */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.13]
            [background-image:linear-gradient(rgba(17,17,17,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.08)_1px,transparent_1px)]
            [background-size:56px_56px]
          "
        />

        {/* Soft highlight */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-white/30
            blur-3xl
          "
        />

        {/* Simple graphic */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-80px]
            top-[-80px]
            hidden
            h-[360px]
            w-[360px]
            rounded-full
            border-[1px]
            border-black/[0.08]
            lg:block
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[210px]
              w-[210px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-black/[0.07]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-black/70
            "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 grid gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_360px] lg:gap-20 lg:px-16 lg:py-20">
          
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#111111]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/55">
                Have something in mind?
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-4xl
                text-balance
                text-[clamp(3.2rem,7vw,6.8rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.075em]
                text-[#111111]
              "
            >
              Let&apos;s make
              <span className="block">it happen.</span>
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end lg:pb-1"
          >
            <p className="max-w-sm text-[15px] font-medium leading-7 text-black/60 sm:text-base">
              Tell us what you&apos;re building, what you need, and where
              you want to take it. We&apos;ll help turn the idea into a
              digital experience that works.
            </p>

            {/* Button */}
            <motion.a
              href="mailto:avancewebdesign@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                group
                mt-8
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#111111]
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                transition-shadow
                duration-300
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]
              "
            >
              <span>Start a project</span>

              <span
                className="
                  grid
                  h-6
                  w-6
                  place-items-center
                  rounded-full
                  bg-white/10
                  transition-colors
                  duration-200
                  group-hover:bg-white/20
                "
              >
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </motion.a>

           
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;