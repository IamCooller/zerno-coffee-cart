import { FadeInComponent } from "@/components/Animations";
import { Button } from "@/components/ui/button";
import { _mail } from "@/lib/constants";
import React from "react";

const CallToAction = () => {
	return (
		<section className="py-[120px]" id="contact">
			<div className="container">
				<FadeInComponent className="max-w-[714px] mx-auto text-center">
					<h3 className=" font-sukar font-bold text-[32px] text-brown mb-[24px]">Ready to Elevate Your Event?</h3>
					<p>Don’t wait – dates fill up quickly! Reach out today to secure our coffee cart for your next event. Premium service, perfectly priced.</p>
					<div className="flex justify-center mt-[48px] gap-[24px]">
						<Button href="#booking" className="w-[200px] border border-brown" title="Book Cart" aria-label="Book Cart">
							Book Cart
						</Button>
						<Button className="w-[200px] hover:scale-110" variant={"outline"} title="Contact Us" href={`mailto:${_mail}`} aria-label="Contact Us">
							Contact Us
						</Button>
					</div>
				</FadeInComponent>
			</div>
		</section>
	);
};

export default CallToAction;
