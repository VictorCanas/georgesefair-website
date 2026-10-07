/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-base':     '#1A1A1A',
        'dark-surface':  '#242424',
        'dark-muted':    '#2E2E2E',
        'gold':          '#C9952A',
        'gold-light':    '#D4A843',
        'gold-dark':     '#A07820',
        'light-base':    '#F5F3EE',
        'light-surface': '#EEEBE4',
      },
      fontFamily: {
        display: ['Anton', 'Bebas Neue', 'sans-serif'],
        bebas:   ['Bebas Neue', 'Anton', 'sans-serif'],
        heading: ['Montserrat', 'Plus Jakarta Sans', 'sans-serif'],
        body:    ['Inter', 'DM Sans', 'sans-serif'],
        label:   ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};
