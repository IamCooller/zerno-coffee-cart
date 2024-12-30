import { Arimo } from "next/font/google";
import localFont from "next/font/local";

export const arimo = Arimo({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-arimo",
});

export const sukar = localFont({
	src: [
		{
			path: "./SukarBold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./SukarRegular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	weight: "normal",
	display: "swap",
	variable: "--font-sukar",
});
