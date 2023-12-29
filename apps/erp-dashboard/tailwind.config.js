const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/erp-dashboard/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
