import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#fafaf8] px-5 pb-20 pt-6 text-[#111111] sm:px-8 sm:pb-28 sm:pt-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#d8ff63] px-6 py-12 sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        {/* Subtle grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />

        {/* Ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/30 blur-3xl"
        />

        {/* Decorative circle */}
        <motion.div
          animate={{
            rotate: [0, 4, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 -top-24 hidden h-80 w-80 rounded-full border-[24px] border-[#090b08]/[0.06] lg:block"
        />

        {/* Decorative circle */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-48 right-[18%] hidden h-96 w-96 rounded-full border-[30px] border-[#090b08]/[0.045] lg:block"
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[#090b08]/10 bg-white/20 px-3.5 py-2 backdrop-blur-sm"
          >
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#090b08]"
            />

            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#090b08]/60">
              Have something in mind?
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-3xl text-balance text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#090b08]"
          >
            Let&apos;s make it matter.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-[15px] font-medium leading-7 text-[#090b08]/60 sm:mt-7 sm:text-base"
          >
            Tell us what you&apos;re building, where you want to go,
            and what you need to get there. We&apos;ll take it from
            there.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 sm:mt-9"
          >
            <motion.a
              href="mailto:avancewebdesign@gmail.com"
              whileHover={{
                y: -4,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-bold !text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-6"
            >
              <span className="!text-white">
                avancewebdesign@gmail.com
              </span>

              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mt-14 flex flex-col gap-3 border-t border-[#090b08]/10 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#090b08]/40">
            Independent digital studio
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#090b08]/40">
            Let&apos;s build what&apos;s next.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTA;