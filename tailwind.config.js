/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {

      borderColor:{
        light: "rgba(255, 255, 255, 0.2)"
      },
    },

  },
  plugins: [],
}