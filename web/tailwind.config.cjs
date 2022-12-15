/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ "Montserrat", ]
      },
    },
  },
  plugins: [],
}
