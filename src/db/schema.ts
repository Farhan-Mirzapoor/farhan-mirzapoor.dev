import { pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
	fname: text("fname").notNull(),
	lname: text("lname").notNull(),
	phone: text("phone").notNull().unique(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
