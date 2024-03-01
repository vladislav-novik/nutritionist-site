/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        'primary': '#1f525e',
        'primary-dark': '#00373e',
        'secondary': '#94954c',
        'tetriary': '#cafff2',
        'accent': '#fbad9c',
        'btn-border': '#d6cfc4',
        'light': '#f8f6f5',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/typography'),
  ],
}
