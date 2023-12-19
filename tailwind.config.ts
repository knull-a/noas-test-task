/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "150": "#d1d1d1",
          "200": "#b0b0b0",
          "300": "#888888",
          "400": "#6d6d6d",
          "500": "#5d5d5d",
          "600": "#4f4f4f",
          "700": "#454545",
          "800": "#3d3d3d",
          "950": "#121212",
        },
      },
    },
  },
  plugins: [],
};
