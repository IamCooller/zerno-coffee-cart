"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(
	({ className, children, ...props }, ref) => (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					"flex flex-1 items-center justify-between pb-[12px] text-[24px] font-bold font-sukar transition-all hover:text-brown text-left [&[data-state=open]>span>svg]:rotate-180 border-b border-b-brown",
					className
				)}
				{...props}
			>
				{children}

				<span className="h-[24px] w-[24px] relative shrink-0">
					<Minus className=" transition-transform duration-200 minus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
					<Minus className="transition-transform duration-200 minus rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
				</span>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
	({ className, children, ...props }, ref) => (
		<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
			<div className={cn("pb-4 pt-[12px]", className)}>{children}</div>
		</AccordionPrimitive.Content>
	)
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
