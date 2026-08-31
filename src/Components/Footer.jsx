import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    symbol: "in",
  },
  {
    label: "Instagram",
    symbol: "◎",
  },
  {
    label: "X",
    symbol: "𝕏",
  },
];

const footerContainer = {
  hidden: {
    opacity: 0,
    y: 20,
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

const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-[#fafaf8] px-5 py-8 text-[#111111] sm:px-8 sm:py-10">
      <motion.div
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
      >
        {/* ==================================================
            BRAND
        ================================================== */}

        <div>
          <motion.a
            href="#home"
            whileHover="hover"
            initial="initial"
            className="group inline-flex items-center gap-2"
          >
            {/* Logo mark */}
            <motion.span
              variants={{
                initial: {
                  rotate: 0,
                  scale: 1,
                },
                hover: {
                  rotate: -4,
                  scale: 1.06,
                },
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="grid h-8 w-8 place-items-center rounded-[9px] bg-[#d8ff63] text-sm font-black text-[#111111] shadow-sm"
            >
              A
            </motion.span>

            {/* Brand */}
            <span className="text-lg font-semibold tracking-[-0.05em] text-[#111111]">
              vance.
            </span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 text-xs font-medium text-[#888888]"
          >
            Digital experiences for what&apos;s next.
          </motion.p>
        </div>

        {/* ==================================================
            SOCIAL + COPYRIGHT
        ================================================== */}

        <div className="flex flex-wrap items-center gap-3">
          <motion.div
            variants={socialContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                variants={socialItem}
                href="#contact"
                aria-label={social.label}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="group grid h-9 w-9 place-items-center rounded-full border border-black/[0.09] bg-white text-[#777777] shadow-sm transition-colors duration-300 hover:border-[#d8ff63] hover:bg-[#d8ff63] hover:text-[#111111] hover:shadow-md"
              >
                <span
                  className={
                    social.label === "LinkedIn"
                      ? "text-[10px] font-black"
                      : "text-sm font-medium"
                  }
                >
                  {social.symbol}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.span
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.45,
            }}
            className="ml-1 hidden h-5 w-px origin-center bg-black/[0.08] sm:block"
          />

          {/* Copyright */}
          <motion.span
            initial={{
              opacity: 0,
              x: 8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[10px] font-semibold tracking-[0.02em] text-[#999999]"
          >
            © {new Date().getFullYear()} Avance
          </motion.span>
        </div>
      </motion.div>

      {/* ==================================================
          MOBILE BOTTOM LINE
      ================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-8 h-px max-w-7xl origin-left bg-gradient-to-r from-[#d8ff63] via-black/[0.06] to-transparent sm:hidden"
      />
    </footer>
  );
}

export default Footer;