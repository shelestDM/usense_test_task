// tailwind.config.js
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        smoothAppearFromBottom: "smooth_appear_from_bottom 1s 1 ease-in-out forwards",
      },
      keyframes: {
        smooth_appear_from_bottom: {
          "0%": { opacity: 0, transform: 'translateY(-75px)' },
          "100%": { opacity: 1, transform: 'translateY(0px)' },
        },
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};