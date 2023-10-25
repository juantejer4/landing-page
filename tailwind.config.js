/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-blue': '#458FF6',
        'texty-gray': '#7D7987'
      },
    },
  },
  plugins: [],
}