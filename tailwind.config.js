/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's':'0px',  
        'sm': '640px',
        'md': '768px',
        'c':'900px',
        'l':'1000px',
        'lg': '1115px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}