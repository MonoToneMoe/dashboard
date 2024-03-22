/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#333a56',
        gradientLeft: '#25d5d7',
        gradientRight: '#86d524',
        igLeft: '#fdc468',
        igRight: '#df4996',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

