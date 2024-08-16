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
        secondary: "#2F3F56",
        "dim-primary": "#161D2775",
        "dim-secondary": "#2F3F5625",
        background: "#FFFFFF",
      },
      boxShadow: {
        dark: "0px 0px 40px rgba(85, 104, 112, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
