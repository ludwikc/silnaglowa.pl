/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'truegray-800': '#262626',
        'truegray-900': '#171717',
        'truegray-100': '#F5F5F5',
        'blue-600': '#2563EB',
        'blue-50': '#EFF6FF',
        'truegray-50': '#FAFAFA',
        'indigo-900': '#312E81',
        'fuschia-600': '#C026D3',
        'fuschia-100': '#FAE8FF',
        'blue-900': '#1E3A8A',
        'teal-600': '#0D9488',
      },
      backgroundImage: {
        'purple-bg': 'linear-gradient(90deg, #86198F  0%, #D946EF 100%)',
        'card-bg': 'linear-gradient(114deg, #171717 2.89%, #1D4ED8 100.82%)',
        'card-bg2': 'linear-gradient(90deg, #3730A3 0%, #6366F1 100%)',
      },
      dropShadow: {
        '3xl': '0px 0px 5px rgba(0, 0, 0, 0.15)',
      },
      boxShadow: {
        '3xl': '0px 0px 10px 0px rgba(255, 255, 255, 0.08)',
        '4xl': '0px 0px 9px 0px rgba(68, 68, 68, 0.24)',
      },
      screens: {
        'xs': '375px',
        // => @media (min-width: 320px) { ... }

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1440px) { ... }
        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
}