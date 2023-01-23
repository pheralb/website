const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", ...fontFamily.sans],
        mono: ["Cascadia", ...fontFamily.mono],
      },
      colors: {
        light: "#FFFEFC",
        midnight: "#121212",
      },
    },
  },
  plugins: [],
};
