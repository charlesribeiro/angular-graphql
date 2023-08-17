/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      width: {
        25: '25px',
        50: '50px',
        100: '100px',
      },
    },
  },
  plugins: [],
};
