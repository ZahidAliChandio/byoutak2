/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        // 'facility-1':"url('./src/static/imgages/facilites.png?v-120')"
      },      
    },
    fontFamily:{
      'open-sans':['Poppins-Regular','sans-serif','Open Sans'],
      'sans-serif':[ 'Poppins-Medium','sans-serif'],
    }
  },
  plugins: [],
};
