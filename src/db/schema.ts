import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
	id: integer("id").primaryKey(),
	fname: text("fname"),
	lname: text("lname"),
	phone: text("phone"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
