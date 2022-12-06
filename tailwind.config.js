/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeneralSans-Variable", "sans-serif"],
        mono: ["Cascadia", "monospace"],
      },
      fontSize: {
        "mini": "15px",
      },
      colors: {
        night: "#121212",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
