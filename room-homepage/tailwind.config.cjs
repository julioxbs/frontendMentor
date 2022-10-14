/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "League Spartan, sans-serif"
      },
      gridTemplateColumns: {
        'header': '1fr 550px',
        'footer': '350px minmax(350px, 1fr) 350px',
        'footer-md': '150px minmax(350px, 1fr) 150px',
      },
      gridTemplateRows: {
        'header': '500px',
        'header-mobile': '300px'
      }
    },
  },
  plugins: [],
}