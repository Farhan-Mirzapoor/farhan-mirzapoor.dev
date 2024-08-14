import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getStudents } from "@/db/queries/select";
import { user, columns } from "./columns";
import { DataTable } from "./data-table";
import { InsertUser } from "@/db/schema";
import { createUser } from "@/db/queries/insert";
import { deleteUser } from "@/db/queries/delete";
import { updateUser } from "@/db/queries/update";
import { UserForm } from "@/components/newuser";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

async function getData(): Promise<user[]> {
	const count = await getStudents().then((students) => students.length);
	const users = await getStudents();
	const result: user[] = [];

	for (let i = 0; i < count; i++) {
		result.push({
			id: users[i].id,
			name: users[i].fname + " " + users[i].lname,
			phone: users[i].phone,
		});
	}

	return result;
}

export default async function Home() {
	const data = await getData();

	const count = await getStudents().then((students) => students.length);
	const users = await getStudents();

	/* const newUser: InsertUser = {
		id: count + 1,
		fname: "farhan",
		lname: "khan",
		phone: "123",
	}; */

	// await createUser(newUser);

	// const deluser = deleteUser(8);
	// const upuser = updateUser(20, { fname: "farhan" });
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="container mx-auto py-10 flex gap-4 flex-col justify-start">
				<Dialog>
					<DialogTitle>Add User</DialogTitle>
					<DialogTrigger className="border-2 size-8 rounded-full">
						+
					</DialogTrigger>
					<DialogContent>
						<DialogDescription className="sr-only">Add User</DialogDescription>
						<UserForm />
					</DialogContent>
				</Dialog>
				<DataTable columns={columns} data={data} />
			</div>
		</main>
	);
}
