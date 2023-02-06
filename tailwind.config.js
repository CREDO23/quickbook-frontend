/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-10' : '#0D244D',
        'blue-8' : '#113066',
        'blue-6' : '#143673',
        'blue-4' : '#1E55B3',
        'blue-2' : '#2973F2',
        'yellow' : '#F2B705',
        'red' : '#FE4D4F'
      },
      fontFamily: {
        'custom-family': 'Poppins , Sans Serif',
      },
      backgroundImage : {
        'login-bg' : "url('/public/login-bg.png')"
      }
    },
  },
  plugins: [],
};
