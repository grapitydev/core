import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const specs = sqliteTable("specs", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  type: text("type", { enum: ["openapi", "asyncapi"] }).notNull(),
  description: text("description"),
  owner: text("owner"),
  sourceRepo: text("source_repo"),
  tags: text("tags", { mode: "json" }).$type<string[]>().default([]),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});