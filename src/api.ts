import type { Spec, SpecType } from "./spec";
import type { SpecVersion } from "./spec-version";
import type { CompatReport } from "./compat-report";

export interface PushSpecRequest {
  content: string;
  name: string;
  type?: SpecType;
  description?: string;
  owner?: string;
  sourceRepo?: string;
  tags?: string[];
  gitRef?: string;
  pushedBy?: string;
  prerelease?: boolean;
  force?: boolean;
  reason?: string;
}

export interface PushSpecResponse {
  spec: Spec;
  version: SpecVersion;
  compatReport?: CompatReport;
  isNewSpec: boolean;
}

export interface ValidateSpecRequest {
  content: string;
  name: string;
}

export interface ValidateSpecResponse {
  valid: boolean;
  errors?: string[];
  warnings?: string[];
  compatReport?: CompatReport;
}

export interface ListSpecsRequest {
  type?: SpecType;
  owner?: string;
  tags?: string[];
}

export type ListSpecsResponse = Spec[];

export interface GetSpecResponse {
  spec: Spec;
  latestVersion?: SpecVersion;
}

export type ListVersionsResponse = SpecVersion[];

export interface GetVersionResponse {
  version: SpecVersion;
}

export interface GetCompatReportResponse {
  compatReport: CompatReport;
}

export interface DeprecateVersionRequest {
  sunsetDate: string;
}

export interface DeprecateVersionResponse {
  version: SpecVersion;
}

export interface HealthResponse {
  status: "ok";
  version: string;
  uptime: number;
}

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}

export type AuditAction =
  | "spec.push"
  | "spec.push.force"
  | "spec.deprecate"
  | "spec.sunset";

export interface AuditLogEntry {
  id: string;
  action: AuditAction;
  actor: string;
  specName: string;
  version?: string;
  details?: Record<string, unknown>;
  createdAt: Date;
}