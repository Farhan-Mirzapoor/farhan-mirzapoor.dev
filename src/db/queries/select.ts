import { db } from "../index";
import { usersTable } from "../schema";

export async function getStudents(): Promise<
	Array<{
		fname: string;
		lname: string;
		phone: string;
	}>
> {
	return db
		.select({
			fname: usersTable.fname,
			lname: usersTable.lname,
			phone: usersTable.phone,
		})
		.from(usersTable);
}
