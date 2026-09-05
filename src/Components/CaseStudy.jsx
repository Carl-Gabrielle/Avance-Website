import { useState } from "react";
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

  return (
    <div className="noise min-h-screen overflow-x-clip bg-[#fafaf8] text-[#111111]">

      <main>
        {/* =========================================================
            HEADER
        ========================================================= */}
        <section className="px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="mx-auto max-w-7xl">
            {/* Back */}
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

            {/* Title */}
            <h1
              className="
                max-w-6xl
                text-[clamp(3rem,7vw,6.75rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.065em]
              "
            >
              {project.title}
            </h1>

            {/* Description + Button */}
            <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
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
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT THUMBNAIL
        ========================================================= */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl bg-[#e9e9e4]">
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
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT INFORMATION + CASE STUDY
        ========================================================= */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
              {/* Project Info */}
              <aside>
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
              </aside>

              {/* Narrative */}
              <div className="max-w-3xl space-y-12">
                <div>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    Background
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.background}
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    The Challenge
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                    Our Approach
                  </h2>

                  <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                    {project.approach}
                  </p>
                </div>

                {project.result && (
                  <div>
                    <h2 className="mb-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                      Result
                    </h2>

                    <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                      {project.result}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTERFACE SHOWCASE CAROUSEL
        ========================================================= */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex items-end justify-between gap-6">
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
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous project image"
                  className="
                    cursor-pointer
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    transition-all
                    duration-200
                    hover:border-black/20
                    hover:bg-black/[0.025]
                  "
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project image"
                  className="
                    cursor-pointer
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    transition-all
                    duration-200
                    hover:border-black/20
                    hover:bg-black/[0.025]
                  "
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-[#e9e9e4]">
              {currentSlide.image ? (
                <img
                  key={currentSlide.image}
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

              {/* Mobile arrows */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous project image"
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
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next project image"
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
              </button>
            </div>

            {/* Carousel controls */}
            <div className="mt-4 flex items-center justify-between">
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
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-200
                      ${
                        activeSlide === index
                          ? "w-6 bg-black"
                          : "w-1.5 bg-black/20 hover:bg-black/40"
                      }
                    `}
                  />
                ))}
              </div>

              <span className="text-sm tabular-nums text-black/40">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default CaseStudy;