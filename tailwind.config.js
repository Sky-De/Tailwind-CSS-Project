/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  // content: ['./build/*.html','./build/js/*.js'],
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        myColor: {
          light: '#8ecae6',
          dark: '#023047',
          DEFAULT: '#219ebc'
        }
      },
      screens: {
        'widescreen' : { 'raw' : '(min-aspect-ratio : 3/2)'},
        'tallscreen' : { 'raw' : '(max-aspect-ratio : 13/20)'}
      },
      keyframes: {
        "open-menu" : {
          '0%' : { transform: 'scaleY(0)'},
          '70%' : { transform: 'scaleY(1.1)'},
          '100%' : { transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu' : 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
