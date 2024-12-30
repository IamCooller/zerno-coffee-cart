import React from "react";
import Image from "next/image";
import AnimatedGrid from "@/components/Animations/AnimatedGrid";
const EventSection = () => {
	const events = [
		{
			src: "/icons/confetti.svg",
			alt: "confetti",
			title: "Wedding & Gatherings",
			description: "Private Events, Birthdays, Showers, & more",
		},
		{
			src: "/icons/corporate.svg",
			alt: "corporate",
			title: "Corporate Events",
			description: "Offices, Conferences, Churches, Schools",
		},
		{
			src: "/icons/retail.svg",
			alt: "retail",
			title: "Retail",
			description: "Grand Openings, Activations, Exhibits",
		},
	];
	return (
		<section className="py-[60px] ">
			<div className="container ">
				<h2 className=" font-sukar font-bold text-[32px] text-center w-full mb-[60px] text-brown">Mobile Coffee Cart and Espresso Bar Catering</h2>
				<AnimatedGrid className="flex justify-center md:justify-between flex-wrap gap-[24px]">
					{events.map((event, index) => (
						<div key={index} className="flex-center justify-between flex-col max-w-[274px] text-center mx-auto w-full">
							<Image src={event.src} alt={event.alt} width={64} height={64} className="mb-[32px] " />
							<h3 className="font-sukar font-bold text-[24px] mb-[24px] text-brown">{event.title}</h3>
							<p>{event.description}</p>
						</div>
					))}
				</AnimatedGrid>
			</div>
		</section>
	);
};

export default EventSection;
