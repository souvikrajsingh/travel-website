/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      MyFont: ['"My Font"', 'serif']
      // Make sure that "Montserrat" and "My Font" are correct font names or font stacks
    },
  },
  plugins: [],
}
