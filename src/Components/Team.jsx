  import { motion } from "framer-motion";
  import profileImage from "../assets/images/profile.jpg";
  import profileImage2 from "../assets/images/CJEP.png";

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
      focus: "IT · Security · Cloud · Infrastructure",
      image: profileImage2,
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
          bg-[#f7f8fa]
          px-5
          py-10
          text-[#16170f]
          sm:px-7
          sm:py-12
          md:px-10
          lg:px-10
          lg:py-14
        "
      >
        {/* ================================================== */}
        {/* AMBIENT BACKGROUND */}
        {/* ================================================== */}

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

        <div className="relative mx-auto w-full max-w-[1440px]">
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[680px]"
          >
            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9fbe3c]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                A little about us
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-5
                text-[clamp(2.5rem,5vw,4rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.06em]
              "
            >
              The people
              <br />
              <span className="text-[#70833e]">
                behind the work.
              </span>
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

          {/* ================================================== */}
          {/* TEAM MEMBERS */}
          {/* ================================================== */}

          <div
            className="
              mt-10
              space-y-20
              sm:mt-12
              sm:space-y-24
              lg:mt-14
              lg:space-y-28
            "
          >
            {founders.map((founder, index) => {
              const reversed = index % 2 === 1;

              return (
                <div
                  key={founder.id}
                  className={`
                    grid
                    items-center
                    gap-10
                    lg:grid-cols-[320px_minmax(0,1fr)]
                    lg:gap-14
                    xl:grid-cols-[340px_minmax(0,1fr)]
                    xl:gap-20
                    ${reversed ? "lg:[direction:rtl]" : ""}
                  `}
                >
                  {/* ================================================== */}
                  {/* PHOTO */}
                  {/* ================================================== */}

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
                      lg:max-w-[320px]
                      xl:max-w-[340px]
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

                  {/* ================================================== */}
                  {/* CONTENT */}
                  {/* ================================================== */}

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
                    {/* QUOTE */}

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

                    {/* NAME + ROLE */}

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

                      <p
                        className="
                          mt-1.5
                          text-[13px]
                          font-medium
                          text-[#70833e]
                        "
                      >
                        {founder.role}
                      </p>
                    </div>

                    {/* BIO */}

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

                  {/* ================================================== */}
  {/* DETAILS */}
  {/* ================================================== */}

  <div
    className="
      mt-6
      w-full
      max-w-[850px]
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
        sm:grid-cols-[minmax(0,1.7fr)_minmax(170px,0.9fr)_minmax(230px,1.2fr)]
      "
    >
      {/* EDUCATION */}

      <div
        className="
          min-w-0
          overflow-hidden
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
            text-[12px]
            font-medium
            leading-5
            tracking-[-0.01em]
            text-black/65
          "
        >
          {founder.education}
        </span>
      </div>

      {/* BASED */}

      <div
        className="
          min-w-0
          overflow-hidden
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

      {/* FOCUS */}

      <div
        className="
          min-w-0
          overflow-hidden
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