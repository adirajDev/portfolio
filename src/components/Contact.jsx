import { useState } from "react";
import Reveal from "./Reveal";
import { RouteLabel } from "./UI";
import { IDENTITY } from "../data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(IDENTITY.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="px-5 md:px-8 py-24 md:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RouteLabel n="05" path="/contact" />

        <div className="font-mono text-xs text-text-muted mb-6">
          <span className="text-accent-b">$</span> status
        </div>

        <Reveal>
          <h2 className="text-4xl md:text-6xl text-text-primary leading-[1.05] font-display">
            Let's build something
            <br />
            that has to actually work.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <button
              onClick={copy}
              className="font-mono text-sm px-5 py-3 rounded bg-accent-a text-bg hover:opacity-90 transition-opacity duration-200"
            >
              {copied ? "copied ✓" : IDENTITY.email}
            </button>
            <a
              href={IDENTITY.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-5 py-3 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
            >
              resume ↓
            </a>
            <a
              href={IDENTITY.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-5 py-3 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
            >
              {IDENTITY.github} ↗
            </a>
            <a
              href={IDENTITY.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm px-5 py-3 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
            >
              {IDENTITY.linkedin} ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-20 font-mono text-sm text-text-muted flex flex-wrap gap-x-6 gap-y-2">
            <span>{IDENTITY.phone}</span>
            <span>{IDENTITY.location}</span>
            <span>
              © {new Date().getFullYear()} {IDENTITY.brand}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
