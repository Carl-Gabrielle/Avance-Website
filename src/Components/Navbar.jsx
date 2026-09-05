import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Works",
    id: "work",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

const ease = [0.22, 1, 0.36, 1];

function Navbar({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  /*
   * Scroll whenever the route or hash changes.
   * This is what makes navigation work from Case Study -> Home sections.
   */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash.replace("#", "");

    const scroll = () => {
      if (!hash || hash === "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      const element = document.getElementById(hash);

      if (!element) return;

      const navbarOffset = 100;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      });
    };

    // Wait until the routed Home content is mounted.
    requestAnimationFrame(() => {
      requestAnimationFrame(scroll);
    });
  }, [location.pathname, location.hash]);

  const handleNavigate = (id) => {
    setMenuOpen(false);

    /*
     * Always navigate through React Router.
     *
     * From:
     * /work/project
     *
     * to:
     * /#about
     *
     * Then the effect above handles the actual scrolling.
     */
    navigate(id === "home" ? "/" : `/#${id}`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-3 pt-3 sm:px-6 sm:pt-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white/90 shadow-[0_8px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        >
          {/* Navbar top */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-5">
            {/* Logo */}
            <motion.button
              type="button"
              onClick={() => handleNavigate("home")}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease,
              }}
              className="cursor-pointer flex shrink-0 items-center gap-2.5"
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
                className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#d8ff63] text-sm font-black text-[#111111] shadow-sm"
              >
                A
              </motion.span>

              <span className="text-[16px] font-semibold tracking-[-0.05em] text-[#111111]">
                vance.
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <motion.nav
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
              className="hidden items-center gap-8 md:flex"
            >
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
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
                        ease,
                      },
                    },
                  }}
                 className="group relative cursor-pointer text-xs font-semibold text-[#666666] transition-colors duration-300 hover:text-[#111111]"
                >
                  {item.label}

                  <motion.span
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-px origin-left bg-[#a8cf32]"
                  />
                </motion.button>
              ))}
            </motion.nav>

            {/* Desktop CTA */}
            <motion.button
              type="button"
              onClick={() => handleNavigate("contact")}
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="hidden cursor-pointer shrink-0 items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:bg-[#d8ff63] hover:text-[#111111] md:inline-flex"
            >
              Start a project

              <motion.span
                whileHover={{
                  x: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                ↗
              </motion.span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{
                scale: 0.92,
              }}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-black/[0.08] bg-[#fafaf8] text-[#111111] shadow-sm md:hidden"
              aria-label={
                menuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <div className="relative h-5 w-5">
                {/* Top */}
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

                {/* Middle */}
                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full bg-[#111111]"
                />

                {/* Bottom */}
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

          {/* Mobile Navigation */}
          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                id="mobile-navigation"
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
                  ease,
                }}
                className="md:hidden"
              >
                <div className="border-t border-black/[0.07] px-4 py-4">
                  <nav className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavigate(item.id)}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.3,
                          ease,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="flex min-h-[48px] w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#444444] transition-colors duration-300 hover:bg-[#f5f5f1] hover:text-[#111111]"
                      >
                        <span>{item.label}</span>

                        <span className="text-black/25">
                          ↗
                        </span>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <motion.button
                    type="button"
                    onClick={() => handleNavigate("contact")}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: navigation.length * 0.06 + 0.05,
                      duration: 0.3,
                      ease,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-3.5 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#d8ff63] hover:text-[#111111]"
                  >
                    Start a project
                    <span>↗</span>
                  </motion.button>
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