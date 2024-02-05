/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tahiti: {
          white: "#ffff",
          black: "#ffff",
          primary: "#4EAEDA",
          secondary: "#4A66CC",
          tertiary: "#471FBF",
          background: "#0F1630",
        },
      },
    },
  },
  plugins: [],
}