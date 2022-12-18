/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#010101',
      },

      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
      },

      screens: {
        custom: '800px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
