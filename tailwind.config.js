import colors from "tailwindcss/colors";

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      quizz_primary: "#4242E0",
      quizz_secondary: "#C8D2DA",
      quizz_tertiary: "#2A2C2D",
      quizz_neutral_1: "#EBEFF2",
    },
    extend: {},
  },
  plugins: [],
};
