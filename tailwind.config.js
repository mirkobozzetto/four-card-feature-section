/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: "#E95252 ",
        cyan: "#45D4D3",
        orange: "#FCAF4A",
        blue: "#549EF3",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
