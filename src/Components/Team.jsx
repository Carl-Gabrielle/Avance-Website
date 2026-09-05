import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";

const founders = [
  {
    id: "cristopher",
    name: "Cristopher James E. Pioquinto",
    role: "Owner / Founder",
    quote:
      "Good work starts with understanding what the project actually needs.",
    bio:
      "Experienced in data security, information management, and network infrastructure troubleshooting, with more than 8 years of hands-on knowledge in the field. His work focuses on using technology, enterprise solutions, and process automation to develop practical and scalable solutions for complex IT challenges. He is committed to continuous learning and helping organizations use technology to improve efficiency, security, and growth.",
    education: "Computer Engineering · University of Pangasinan – PHINMA",
    based: "Pangasinan, Philippines",
    focus: "IT · Security · Infrastructure",
    image: "/team/cofounder.jpg",
  },
  {
    id: "carl",
    name: "Carl Gabrielle N. Orfinada",
    role: "Owner / Founder / Developer",
    quote:
      "I focus on creating simple, practical, and thoughtful digital experiences.",
    bio:
      "An Information Technology graduate with a focus on web development and modern web technologies. Enjoys working across design and development to create simple, responsive websites.",
    education: "BS Information Technology · Pangasinan State University",
    based: "Pangasinan, Philippines",
    focus: "Web · UI/UX · Development",
    image: profileImage,
  },
];

function Team() {
  return (
    <section
      id="team"
      className="
        relative
        overflow-hidden
        px-5
        py-16
        text-[#16170f]
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#d8ff63]/10
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#cbd5b1]/15
          blur-[110px]
        "
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* =================================
            HEADER
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[680px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9fbe3c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
              A little about us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-[clamp(2.8rem,6vw,5rem)]
              font-semibold
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            The people
            <br />
            <span className="text-[#70833e]">behind the work.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[610px]
              text-[14px]
              leading-6
              text-black/45
              sm:text-[15px]
              sm:leading-7
            "
          >
            Avance is a small, independent studio built around thoughtful
            design and practical development. We keep things simple, work
            closely with our clients, and take the time to understand what
            each project needs.
          </p>
        </motion.div>

        {/* =================================
            TEAM MEMBERS
        ================================= */}
        <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-28 lg:mt-24 lg:space-y-32">
          {founders.map((founder, index) => {
            const reversed = index % 2 === 1;

            return (
              <div
                key={founder.id}
                className={`
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-[300px_minmax(0,1fr)]
                  lg:gap-16
                  xl:grid-cols-[320px_minmax(0,1fr)]
                  xl:gap-20
                  ${reversed ? "lg:[direction:rtl]" : ""}
                `}
              >
                {/* =================================
                    PHOTO
                ================================= */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: reversed ? 18 : -18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    mx-auto
                    w-full
                    max-w-[300px]
                    lg:mx-0
                    xl:max-w-[320px]
                  "
                >
                  <div className="relative">
                    {/* Offset panel */}
                    <div
                      aria-hidden="true"
                      className={`
                        absolute
                        inset-0
                        rounded-[20px]
                        bg-[#e3e9d1]
                        ${
                          reversed
                            ? "translate-x-3 translate-y-3"
                            : "-translate-x-3 translate-y-3"
                        }
                      `}
                    />

                    {/* Lime detail */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -right-2.5
                        -top-2.5
                        z-10
                        h-5
                        w-5
                        rounded-full
                        border
                        border-[#9fbe3c]/30
                        bg-[#d8ff63]/80
                      "
                    />

                    {/* Image */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[20px]
                        bg-[#e9ebe3]
                      "
                    >
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="
                          aspect-[4/5]
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          hover:scale-[1.025]
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/[0.07]
                          to-transparent
                        "
                      />
                    </div>

                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    min-w-0
                    lg:[direction:ltr]
                    ${reversed ? "lg:pr-2" : "lg:pl-2"}
                  `}
                >
                  {/* Quote */}
                  <div className="relative max-w-[650px]">
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -left-5
                        -top-4
                        text-4xl
                        leading-none
                        text-[#a8bf62]/35
                      "
                    >
                      “
                    </span>

                    <blockquote
                      className="
                        text-[17px]
                        leading-7
                        tracking-[-0.01em]
                        text-black/65
                        sm:text-[20px]
                        sm:leading-8
                      "
                    >
                      {founder.quote}
                    </blockquote>
                  </div>

                  {/* Name + Role */}
                  <div className="mt-6">
                    <h3
                      className="
                        text-[25px]
                        font-semibold
                        leading-tight
                        tracking-[-0.045em]
                        sm:text-[28px]
                      "
                    >
                      {founder.name}
                    </h3>

                    <p className="mt-1.5 text-[13px] font-medium text-[#70833e]">
                      {founder.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p
                    className="
                      mt-4
                      max-w-[650px]
                      text-[14px]
                      leading-6
                      text-black/48
                    "
                  >
                    {founder.bio}
                  </p>

                  {/* =================================
                      DETAILS
                  ================================= */}
                  <div
                    className="
                      mt-6
                      w-full
                      max-w-[760px]
                      overflow-hidden
                      rounded-[16px]
                      border
                      border-black/[0.055]
                      bg-white/50
                      shadow-[0_8px_30px_rgba(40,50,20,0.025)]
                      backdrop-blur-md
                    "
                  >
                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-[minmax(0,2fr)_minmax(170px,0.9fr)_minmax(210px,1.15fr)]
                      "
                    >
                      {/* Education */}
                      <div
                        className="
                          min-w-0
                          px-4
                          py-4
                          sm:border-r
                          sm:border-black/[0.06]
                        "
                      >
                        <span
                          className="
                            block
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-black/30
                          "
                        >
                          Education
                        </span>

                        <span
                          className="
                            mt-1.5
                            block
                            whitespace-nowrap
                            text-[12px]
                            font-medium
                            tracking-[-0.01em]
                            text-black/65
                          "
                        >
                          {founder.education}
                        </span>
                      </div>

                      {/* Based */}
                      <div
                        className="
                          min-w-0
                          border-t
                          border-black/[0.06]
                          px-4
                          py-4
                          sm:border-t-0
                          sm:border-r
                        "
                      >
                        <span
                          className="
                            block
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-black/30
                          "
                        >
                          Based
                        </span>

                        <span
                          className="
                            mt-1.5
                            block
                            whitespace-nowrap
                            text-[12px]
                            font-medium
                            text-black/65
                          "
                        >
                          {founder.based}
                        </span>
                      </div>

                      {/* Focus */}
                      <div
                        className="
                          min-w-0
                          border-t
                          border-black/[0.06]
                          px-4
                          py-4
                          sm:border-t-0
                        "
                      >
                        <span
                          className="
                            block
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-black/30
                          "
                        >
                          Focus
                        </span>

                        <span
                          className="
                            mt-1.5
                            block
                            whitespace-nowrap
                            text-[12px]
                            font-medium
                            text-black/65
                          "
                        >
                          {founder.focus}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;