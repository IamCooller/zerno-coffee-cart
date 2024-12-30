"use client";
import React from "react";

const BackToTop = () => {
	return (
		<button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-brown transition-colors duration-300 ease-in-out" title="Back to top" aria-label="Back to top">
			Back to top
		</button>
	);
};

export default BackToTop;
