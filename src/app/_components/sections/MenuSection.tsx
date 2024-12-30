import React from "react";

import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/svg/LoadingSpinner";

const MenuTabs = dynamic(() => import("../ui/MenuTabs"), {
	loading: () => (
		<div className="h-full w-full flex justify-center items-center">
			<LoadingSpinner />
		</div>
	),
});
const MenuSection = () => {
	return (
		<section className="py-[60px]" id="menu">
			<div className="container">
				<h2 className="font-sukar font-bold text-[32px] text-center w-full mb-[24px] text-brown">Menu</h2>
				<p className="text-center w-full mb-[48px]">Explore our menu of premium coffee and specialty drinks, crafted to delight every palate</p>
				<MenuTabs />
			</div>
		</section>
	);
};

export default MenuSection;
