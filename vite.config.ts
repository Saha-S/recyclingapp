import { sveltekit } from '@sveltejs/kit/vite'; // Importing the SvelteKit plugin
import type { UserConfig } from 'vite'; // Importing type for UserConfig from Vite

const config: UserConfig = {
	// Defining the configuration object
	plugins: [sveltekit()] // Adding the SvelteKit plugin to the Vite configuration
};

export default config; // Exporting the configuration
