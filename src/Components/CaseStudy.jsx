import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import CTA from "./CTA";
import Footer from "./Footer";
import { projects } from "../data/projects";

function CaseStudy() {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const project = projects.find((item) => item.slug === slug);

  const [activeSlide, setActiveSlide] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fafaf8] text-[#111111]">
        <main className="flex min-h-[70vh] items-center justify-center px-5">
          <div className="text-center">
            <p className="mb-5 text-sm text-black/45">
              Project not found
            </p>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const slides = [
    {
      image: project.images?.desktop,
      label: "Desktop",
    },
    {
      image: project.images?.mobile,
      label: "Mobile",
    },
    {
      image: project.images?.hero,
      label: "Homepage",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[activeSlide];

  /*
   * ------------------------------------------------------------
   * ANIMATION SETTINGS
   * ------------------------------------------------------------
   */

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.04,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const sectionViewport = {
    once: true,
    amount: 0.15,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
      className="noise min-h-screen overflow-x-clip bg-[#fafaf8] text-[#111111]"
    >
      <main>
        {/* =========================================================
            HEADER
        ========================================================= */}
        <section className="px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="mx-auto max-w-7xl">
            {/* Back */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to="/#projects"
                className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-black sm:mb-8"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
                Back to home
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.85,
                delay: shouldReduceMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-6xl
                text-[clamp(3rem,7vw,6.75rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.065em]
              "
            >
              {project.title}
            </motion.h1>

            {/* Description + Button */}
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                {project.shortDescription}
              </p>

              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    w-fit
                    shrink-0
                    items-center
                    gap-2.5
                    rounded-full
                    bg-[#cfff5a]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#111111]
                    shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                  "
                >
                  Visit website

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PROJECT THUMBNAIL
        ========================================================= */}
        <section className="px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={imageReveal}
            className="mx-auto max-w-7xl"
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.005,
                    }
              }
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-2xl bg-[#e9e9e4]"
            >
              {project.images?.hero ? (
                <img
                  src={project.images.hero}
                  alt={`${project.title} preview`}
                  className="
                    block
                    aspect-[16/8]
                    w-full
                    object-cover
                    object-top
                  "
                />
              ) : (
                <div className="relative aspect-[16/8] overflow-hidden">
                  <div className="absolute inset-[5%] overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                    <div className="flex h-9 items-center gap-1.5 border-b border-black/5 px-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />

                      <div className="ml-4 h-4 max-w-xs flex-1 rounded-full bg-black/[0.035]" />
                    </div>

                    <div className="flex h-[calc(100%-36px)] flex-col p-5 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="h-3.5 w-24 rounded-full bg-black/10" />

                        <div className="hidden gap-3 sm:flex">
                          <span className="h-2.5 w-10 rounded-full bg-black/5" />
                          <span className="h-2.5 w-10 rounded-full bg-black/5" />
                          <span className="h-2.5 w-10 rounded-full bg-black/5" />
                        </div>
                      </div>

                      <div className="my-auto">
                        <div className="h-4 w-24 rounded-full bg-[#cfff5a]" />

                        <div className="mt-4 h-7 w-[60%] rounded-lg bg-black/10" />
                        <div className="mt-2 h-7 w-[45%] rounded-lg bg-black/10" />

                        <div className="mt-4 h-2.5 w-[55%] rounded-full bg-black/5" />
                        <div className="mt-2 h-2.5 w-[40%] rounded-full bg-black/5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================================
            PROJECT INFORMATION + CASE STUDY
        ========================================================= */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
            className="mx-auto max-w-7xl"
          >
            <div className="grid gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
              {/* Project Info */}
              <motion.aside variants={reveal}>
                <p className="mb-7 text-xs font-medium uppercase tracking-[0.12em] text-black/35">
                  Project information
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-1 lg:gap-y-6">
                  <div>
                    <p className="mb-1.5 text-sm text-black/40">
                      Client
                    </p>

                    <p className="text-sm font-medium text-black/75">
                      {project.client || "Personal Project"}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1.5 text-sm text-black/40">
                      Industry
                    </p>

                    <p className="text-sm font-medium text-black/75">
                      {project.industry || project.type}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1.5 text-sm text-black/40">
                      Services
                    </p>

                    <p className="max-w-xs text-sm font-medium leading-6 text-black/75">
                      {project.services?.join(" · ")}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1.5 text-sm text-black/40">
                      Year
                    </p>

                    <p className="text-sm font-medium text-black/75">
                      {project.year}
                    </p>
                  </div>
                </div>
              </motion.aside>

              {/* Narrative */}
              <motion.div
                variants={staggerContainer}
                className="max-w-3xl space-y-12"
              >
                <motion.div variants={reveal}>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    Background
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.background}
                  </p>
                </motion.div>

                <motion.div variants={reveal}>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    The Challenge
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.challenge}
                  </p>
                </motion.div>

                <motion.div variants={reveal}>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    Our Approach
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.approach}
                  </p>
                </motion.div>

                {project.result && (
                  <motion.div variants={reveal}>
                    <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                      Result
                    </h2>

                    <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                      {project.result}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================
            INTERFACE SHOWCASE CAROUSEL
        ========================================================= */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
            className="mx-auto max-w-7xl"
          >
            <motion.div
              variants={reveal}
              className="mb-7 flex items-end justify-between gap-6"
            >
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-black/35">
                  Interface showcase
                </p>

                <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  Designed to be experienced.
                </h2>
              </div>

              {/* Desktop arrows */}
              <div className="hidden gap-2 sm:flex">
                <motion.button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous project image"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    transition-colors
                    duration-200
                    hover:border-black/20
                    hover:bg-black/[0.025]
                  "
                >
                  <ChevronLeft size={18} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project image"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    transition-colors
                    duration-200
                    hover:border-black/20
                    hover:bg-black/[0.025]
                  "
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Carousel */}
            <motion.div
              variants={imageReveal}
              className="relative overflow-hidden rounded-2xl bg-[#e9e9e4]"
            >
              <motion.div
                key={currentSlide.image || currentSlide.label}
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion
                    ? 0
                    : activeSlide > 0
                      ? 30
                      : -30,
                  scale: shouldReduceMotion ? 1 : 1.015,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {currentSlide.image ? (
                  <img
                    src={currentSlide.image}
                    alt={`${project.title} ${currentSlide.label} interface`}
                    className="
                      block
                      aspect-[16/9]
                      w-full
                      object-cover
                    "
                  />
                ) : (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-[4%] overflow-hidden rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                      {/* Browser top */}
                      <div className="flex h-10 items-center gap-1.5 border-b border-black/5 px-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />

                        <div className="ml-4 h-5 max-w-sm flex-1 rounded-full bg-black/[0.035]" />
                      </div>

                      {/* Fake interface */}
                      <div className="grid h-[calc(100%-40px)] grid-cols-[24%_1fr]">
                        <div className="border-r border-black/5 p-5">
                          <div className="h-3.5 w-20 rounded-full bg-black/10" />

                          <div className="mt-8 space-y-3">
                            <div className="h-2.5 w-full rounded-full bg-black/5" />
                            <div className="h-2.5 w-[80%] rounded-full bg-black/5" />
                            <div className="h-2.5 w-[90%] rounded-full bg-black/5" />
                            <div className="h-2.5 w-[70%] rounded-full bg-black/5" />
                          </div>
                        </div>

                        <div className="p-6 sm:p-10">
                          <div className="h-5 w-36 rounded-full bg-black/10" />

                          <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="aspect-[4/3] rounded-xl bg-black/[0.045]" />
                            <div className="aspect-[4/3] rounded-xl bg-black/[0.045]" />
                            <div className="aspect-[4/3] rounded-xl bg-[#cfff5a]/50" />
                          </div>

                          <div className="mt-5 h-3 w-[45%] rounded-full bg-black/5" />
                          <div className="mt-2 h-3 w-[30%] rounded-full bg-black/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Mobile arrows */}
              <motion.button
                type="button"
                onClick={previousSlide}
                aria-label="Previous project image"
                whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                  backdrop-blur-sm
                  transition-transform
                  hover:scale-105
                  sm:hidden
                "
              >
                <ChevronLeft size={17} />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextSlide}
                aria-label="Next project image"
                whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                  backdrop-blur-sm
                  transition-transform
                  hover:scale-105
                  sm:hidden
                "
              >
                <ChevronRight size={17} />
              </motion.button>
            </motion.div>

            {/* Carousel controls */}
            <motion.div
              variants={reveal}
              className="mt-4 flex items-center justify-between"
            >
              <span className="text-sm text-black/40">
                {currentSlide.label}
              </span>

              <div className="flex items-center gap-1.5">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`View ${slide.label}`}
                    className="flex h-4 items-center"
                  >
                    <motion.span
                      animate={{
                        width: activeSlide === index ? 24 : 6,
                        backgroundColor:
                          activeSlide === index
                            ? "#111111"
                            : "rgba(0,0,0,0.20)",
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                      }}
                      className="block h-1.5 rounded-full"
                    />
                  </button>
                ))}
              </div>

              <span className="text-sm tabular-nums text-black/40">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <CTA />
      </main>

      <Footer />
    </motion.div>
  );
}

export default CaseStudy;