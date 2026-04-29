import type { Spec, SpecType } from "./spec";
import type { SpecVersion } from "./spec-version";
import type { CompatReport } from "./compat-report";
import type { AuditAction } from "./api";

export interface SpecStore {
  getSpec(name: string): Promise<Spec | null>;
  getSpecVersion(name: string, semver: string): Promise<SpecVersion | null>;
  getLatestVersion(name: string): Promise<SpecVersion | null>;
  listSpecs(filters?: SpecFilters): Promise<Spec[]>;
  listVersions(
    name: string,
    options?: { limit?: number; offset?: number }
  ): Promise<{ versions: SpecVersion[]; total: number }>;
  pushSpecVersion(spec: Spec, version: SpecVersion): Promise<SpecVersion>;
  getCompatReport(
    name: string,
    semver: string
  ): Promise<CompatReport | null>;
  logAudit(
    action: AuditAction,
    actor: string,
    specName: string,
    version: string | undefined,
    details: Record<string, unknown> | undefined
  ): Promise<void>;
}

export interface SpecFilters {
  type?: SpecType;
  owner?: string;
  tags?: string[];
}