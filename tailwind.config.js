/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
        'main': '#232529',
        'main-ciyan':'#12a4c3'
      },
      backgroundImage: {
        'hero-image-woman': "url('/public/gospodja.png')",
      
      },
      screens: {
        'trougao': {'min': '1040px', 'max': '1280px'},
      }
    },
  },
  plugins: [],
}