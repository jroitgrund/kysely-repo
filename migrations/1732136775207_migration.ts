import { type Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createType("enum_type").asEnum(["value"]).execute();
  await db.schema
    .createTable("projects")
    .addColumn("enum", sql`"enum_type"`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {}
