const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/erp-dashboard/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          original: "#4c6085",
          dark: "#35435d",
          light: "#8290aa",
          superdark: "#1e2635",
          superlight: "#b7bfce",
        },
        secondary: {
          original: "#32322c",
          dark: "#23231f",
          light: "#70706b",
          superdark: "#141412",
          superlight: "#adadab",
        },
      },
    },
  },
  plugins: [],
};
