/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Kavoon: [ 'Kavoon','sans-serif'],
        Kanit: [ 'Kanit','sans-serif'],
        Antonio: [ 'Antonio','sans-serif'],
        Roboto: [ 'Roboto','sans-serif'],
        Antonio: [ 'Antonio','sans-serif'],
      },
      colors: {
        softBlue: '#d9e6f2',
    },
    backgroundImage: {
      'white-softBlue': 'linear-gradient(to right, #ffffff, #d9e6f2)',
    },
  },
  plugins: [],
},
}

