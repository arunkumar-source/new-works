import * as dotenv from "dotenv"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

dotenv.config({path: "../../.env"})

console.log("DB_URL:", process.env.DB_URL ? "Set" : "Not set")

const client = postgres(process.env.DB_URL!)

export const db= drizzle(client)
