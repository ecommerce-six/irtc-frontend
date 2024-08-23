import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#8001FF",
        primary: "#161D27",
        "primary-dark": "#E8E7E9",
        secondary: "#2F3F56",
        "secondary-dark": "#969696",
        "dim-primary": "#161D2775",
        "dim-secondary": "#2F3F5625",
        "dim-secondary-dark": "#94949440",
        background: "#FFFFFF",
        "background-dark": "#101010",
      },
      boxShadow: {
        dark: "0 0 40px rgba(85, 104, 112, 0.25)",
        darker: "0 0 30px rgba(0, 0, 0, 1)",
      },
      keyframes: {
        passLine: {
          "0%": { transform: "translateX(-250%)" },
          "100%": { transform: "translateX(250%)" },
        },
      },
      animation: {
        passLine: "passLine 2s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: ["selector"],
};
export default config;
