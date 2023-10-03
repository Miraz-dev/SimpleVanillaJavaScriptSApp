/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      screens: {
        'sm': '425px',
        // => @media (min-width: 640px) { ... }
      }
    },
    plugins: [],
  }