/** @type {import('tailwindcss').Config} */
  
const plugin = require('tailwindcss/plugin'); 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}) {
      addVariant('children', '&>*')
    })
  ],
}

