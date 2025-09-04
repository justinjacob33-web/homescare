/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        title : ["Title", "sans-serif"],
        subtitle : ["SubTitle", "sans-serif"],
        regular : ["regular", "sans-serif"],
      },
      colors : {
        primary: "#E88C62",
        secondary : "#444651",
        white : "#ffffff",
        black : "#000000"
      }
    },
  },
  plugins: [],
}

