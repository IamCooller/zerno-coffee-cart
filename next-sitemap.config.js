/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_URL_BASE, // URL вашего сайта
	generateRobotsTxt: true, // Генерация robots.txt
	sitemapSize: 5000, // Максимальное количество URL в sitemap
	changefreq: "weekly", // Частота обновления
	priority: 0.7, // Приоритет страниц
	exclude: ["/404", "/server-error"], // Исключить эти страницы
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		additionalSitemaps: [`${process.env.NEXT_PUBLIC_URL_BASE}/sitemap.xml`],
	},
};
