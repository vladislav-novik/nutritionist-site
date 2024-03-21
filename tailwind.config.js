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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.primary')
            '--tw-prose-body': theme('colors.primary'),
            '--tw-prose-headings': theme('colors.primary-dark'),
            '--tw-prose-lead': theme('colors.primary'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.primary'),
            '--tw-prose-counters': theme('colors.primary'),
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-hr': theme('colors.primary'),
            '--tw-prose-quotes': theme('colors.primary'),
            '--tw-prose-quote-borders': theme('colors.primary'),
            '--tw-prose-captions': theme('colors.primary'),
            '--tw-prose-code': theme('colors.primary'),
            '--tw-prose-pre-code': theme('colors.primary'),
            '--tw-prose-pre-bg': theme('colors.primary'),
            '--tw-prose-th-borders': theme('colors.primary'),
            '--tw-prose-td-borders': theme('colors.primary'),
            '--tw-prose-invert-body': theme('colors.primary'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary'),
            '--tw-prose-invert-bullets': theme('colors.primary'),
            '--tw-prose-invert-hr': theme('colors.primary'),
            '--tw-prose-invert-quotes': theme('colors.primary'),
            '--tw-prose-invert-quote-borders': theme('colors.primary'),
            '--tw-prose-invert-captions': theme('colors.primary'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.primary'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.primary'),
            '--tw-prose-invert-td-borders': theme('colors.primary'),
          },
        }
      }),
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/typography'),
  ],
}
