import Reveal from "./Reveal";
import { RouteLabel } from "./UI";
import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-8 py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RouteLabel n="02" path="/experience" />
        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-14">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 100}>
                <div className="relative sm:pl-10">
                  {/* node */}
                  <span
                    className={`hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                      exp.current
                        ? "border-accent-a bg-accent-a/20"
                        : "border-border-strong bg-surface"
                    }`}
                  />

                  <div className="font-mono text-xs text-text-muted mb-2">
                    {exp.period}
                    {exp.current && <span className="text-accent-a ml-2">● current</span>}
                  </div>

                  <h3 className="text-xl md:text-2xl text-text-primary font-display">
                    {exp.role}
                  </h3>
                  <div className="mt-1 font-mono text-sm text-accent-a">
                    {exp.org} <span className="text-text-muted">· {exp.location}</span>
                  </div>

                  <ul className="mt-5 flex flex-col gap-3">
                    {exp.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="text-text-secondary text-[17px] leading-relaxed flex gap-3"
                      >
                        <span className="text-accent-b font-mono text-xs mt-1.5 shrink-0">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
