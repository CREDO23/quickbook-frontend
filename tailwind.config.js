/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-900' : '#030F26',
        'blue-800' : '#071A40',
        'blue-700' : '#0C2659',
        'blue-600' : '#103173',
        'blue-500' : '#143C8C',
        'yellow-900' : '#F29F05',
        'yellow-800' : '#F2B705',
        'yellow-700' : '#F2CB05',
        'yellow-600' : '#F2E205',
        'gray-900' : '#404040',
        'gray-800' : '#595959',
        'gray-700' : '#BFBFBF',
        'gray-600' : '#D9D9D9',
        'gray-500' : '#F2F2F2',
        'red': '#FF0104',
        
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
