import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { specs } from "./specs";

export const specVersions = sqliteTable("spec_versions", {
  id: text("id").primaryKey(),
  specId: text("spec_id")
    .notNull()
    .references(() => specs.id),
  semver: text("semver").notNull(),
  content: text("content").notNull(),
  checksum: text("checksum").notNull(),
  gitRef: text("git_ref"),
  pushedBy: text("pushed_by"),
  status: text("status", {
    enum: ["active", "deprecated", "sunset"],
  })
    .notNull()
    .default("active"),
  sunsetDate: integer("sunset_date", { mode: "timestamp" }),
  previousVersion: text("previous_version"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});