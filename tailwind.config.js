/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        gold: '#D4AF37',
        'gold-light': '#F9E27D',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
