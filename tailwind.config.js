const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'noto': ['Noto Sans KR', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: colors.gray,
      teal: colors.teal,
      blue: colors.blue,
      sky: colors.sky,
      rose: colors.rose,
      // Theme from adobe color
      // .IPU_Magenta-a-amarillo-3-1-hex { color: #FF698C; }
      // .IPU_Magenta-a-amarillo-3-2-hex { color: #FF7281; }
      // .IPU_Magenta-a-amarillo-3-3-hex { color: #FF7D75; }
      // .IPU_Magenta-a-amarillo-3-4-hex { color: #FF876A; }
      // .IPU_Magenta-a-amarillo-3-5-hex { color: #FF925E; }
      theme: {
        100:  '#FF698C',
        200:  '#FF7281',
        300:  '#FF7D75',
        400:  '#FF876A',
        500:  '#FF925E' 
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
  