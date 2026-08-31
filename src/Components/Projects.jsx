import { ArrowRight } from "lucide-react";
import { projects } from "../data/site";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl">
              Built to be seen. Designed to perform.
            </h2>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-[#d3ff5f]">
            View all projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
