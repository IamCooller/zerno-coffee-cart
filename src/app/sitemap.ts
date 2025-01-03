import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://zernocoffee.com/",
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
	];
}
