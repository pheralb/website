const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...fontFamily.sans],
        mono: ['Cascadia', ...fontFamily.mono],
      },
      colors: {
        light: "#FFFEFC",
        midnight: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
