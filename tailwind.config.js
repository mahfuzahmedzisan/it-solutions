/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards', // Custom slide-up animation
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },

    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'xl': '1500px',
      },
    },
  },
  plugins: [],
}

