/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'b1':'#071822',
        'b2':'#1B2A34',
        'b3':'#22A6AB',
        'b4':'#F8D357',
        'b5':'#FAFAFA',
        'b6':'#22A6AB',
        'b7':'#FF9B3E',
        'b8':'#EDF8F8',
        'b9':'#016FD0',
        'b10':'#2FB956',
        'b11':'#F5F5F5',
        't1':'#22A6AB',
      },
      fontFamily:{
        'reg':'Montserrat'
      }
    },
  },
  plugins: [],
}

