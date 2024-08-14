"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InsertUser } from "@/db/schema";
import { createUser } from "@/db/queries/insert";
import { getStudents } from "@/db/queries/select";

const formSchema = z.object({
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

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const count = await getStudents().then((students) => students.length);
		const newUser: InsertUser = {
			id: 1, //count + 1,
			fname: values.fname,
			lname: values.lname,
			phone: values.phone,
		};
		await createUser(newUser);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
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
