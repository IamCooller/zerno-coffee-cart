import React from "react";
import Image from "next/image";
import { SlideFromLeftComponent, SlideFromRightComponent } from "@/components/Animations";
const FounderNote = () => {
	return (
		<section className="py-[60px]" id="about">
			<div className="container">
				<div className="grid md:grid-cols-2 gap-[54px]">
					<SlideFromLeftComponent className="">
						<h3 className=" font-sukar font-bold text-[32px] text-brown mb-[24px]">A Note From the Founder</h3>
						<div className="space-y-4">
							<p>Hi, my name is Daniel and I`m from a beautiful yet war-torn country named Ukraine.</p>
							<p>
								Ever since I can remember, I was an entrepreneur at heart, and at a young age I founded a family business that incorporated my family`s love of beekeeping with my
								passion for bringing quality products to friends, family, and strangers who quickly became family, through a shared passion for specialty food and drink.
							</p>
							<p>
								My business endeavors came to an abrupt halt when in February of 2022 my country was invaded, but my dreams refused to die. &quot;Zerno&quot;, the Ukrainian word for
								&quot;seed&quot;, &quot;grain&quot;, or &quot;bean&quot;, is symbolic for those dreams, that although buried for some time, still persist, grow, and bloom. I hope that
								through my specialty coffee cart, I can share the same vigor, energy, and vitality, with you.
							</p>
						</div>
					</SlideFromLeftComponent>
					<SlideFromRightComponent className=" h-full w-full max-md:aspect-square rounded-[24px] overflow-hidden relative">
						<Image src="/person.png" alt="coffee" fill className=" object-cover" quality={100} />
					</SlideFromRightComponent>
				</div>
			</div>
		</section>
	);
};

export default FounderNote;
