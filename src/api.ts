import type { Spec } from "./spec";
import type { SpecVersion } from "./spec-version";
import type { CompatReport } from "./compat-report";

export type AuditAction = "spec.push" | "spec.push.force";

export interface AuditLogEntry {
  id: string;
  action: AuditAction;
  actor: string;
  specName: string;
  version?: string;
  details?: Record<string, unknown>;
  createdAt: Date;
}

// SpecVersion shape as returned in API responses: content is a storage detail,
// never embedded in JSON responses per API design guidelines.
export type PublicSpecVersion = Omit<SpecVersion, "content">;

export interface PushSpecRequest {
  content: string;
  name: string;
  type?: "openapi" | "asyncapi";
  description?: string;
  owner?: string;
  sourceRepo?: string;
  tags?: string[];
  gitRef?: string;
  pushedBy?: string;
  version?: string;
  prerelease?: boolean;
  force?: boolean;
  reason?: string;
}

export interface PushSpecResponse {
  spec: Spec;
  version: PublicSpecVersion;
  compatReport?: CompatReport;
  isNewSpec: boolean;
}

export interface ValidateSpecRequest {
  content: string;
}

export interface ValidateSpecResponse {
  valid: boolean;
  errors?: string[];
  warnings?: string[];
  compatReport?: CompatReport;
}

export type ListSpecsResponse = Spec[];

export interface GetSpecResponse {
  spec: Spec;
  latestVersion?: PublicSpecVersion;
}

export type ListVersionsResponse = PublicSpecVersion[];

export interface GetVersionResponse {
  version: PublicSpecVersion;
}

export interface GetCompatReportResponse {
  compatReport: CompatReport;
}

export interface HealthResponse {
  status: "ok";
  version: string;
  uptime: number;
}
