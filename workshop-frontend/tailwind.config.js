/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff3131',
        secondary: '#333330',
        tertiary: '#f3f3f3' 
      },
      fontFamily: {
        arimo: ['arimo', 'sans-serif'],
        sofia: ['Sofia Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
