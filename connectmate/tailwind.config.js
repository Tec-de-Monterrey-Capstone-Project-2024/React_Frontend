/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blueConnect: "#022539",
        whiteConnect: "#ffffff",
        greenConnect: "#9DC53E",
      },
    },
    plugins: [],
  },
}
