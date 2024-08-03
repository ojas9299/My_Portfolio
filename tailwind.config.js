/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        "bebas-neue": ['"Bebas Neue"', "cursive"],
        "rubik-mono-one": ['"Rubik Mono One"', "sans-serif"],
        "rock-salt": ['"Rock Salt"', "cursive"],
        "shadows-into-light": ['"Shadows Into Light"', "cursive"],
      },
      screens: {
        xs: "320px", // Define your custom breakpoint value
      },
    },
  },
  plugins: [],
};
