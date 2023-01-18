/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        kalam: ['Kalam', 'cursive'],
        neucha: ['Neucha', 'cursive'],
        comic: ['Comic Neue', 'cursive'],
        opensans: ['Open Sans', 'cursive'],


      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
