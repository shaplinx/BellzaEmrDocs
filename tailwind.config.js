const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {
        primary: {
          DEFAULT: 'var(--ifm-color-primary)',        // Default primary color
          dark: 'var(--ifm-color-primary-dark)',      // Darker shade
          darker: 'var(--ifm-color-primary-darker)',  // Even darker shade
          darkest: 'var(--ifm-color-primary-darkest)',// Darkest shade
          light: 'var(--ifm-color-primary-light)',    // Lighter shade
          lighter: 'var(--ifm-color-primary-lighter)',// Even lighter shade
          lightest: 'var(--ifm-color-primary-lightest)', // Lightest shade
        },
        highlightedCodeLineBg: {
          light: 'var(--docusaurus-highlighted-code-line-bg)', // Highlighted line in light mode
          dark: 'var(--docusaurus-highlighted-code-line-bg)',  // Highlighted line in dark mode
        },
      },
    },
  },
  plugins: [],
};