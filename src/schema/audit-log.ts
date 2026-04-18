import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const auditLog = sqliteTable("audit_log", {
  id: text("id").primaryKey(),
  action: text("action", {
    enum: ["spec.push", "spec.push.force", "spec.deprecate", "spec.sunset"],
  }).notNull(),
  actor: text("actor").notNull(),
  specName: text("spec_name").notNull(),
  version: text("version"),
  details: text("details", { mode: "json" }).$type<Record<string, unknown>>(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});