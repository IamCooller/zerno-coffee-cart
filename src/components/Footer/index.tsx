import { MenuLinks, Social } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BackToTop from "../ui/BackToTop";
import { SlideFromBottomComponent } from "../Animations";
const Footer = () => {
	return (
		<footer>
			<SlideFromBottomComponent>
				<div className="md:px-[16px] border-y-brown border-y py-[48px] max-md:gap-[24px] gap-4 flex justify-between max-md:flex-col items-center max-md:container">
					<nav className="flex max-md:flex-col max-md:order-1 items-center gap-[24px]  flex-1">
						{MenuLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className={`text-base hover:text-brown hover:scale-110 transition-all duration-300 ease-in-out `}
								title={link.label}
								aria-label={link.label}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<Link href={"/"} className=" md:mx-auto relative " title="logo" aria-label="logo">
						<Image src="/logo-small.svg" alt="logo" width={72} height={39} title="logo" aria-label="logo" />
					</Link>
					<div className="space-x-[24px] flex   flex-1 justify-end">
						{Social.map(({ href, Icon, target }, index) => (
							<Link
								key={index}
								href={href}
								className="text-black hover:text-brown transition-all duration-300 ease-in-out hover:scale-110"
								target={target}
								title={href}
								aria-label={href}
							>
								<Icon />
							</Link>
						))}
					</div>
				</div>
				<div className="md:px-[16px]  py-[24px] flex justify-between gap-4 items-center max-md:flex-col max-md:container">
					<p className="flex-1">® 2025, ZERNO Coffee Catering</p>
					<p>
						Site by{" "}
						<Link href="/" target="_blank" className=" underline hover:text-brown transition-colors duration-300 ease-in-out">
							Offthegrid
						</Link>
					</p>
					<div className="flex flex-1 justify-end">
						{" "}
						<BackToTop />
					</div>
				</div>
			</SlideFromBottomComponent>
		</footer>
	);
};

export default Footer;
