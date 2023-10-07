module.exports = {
  daisyui: {
    themes: ['light', 'dark'],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uv: {
          100: '#BAC1FC',
          200: '#99A5FC',
          300: '#7687FB',
          400: '#00213A',
          500: '#070C17',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
