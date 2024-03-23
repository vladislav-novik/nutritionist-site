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
        'btn-border': '#d6cfc4',

        'brand': {
          lightest: "#f0f9f0",
          lighter: "#e6f9dd",
          light: "#d7fec9",
          DEFAULT: "#219d6c",
          dark: "#006a42",
          darker: "#004e2f",
          darkest: "#003d24",

          green: "#D7FEC9",
          "green-dark": "#003D24",
          pink: "#FFC3B6",
          "pink-dark": "#673125",
          blue: "#C0F0FF",
          "blue-dark": "#0A4153",
          yellow: "#FAE395",
          "yellow-dark": "#504316",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
