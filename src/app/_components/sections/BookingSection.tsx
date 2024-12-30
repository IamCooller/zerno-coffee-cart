import React from "react";
import FormBlock from "../ui/FormBlock";
import { SlideFromLeftComponent, SlideFromRightComponent } from "@/components/Animations";

const BookingSection = () => {
	return (
		<section className="py-[60px]" id="booking">
			<div className="container">
				<div className="grid md:grid-cols-2 gap-[60px] md:gap-4">
					<SlideFromLeftComponent className="">
						<h3 className=" font-sukar font-bold text-[32px] text-brown mb-[24px]">Booking Form</h3>
						<p>
							Contact us to book our services and enjoy a luxurious coffee catering experience. Whether it’s a wedding, corporate event, or private party, we’ll serve the finest coffee
							to make your event unforgettable.
						</p>
					</SlideFromLeftComponent>
					<SlideFromRightComponent>
						<FormBlock />
					</SlideFromRightComponent>
				</div>
			</div>
		</section>
	);
};

export default BookingSection;
