/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily:{
        mplus:["M PLUS 1", sans-serif],
        zmaru:["Zen Maru Gothic", sans-serif],
        zkaku:["Zen Kaku Gothic Antique", sans-serif],
        bizud:["BIZ UDGothic", sans-serif],
        
      },
      extend: {
        colors:{
          my_color: '#4dcb7a',
        }
      },
    },
    plugins: [],
  };