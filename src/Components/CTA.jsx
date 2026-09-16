import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";
import {
  InlineWidget,
  PopupButton,
} from "react-calendly";

const calendlyUrl = "https://calendly.com/projects-avance/30min";

function CTA() {
  return (
    <section
      id="contact"
      className="relative px-4 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[24px]
          border border-black/[0.08]
          bg-[#d8ff63]
          sm:rounded-[28px]
        "
      >
        {/* Grid */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.055]
            [background-image:linear-gradient(rgba(17,17,17,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        {/* Glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-[220px] w-[220px] rounded-full bg-white/25 blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:items-center">
          {/* =====================================================
              LEFT — CTA CONTENT
          ===================================================== */}
          <div
            className="
              flex flex-col justify-center
              px-6 py-8
              sm:px-9 sm:py-10
              lg:px-10 lg:py-12
              xl:px-12
            "
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/50 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#111]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 sm:text-[11px]">
                Let’s talk
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[11ch]
                text-balance
                text-[clamp(2.75rem,5.6vw,5rem)]
                font-bold
                leading-[0.86]
                tracking-[-0.07em]
                text-[#111]
              "
            >
              Ready to
              <span className="block">make it real?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.08,
              }}
              className="
                mt-5
                max-w-[440px]
                text-[15px]
                font-medium
                leading-[1.65]
                tracking-[-0.01em]
                text-black/60
                sm:text-[16px]
                sm:leading-7
              "
            >
              Got a website, product, or system idea? Book a free 30-min call —
              we’ll map the next steps together.
            </motion.p>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.12,
              }}
              className="
                mt-6
                flex flex-col items-start gap-3
                sm:flex-row sm:items-center sm:gap-4
              "
            >
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-black/10
                  bg-white/55
                  px-4 py-2
                  backdrop-blur-md
                "
              >
                <Clock3
                  size={13}
                  strokeWidth={2.2}
                  className="text-black/70"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/60 sm:text-[11px]">
                  30 min · Google Meet
                </span>
              </div>

              <a
                href="mailto:projects.avance@gmail.com"
                className="
                  group inline-flex items-center gap-1.5
                  text-[13px]
                  font-semibold
                  tracking-[-0.01em]
                  text-black/50
                  transition-colors
                  hover:text-black
                  sm:text-[14px]
                "
              >
                projects.avance@gmail.com

                <ArrowUpRight
                  size={13}
                  className="
                    transition-transform duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>

            {/* Trust */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.18,
              }}
              className="
                mt-5
                flex items-center gap-1.5
                text-[11px]
                font-medium
                text-black/35
                sm:text-[12px]
              "
            >
              <Sparkles size={11} className="shrink-0" />
              No pressure — just a focused conversation.
            </motion.p>
          </div>

          {/* =====================================================
              RIGHT — BOOKING
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              px-4 pb-4
              sm:px-6 sm:pb-6
              lg:px-4 lg:py-7 lg:pr-6
            "
          >
            <div
              className="
                relative overflow-hidden
                rounded-[20px]
                border border-black/[0.08]
                bg-white
                shadow-[0_20px_50px_-18px_rgba(0,0,0,0.20)]
                sm:rounded-[24px]
              "
            >
              {/* =================================================
                  HEADER
              ================================================= */}
              <div
                className="
                  flex items-center justify-between
                  border-b border-black/[0.06]
                  px-4 py-3.5
                  sm:px-5 sm:py-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      grid h-8 w-8 shrink-0 place-items-center
                      rounded-[10px]
                      bg-[#111]
                      text-white
                    "
                  >
                    <CalendarDays
                      size={14}
                      strokeWidth={2.2}
                    />
                  </div>

                  <div>
                    <p className="text-[14px] font-bold tracking-[-0.025em] text-[#111]">
                      Book a call
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium text-black/40">
                      Choose a time that works for you
                    </p>
                  </div>
                </div>

                <span
                  className="
                    rounded-full
                    bg-[#d8ff63]
                    px-2.5 py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-black/60
                  "
                >
                  Free
                </span>
              </div>

              {/* =================================================
                  MOBILE BOOKING CARD
              ================================================= */}
              <div className="block p-4 sm:p-5 lg:hidden">
                <div
                  className="
                    relative overflow-hidden
                    rounded-[16px]
                    border border-black/[0.06]
                    bg-[#fafaf8]
                    p-5
                    sm:p-6
                  "
                >
                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#d8ff63]/50 blur-2xl" />

                  <div className="relative">
                    <div
                      className="
                        mb-4
                        grid h-11 w-11
                        place-items-center
                        rounded-[13px]
                        bg-[#111]
                        text-white
                      "
                    >
                      <CalendarDays size={18} />
                    </div>

                    <h3
                      className="
                        text-[20px]
                        font-bold
                        tracking-[-0.04em]
                        text-[#111]
                      "
                    >
                      Find a time to talk
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[280px]
                        text-[13px]
                        font-medium
                        leading-5
                        text-black/45
                      "
                    >
                      Pick a time that works for you. The call takes about
                      30 minutes.
                    </p>

                    {/* Mobile button */}
                    <PopupButton
                      url={calendlyUrl}
                      rootElement={document.getElementById("root")}
                      text="Choose a time"
                      className="
                        mt-5
                        !flex
                        !h-12
                        !w-full
                        !items-center
                        !justify-center
                        !rounded-[12px]
                        !border-0
                        !bg-[#111]
                        !px-5
                        !text-[12px]
                        !font-bold
                        !uppercase
                        !tracking-[0.08em]
                        !text-white
                        !transition-all
                        hover:!bg-black
                        hover:!shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]
                        active:!scale-[0.99]
                      "
                    />

                    <div className="mt-4 flex items-center justify-center gap-1.5">
                      <Clock3
                        size={11}
                        className="text-black/30"
                      />

                      <span className="text-[10px] font-medium text-black/30">
                        30 min · Google Meet · Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DESKTOP / TABLET CALENDLY
              ================================================= */}
              <div
                id="booking"
                className="hidden w-full min-w-0 bg-white lg:block"
              >
                <div
                  className="
                    h-[430px]
                    w-full
                    overflow-hidden

                    xl:h-[450px]

                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-black/10
                  "
                >
                  <InlineWidget
                    url={`${calendlyUrl}?hide_event_type_details=1`}
                    styles={{
                      width: "100%",
                      height: "100%",
                    }}
                    pageSettings={{
                      backgroundColor: "ffffff",
                      primaryColor: "111111",
                      textColor: "111111",
                      hideEventTypeDetails: true,
                      hideLandingPageDetails: true,
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  FOOTER
              ================================================= */}
              <div
                className="
                  flex flex-col gap-2
                  border-t border-black/[0.06]
                  px-4 py-3
                  sm:flex-row sm:items-center sm:justify-between
                  sm:px-5
                "
              >
                <span className="text-[9.5px] font-medium text-black/30">
                  Philippine Time (PHT)
                </span>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-1
                    text-[9.5px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black/40
                    transition-colors
                    hover:text-black
                  "
                >
                  Open calendar

                  <ArrowUpRight
                    size={11}
                    className="
                      transition-transform duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;