import * as dotenv from "dotenv"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

// Load .env for local development only
if (process.env.NODE_ENV !== "production") {
  dotenv.config({path: "../../.env"})
}

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Set" : "Not set")

const client = postgres(process.env.DATABASE_URL!)

export const db= drizzle(client)
