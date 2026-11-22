import { defineConfig } from "drizzle-kit";

// `drizzle-kit generate` only reads the schema and does not connect to a
// database, so DATABASE_URL is optional here. Commands that need a live
// connection (migrate, push, studio) will fail clearly if it is missing.
const connectionString = process.env.DATABASE_URL ?? "";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  ...(connectionString ? { dbCredentials: { url: connectionString } } : {}),
});
