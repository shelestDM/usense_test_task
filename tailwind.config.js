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
    screens: {
      's': '390px',
      'md': '640px',
      'lg': '1024px',
    },
    extend: {
      animation: {
        smoothAppear: "smooth_appear 750ms 1 ease-in-out forwards",
      },
      keyframes: {
        smooth_appear: {
          "0%": { opacity: 0, },
          "100%": { opacity: 1, },
        },
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};