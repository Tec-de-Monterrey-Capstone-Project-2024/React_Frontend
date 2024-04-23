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
        blue: "#022539",
        white: "#ffffff",
        green: "#9DC53E"
      },
    },
    plugins: [],
  },
}
