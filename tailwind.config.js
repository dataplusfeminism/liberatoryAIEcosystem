/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '1.5em': '1.5em', // Add a specific value if needed
      },
      colors: {
        'primary': '#ffbe0b',
        'secondary': '#fb5607',
        'tertiary': '#ff006e',
        'alert': '#ff006e',
        'visited': '#8338ec'
      }
    },
  },
  plugins: [],
}

