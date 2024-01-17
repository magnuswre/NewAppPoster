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
        customGreen: '#9dc497', 
        customPink: '#FFE5D9',
      },
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

