import type { Metadata } from "next";
import "@/styles/globals.scss";

import { _siteUrl } from "@/lib/constants";
import { arimo, sukar } from "@/styles/fonts/fonts";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowClient from "./SnowClient";

import Script from "next/script";

const title = "Zerno Coffee Cart | coffee cart catering | Philadelphia, PA, USA";
const description =
	"Zerno Coffee Cart is a specialty coffee cart with a full espresso bar based in Philadelphia, Pennsylvania. We offer coffee cart catering for private, corporate, and retail events.";

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
