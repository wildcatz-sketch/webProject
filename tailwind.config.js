/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'naruto-orange': '#FF8C00',
        'chakra-blue': '#4A90E2',
        'dark-charcoal': '#1a1a1a',
        'parchment-white': '#F5F5F5',
        'akatsuki-red': '#E60023',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Bangers', 'cursive'],
      },
    },
  },
  plugins: [],
};