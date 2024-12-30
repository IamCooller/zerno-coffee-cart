"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import { MenuLinks, Social } from "@/lib/constants";
import { SlideFromTopComponent } from "../Animations";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className=" py-[12px] md:pt-[40px] md:px-[16px] md:pb-[40px]">
			<SlideFromTopComponent>
				<div className="flex justify-between items-center max-md:container">
					<Menu links={MenuLinks} setIsMenuOpen={setIsMenuOpen} social={Social} />
					<Link href={"/"} className="max-md:-order-1 md:mx-auto relative z-20 " title="logo" aria-label="logo">
						<Image
							src="/logo.svg"
							alt="logo"
							width={74}
							height={62}
							className={`transition-all duration-300 ${isMenuOpen ? "invert mix-blend-difference" : ""}`}
							priority
							title="logo"
							aria-label="logo"
						/>
					</Link>

					<div className="space-x-[24px] hidden md:flex  flex-1 justify-end">
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
			</SlideFromTopComponent>
		</header>
	);
};

export default Header;
