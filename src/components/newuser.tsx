"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { onSubmit } from "@/app/page";

export const formSchema = z.object({
	fname: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lname: z.string().min(2, {
		message: "Last Name must be at least 2 characters.",
	}),
	phone: z
		.string()
		.min(10, {
			message: "Phone Number must be at least 10 characters.",
		})
		.max(11, {
			message: "Phone Number must be at most 11 characters.",
		}),
});

export function UserForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fname: "",
			lname: "",
			phone: "",
		},
	});
	const formaction = async (formdata: FormData) => {
		await onSubmit(formdata);
	};

	return (
		<Form {...form}>
			<form
				action={formaction}
				//onSubmit={form.handleSubmit(onSubmit)}
				className="flex justify-center flex-col w-full gap-4"
			>
				<FormField
					control={form.control}
					name="fname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First name</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last name</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
