"use client";

import Boundary from "@/components/ui/boundary";
import React from "react";

interface ErrorProps {
	error: { message: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	React.useEffect(() => {
		console.error("logging error:", error);
	}, [error]);

	return (
		<Boundary labels={["./error.tsx"]} color="pink">
			<div className="space-y-4">
				<h2 className="text-lg font-bold">Error</h2>
				<p className="text-sm">{error?.message}</p>
				<div>
					<button className="button" onClick={() => reset()}>
						Try Again
					</button>
				</div>
			</div>
		</Boundary>
	);
}
