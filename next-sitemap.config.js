/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://chemins-du-lien.fr',
  generateRobotsTxt: false,
  exclude: ['/admin'],
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const staticPaths = ['/', '/a-propos', '/decouvrir', '/processus']

    return staticPaths.map((path) => ({
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))
  },
}
