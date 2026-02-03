import * as dotenv from "dotenv"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

dotenv.config()

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Set" : "Not set")

const client = postgres(process.env.DATABASE_URL!)

export const db= drizzle(client)
