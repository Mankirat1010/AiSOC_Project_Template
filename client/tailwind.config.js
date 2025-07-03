/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#353941',
        'deep-gray': '#26282B',
        'mid-blue': '#5F85DB',
        'light-blue': '#90B8F8',
        'dark-blue': '#466FCC',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}