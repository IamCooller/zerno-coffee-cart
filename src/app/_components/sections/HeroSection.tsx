import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInComponent } from "@/components/Animations";
const HeroSection = () => {
	return (
		<section className="relative rounded-[24px] overflow-hidden bg-black" id="home">
			<Image fill src={"/main.png"} alt="main" className=" object-cover opacity-50 " priority quality={100} />
			<FadeInComponent className="container min-h-svh flex flex-col justify-center items-center max-w-[908px] text-center text-white relative z-[1]">
				<h1 className="font-sukar font-bold text-[48px] md:text-[60px] mb-[24px] leading-none">Specialty Coffee Cart Catering to Elevate Any Occasion</h1>
				<p className="flex items-center text-[24px] gap-[12px]">
					<Image src="/icons/map-pin.svg" alt="map-pin" width={24} height={24} />
					Philadelphia, PA
				</p>
				<Button href="#booking" title="Book Your Coffee Cart" aria-label="Book Your Coffee Cart" className="mt-[32px] ">
					Book Your Coffee Cart{" "}
				</Button>
			</FadeInComponent>
		</section>
	);
};

export default HeroSection;
