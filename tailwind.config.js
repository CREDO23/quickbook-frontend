/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-10' : '#212886',
        'blue-5' : '#5163C2',
        'blue-1' : '#B2BAE4',
        'white-1' : '#EDF3FE',
        'yellow' : '#DF8B1A',
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
