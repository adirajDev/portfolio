import Reveal from "./Reveal";
import { Tag } from "./UI";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 120}>
      <div className="rounded-lg border border-border bg-surface p-6 md:p-7 h-full flex flex-col">
        <h3 className="text-xl md:text-2xl text-text-primary mb-2 font-display">
          {project.name}
        </h3>
        <p className="text-text-secondary text-[15px] leading-relaxed mb-5">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <ul className="flex flex-col gap-2.5 mb-6">
          {project.points.map((pt, idx) => (
            <li key={idx} className="text-text-secondary text-sm flex gap-2.5 leading-relaxed">
              <span className="text-accent-b shrink-0">·</span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 border-t border-border flex items-center gap-4 font-mono text-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent-a transition-colors duration-200"
          >
            github ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-accent-a transition-colors duration-200"
            >
              live ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
