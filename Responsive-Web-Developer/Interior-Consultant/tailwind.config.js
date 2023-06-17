/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      crimson: ["Crimson Pro", "serif"],
      lora: ["Lora", "serif"],
    },

    extend: {
      colors: {
        body: "#181719",
      },
    },
  },
  plugins: [],
};
