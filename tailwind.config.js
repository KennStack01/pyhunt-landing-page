module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'turbo-yellow': {
          DEFAULT: '#FFCA1D',
          50: '#FFF5D5',
          100: '#FFF0C0',
          200: '#FFE797',
          300: '#FFDD6F',
          400: '#FFD446',
          500: '#FFCA1D',
          600: '#E4AE00',
          700: '#AC8400',
          800: '#745900',
          900: '#3C2E00',
        },
        'turbo-light-blue': {
          DEFAULT: '#347AB4',
          50: '#B6D2EA',
          100: '#A6C9E5',
          200: '#86B5DC',
          300: '#67A2D3',
          400: '#478FCA',
          500: '#347AB4',
          600: '#275C88',
          700: '#1B3F5D',
          800: '#0E2131',
          900: '#020406',
        },
      },
    },
  },
  plugins: [],
}
