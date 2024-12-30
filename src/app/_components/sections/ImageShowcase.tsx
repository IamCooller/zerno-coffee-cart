import React from "react";
import Image from "next/image";
const ImageShowcase = () => {
	return (
		<section className="py-[60px]" id="gallery">
			<div className="flex gap-[24px] max-md:flex-col max-md:container">
				<div className=" aspect-video w-full  rounded-[24px] overflow-hidden relative">
					<Image src="/12.png" alt="coffee" fill className=" object-cover" />
				</div>
				<div className=" aspect-video w-full rounded-[24px] overflow-hidden relative">
					<Image src="/3.png" alt="coffee" fill className=" object-cover" />
				</div>
				<div className=" aspect-video w-full  rounded-[24px] overflow-hidden relative">
					<Image src="/23.png" alt="coffee" fill className=" object-cover" />
				</div>
			</div>
		</section>
	);
};

export default ImageShowcase;
