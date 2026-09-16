import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import thumbnail1 from "../assets/images/thumbnail1.png";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function Work() {
  const featured = projects[0];

  return (
    <section
      id="work"
      className="
        bg-[#f7f8fa]
        px-4
        py-10
        text-[#111111]
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-14
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-xl"
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-black/40
            "
          >
            Selected work
          </p>

          <h2
            className="
              mt-2.5
              text-[clamp(2.2rem,5vw,4rem)]
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]
            "
          >
            Digital work
            <span className="text-black/25"> made to matter.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-lg
              text-[13px]
              leading-[1.65]
              text-black/50
              sm:text-[14px]
            "
          >
            A selection of websites and digital experiences designed to be
            clear, useful, and built for real people.
          </p>
        </motion.div>

        {/* ================================================== */}
        {/* PROJECT CARDS */}
        {/* ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
          className="
            mt-7
            grid
            grid-cols-1
            gap-4
            sm:mt-8
            sm:gap-5
            lg:grid-cols-2
          "
        >

          {/* ================================================== */}
          {/* FEATURED PROJECT */}
          {/* ================================================== */}

          <motion.article
            variants={fadeUp}
            className="h-full"
          >
            <Link
              to={`/work/${featured.slug}`}
              aria-label={`View case study: ${featured.title}`}
              className="group block h-full"
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-[20px]
                  border
                  border-black/[0.07]
                  bg-[#eef0ed]
                  p-2
                  shadow-[0_8px_25px_rgba(0,0,0,0.035)]
                  transition-all
                  duration-500
                  group-hover:-translate-y-0.5
                  group-hover:shadow-[0_14px_35px_rgba(0,0,0,0.065)]
                  sm:p-2.5
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[15px]
                    aspect-[16/9.5]
                    sm:aspect-[16/9]
                  "
                >
                  <img
                    src={thumbnail1}
                    alt={featured.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.02]
                    "
                  />

                  {/* SUBTLE IMAGE OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-black/[0.02]
                      via-transparent
                      to-black/[0.12]
                    "
                  />

                  {/* FEATURED LABEL */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      sm:left-3.5
                      sm:top-3.5
                    "
                  >
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/20
                        bg-black/65
                        px-2.5
                        py-1.5
                        backdrop-blur-xl
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#c7f36b]
                          shadow-[0_0_7px_rgba(199,243,107,0.75)]
                        "
                      />

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.13em]
                          text-white
                        "
                      >
                        Featured Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* PROJECT INFO */}

                <div
                  className="
                    flex
                    flex-1
                    items-end
                    justify-between
                    gap-4
                    px-1
                    pb-1
                    pt-4
                    sm:px-1.5
                    sm:pt-4.5
                  "
                >

                  {/* PROJECT DETAILS */}

                  <div className="min-w-0">

                    

                    <h3
                      className="
                        text-[clamp(1.25rem,2.3vw,1.7rem)]
                        font-semibold
                        leading-[1.05]
                        tracking-[-0.04em]
                        text-[#111111]
                      "
                    >
                      {featured.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.13em]
                        text-black/35
                      "
                    >
                      {featured.type}
                    </p>

                  </div>

                  {/* VIEW CASE STUDY BUTTON */}

                  <span
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      gap-1.5
                      rounded-full
                      bg-[#c7f36b]
                      px-3
                      py-2
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#111111]
                      shadow-[0_5px_14px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      group-hover:bg-[#d7ff87]
                      group-hover:shadow-[0_7px_18px_rgba(0,0,0,0.12)]
                      md:gap-2
                      md:px-4
                      md:py-2.5
                      md:text-[9px]
                      lg:px-5
                      lg:py-3
                      lg:text-[9px]
                      xl:px-5.5
                      xl:py-3
                    "
                  >
                    <span>View case study</span>

                    <ArrowUpRight
                      size={12}
                      strokeWidth={2.2}
                      className="
                        transition-transform
                        duration-300
                        md:h-[14px]
                        md:w-[14px]
                        lg:h-[15px]
                        lg:w-[15px]
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </span>

                </div>
              </div>
            </Link>
          </motion.article>

          {/* ================================================== */}
          {/* CURRENTLY BUILDING */}
          {/* ================================================== */}

          <motion.article
            variants={fadeUp}
            className="h-full"
          >
            <div
              className="
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.07]
                bg-[#111111]
                p-2
                shadow-[0_8px_25px_rgba(0,0,0,0.055)]
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.1)]
                sm:p-2.5
              "
            >

              {/* SUBTLE LIME GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-[#c7f36b]/[0.08]
                  blur-[75px]
                "
              />

              {/* INNER CONTENT */}

              <div
                className="
                  relative
                  flex
                  min-h-full
                  flex-1
                  flex-col
                  rounded-[15px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                  sm:p-5
                  lg:p-6
                "
              >

                {/* TOP ROW */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  {/* STATUS */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#c7f36b]/20
                      bg-[#c7f36b]/[0.07]
                      px-2.5
                      py-1.5
                    "
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="
                          absolute
                          h-full
                          w-full
                          animate-ping
                          rounded-full
                          bg-[#c7f36b]/60
                        "
                      />

                      <span
                        className="
                          relative
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#c7f36b]
                        "
                      />
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.13em]
                        text-[#c7f36b]
                      "
                    >
                      In progress
                    </span>
                  </div>

                  <span
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                      text-white/25
                    "
                  >
                    2026
                  </span>

                </div>

                {/* MAIN CONTENT */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    justify-center
                    py-7
                    sm:py-8
                  "
                >

                  <p
                    className="
                      mb-2.5
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-white/30
                    "
                  >
                    Currently building
                  </p>

                  <h3
                    className="
                      max-w-xl
                      text-[clamp(1.7rem,3.8vw,2.8rem)]
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.055em]
                      text-white
                    "
                  >
                    Operations

                    <span className="block text-white/25">
                      Management System.
                    </span>
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-[11px]
                      leading-[1.7]
                      text-white/40
                      sm:text-[12px]
                    "
                  >
                    A web-based system being developed to streamline
                    day-to-day operations, workflows, requests, and
                    internal processes.
                  </p>

                  {/* TAGS */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-2.5
                        py-1.5
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/40
                      "
                    >
                      Web App
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-2.5
                        py-1.5
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/40
                      "
                    >
                      Operations
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-2.5
                        py-1.5
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/40
                      "
                    >
                      In Development
                    </span>
                  </div>

                </div>

                {/* BOTTOM STATUS */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.07]
                    pt-3.5
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <CircleDot
                      size={10}
                      strokeWidth={2}
                      className="text-[#c7f36b]"
                    />

                    <span
                      className="
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.13em]
                        text-white/30
                      "
                    >
                      Active development
                    </span>
                  </div>

                  <span
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                      text-white/20
                    "
                  >
                    Avance
                  </span>

                </div>

              </div>
            </div>
          </motion.article>

        </motion.div>
      </div>
    </section>
  );
}

export default Work;