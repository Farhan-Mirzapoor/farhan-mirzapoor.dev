import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getStudents } from "@/db/queries/select";

export default async function Home() {
	const count = await getStudents().then((students) => students.length);
	const danesh = await getStudents();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Table className="border-2">
				<TableBody>
					{Array.from({ length: count }).map((_, i) => (
						<TableRow key={i}>
							<TableCell>{danesh[i].fname}</TableCell>
							<TableCell>{danesh[i].lname}</TableCell>
							<TableCell>{danesh[i].phone}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</main>
	);
}
