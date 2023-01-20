/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        mysky: '#0ea5e9',
        secondary: '#64748b',
        mydark: '#0f172a',
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
