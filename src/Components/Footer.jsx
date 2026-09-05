import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Design",
  "Web Development",
  "Responsive Design",
  "UI / UX",
];

const socialLinks = [
  {
    label: "LinkedIn",
    symbol: "in",
    href: "#",
  },
  {
    label: "Instagram",
    symbol: "◎",
    href: "#",
  },
  {
    label: "X",
    symbol: "𝕏",
    href: "#",
  },
];

const footerContainer = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-black/[0.07]  px-5 pb-5 pt-12 text-[#111111] sm:px-8 sm:pt-14">
      <motion.div
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto max-w-7xl"
      >
        {/* ==================================================
            MAIN FOOTER
        ================================================== */}

        <div className="grid gap-10 pb-12 sm:pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* ==================================================
              BRAND
          ================================================== */}

          <motion.div variants={itemVariants} className="max-w-sm">
            <motion.a
              href="#home"
              whileHover="hover"
              initial="initial"
              className="group inline-flex items-center gap-2"
            >
              {/* Logo */}
              <motion.span
                variants={{
                  initial: {
                    rotate: 0,
                    scale: 1,
                  },
                  hover: {
                    rotate: -5,
                    scale: 1.06,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#d8ff63] text-sm font-black text-[#111111] shadow-sm"
              >
                A
              </motion.span>

              {/* Brand */}
              <span className="text-xl font-semibold tracking-[-0.055em]">
                vance.
              </span>
            </motion.a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#777777]">
              Digital experiences designed and built for brands ready for
              what&apos;s next.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9dcc28] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9dcc28]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#777777]">
                Available for projects
              </span>
            </div>
          </motion.div>

          {/* ==================================================
              EXPLORE
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#999999]">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#555555] transition-colors duration-200 hover:text-[#111111]"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
                    strokeWidth={2}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#999999]">
              Services
            </h3>

            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-sm font-medium text-[#555555]"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#999999]">
              Get in touch
            </h3>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:avancewebdesign@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/[0.07] bg-white transition-all duration-200 group-hover:border-[#d8ff63] group-hover:bg-[#d8ff63]">
                  <Mail size={14} strokeWidth={1.8} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-[#999999]">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-nowrap text-sm font-medium text-[#444444] transition-colors group-hover:text-[#111111]">
                    projects.avance@gmail.com
                  </span>
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/[0.07] bg-white">
                  <MapPin size={14} strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-[#999999]">
                    Based in
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[#444444]">
                   Pangasinan, Philippines
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="border-t border-black/[0.07] py-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-1"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#999999]">
                © {new Date().getFullYear()} Avance
              </span>

              <span className="text-[9px] font-medium text-[#b0b0b0]">
                Designed & built with intention.
              </span>
            </motion.div>

            {/* Social + Back to top */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="grid h-9 w-9 place-items-center rounded-full border border-black/[0.07] bg-white text-[#777777] transition-all duration-200 hover:border-[#d8ff63] hover:bg-[#d8ff63] hover:text-[#111111]"
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

              {/* Divider */}
              <span className="mx-1 h-5 w-px bg-black/[0.08]" />

              {/* Back to top */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label="Back to top"
                className="group grid h-9 w-9 place-items-center rounded-full border border-black/[0.07] bg-white text-[#777777] transition-all duration-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
              >
                <ArrowUp
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;