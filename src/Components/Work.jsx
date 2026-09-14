import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import thumbnail1 from "../assets/images/thumbnail1.png";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function Work() {
  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <section
      id="work"
      className="
        bg-[#f7f8fa]
        px-5
        py-12
        text-[#111111]
        sm:px-8
        sm:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-2xl"
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
              mt-4
              max-w-2xl
              text-[clamp(2.25rem,5.5vw,4.25rem)]
              font-semibold
              leading-[0.94]
              tracking-[-0.055em]
            "
          >
            Digital work
            <span className="text-black/30"> made to matter.</span>
          </h2>

          <p
            className="
              mt-4
              max-w-md
              text-[13px]
              leading-relaxed
              text-black/50
              sm:text-[14px]
            "
          >
            A selection of websites and digital experiences designed to be
            clear, useful, and built for real people.
          </p>
        </motion.div>

        {/* ================================================== */}
        {/* FEATURED PROJECT */}
        {/* ================================================== */}

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-8 sm:mt-10 lg:mt-11"
        >
          <Link
            to={`/work/${featured.slug}`}
            className="group block"
            aria-label={`View case study: ${featured.title}`}
          >
            {/* FEATURED AREA */}

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.07]
                bg-[#eceeea]
                p-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                group-hover:-translate-y-0.5
                group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]
                sm:p-4
                lg:p-5
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-[12px]
                  sm:aspect-[16/8]
                  md:aspect-[16/7.3]
                  lg:aspect-[16/6.5]
                  xl:aspect-[16/6.2]
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
                    group-hover:scale-[1.025]
                  "
                />

                {/* Subtle image treatment */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.05]
                    via-transparent
                    to-black/[0.12]
                  "
                />

                {/* FEATURED BADGE */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    z-20
                    sm:left-5
                    sm:top-5
                    lg:left-6
                    lg:top-6
                  "
                >
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-[#111111]/70
                      px-3
                      py-1.5
                      shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                      backdrop-blur-xl
                      sm:px-3.5
                      sm:py-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#c7f36b]
                        shadow-[0_0_7px_rgba(199,243,107,0.8)]
                      "
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white
                        sm:text-[9px]
                      "
                    >
                      Featured project
                    </span>
                  </div>
                </div>

                {/* GLASS PROJECT PANEL */}

                <div
                  className="
                    absolute
                    inset-x-3
                    bottom-3
                    z-10
                    sm:inset-x-5
                    sm:bottom-5
                    lg:inset-x-6
                    lg:bottom-6
                  "
                >
                  <div
                    className="
                      rounded-[15px]
                      border
                      border-white/20
                      bg-[#111111]/55
                      px-3
                      py-3
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      backdrop-blur-xl
                      sm:px-4
                      sm:py-3.5
                      lg:px-4.5
                      lg:py-4
                    "
                  >
                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:gap-5
                      "
                    >
                      {/* Project Information */}

                      <div className="min-w-0">
                        <p
                          className="
                            mb-1
                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-white/55
                            sm:text-[9px]
                          "
                        >
                          Featured project
                        </p>

                        <h3
                          className="
                            max-w-2xl
                            text-[clamp(1.2rem,3vw,2rem)]
                            font-semibold
                            leading-[1.04]
                            tracking-[-0.04em]
                            text-white
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
                            text-white/50
                            sm:text-[9px]
                          "
                        >
                          {featured.type}
                        </p>
                      </div>

                      {/* CTA */}

                      <div
                        className="
                          flex
                          w-fit
                          shrink-0
                          items-center
                          gap-2
                          rounded-full
                          bg-[#c7f36b]
                          px-3
                          py-2
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.07em]
                          text-[#111111]
                          shadow-[0_6px_18px_rgba(0,0,0,0.14)]
                          transition-all
                          duration-300
                          group-hover:bg-[#d4ff82]
                          group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                          sm:px-3.5
                          sm:py-2
                        "
                      >
                        <span>View case study</span>

                        <span
                          className="
                            flex
                            h-5.5
                            w-5.5
                            items-center
                            justify-center
                            rounded-full
                            bg-[#111111]
                            text-[#c7f36b]
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        >
                          <ArrowUpRight size={11} strokeWidth={2.2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* ================================================== */}
        {/* OTHER PROJECTS */}
        {/* ================================================== */}

        {secondary.length > 0 && (
          <div className="mt-10 sm:mt-12 lg:mt-14">
            <div
              className="
                mb-4
                flex
                items-center
                justify-between
                border-b
                border-black/[0.08]
                pb-3
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-black/40
                "
              >
                More work
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.11em]
                  text-black/30
                "
              >
                {secondary.length} project
                {secondary.length !== 1 ? "s" : ""}
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="divide-y divide-black/[0.07]"
            >
              {secondary.map((project) => (
                <motion.div key={project.slug} variants={fadeUp}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="
                      group
                      flex
                      min-h-[72px]
                      items-center
                      justify-between
                      gap-5
                      py-4
                      transition-all
                      duration-300
                      hover:bg-black/[0.015]
                      sm:hover:px-2.5
                    "
                  >
                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          truncate
                          text-[15px]
                          font-medium
                          tracking-[-0.025em]
                          transition-colors
                          duration-300
                          group-hover:text-black/55
                          sm:text-[16px]
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          uppercase
                          tracking-[0.13em]
                          text-black/35
                        "
                      >
                        {project.type}
                      </p>
                    </div>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/[0.1]
                        text-black/40
                        transition-all
                        duration-300
                        group-hover:border-[#c7f36b]
                        group-hover:bg-[#c7f36b]
                        group-hover:text-[#111111]
                        group-hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]
                      "
                    >
                      <ArrowUpRight size={15} strokeWidth={1.8} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Work;
