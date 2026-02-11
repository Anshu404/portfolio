module.exports = {
  siteUrl: 'https://portfolio-omega-sandy-57.vercel.app', // <-- Yahan maine tera Vercel link daal diya hai
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};