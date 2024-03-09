/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin');

//
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#282828',
        accent: '#458588',
      },
    },
    textShadow: {
      DEFAULT: '0px 0px 16.5px #458588',
    },
  },
  plugins: [
    // https://www.kindacode.com/snippet/text-shadows-in-tailwind-css/
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
