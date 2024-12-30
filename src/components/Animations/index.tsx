"use client";
import { motion } from "framer-motion";

import { ReactNode } from "react";

declare type SupportedEdgeUnit = "px" | "vw" | "vh" | "%";
declare type EdgeUnit = `${number}${SupportedEdgeUnit}`;
declare type NamedEdges = "start" | "end" | "center";
declare type EdgeString = NamedEdges | EdgeUnit | `${number}`;
declare type Edge = EdgeString | number;
declare type ProgressIntersection = [number, number];
declare type Intersection = `${Edge} ${Edge}`;

type PageWrapperProps = {
	children?: ReactNode;
	delay?: number;
	className?: string;
	addClass?: string;
	once?: boolean;
	duration?: number;
	direction?: [string, string, string];
	offset?: Array<Edge | Intersection | ProgressIntersection>;
	transform?: string[];
	timeline?: number[];
};
// Fades in the component when it's in view.

export const FadeInComponent = ({ children, delay, once = true, className = "" }: PageWrapperProps) => {
	return (
		<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: delay || 0.5 }} viewport={{ once: once, amount: "some" }} className={className}>
			{children}
		</motion.div>
	);
};
// Slides the component from the left into its original position when in view.

export const SlideFromLeftComponent = ({ children, className, duration = 0.5, once = true }: PageWrapperProps) => (
	<motion.div whileInView={{ x: ["-100%", 0] }} transition={{ duration: duration }} viewport={{ once: once || false, amount: "some" }} className={className}>
		{children}
	</motion.div>
);
// Slides the component from the right into its original position when in view.

export const SlideFromRightComponent = ({ children, className, delay, once = true }: PageWrapperProps) => (
	<motion.div whileInView={{ x: ["100%", 0] }} transition={{ duration: delay || 0.5 }} viewport={{ once: once || false, amount: "some" }} className={className}>
		{children}
	</motion.div>
);
// Slides the component from the bottom into its original position when in view.

export const SlideFromBottomComponent = ({
	children,
	delay,
	className,
	once = true, // change default value to true
}: PageWrapperProps) => (
	<motion.div whileInView={{ y: [100, 0] }} viewport={{ once: once || false, amount: "some" }} transition={{ duration: delay || 0.5 }} className={className}>
		{children}
	</motion.div>
);
// Slides the component from the top into its original position when in view.

export const SlideFromTopComponent = ({ children }: PageWrapperProps) => (
	<motion.div whileInView={{ y: [-100, 0] }} viewport={{ once: true, amount: "some" }} transition={{ duration: 0.5 }}>
		{children}
	</motion.div>
);
