import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://obrignoni.b-cdn.net',
	integrations: [
		preact(),
		react(),
		tailwind(),
		// partytown(), 
		sitemap(),
	]
});