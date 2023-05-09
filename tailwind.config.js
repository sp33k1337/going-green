/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    borderRadius: {
      half: ['50px'],
      doublexl: ['25px']
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}