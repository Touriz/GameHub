/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
      'custom-full-bg': '#101014',
      'custom-accent': '#B0E063',
      'custom-button-bg': '#2E2F2C',
      'custom-card-bg': '#252529',
      'custom-subtext': '#A3A3A3',
      'custom-text': '#E0E0E0',
      },
      fontFamily: {
       primary: ['Rubik', 'sans-serif'],
       logoPrimary: ['BurbankBigCondensed', 'sans-serif'],
       secondary: ['Inter_28pt-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}