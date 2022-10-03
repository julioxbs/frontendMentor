/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-light': "url('./src/assets/bg-desktop-light.jpg')",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}