/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Jost',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      colors: {
        gray: 'rgba(175, 175, 175)',
        borderGray: 'rgba(112, 112, 112)',
        blue: 'rgba(69, 157, 233)',
        liteGray: 'rgba(197, 197, 197)',
        orange: 'rgba(255, 162, 91)',
        liteOrange: 'rgba(255, 250, 241)',
        liteBlue: 'rgba(241, 242, 255)',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      boxShadow: {
        DEFAULT: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
};
