import { AnimatePresence, motion } from "motion/react";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Process",
    href: "#process",
  },
];

const navContainer = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const navItem = {
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
};

function Navbar({ menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5">

        {/* Navbar container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl border border-black/[0.07] bg-white/85 shadow-[0_8px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        >
          {/* Main navbar */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-5">

            {/* --------------------------------
                Logo
            -------------------------------- */}
            <motion.a
              href="#home"
              onClick={onNavigate}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center gap-2.5"
            >
              <motion.span
                whileHover={{
                  rotate: 6,
                  scale: 1.06,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="grid h-8 w-8 place-items-center rounded-[9px] bg-[#d8ff63] text-sm font-black text-[#111111] shadow-sm"
              >
                A
              </motion.span>

              <span className="text-[16px] font-semibold tracking-[-0.05em] text-[#111111]">
                vance.
              </span>
            </motion.a>

            {/* --------------------------------
                Desktop navigation
            -------------------------------- */}
            <motion.nav
              variants={navContainer}
              initial="hidden"
              animate="visible"
              className="hidden items-center gap-8 md:flex"
            >
              {navigation.map((item) => (
                <motion.a
                  key={item.href}
                  variants={navItem}
                  href={item.href}
                  className="group relative text-xs font-semibold text-[#666666] transition-colors duration-300 hover:text-[#111111]"
                >
                  {item.label}

                  {/* Animated underline */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-px origin-left bg-[#a8cf32]"
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* --------------------------------
                Desktop CTA
            -------------------------------- */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group hidden items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:bg-[#d8ff63] hover:text-[#111111] md:inline-flex"
            >
              Start a project

              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                ↗
              </motion.span>
            </motion.a>

            {/* --------------------------------
                Mobile menu button
            -------------------------------- */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.92 }}
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/[0.08] bg-[#fafaf8] text-[#111111] shadow-sm md:hidden"
              aria-label={
                menuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={menuOpen}
            >
              <div className="relative h-5 w-5">

                {/* Top line */}
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 7 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute left-0 top-1 block h-[1.5px] w-5 rounded-full bg-[#111111]"
                />

                {/* Middle line */}
                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full bg-[#111111]"
                />

                {/* Bottom line */}
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -7 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute left-0 top-[17px] block h-[1.5px] w-5 rounded-full bg-[#111111]"
                />
              </div>
            </motion.button>
          </div>

          {/* --------------------------------
              Mobile navigation
          -------------------------------- */}
          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden md:hidden"
              >
                <div className="border-t border-black/[0.07] px-4 py-4">

                  {/* Mobile links */}
                  <motion.nav
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
                    className="space-y-1"
                  >
                    {navigation.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={onNavigate}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: -10,
                          },
                          visible: {
                            opacity: 1,
                            x: 0,
                          },
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[#444444] transition-colors duration-300 hover:bg-[#f5f5f1] hover:text-[#111111]"
                      >
                        {item.label}

                        <span className="text-black/20">
                          ↗
                        </span>
                      </motion.a>
                    ))}
                  </motion.nav>

                  {/* Mobile CTA */}
                  <motion.a
                    href="#contact"
                    onClick={onNavigate}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-3.5 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#d8ff63] hover:text-[#111111]"
                  >
                    Start a project
                    <span>↗</span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;