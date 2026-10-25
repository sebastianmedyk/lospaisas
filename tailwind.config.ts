import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0D0D0D",
          gold: "#F4C20D",
          red: "#E01E1E",
          /** Lighter red for small text on black (6.35:1). Brand red fails AA below 24px. */
          "red-text": "#FF5A5A",
        },
      },
      /* Type scale, ratio 1.25 from 16px (see DESIGN.md) */
      fontSize: {
        s0: ["1rem", { lineHeight: "1.6" }],
        s1: ["1.25rem", { lineHeight: "1.5" }],
        s2: ["1.5625rem", { lineHeight: "1.3" }],
        s3: ["1.9531rem", { lineHeight: "1.15" }],
        s4: ["2.4414rem", { lineHeight: "1.05" }],
        s5: ["3.0518rem", { lineHeight: "1" }],
        s6: ["3.8147rem", { lineHeight: "0.95" }],
        s7: ["4.7684rem", { lineHeight: "0.9" }],
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
