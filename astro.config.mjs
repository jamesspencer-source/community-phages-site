import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repoName = 'community-phages-site';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://jamesspencer-source.github.io' : 'https://phages.hms.harvard.edu',
  base: isGitHubPages ? `/${repoName}` : '/',
  integrations: [sitemap()],
});
