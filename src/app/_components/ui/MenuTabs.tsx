"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MenuTabs = () => {
	const tabs = [
		{
			id: "drinks",
			label: "Drinks",
			content: [
				{ title: "Espresso", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Americano", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Cappuccino", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Latte (Hot/Iced)", imageSrc: "/drinks/1.png", span: 1 },
			],
		},
		{
			id: "milk",
			label: "Milk",
			content: [
				{ title: "Whole", imageSrc: "/drinks/1.png", span: 2 },
				{ title: "Almond", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Oat", imageSrc: "/drinks/1.png", span: 1 },
			],
		},
		{
			id: "flavors",
			label: "Flavors",
			content: [
				{ title: "Vanilla", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Caramel", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Hazelnut", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Seasonal", imageSrc: "/drinks/1.png", span: 1 },
			],
		},
		{
			id: "tea",
			label: "Tea",
			content: [
				{ title: "Black Loose Leaf", imageSrc: "/drinks/1.png", span: 1 },
				{ title: "Chai Latte", imageSrc: "/drinks/1.png", span: 2 },
				{ title: "Green Loose Leaf", imageSrc: "/drinks/1.png", span: 1 },
			],
		},
		{
			id: "decaf",
			label: "Decaf",
			content: [{ title: "Hot Chocolate", imageSrc: "/drinks/1.png", span: 4 }],
		},
	];

	const [activeTab, setActiveTab] = useState(tabs[0].id);

	const containerVariants = {
		center: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		enter: { opacity: 0, x: 50 },
		center: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -50 },
	};

	return (
		<div className="w-full">
			{/* Вкладки */}
			<div className="flex justify-center gap-[12px] md:gap-[24px] flex-wrap">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`inline-flex items-center justify-center whitespace-nowrap rounded-[48px] h-[42px] border text-brown ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 basis-1/4  md:basis-1/6  duration-300 ease-in-out transition relative ${
							activeTab === tab.id ? "text-white " : "hover:bg-brown hover:text-white hover:scale-110 active:scale-90"
						}`}
						title={tab.label}
						aria-label={tab.label}
						style={{ WebkitTapHighlightColor: "transparent" }}
					>
						{activeTab === tab.id && (
							<motion.span layoutId="bubble" className="absolute inset-0 z-10 bg-brown" style={{ borderRadius: 9999 }} transition={{ type: "spring", bounce: 0.3, duration: 0.5 }} />
						)}
						<span className="relative z-20">{tab.label}</span>
						<span className="sr-only"> {tab.label}</span>
					</button>
				))}
			</div>

			{/* Контент вкладок */}
			<div className="pt-[60px] max-md:px-[57px]">
				<AnimatePresence mode="wait">
					{tabs.map(
						(tab) =>
							activeTab === tab.id && (
								<motion.div key={tab.id} variants={containerVariants} transition={{ duration: 0.4 }} className="max-md:flex flex-col md:grid grid-cols-4 gap-[24px]">
									{tab.content.map((item, index) => (
										<motion.div
											key={index}
											variants={itemVariants}
											className="relative flex flex-col justify-between"
											initial="enter"
											animate="center"
											exit="exit"
											transition={{
												duration: 0.3,
												delay: index * 0.1,
											}}
											style={{
												gridColumn: `span ${item.span} / span ${item.span}`,
											}}
										>
											<h3 className="font-sukar font-bold text-[24px] mb-[24px] text-center">{item.title}</h3>
											<div className="w-full relative h-[248px]">
												<Image src={item.imageSrc} alt={item.title} fill className="rounded-[8px] object-cover" quality={100} />
											</div>
										</motion.div>
									))}
								</motion.div>
							)
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default MenuTabs;
