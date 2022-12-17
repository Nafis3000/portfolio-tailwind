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
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)' },
          '100%': { filter: 'blur(0px)' },
      },
        allIn: {
          '0%': { opacity: 0, transform: 'translateX(-100%)', filter: 'blur(10px)' },
          '100%': { opacity: 1, transform: 'translateX(0%)', filter: 'blur(0px)' },
        },
    },
    animation: {
        'fade-in': 'fadeIn 3s ease-out',
        'fade-out': 'fadeOut 2s ease-in-out',
        'slide-in': 'slideIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        'blur-in': 'blurIn 1s ease-out',
        'all-in': 'allIn 1.5s ease-out',
      },
  },
  plugins: [require("tailwindcss-animation-delay")],
  }
}