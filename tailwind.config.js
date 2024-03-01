/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "heading": "var(--font-heading)",
      "content": "var(--font-content)",
      "cursive": "var(--font-cursive)",
    },
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
        'dark': '#c46c3f',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/typography'),
  ],
}
