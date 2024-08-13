/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#1f2937',
        customGreen: '#86efac',
        customPurple: '#c084fc',
      },
      spacing: {
        '4/5': '80%',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
}
