/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid', 
    './templates/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#9dc497', // Replace '#00FF00' with your custom color
      },
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

