/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#282c34',
        primaryDark: '#1a1d21',
        secondary: '#ccc',
        accent: '#57f542',

        primaryText: '#fff'
      }
    },
  },
  plugins: [],
}
