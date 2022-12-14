import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	  }),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$src: 'src',
			$lib: 'src/lib',
			$styles: 'src/styles'
		},
		methodOverride: {
			allowed: ['PUT', 'PATCH' ,'DELETE']
		}
	}
};

export default config;
