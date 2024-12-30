import React from "react";
import AnimatedGrid from "@/components/Animations/AnimatedGrid";
import ConfettiIcon from "@/components/ui/svg/ConfettiIcon";
import CorporateIcon from "@/components/ui/svg/CorporateIcon";
import RetailIcon from "@/components/ui/svg/RetailIcon";
const EventSection = () => {
	const events = [
		{
			icon: ConfettiIcon,
			alt: "confetti",
			title: "Wedding & Gatherings",
			description: "Private Events, Birthdays, Showers, & more",
		},
		{
			icon: CorporateIcon,
			alt: "corporate",
			title: "Corporate Events",
			description: "Offices, Conferences, Churches, Schools",
		},
		{
			icon: RetailIcon,
			alt: "retail",
			title: "Retail",
			description: "Grand Openings, Activations, Exhibits",
		},
	];
	return (
		<section className="py-[60px] " id="services">
			<div className="container ">
				<h2 className=" font-sukar font-bold text-[32px] text-center w-full mb-[60px] text-brown">Mobile Coffee Cart and Espresso Bar Catering</h2>
				<AnimatedGrid className="flex justify-center md:justify-between flex-wrap gap-[24px]">
					{events.map((event, index) => (
						<div key={index} className="flex-center justify-between flex-col max-w-[274px] text-center mx-auto w-full text-black hover:text-brown">
							<div className="mb-[32px] w-[64px] h-[64px] ">
								<event.icon />
							</div>
							<h3 className="font-sukar font-bold text-[24px] mb-[24px] ">{event.title}</h3>
							<p>{event.description}</p>
						</div>
					))}
				</AnimatedGrid>
			</div>
		</section>
	);
};

export default EventSection;
