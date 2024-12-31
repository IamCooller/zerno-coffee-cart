import type { Metadata } from "next";
import "@/styles/globals.scss";

import { _siteUrl } from "@/lib/constants";
import { arimo, sukar } from "@/styles/fonts/fonts";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowClient from "./SnowClient";

const title = "Zerno Coffee Cart";
const description = "Zerno Coffee Cart is a coffee shop located in Philadelphia, PA. We offer a variety of coffee, tea, and pastries. Come visit us today!";

export const metadata: Metadata = {
	metadataBase: new URL(_siteUrl.startsWith("http") ? _siteUrl : `https://${_siteUrl}`),
	title: {
		template: `%s | ${title}`,
		default: title,
	},
	description: description,
	openGraph: {
		title: title,
		description: description,
		siteName: title,
		locale: "en_US",
		type: "website",
		images: [{ url: `/logo.svg`, width: 74, height: 62, alt: "Zerno Coffee Cart" }],
	},

	icons: {
		shortcut: [
			{ url: `/logo.svg`, media: "(prefers-color-scheme: light)" },
			{ url: `/logo-white.svg`, media: "(prefers-color-scheme: dark)" },
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${arimo.className} ${sukar.variable} overflow-x-hidden`}>
				<Header />
				<main className="min-h-screen">{children}</main>
				<SnowClient />
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
