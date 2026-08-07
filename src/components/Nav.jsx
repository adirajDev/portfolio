import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV, IDENTITY } from "../data/content";

export default function Nav({ theme, toggle, active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/75 border-b border-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-text-primary flex items-center gap-1">
          <span className="text-accent-a">~/</span>
          {IDENTITY.brand}
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`font-mono text-sm px-3 py-1.5 rounded transition-colors duration-200 ${
                active === n.id
                  ? "text-accent-a bg-accent-a/10"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            className="md:hidden font-mono text-text-secondary w-8 h-8 flex items-center justify-center text-lg"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col border-t border-border bg-bg">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm px-5 py-3 text-text-secondary border-b border-border last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
