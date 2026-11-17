import { PrismaClient } from "@prisma/client";

// Ensure DATABASE_URL is set so Prisma client initialization does not throw when env is unset
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/crm_db?schema=public";
}
if (!process.env.DIRECT_URL) {
  process.env.DIRECT_URL = process.env.DATABASE_URL;
}

// Expose singleton database connection client
export const prisma = new PrismaClient();

export default prisma;
