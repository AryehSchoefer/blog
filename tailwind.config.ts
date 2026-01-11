import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#111111",
        "code-bg": "#1a1a1a",
        "code-text": "#f0f0f0",
        muted: "#555555",
        "muted-foreground": "#333333",
        border: "#cccccc",
        "border-dark": "#111111",
        "code-border": "#444444",
      },
      fontFamily: {
        heading: ["var(--font-libre-baskerville)", "Georgia", "serif"],
        body: ["var(--font-ibm-plex-mono)", "Menlo", "monospace"],
      },
      fontSize: {
        "title-massive": ["4rem", { lineHeight: "1.1" }],
        "title-list": ["2.2rem", { lineHeight: "1.1" }],
        "title-site": ["1.5rem", { lineHeight: "1.4" }],
        "heading-2": ["2.2rem", { lineHeight: "1.2" }],
      },
      spacing: {
        "container-x": "1.5rem",
        "container-y": "4rem",
        "header-mb": "5rem",
      },
      maxWidth: {
        container: "750px",
      },
      letterSpacing: {
        title: "0.05em",
      },
      borderWidth: {
        header: "4px",
        code: "5px",
      },
    },
  },
  plugins: [],
};

export default config;
