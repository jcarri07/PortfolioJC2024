/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smartphone': '375px',
      // => @media (min-width: 376px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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