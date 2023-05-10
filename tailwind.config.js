/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    // width: {
    //   '350px': '350px',
    //   '546px': '546px',
    // },
    borderRadius: {
      half: ['50px'],
      doublexl: ['25px'],
      xl: ['10px']
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}