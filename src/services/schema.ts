import { z } from "zod";
export const ContactForm = z.object({
	name: z.string().optional(),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	eventLocation: z.string().min(3, "Please enter a valid location"),
	eventType: z.enum(["Wedding", "Birthday", "Corporate", "Other"]),
	eventDate: z.string().min(1, "Please enter a valid date"),
	eventTime: z.string().min(1, "Please enter a valid time"),
	guestCount: z.string().min(1, "Please enter a valid guest count"),
	heardAbout: z.string().optional(),
	message: z.string().min(1, "Please enter a message"),
});
