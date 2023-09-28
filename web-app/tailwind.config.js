/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0BA9C9',
        'secondary': '#3A0074',
      },
    },
  },
  plugins: [],
}
