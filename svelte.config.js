// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	},
// 	preprocess: vitePreprocess()
// };

// export default config;


// svelte.config.js
// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const devBase = ''; // Base path for local development (no path prefix)
const prodBase = '/liberatoryAIEcosystem'; // Base path for GitHub Pages

export default {
  kit: {
    // Other options...
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? prodBase : devBase,
    },
    prerender: {
      entries: ['*'], // Ensure all pages are pre-rendered
      handleHttpError: 'warn' // (Optional) Suppresses 404 errors instead of throwing
    }
  },
};
