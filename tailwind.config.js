const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ["Cascadia", "monospace"],
      },
      fontSize: {
        "mini": "14px",
      },
      colors: {
        light: "#FFFEFC",
        midnight: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
