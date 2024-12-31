import FacebookIcon from "@/components/ui/svg/FacebookIcon";
import InstIcon from "@/components/ui/svg/InstIcon";
import MailIcon from "@/components/ui/svg/MailIcon";

export const _siteUrl = process.env.NEXT_PUBLIC_URL_BASE || "http://localhost:3000";

export const _mail = "hello@zernocoffee.com";
export const _phone = "";

export const _googleLink = "";
export const _facebook = "https://www.facebook.com/share/18pJ3jk5N3/?mibextid=wwXIfr";
export const _instagram = "https://www.instagram.com/zerno_coffeecart?igsh=dnNjOXh0d25lZ3V4";

export const _linkedin = "";

export const MenuLinks = [
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Services",
		href: "#services",
	},
	{
		label: "Menu",
		href: "#menu",
	},
	{
		label: "FAQ",
		href: "#faq",
	},
];

export const Social = [
	{ href: "mailto:" + _mail, Icon: MailIcon },
	{ href: _instagram, Icon: InstIcon, target: "_blank" },
	{ href: _facebook, Icon: FacebookIcon, target: "_blank" },
];
