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
        },

        green: "#D7FEC9",
        pink: "#FFC3B6",
        blue: "#C0F0FF",
        yellow: "#FAE395",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
