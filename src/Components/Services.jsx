import { motion } from "motion/react";
import {
  MonitorSmartphone,
  Workflow,
  PanelsTopLeft,
} from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Modern websites designed around your brand, your audience, and the way your business works.",
    icon: MonitorSmartphone,
    label: "Websites",
    type: "website",
  },
  {
    title: "Custom Systems & Applications",
    description:
      "Business-focused web applications built to simplify operations, improve workflows, and solve real needs.",
    icon: Workflow,
    label: "Custom Systems",
    type: "dashboard",
  },
  {
    title: "UI/UX & Digital Design",
    description:
      "Clear and intuitive interfaces that make websites and applications easier and more enjoyable to use.",
    icon: PanelsTopLeft,
    label: "UI / UX",
    type: "design",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* =======================================================
   WEBSITE PREVIEW
======================================================= */

function WebsitePreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f4f4f1] p-5 sm:p-6">
      <div className="w-full max-w-[260px] rounded-[10px] border border-black/[0.06] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-700 group-hover:-translate-y-1">
        {/* Browser bar */}

        <div className="flex h-7 items-center gap-1.5 border-b border-black/[0.05] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
        </div>

        {/* Website content */}

        <div className="space-y-3 p-6">
          <div className="h-3 w-2/3 rounded-full bg-[#111111]" />
          <div className="h-2 w-4/5 rounded-full bg-black/10" />
          <div className="h-5 w-16 rounded-full bg-[#a8cf32] pt-1" />
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   DASHBOARD PREVIEW
======================================================= */

function DashboardPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f4f4f1] p-5 sm:p-6">
      <div className="flex h-[190px] w-full max-w-[260px] overflow-hidden rounded-[10px] border border-black/[0.06] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-700 group-hover:-translate-y-1">
        {/* Sidebar rail */}

        <div className="flex w-9 flex-col items-center gap-3 border-r border-black/[0.05] py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#a8cf32]" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>

        {/* Main */}

        <div className="flex flex-1 flex-col justify-center gap-4 px-5">
          <div className="h-2.5 w-1/2 rounded-full bg-[#111111]" />

          <div className="flex h-14 items-end gap-2">
            <div className="h-[45%] flex-1 rounded-t bg-[#ececec]" />
            <div className="h-[70%] flex-1 rounded-t bg-[#dcdcdc]" />
            <div className="h-[55%] flex-1 rounded-t bg-[#ececec]" />
            <div className="h-[95%] flex-1 rounded-t bg-[#a8cf32]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   UI / UX PREVIEW
======================================================= */

function DesignPreview() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f4f4f1] p-5 sm:p-6">
      <div className="w-full max-w-[260px] rounded-[10px] border border-black/[0.06] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-700 group-hover:-translate-y-1">
        <div className="grid grid-cols-[0.6fr_1fr] gap-3">
          <div className="space-y-2">
            <div className="h-6 rounded-md bg-[#a8cf32]" />
            <div className="h-6 rounded-md bg-[#f0f0f2]" />
            <div className="h-6 rounded-md bg-[#f0f0f2]" />
          </div>

          <div className="rounded-md bg-[#f5f5f5] p-3">
            <div className="h-2 w-3/4 rounded-full bg-black/10" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   VISUAL SWITCHER
======================================================= */

function ServiceVisual({ type }) {
  if (type === "website") {
    return <WebsitePreview />;
  }

  if (type === "dashboard") {
    return <DashboardPreview />;
  }

  return <DesignPreview />;
}

/* =======================================================
   SERVICES SECTION
======================================================= */

function Services() {
  return (
    <section
      id="services"
      className="
        bg-[#f7f8fa]
        px-5
        py-10
        text-[#111111]
        sm:px-7
        sm:py-12
        md:px-10
        lg:px-10
        lg:py-14
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={containerVariants}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <motion.div variants={fadeUp}>

            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#777777]">
                What we do
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-[clamp(2.3rem,5vw,4rem)]
                font-normal
                leading-[1.02]
                tracking-[-0.045em]
                text-[#3f4657]
              "
            >
              Built around{" "}
              <span className="font-semibold text-[#0b1025]">
                your business.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-[14px]
                leading-6
                text-[#777777]
                sm:text-[15px]
              "
            >
              We design and build websites and custom systems around the way
              your business works — combining thoughtful design with practical
              technology.
            </p>
          </motion.div>
        </motion.div>

        {/* ================================================== */}
        {/* SERVICE CARDS */}
        {/* ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="grid gap-4 sm:gap-5 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-black/[0.07]
                  bg-white
                  p-3
                  shadow-[0_4px_25px_rgba(0,0,0,0.025)]
                "
              >

                {/* ================================================== */}
                {/* VISUAL */}
                {/* ================================================== */}

                <div
                  className="
                    relative
                    h-60
                    overflow-hidden
                    rounded-[16px]
                    sm:h-64
                  "
                >
                  <ServiceVisual type={service.type} />

                  {/* SERVICE LABEL */}

                  <div className="absolute left-4 top-4">
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/50
                        bg-white/85
                        px-3
                        py-1.5
                        shadow-[0_4px_15px_rgba(0,0,0,0.05)]
                        backdrop-blur-md
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a8cf32]" />

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-[#222222]
                        "
                      >
                        {service.label}
                      </span>
                    </div>
                  </div>

                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-[15px]
                      bg-[#a8cf32]
                      text-[#111111]
                      shadow-[0_10px_30px_rgba(168,207,50,0.25)]
                    "
                  >
                    <Icon
                      strokeWidth={1.8}
                      className="h-5 w-5"
                    />
                  </motion.div>
                </div>

                {/* ================================================== */}
                {/* CONTENT */}
                {/* ================================================== */}

                <div className="px-3 pb-5 pt-5 sm:px-4 sm:pb-6 sm:pt-6">
                  <h3
                    className="
                      max-w-[330px]
                      text-[21px]
                      font-semibold
                      leading-[1.1]
                      tracking-[-0.04em]
                      text-[#111111]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[340px]
                      text-[13px]
                      leading-[1.65]
                      text-[#777777]
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;