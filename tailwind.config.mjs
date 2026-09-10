/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#faf6f6',
          100: '#f3e8ea',
          200: '#e8d0d4',
          300: '#d4a8b0',
          400: '#b96f7c',
          500: '#9c4454',
          600: '#853344',
          700: '#6e2a3a',
          800: '#5c2634',
          900: '#4f2330',
          950: '#2c1018',
        },
        gold: {
          300: '#e3c78a',
          400: '#d4b06a',
          500: '#c49a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
