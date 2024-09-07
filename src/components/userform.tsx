"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { onSubmit } from "@/app/page";
export default function UForm() {
	const formaction = async (formdata: FormData) => {
		await onSubmit(formdata);
	};
	return (
		<form method="post" action={formaction}>
			<Label htmlFor="id">id</Label>
			<Input name="id"></Input>

			<Label htmlFor="fname">First Name</Label>
			<Input name="fname"></Input>

			<Label htmlFor="lname">Last Name</Label>
			<Input name="lname"></Input>

			<Label htmlFor="phone">Phone</Label>
			<Input name="phone"></Input>

			<Button type="submit">Submit</Button>
		</form>
	);
}
