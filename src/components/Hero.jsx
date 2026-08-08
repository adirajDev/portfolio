import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import CodeTerminal from "./CodeTerminal";
import { IDENTITY, HEADERS } from "../data/content";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = `GET /${IDENTITY.brand} HTTP/1.1`;

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(iv);
    }, 32);
    return () => clearInterval(iv);
  }, [full]);

  return (
    <section id="top" className="relative pt-32 pb-28 md:pt-48 md:pb-36 px-5 md:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-8%] w-[42rem] h-[42rem] rounded-full opacity-[0.06] blur-3xl bg-accent-a" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl bg-accent-b" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-12 lg:items-start">
        <div>
          <div className="font-mono text-sm md:text-base text-text-muted mb-8 h-5">
            <span className="text-accent-b">$</span> {typed}
            <span className="inline-block w-[7px] h-[1em] align-middle ml-0.5 bg-accent-a animate-blink" />
          </div>

          <Reveal>
            <h1 className="text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl font-normal tracking-tight text-text-primary font-display">
              {IDENTITY.name}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-4 text-xl md:text-2xl text-text-primary font-display">
              {IDENTITY.title}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-xl text-base md:text-lg text-text-secondary leading-relaxed">
              {IDENTITY.valueProp}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-5 font-mono text-xs md:text-sm text-text-muted flex flex-wrap items-center gap-x-2 gap-y-1">
              {IDENTITY.techLine.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-text-secondary">{t}</span>
                  {i < IDENTITY.techLine.length - 1 && (
                    <span className="text-accent-a">•</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 max-w-xl rounded-lg border border-border bg-surface/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-2">
                <span className="w-2 h-2 rounded-full bg-accent-a" />
                <span className="font-mono text-sm text-text-secondary">200 OK</span>
              </div>
              <div className="px-4 py-3.5 flex flex-col gap-2">
                {HEADERS.map((h) => (
                  <div key={h.k} className="font-mono text-xs md:text-sm flex gap-2">
                    <span className="text-accent-b shrink-0">{h.k}:</span>
                    <span className="text-text-secondary">{h.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="font-mono text-sm px-4 py-2.5 rounded bg-accent-a text-bg hover:opacity-90 transition-opacity duration-200"
              >
                view projects →
              </a>
              <a
                href={IDENTITY.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-4 py-2.5 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
              >
                resume ↓
              </a>
              <a
                href={IDENTITY.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-4 py-2.5 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
              >
                github ↗
              </a>
              <a
                href={`mailto:${IDENTITY.email}`}
                className="font-mono text-sm px-4 py-2.5 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-200"
              >
                {IDENTITY.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hidden lg:block lg:pt-14">
          <CodeTerminal />
        </Reveal>
      </div>
    </section>
  );
}
