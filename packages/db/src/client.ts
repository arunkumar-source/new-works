import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

// Load .env for local development only - don't bundle dotenv in production
let dotenv: any;
if (process.env.NODE_ENV !== "production") {
  try {
    dotenv = require("dotenv");
    dotenv.config({path: "../../.env"});
  } catch (e) {
    // dotenv not available, continue without it
    console.log("dotenv not available, relying on environment variables");
  }
}

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Set" : "Not set")

const client = postgres(process.env.DATABASE_URL!)

export const db= drizzle(client)
