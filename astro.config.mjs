import svelte from '@astrojs/svelte';
import playformCompress from '@playform/compress';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [svelte(), playformCompress()],
});
