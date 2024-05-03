/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: {
          max: '360px',
        },

        sm: {
          max: '576px',
        },
        md: {
          max: '768px',
          min: '576px',
        },
        lg: {
          max: '1200px',
          min: '768px',
        },
        xl: {
          max: '100vw',
          min: '1200px',
        },
      },
    },
  },
  plugins: [],
};
