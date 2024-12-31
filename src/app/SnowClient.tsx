"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowClient = () => {
	return (
		<div className="fixed top-0 left-0 z-50 w-full h-full pointer-events-none">
			<Snowfall />
		</div>
	);
};

export default SnowClient;
