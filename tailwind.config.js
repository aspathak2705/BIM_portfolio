/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#050505",
          surface: "#080808",
          card: "#0D0D0D",
          border: "#1A1A1A",
          hover: "#141414",
        },
        accent: {
          orange: "#FF6A00",
          orangeMuted: "#CC5500",
          orangeGlow: "rgba(255, 106, 0, 0.15)",
        },
        text: {
          main: "#F5F5F2",
          muted: "#9A9A9A",
          darkMuted: "#555555",
        }
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "Space Mono", "Courier New", "monospace"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        architectural: "0.2em",
      }
    },
  },
  plugins: [],
};
