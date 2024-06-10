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

        'light-green': '#9DC53E',
        'dark-green': '#009F23',
        'dark-blue': '#022539',
        'light-grey': '#F7F7F7',
        'grey': '#E5E5E5',
        'dark-grey': '#D9D9D9',
        'darker-grey': '#CCCCCC',
        'lighter-red': '#FFCCCC',
        'light-red': '#FF6868',
        'dark-red': '#D22424',
        'success': '#15C727',
        'warning': '#C7B615',
        'danger': '#FF0000',
        'black': '#000000',
        'white': '#FFFFFF',
      },
    },
    plugins: { 
        'postcss-import': {}, 
        'postcss-nesting': {}, 
        tailwindcss: {}, 
        autoprefixer: {}, 
    }, 
  },
}
