"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, UserRoundMinus, UserRoundPen } from "lucide-react";
//import { deleteUser } from "@/db/queries/delete";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type user = {
	id: number;
	name: string | null;
	phone: string | null;
};

export const columns: ColumnDef<user>[] = [
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					id
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},

	{
		accessorKey: "name",
		header: "name",
	},
	{
		accessorKey: "phone",
		header: "phone",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const user = row.original;

			return (
				<>
					<Dialog>
						<DialogTrigger>
							<UserRoundPen className="size-4" />
						</DialogTrigger>
						<DialogContent>test</DialogContent>
					</Dialog>

					<Button
						variant="ghost"
						className="h-8 w-8 p-0"
						//onClick={() => deleteUser(user.id)}
					>
						<UserRoundMinus className="size-4" />
					</Button>
				</>
			);
		},
	},
];
