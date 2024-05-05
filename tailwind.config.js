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
      backgroundImage: {
        'hero-pattern': "url('/images/leaf.png')",
      },
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        'btn-border': '#d6cfc4',
        'main': '#F3FBF2',
        'accent': '#3C8FC3',

        'brand': {
          DEFAULT: "#4CC33C",
          dark: "#1d4b17",
          darker: "#21541a",
          darkest: "#122e0e",

          "green-light": "#e3ffd8",
          green: "#D7FEC9",
          "green-dark": "#bdffa6",
          "green-text": "#003D24",
          "pink-light": "#ffd9d1",
          pink: "#FFC3B6",
          "pink-dark": "#ffae9d",
          "pink-text": "#673125",
          "blue-light": "#d3f5ff",
          blue: "#C0F0FF",
          "blue-dark": "#a0e8ff",
          "blue-text": "#0A4153",
          "yellow-light": "#ffefb3",
          yellow: "#FAE395",
          "yellow-dark": "#ffde6f",
          "yellow-text": "#504316",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
