/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#36565E',
        'darkgreen': '#1a2a2d',
        'lightgreen': '#253C41',
        'darkergreen':'#21363A',
      },

    },
  },
  plugins: [],
}

