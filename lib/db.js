import { PrismaClient } from "@prisma/client";

// Reuse the client across hot reloads in dev so we don't exhaust DB connections.
const globalForPrisma = globalThis;

function createClient() {
  const client = new PrismaClient();
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
  return client;
}

// Constructed on first query rather than at import time: if the deployment is
// missing DATABASE_URL, the throw then happens inside a query that lib/cms.js
// already catches, instead of crashing the module and 500-ing every render.
export const prisma = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = globalForPrisma.prisma || (globalForPrisma.prisma = createClient());
      const value = client[prop];
      return typeof value === "function" ? value.bind(client) : value;
    },
  },
);
