import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      quizz_primary: "#4242E0",
      quizz_secondary: "#C8D2DA",
      quizz_terniary: "#2A2C2D",
      quizz_neutral_1: "#EBEFF2",
    },
    extend: {},
  },
  plugins: [],
};
