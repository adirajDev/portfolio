export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="group relative flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent-a/50 transition-colors duration-300"
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
        style={{
          background: theme === "dark" ? "var(--accent-a)" : "var(--accent-b)",
        }}
      />
      {theme === "dark" ? "dark" : "light"}
    </button>
  );
}
