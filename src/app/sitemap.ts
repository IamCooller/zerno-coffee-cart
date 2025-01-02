import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://zernocoffee.com/",
			lastModified: "2025-01-01",
			changeFrequency: "weekly",
			priority: 0.5,
			images: ["https://zernocoffee.com/logo.svg"],
		},
	];
}
