/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in',
        'fade-out': 'fadeOut 2s ease-in-out',
        'slide-in': 'slideIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      },
    },
  },
  plugins: [],
}
