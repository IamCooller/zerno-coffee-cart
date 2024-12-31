"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactForm } from "@/services/schema";
import { sendContactForm } from "@/services/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { Label } from "@radix-ui/react-label";

const eventTypes = ["Wedding", "Corporate or Office", "Non-Profit or School", "Conference or Expo", "Church Event", "Retail Event", "Baby or Bridal Shower", "Other (Please Describe Below↓)"];

const FormBlock = () => {
	const form = useForm<z.infer<typeof ContactForm>>({
		resolver: zodResolver(ContactForm),
		defaultValues: {
			name: undefined,
			email: undefined,
			phone: undefined,
			eventLocation: undefined,
			eventType: undefined,
			eventDate: undefined,
			eventTime: undefined,
			guestCount: undefined,
			heardAbout: undefined,
			message: undefined,
		},
	});
	const [startTime, setStartTime] = useState<string | undefined>(undefined);
	const [endTime, setEndTime] = useState<string | undefined>(undefined);

	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const handleTimeChange = (type: "start" | "end", value: string) => {
		if (type === "start") {
			setStartTime(value);
		} else {
			setEndTime(value);
		}

		// Формируем значение для отображения в инпуте
		const timeString = startTime && endTime ? `${startTime} - ${endTime}` : "";
		form.setValue("eventTime", timeString);
	};
	const onSubmit = async (data: z.infer<typeof ContactForm>) => {
		setLoading(true);
		try {
			const formData = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				formData.append(key, value as string);
			});

			const res = await sendContactForm(formData);
			if (res.errors) {
				toast({
					variant: "destructive",
					title: "Error",
					description: res.message,
				});
			} else {
				toast({
					variant: "success",
					title: "Success",
					description: res.message,
				});
				form.reset();
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: (error as Error)?.message || "Failed to send message",
			});
			console.error("Form submission error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="relative w-full space-y-[24px]">
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input {...field} type="text" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Email */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} type="email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Phone */}
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input {...field} type="text" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Event Location */}
				<FormField
					control={form.control}
					name="eventLocation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Event Location</FormLabel>
							<FormControl>
								<Input {...field} type="text" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Event Type */}
				<FormField
					control={form.control}
					name="eventType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Type of the Event</FormLabel>

							<select
								{...field}
								value={field.value}
								onChange={(e) => (e.target.value === "" ? field.onChange(undefined) : field.onChange(e.target.value))}
								className="w-full h-10 px-3 py-1 text-base bg-transparent border border-grayscale rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
							>
								<option value="">Select an Option</option>
								{eventTypes.map((type) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
							</select>

							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Event Date */}
				<FormField
					control={form.control}
					name="eventDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date of the Event</FormLabel>
							<FormControl>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<button
												type="button"
												className={
													"flex h-10 w-full items-center rounded-md border border-grayscale font-sukar bg-transparent px-3 py-1 text-base  transition-colors ffocus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
												}
											>
												{field.value ? format(field.value, "PPP") : <span className="text-grayscale">mm/dd/yyyy</span>}
												<CalendarIcon className="ml-auto h-[24px] w-[24px] " />
											</button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="center">
										<Calendar
											mode="single"
											selected={field.value ? new Date(field.value) : undefined}
											onSelect={(date) => field.onChange(date?.toISOString())}
											disabled={(date) => date <= new Date()}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Event Time */}
				<FormField
					control={form.control}
					name="eventTime"
					render={() => (
						<FormItem>
							<FormLabel>Start and End Time of Service</FormLabel>
							<FormControl>
								<div className="grid grid-cols-2 gap-4">
									{/* Start Time */}
									<div className="">
										<Label htmlFor="startTime" className="block text-sm font-medium">
											Start Time
										</Label>
										<Input
											id="startTime"
											type="time"
											value={startTime || ""}
											onChange={(e) => handleTimeChange("start", e.target.value)}
											required
											placeholder="Select Start Time"
										/>
									</div>

									{/* End Time */}
									<div className="relative">
										<Label htmlFor="endTime" className="block text-sm font-medium">
											End Time
										</Label>

										<Input id="endTime" type="time" value={endTime || ""} onChange={(e) => handleTimeChange("end", e.target.value)} required />
									</div>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Guest Count */}
				<FormField
					control={form.control}
					name="guestCount"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Expected Number of Guests</FormLabel>
							<FormControl>
								<Input {...field} type="number" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* How did you hear about us? */}
				<FormField
					control={form.control}
					name="heardAbout"
					render={({ field }) => (
						<FormItem>
							<FormLabel>How did you hear about us?</FormLabel>
							<FormControl>
								<Input {...field} type="text" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Message */}
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="w-full mt-[32px] relative grid grid-cols-2 gap-2">
					<Button type="submit" disabled={loading} className="w-full border-brown border hover:scale-105" title="Send Message" aria-label="Send Message">
						Send
					</Button>
					<Button type="button" variant={"outline"} disabled={loading} className="w-full hover:scale-105" onClick={() => form.reset()} title="Clear" aria-label="Clear">
						Clear
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default FormBlock;
