import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";

import { _phone, _siteUrl } from "@/lib/constants";
import { arimo, sukar } from "@/styles/fonts/fonts";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowClient from "./SnowClient";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Head from "next/head";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

const title = "Zerno Coffee - Specialty Coffee Cart Catering in Philadelphia, PA";
const description =
	"Elevate your occasion in Philadelphia with Zerno Coffee's specialty coffee cart catering. Enjoy a variety of drinks including Espresso, Americano, Cappuccino, and Hot/Iced Latte for private, corporate, and retail events.";

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
		images: [{ url: "/logo.svg", width: 74, height: 62, alt: "Zerno Coffee Cart" }],
	},
	robots: {
		index: true,
		follow: true,
	},

	applicationName: "Zerno Coffee Cart",
	appleWebApp: {
		title: "Zerno Coffee Cart",
		statusBarStyle: "default",
		capable: true,
	},

	icons: {
		icon: [
			{ url: "/favicon.ico", type: "image/x-icon" },
			{ url: "/icon.png", sizes: "512x512", type: "image/png" },
		],
		shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
		apple: [{ url: "/apple-icon.png", type: "image/png" }],
	},
	other: {
		keywords: "coffee catering, specialty coffee, event catering, coffee cart rental, Zerno Coffee, coffee for events, Philadelphia, PA, Espresso, Americano, Cappuccino, Latte",
		author: "Zerno Coffee",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Zerno Coffee",
	description: description,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Philadelphia",
		addressRegion: "PA",
		addressCountry: "US",
	},
	telephone: _phone,
	url: _siteUrl.startsWith("http") ? _siteUrl : `https://${_siteUrl}`,
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<>
					<link rel="canonical" href={_siteUrl.startsWith("http") ? _siteUrl : `https://${_siteUrl}`} />
					<Script id="structured-data" strategy="beforeInteractive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
				</>
			</Head>

			<body className={`${arimo.className} ${sukar.variable} overflow-x-hidden`}>
				<Header />
				<main className="min-h-screen">
					{children}
					<div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-4 text-center z-50 pointer-events-none ">
						<h1 className="font-bold">Banner Text for Unpaid Projects: </h1>
						<p>
							We regret to inform you that despite completing our work to the highest standards, this company has failed to compensate us for our services. <br /> We advise caution when
							dealing with this company, as we cannot guarantee they will uphold their commitments. <br />
							For further inquiries, feel free to contact us.
						</p>
					</div>
				</main>
				<SnowClient />
				<Footer />
				<Toaster />
				{process.env.NODE_ENV === "production" && (
					<>
						<GoogleAnalytics gaId={"G-588P78JMG2"} />
						{/* other scripts */}
					</>
				)}
			</body>
		</html>
	);
}
