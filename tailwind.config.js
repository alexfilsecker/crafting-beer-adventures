/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo1: "#211E32",
        p1: "#b1b5d3",
      },
      fontFamily: {
        sans: ["Lato", "Helvetica Neue", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Menlo", "Monaco", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
