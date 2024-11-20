import { PostgresDialect, WithSchemaPlugin } from "kysely";
import { defineConfig } from "kysely-ctl";
import { Pool } from "pg";

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: "postgresql://postgres:postgres@localhost:5432/db",
    }),
  }),
  plugins: [new WithSchemaPlugin("other")],
  migrations: {
    migrationTableSchema: "other",
    migrationFolder: "migrations",
  },
});
