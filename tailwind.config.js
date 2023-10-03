/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001524',
        secondary: '#EEEEEE'
      },
      fontFamily: {
        sans: ['Work Sans', 'Yeseva One']
      },
    },
  },
  plugins: [],
}

