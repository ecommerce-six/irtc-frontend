/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8001FF",
        primary: "#161D27",
        secondary: "#2F3F56",
        "dim-secondary": "#2F3F5625",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
