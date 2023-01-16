/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow-900': '#F9A21D',
        'custom-yellow-800': '#FFCA28',
        'custom-yellow-700': '#FBB954',
        'custom-yellow-600': '#FFD92F',
        'custom-yellow-50': '#FCD89F',
        'custom-orange-50': '#F0DAB7',
        'custom-orange-20': '#FEEED5',
        'custom-gray-50': '#F5F6FA',
        'custom-gray-100': '#A69F9F',
        'custom-gray-700': '#374151',
        'custom-blue-600': '#1F78B4',
        'custom-blue-300': '#8DA0CB',
        'custom-green-700': '#15C656',
        'custom-green-400': '#A6D854',
        'custom-black': '#0A0A0A',
        'custom-orange-300': '#A6D854',
        'custom-gray-20': '#DEDEDE',
        'custom-violet': '#E78AC3',
        'custom-lime': '#66C2A5',
        'custom-red-800': '#BD0026',
      },
      fontFamily: {
        'custom-family': 'Poppins , Sans Serif',
      },
      fontSize: {
        'custom-xs': ['0.75rem', '1rem'],
        'custom-sm': ['0.87rem', '1.25rem'],
        'custom-base': ['1rem', '1.5rem'],
        'custom-lg': ['1.12rem', '1.75rem'],
        'custom-xl': ['1.25rem', '1.75rem'],
        'custom-2xl': ['1.5rem', '2rem'],
        'custom-3xl': ['1.87rem', '2.25rem'],
      },
      backgroundImage : {
        'login-bg' : "url('/public/login-bg.png')"
      }
    },
  },
  plugins: [],
};
