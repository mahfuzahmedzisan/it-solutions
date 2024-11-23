/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.5s ease-in',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: 0
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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'emerald', 'dark', 'winter'],
    darkTheme: 'light',
  }
}

