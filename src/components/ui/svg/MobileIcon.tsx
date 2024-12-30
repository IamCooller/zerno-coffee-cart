import { motion } from "framer-motion";
import React from "react";

const MobileIcon = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
			<motion.path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				initial={{ d: "M3 12h18M3 6h18M3 18h18" }}
				animate={{
					d: isOpen ? "M18 6 6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18",
					stroke: isOpen ? "#fff" : "#000",
				}}
				exit={{ d: "M3 12h18M3 6h18M3 18h18" }}
			></motion.path>
		</svg>
	);
};

export default React.memo(MobileIcon);
