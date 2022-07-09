import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// import kroki from "remark-kroki-plugin";

// https://astro.build/config
export default defineConfig({
	site: 'https://obrignoni.com',
	integrations: [
		preact(),
		react(),
		// tailwind({ applyBaseStyles: false }),
		// partytown(), 
		sitemap(),
	],
	markdown: {
		remarkPlugins: [
			'remark-gfm', 
			'remark-smartypants', 
			["remark-kroki-plugin", { krokiBase: 'https://kroki.io', lang: "kroki", imgRefDir: "../kroki", imgDir: "public/kroki" }],
        ],
	},
});