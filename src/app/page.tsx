import Image from "next/image";

import HeroSection from "./_components/sections/HeroSection";
import EventSection from "./_components/sections/EventSection";
import MenuSection from "./_components/sections/MenuSection";
import BookingSection from "./_components/sections/BookingSection";
import FAQSection from "./_components/sections/FAQSection";
import FounderNote from "./_components/sections/FounderNote";
import CallToAction from "./_components/sections/CallToAction";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/svg/LoadingSpinner";
const LazyVideo = dynamic(() => import("@/components/ui/LazyVideo"), {
	loading: () => (
		<div className="h-full w-full flex justify-center items-center">
			<LoadingSpinner />
		</div>
	),
});
export default function Home() {
	return (
		<>
			<HeroSection />
			<section className="py-[60px]">
				<div className="container">
					<LazyVideo src="/ZERNO.mp4" />
				</div>
			</section>
			<EventSection />
			<section className="relative max-md:aspect-square md:h-[486px] xl:h-[600px]">
				<Image fill src="/main-2.png" alt="main-2" className="object-cover rounded-[24px]" quality={100} />
			</section>
			<MenuSection />
			<BookingSection />
			<FAQSection />
			<FounderNote />
			<CallToAction />
		</>
	);
}
