/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hexwhite: '#F8F8F8',
        hexred: '#7a0b0b',
        hexblack: '#161616',
      },
      fontFamily: {
        ClashDisplay: 'ClashDisplay'
      },
    },
  },
  plugins: [],
}
