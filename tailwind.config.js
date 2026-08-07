/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
          "primary-card": "var(--card-border-primary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          a: "var(--accent-a)",
          b: "var(--accent-b)",
          success: "var(--accent-success)",
        },
      },
      keyframes: {
        blink: { "50%": { opacity: 0 } },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
