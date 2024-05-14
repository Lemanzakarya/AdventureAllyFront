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
        'darkgreen': '#253C41',
        'lightgreen': '#1a2a2d',
      },
    },
  },
  plugins: [],
}

