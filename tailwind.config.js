/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#887a58',
        'beige': '#ebd0ba',
        'brown': '#782e22',
        'lime': '#bef264',
        'red': '#ef4444',
        'yellow': '#fde047'
    }
    },
  },
  plugins: [],
}