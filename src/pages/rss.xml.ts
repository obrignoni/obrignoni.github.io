// src/pages/rss.xml.js
import rss from '@astrojs/rss';

export const get = () => rss({
    // `<title>` field in output xml
    title: 'O. Brignoni',
    // `<description>` field in output xml
    description: 'Thoughts, books and tech.',
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: 'https://obrignoni.com',
    // site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./**/*.md'),
    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
  });