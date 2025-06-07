/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.parther.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [],
  outDir: './public',
};
