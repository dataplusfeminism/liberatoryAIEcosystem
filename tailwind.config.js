/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '1.5em': '1.5em', // Add a specific value if needed
      },
    },
  },
  plugins: [],
}

