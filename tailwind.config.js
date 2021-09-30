const autoprefixer = require('autoprefixer');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Bai: "'Bai Jamjuree', serif"
      },
      colors: {
        strong: 'hsl(171, 66%, 44%)',
        light: 'hsl(233, 100%, 69%)',
        dark: 'hsl(210, 10%, 33%)',
        grayish: 'hsl(201, 11%, 66%)',
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
