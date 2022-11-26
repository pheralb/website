/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        mono: ["Cascadia", "monospace"],
      },
      colors: {
        night: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
