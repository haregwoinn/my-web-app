/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'purple': '#D484CB',
      'blue': '#6F3AF4',
      'black': '#181722',
      'brown': '#DDDDDD',
      'blueblack':'#391A91',
      'slate':'#e2e8f0',
    },
    fontFamily:{
      roboto:['Montserrat']
    }
  },
  plugins: [],
}

