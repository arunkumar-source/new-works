CREATE TYPE "public"."work_status" AS ENUM('todo', 'in-progress', 'done');--> statement-breakpoint
CREATE TABLE "workdb" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"status" "work_status" DEFAULT 'todo' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
