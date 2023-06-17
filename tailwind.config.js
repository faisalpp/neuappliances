/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'coxs': '375px',

      'xs': '425px',

      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',
      'coxl': '1340px',

      '2xl': '1440px',

      '3xl': '1680px',

      'maxxs': { 'max': '374.5px' },
      'maxcosm': { 'max': '424.5px' },
      'maxsm': { 'max': '575.5px' },
      'maxmd': { 'max': '767.5px' },
      'maxlg': { 'max': '991.5px' },
      'maxxl': { 'max': '1199.5px' },

      // min and max width breakpoints

      'lg-to-xl': { 'min': '992px', 'max': '1060px' },
    },
    extend: {
      colors: {
        'b1': '#071822',
        'b2': '#1B2A34',
        'b3': '#22A6AB',
        'b4': '#F8D357',
        'b5': '#FAFAFA',
        'b6': '#22A6AB',
        'b7': '#FF9B3E',
        'b8': '#EDF8F8',
        'b9': '#016FD0',
        'b10': '#2FB956',
        'b11': '#F5F5F5',
        'b12': '#2BD35A',
        'b13': '#2B9519',
        'b14': 'rgba(17,16,16,0.08)',
        'b15': 'rgba(17,16,16,0.8)',
        'b16': '#111010',
        'b17': '#5E5E5E',
        'b18': '#242424',
        'b19': '#C3C2C2',
        'b20': '#ECECEC',
        'b21': 'rgba(34,166,171,0.08)',
        't1': '#22A6AB',
        't2': '#333333',
      },
      fontFamily: {
        'reg': 'Montserrat'
      },
      spacing: {
        '100px': '100px',
        '120px': '120px',
        '60px': '60px',
      },
      boxShadow: {
        's1': '0px 10px 20px rgba(0,0,0,0.05)'
      },
      maxWidth: {
        '1680px': '1680px',
      }
    },
  },
  plugins: [],
}

