import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MobileIcon from "../ui/svg/MobileIcon";
import Link from "next/link";

type Props = {
	setIsMenuOpen: (isOpen: boolean) => void;
	links: { label: string; href: string }[];
	social: { href: string; Icon: React.ComponentType; target?: string }[];
};

const Menu = ({ links, setIsMenuOpen, social }: Props) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsMenuOpen(isMobileMenuOpen);
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
			setIsMenuOpen(false);
		};
	}, [isMobileMenuOpen, setIsMenuOpen]);

	return (
		<>
			<nav className="hidden md:flex items-center gap-[24px]  flex-1">
				{links.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className={`text-base hover:text-brown transition-all hover:scale-110 duration-300 ease-in-out ${pathname === link.href ? "text-brown" : "text-black"}`}
						title={link.label}
						aria-label={link.label}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<div className="md:hidden ml-auto h-[24px]">
				<motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none relative z-20" title="Menu" aria-label="Menu">
					<MobileIcon isOpen={isMobileMenuOpen} />
				</motion.button>

				<motion.div
					initial="closed"
					animate={isMobileMenuOpen ? "opened" : "closed"}
					variants={{
						opened: { y: "0%", transition: { duration: 0.5 } },
						closed: { y: "-100%", transition: { duration: 0.5 } },
					}}
					className="overflow-hidden bg-brown text-white fixed top-0 right-0 bottom-0 left-0 z-10 pt-[88px]"
				>
					<div className="container flex flex-col h-full pb-[18px]">
						<motion.nav className="flex flex-col items-center py-6 gap-[46px] flex-1 justify-center">
							{links.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className="text-base hover:scale-110 transition-transform duration-300 ease-in-out"
									title={link.label}
									aria-label={link.label}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</motion.nav>
						<div className="space-x-[24px] flex justify-center items-center">
							{social.map(({ href, Icon, target }, index) => (
								<Link key={index} href={href} target={target} className="  hover:scale-110 transition-transform duration-300 ease-in-out" title={href} aria-label={href}>
									<Icon />
								</Link>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Menu;
