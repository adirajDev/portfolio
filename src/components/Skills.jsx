import Reveal from "./Reveal";
import { RouteLabel, Tag } from "./UI";
import { SKILLS, EDUCATION, CERTS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-5 md:px-8 py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RouteLabel n="04" path="/skills" />

        <div className="font-mono text-xs text-text-muted mb-8">
          <span className="text-accent-b">$</span> stack --list
        </div>

        <div className="flex flex-col">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 60}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-3 sm:gap-8 py-6 border-t border-border first:border-t-0 sm:items-baseline">
                <div className="flex items-center justify-between sm:block">
                  <span className="font-mono text-base uppercase tracking-wider text-text-primary">
                    {s.group}
                  </span>
                  <span className="font-mono text-xs text-text-muted sm:hidden">
                    {String(s.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Tag key={item} tone={s.weight === "primary" ? "amber" : "default"}>
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="font-mono text-sm text-text-muted uppercase tracking-wider mb-4">
                Education
              </div>
              <div className="text-text-primary font-medium">{EDUCATION.school}</div>
              <div className="text-text-secondary text-sm mt-1.5">{EDUCATION.degree}</div>
              <div className="font-mono text-sm text-text-muted mt-3">
                {EDUCATION.period} · {EDUCATION.detail}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="font-mono text-sm text-text-muted uppercase tracking-wider mb-4">
                Certifications
              </div>
              {CERTS.map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="block group">
                  <div className="text-text-primary font-medium group-hover:text-accent-a transition-colors duration-200">
                    {c.name} ↗
                  </div>
                  <div className="font-mono text-sm text-text-muted mt-1.5">{c.date}</div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
