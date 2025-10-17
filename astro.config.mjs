import svelte from '@astrojs/svelte';
import playformCompress from '@playform/compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), playformCompress()],
});
