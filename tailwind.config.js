/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        nigga: "#000000",
        grey: {
          1: "#3E3E42",
          2: "#2D2D30",
          3: "#252526",
          4: "#1E1E1E",
        },
        yellow: "#FFFB97",
        purple: "#715FDD",
      },
      fontFamily: {
        laila: ["Laila", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
