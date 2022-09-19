const { default: autoprefixer } = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif', ],
        turret:['Turret Road', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        background: "url('/background.png')",
        'duo-fade': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%);',
        'game-fade': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      },
      
    },
  },
  plugins: [
  ],
}
