import { db } from "../index";
import { usersTable } from "../schema";

export async function getStudents(): Promise<
	Array<{
		id: number;
		fname: string | null;
		lname: string | null;
		phone: string | null;
	}>
> {
	return db
		.select({
			id: usersTable.id,
			fname: usersTable.fname,
			lname: usersTable.lname,
			phone: usersTable.phone,
		})
		.from(usersTable)
		.orderBy(usersTable.id);
}
