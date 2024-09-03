/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://jinchuanghr.com",
    generateRobotsTxt: true,
    changefreq: "weekly",
    outDir: "out",
    exclude: [],
};
