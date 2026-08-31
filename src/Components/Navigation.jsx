import { motion } from "framer-motion";

function Navigation({
  items,
  className = "",
  mobile = false,
  onNavigate,
}) {
  if (mobile) {
    return (
      <nav className={className} aria-label="Main navigation">
        <motion.ul
          className="space-y-1 px-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {items.map((item) => (
            <motion.li
              key={item.href}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <a
                href={item.href}
                onClick={onNavigate}
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[#444444] transition-colors duration-300 hover:bg-[#f5f5f1] hover:text-[#111111]"
              >
                <span>{item.label}</span>

                <motion.span
                  className="text-black/20"
                  initial={{ x: 0, opacity: 0.4 }}
                  whileHover={{
                    x: 4,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                >
                  ↗
                </motion.span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile CTA */}
        <motion.a
          href="#contact"
          onClick={onNavigate}
          className="mx-1 mt-4 flex items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-3.5 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#d8ff63] hover:text-[#111111]"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: items.length * 0.06 + 0.1,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          Start a project

          <motion.span
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.span>
        </motion.a>
      </nav>
    );
  }

  return (
    <nav className={className} aria-label="Main navigation">
      <motion.ul
        className="flex items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.li
            key={item.href}
            variants={{
              hidden: {
                opacity: 0,
                y: -6,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <a
              href={item.href}
              className="group relative block text-xs font-semibold text-[#666666] transition-colors duration-300 hover:text-[#111111]"
            >
              {item.label}

              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-px w-full origin-left bg-[#a8cf32]"
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileHover={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default Navigation;