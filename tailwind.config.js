/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors:{
          my_color: '#4dcb7a',
        }
      },
    },
    plugins: [],
  };