import ProjectCard from "./ProjectCard";
import { RouteLabel } from "./UI";
import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="px-5 md:px-8 py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RouteLabel n="03" path="/projects" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
