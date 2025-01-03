/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://zernocoffee.com",
	generateRobotsTxt: true,
	generateIndexSitemap: false, // Убираем индексный sitemap.xml
	sitemapSize: 0, // Отключаем разбивку
	changefreq: "weekly",
	priority: 0.7,
	exclude: ["/404", "/server-error"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
};
