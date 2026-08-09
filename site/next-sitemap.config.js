/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const publishedKnowledgeBaseSlugs = require("./src/lib/published-knowledge-base.json");
const publishedKnowledgeBasePaths = new Set(
  publishedKnowledgeBaseSlugs.map((slug) => `/knowledge-base/${slug}`)
);

module.exports = {
  siteUrl: "https://www.jinlingmetals.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/get-quote"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    if (
      path.startsWith("/knowledge-base/") &&
      !publishedKnowledgeBasePaths.has(path)
    ) {
      return null;
    }

    // Higher priority for main pages
    const highPriority = ["/", "/products", "/surfaces", "/grades", "/solutions", "/resources"];
    const mediumPriority = ["/resources/stainless-steel-guides", "/insights", "/datasheets", "/about", "/contact"];

    let priority = 0.7;
    if (highPriority.includes(path)) priority = 1.0;
    else if (mediumPriority.includes(path)) priority = 0.8;
    else if (path.startsWith("/knowledge-base/")) priority = 0.6;

    return {
      loc: path,
      changefreq: path === "/insights" ? "daily" : "weekly",
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

