/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        'light-gray': '#8892B0',
        teal: '#64FFDA',
      },
      backgroundColor: {
        navy: '#0A192F',
      }
    },
  },
  plugins: [],
};