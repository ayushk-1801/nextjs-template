import { type Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./drizzle/migrations"
} satisfies Config;