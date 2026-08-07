import Reveal from "./Reveal";
import { RouteLabel } from "./UI";
import { CONFIG } from "../data/content";

const HIGHLIGHTS = [
  "Java & Spring Boot on one side, Node/Express on the other — React when the product needs a face.",
  "Shipped 45+ REST APIs and built JWT-based role systems from scratch.",
  "Refactored a logic-heavy backend into a layered architecture without taking anything down.",
  "Currently deep in a Spring Boot + PostgreSQL migration — moving from \"I can use this\" to \"I'd bet production on this.\"",
];

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <RouteLabel n="01" path="/about" />
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 md:items-start">
          <Reveal>
            <div>
              <div className="font-mono text-xs text-text-muted mb-4">
                <span className="text-accent-b">$</span> whoami
              </div>
              <p className="text-2xl md:text-[2rem] leading-snug text-text-primary font-display">
                I like the part of the stack most people skip past —
                where the request actually gets validated, the query
                gets planned, and the response gets shaped.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {HIGHLIGHTS.map((h, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
                    <span className="text-accent-b font-mono text-xs mt-1.5 shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-lg border border-border bg-surface p-5 md:p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-a" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  config.json
                </span>
              </div>
              <dl className="flex flex-col gap-4 font-mono text-sm">
                {CONFIG.map(({ k, v }) => (
                  <div key={k} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <dt className="text-accent-b text-xs mb-1">{k}</dt>
                    <dd className="text-text-secondary">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
