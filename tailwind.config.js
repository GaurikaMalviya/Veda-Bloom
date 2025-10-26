/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#B91C1C', // A rich red color inspired by the PDF
        'brand-dark-red': '#991B1B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default font
      },
    },
  },
  plugins: [],
}

