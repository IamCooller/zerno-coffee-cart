import type { Metadata } from "next";
import "@/styles/globals.scss";

import { _siteUrl } from "@/lib/constants";
import { arimo, sukar } from "@/styles/fonts/fonts";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowClient from "./SnowClient";

import Script from "next/script";

const title = "Zerno Coffee - Specialty Coffee Cart Catering in Philadelphia, PA";
const description =
	"Elevate your occasion in Philadelphia with Zerno Coffee's specialty coffee cart catering. Enjoy a variety of drinks including Espresso, Americano, Cappuccino, and Hot/Iced Latte for events, festivals, and gatherings.";

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

	other: {
		keywords: "coffee catering, specialty coffee, event catering, coffee cart rental, Zerno Coffee, coffee for events, Philadelphia, PA, Espresso, Americano, Cappuccino, Latte",
		author: "Zerno Coffee",
		title: title,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-588P78JMG2"></Script>
			<Script
				id="gtag-init"
				dangerouslySetInnerHTML={{
					__html: `
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		  gtag('config', 'G-588P78JMG2');
		`,
				}}
			/>
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
