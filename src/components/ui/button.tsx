import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  transition-all duration-300 ease-in-out active:scale-90",
	{
		variants: {
			variant: {
				default: "text-center w-[302px] h-[48px] bg-brown text-white text-[24px] rounded-[8px]  hover:bg-white hover:text-brown hover:scale-110",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline: "border border-brown text-brown hover:bg-brown hover:text-white text-[24px] rounded-[8px] h-[48px] w-[302px]",
				secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	href?: string; // Для работы с Link
	target?: string; // Для внешних ссылок
	linkProps?: Omit<React.ComponentProps<typeof Link>, "href" | "children">; // Остальные props для Link
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, href, target, linkProps, ...props }, ref) => {
	const Comp: React.ElementType = asChild ? Slot : href ? Link : "button";
	const componentProps = href ? { href, target, ...linkProps } : {};

	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...componentProps} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
