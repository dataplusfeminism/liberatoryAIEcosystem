/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '1.5em': '1.5em', // Add a specific value if needed
      },
      colors: {
        'primary': '#d3df4e',
        'secondary': '#fb5607',
        'tertiary': '#ff006e',
        'alert': '#ff006e',
        'hover': '#7f3f97',
        'visittext': '#d3df4e',
        'visitbox': '#839444',
        'background': '#4b6aaf',
        'body': '#d0d2d3'
      }
    },
  },
  plugins: [],
}

