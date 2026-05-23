import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5EFE0",
        surface: "#FAF5E8",
        ink: "#2A3A2E",
        muted: "#5C6B5F",
        moss: "#3F6B4A",
        clay: "#C97B5A",
        rule: "#E4DBC4",
        "rule-soft": "#ECE3CC",
        code: "#2A2622",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        pixel: "-10px 0 0 #3F6B4A, 10px 0 0 #3F6B4A",
      },
    },
  },
  plugins: [typography],
};

export default config;
