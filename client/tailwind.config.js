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
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fira: ['Fira Mono', 'monospace'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end) forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
