import { useEffect, useRef, useState } from "react";

/**
 * Token stream for a short Spring Boot REST controller snippet.
 * Each line is an array of { text, cls } tokens so we can render
 * syntax highlighting using only existing palette tokens:
 *   accent-a    -> annotations
 *   accent-b    -> keywords
 *   accent-success -> strings
 *   text-primary   -> types / class names
 *   text-secondary -> default / punctuation / identifiers
 *   text-muted     -> comments
 */
const CODE_LINES = [
  [{ t: "// GET /api/users/{id}", c: "muted" }],
  [{ t: "@RestController", c: "amber" }],
  [{ t: "@RequestMapping(", c: "amber" }, { t: '"/api/users"', c: "green" }, { t: ")", c: "amber" }],
  [
    { t: "public class ", c: "blue" },
    { t: "UserController ", c: "primary" },
    { t: "{", c: "secondary" },
  ],
  [
    { t: "    private final ", c: "blue" },
    { t: "UserService ", c: "primary" },
    { t: "service;", c: "secondary" },
  ],
  [{ t: "", c: "secondary" }],
  [{ t: "    @GetMapping(", c: "amber" }, { t: '"/{id}"', c: "green" }, { t: ")", c: "amber" }],
  [
    { t: "    public ", c: "blue" },
    { t: "ResponseEntity<User> ", c: "primary" },
    { t: "getUser(", c: "secondary" },
  ],
  [{ t: "        @PathVariable ", c: "amber" }, { t: "Long id", c: "primary" }, { t: ") {", c: "secondary" }],
  [
    { t: "        User user = service.findById(id);", c: "secondary" },
  ],
  [{ t: "        return ", c: "blue" }, { t: "ResponseEntity.ok(user);", c: "secondary" }],
  [{ t: "    }", c: "secondary" }],
  [{ t: "}", c: "secondary" }],
];

const TOKEN_COLOR = {
  amber: "text-accent-a",
  blue: "text-accent-b",
  green: "text-accent-success",
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted italic",
};

export default function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [ran, setRan] = useState(false);
  const containerRef = useRef(null);
  const startedRef = useRef(false);

  // Type the snippet in line-by-line once the panel scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let line = 0;
          const iv = setInterval(() => {
            line++;
            setVisibleLines(line);
            if (line >= CODE_LINES.length) clearInterval(iv);
          }, 90);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group rounded-lg border border-border bg-surface overflow-hidden w-full"
      onMouseEnter={() => setRan(true)}
      onMouseLeave={() => setRan(false)}
    >
      {/* titlebar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-border-strong" />
          <span className="w-2 h-2 rounded-full bg-border-strong" />
          <span className="w-2 h-2 rounded-full bg-border-strong" />
        </span>
        <span className="font-mono text-xs text-text-muted ml-2">UserController.java</span>
      </div>

      {/* code body */}
      <div className="px-4 py-4 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-[1.7] whitespace-pre">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="text-text-muted select-none w-6 shrink-0 text-right pr-4">
                {i + 1}
              </span>
              <span>
                {line.length === 0 || (line.length === 1 && line[0].t === "") ? (
                  "\u00A0"
                ) : (
                  line.map((tok, j) => (
                    <span key={j} className={TOKEN_COLOR[tok.c]}>
                      {tok.t}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
          {visibleLines > 0 && visibleLines < CODE_LINES.length && (
            <span className="inline-block w-[7px] h-[1em] align-middle bg-accent-a animate-blink ml-6" />
          )}
        </pre>
      </div>

      {/* run/status footer */}
      <div
        className={`px-4 py-2.5 border-t border-border font-mono text-xs flex items-center justify-between transition-opacity duration-300 ${
          ran && visibleLines >= CODE_LINES.length ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-accent-success">$ status: 200 OK</span>
        <span className="text-text-muted">12ms</span>
      </div>
    </div>
  );
}
