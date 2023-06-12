/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        autopass: '#1ebec1',
        'autopass-dark': '#1ebdc1a3',
        'autopass-light': '#79d2d5',
      },
      dropShadow: {
        autopass: '-6px 7px 4px #00000080',
      },
      translate: {
        '6px': '6px',
        '7px': '7px',
      },
    },
  },
  plugins: [],
};
