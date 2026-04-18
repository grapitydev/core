import type { Spec, SpecVersion, SpecType } from "./spec";
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