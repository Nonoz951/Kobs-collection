/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#83776b',
        'secondary': '#ebebf5',
      }
    },
  },
  plugins: [],
}
