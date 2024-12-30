import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const FAQSection = () => {
	const accordionItems = [
		{
			trigger: "Do you serve decaf or alternative milks?",
			content: "We offer oat milk, almond milk, and whole milk as part of our standard menu. We do not include decaf coffee as part of our service.",
		},
		{
			trigger: "What power & space requirements do you have? ",
			content: "We need a 6' by 5' space for the cart and baristas, and each setup requires one 15-amp circuit ",
		},
		{
			trigger: "What customization can you do?",
			content: "We can custom brand our cart and cups with your logo.",
		},

		{
			trigger: "What's included on your menu?",
			content: "Our menu includes espressos, lattes, cappuccinos, chai, and an option of four syrups to choose from. Drinks come hot or iced and we offer almond, oat, and whole milk.",
		},
	];
	return (
		<section className="py-[60px]">
			<div className="container">
				<div className="text-center mb-[60px]">
					{" "}
					<h3 className=" font-sukar font-bold text-[32px] text-brown mb-[24px]">Frequently Asked Questions</h3>
					<p>
						Got questions? We`ve got answers! Explore our FAQ to learn more about our coffee cart services, booking process, customization options, and what makes us the perfect choice for
						your event.
					</p>
				</div>

				<Accordion type="single" collapsible className="w-full space-y-[32px]">
					{accordionItems.map((item, index) => (
						<AccordionItem key={index} value={"value" + index}>
							<AccordionTrigger>{item.trigger}</AccordionTrigger>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default FAQSection;
