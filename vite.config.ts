import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// static adapter: outputs the site as plain files for GitHub Pages.
			// See https://svelte.dev/docs/kit/adapter-static for more information about adapters.
			adapter: adapter({
				pages: 'dist'
			})
		})
	]
});
