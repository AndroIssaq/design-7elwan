/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*components*/*.{js,ts,jsx,tsx}",
    "./src/*pages*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main':'#F0F0F0',
        'second':'#A9A3A6',
        'third':'#BA2222',
      },
      colors:{
        'main':'#F0F0F0',
        'second':'#A9A3A6',
        'third':'#BA2222',
        'fourth':'#0F0E0E'
      }
    },
  },
  plugins: [],
}
