/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-brand': '#942a70',
        'light-blue-brand': '#D7E1E5',
        'light-gray-brand': '#f2f2f2',
      },
      lineHeight: {
        '11': '5rem',
        '12': '7rem',
        '13': '10rem',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

