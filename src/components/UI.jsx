export function RouteLabel({ n, path }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs tracking-wider text-accent-b opacity-70">
        {n}
      </span>
      <span className="font-mono text-xs md:text-sm tracking-wider uppercase text-accent-a">
        {path}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Tag({ children, tone = "default" }) {
  const toneClass =
    tone === "amber"
      ? "border-accent-a/40 text-accent-a"
      : tone === "blue"
      ? "border-accent-b/40 text-accent-b"
      : "border-border-strong text-text-secondary";

  return (
    <span
      className={`font-mono text-sm px-2.5 py-1.5 rounded-md border leading-none ${toneClass} whitespace-nowrap`}
    >
      {children}
    </span>
  );
}
