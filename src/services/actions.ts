"use server";

import { getEmailTemplate } from "./emailTemplate";
import { sendEmail } from "@/lib/email";
import { ContactForm } from "./schema";

export async function sendContactForm(formData: FormData) {
	const validatedFields = ContactForm.safeParse({
		name: formData.get("name") as string,
		email: formData.get("email") as string,
		phone: formData.get("phone") as string,
		eventLocation: formData.get("eventLocation") as string,
		eventType: formData.get("eventType") as string,
		eventDate: formData.get("eventDate") as string,
		eventTime: formData.get("eventTime") as string,
		guestCount: formData.get("guestCount") as string,
		heardAbout: formData.get("heardAbout") as string,
		message: formData.get("message") as string,
	});
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to Send Message.",
		};
	}

	const { name, email, phone, eventLocation, eventType, eventDate, eventTime, guestCount, heardAbout, message } = validatedFields.data;

	try {
		// Отправка email
		await sendEmail({
			to: process.env.EMAIL_TO || "",
			subject: `[Contact Form]: Message from ${email}`,
			html: getEmailTemplate({ name, email, phone, eventLocation, eventType, eventDate, eventTime, guestCount, heardAbout, message }),
		});

		return {
			errors: null,
			message: "Message sent successfully.",
		};
	} catch (error) {
		console.error("Failed to send email:", error);
		return {
			errors: error,
			message: "Failed to send message.",
		};
	}
}
