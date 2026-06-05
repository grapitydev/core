import type { Spec } from "./spec";
import type { SpecVersion } from "./spec-version";
import type { CompatReport } from "./compat-report";
import type { GatewayConfig, GatewayConfigVersion, GatewayRoute, GatewayEnvironment, GatewayPlugin } from "./gateway-config";
import type { Provision } from "./provision";
import type { GatewayLog } from "./gateway-log";

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

export interface PaginationMeta {
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
}

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
  prerelease?: boolean;
  force?: boolean;
  reason?: string;
}

export interface PushSpecResponse {
  data: {
    compatReport?: CompatReport;
    isNewSpec: boolean;
    spec: Spec;
    version: PublicSpecVersion;
  };
}

export interface ValidateSpecRequest {
  content: string;
}

export interface ValidateSpecResponse {
  data: {
    compatReport?: CompatReport;
    errors?: string[];
    valid: boolean;
    warnings?: string[];
  };
}

export interface ListSpecsResponse {
  data: Spec[];
}

export interface GetSpecResponse {
  data: {
    latestVersion?: PublicSpecVersion;
    spec: Spec;
  };
}

export interface ListVersionsResponse {
  data: PublicSpecVersion[];
  pagination: PaginationMeta;
}

export interface GetVersionResponse {
  data: PublicSpecVersion;
}

export interface GetCompatReportResponse {
  data: CompatReport;
}

export interface HealthResponse {
  status: "ok";
  version: string;
  uptime: number;
}

// Gateway Config Version shape as returned in list responses:
// content is excluded to keep responses lightweight.
export type PublicGatewayConfigVersion = Omit<GatewayConfigVersion, "content">;

export interface PushGatewayConfigRequest {
  name: string;
  provider: "kong";
  specName: string;
  specSemver: string;
  routes: GatewayRoute[];
  environments: Record<string, GatewayEnvironment>;
  callerIdentification?: { strategy: "first-match"; rules: { source: string; confidence: string }[] };
  content: string;
  pushedBy?: string;
}

export interface PushGatewayConfigResponse {
  data: {
    config: GatewayConfig;
    version: GatewayConfigVersion;
  };
}

export interface ListGatewayConfigsResponse {
  data: GatewayConfig[];
}

export interface GetGatewayConfigResponse {
  data: GatewayConfig;
}

export interface ListGatewayConfigVersionsResponse {
  data: PublicGatewayConfigVersion[];
}

export interface GetGatewayConfigVersionResponse {
  data: GatewayConfigVersion;
}

export interface ListProvisionsResponse {
  data: Provision[];
  pagination: PaginationMeta;
}

export interface ListGatewayLogsResponse {
  data: GatewayLog[];
  pagination: PaginationMeta;
}

export interface GetGatewayLogResponse {
  data: GatewayLog;
}

export interface GatewayLogStatEntry {
  gatewayConfigName: string;
  environment: string;
  method: string;
  routePath: string;
  lastSeenAt: string;
  totalCalls: number;
  uniqueCallerIds: number;
}

export interface GetGatewayLogStatsResponse {
  data: GatewayLogStatEntry[];
}
