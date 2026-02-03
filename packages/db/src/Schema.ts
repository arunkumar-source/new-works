import { pgTable, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const workStatusDB = pgEnum("work_status", [
       "todo",
       "in-progress",
       "done",
]);

export const workDB = pgTable("workdb", {
       id: text("id").primaryKey(),
       title: text("title").notNull(),
       status: workStatusDB("status").notNull().default("todo"),
       createdAt: timestamp("createdAt", {
              withTimezone: true,
       }).notNull().defaultNow(),
});
