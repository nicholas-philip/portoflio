/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  colors: {
    lightHover: "#fcf4ff",
    darkHover: "#2a004a",
    darkTheme: "#11001f",
  },
  fontsFamily: {
    fonts: ["Ovo", "serif"],
  },

  boxShadow: {
    black: "4px 4px 0 #000",
  },
  darkMode: "selector",
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
