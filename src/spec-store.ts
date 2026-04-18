import type { Spec, SpecVersion } from "./spec";
import type { CompatReport } from "./compat-report";
import type { SpecType } from "./spec";

export interface SpecStore {
  getSpec(name: string): Promise<Spec | null>;
  getSpecVersion(name: string, semver: string): Promise<SpecVersion | null>;
  getLatestVersion(name: string): Promise<SpecVersion | null>;
  listSpecs(filters?: SpecFilters): Promise<Spec[]>;
  listVersions(name: string): Promise<SpecVersion[]>;
  pushSpecVersion(spec: Spec, version: SpecVersion): Promise<SpecVersion>;
  deprecateVersion(
    name: string,
    semver: string,
    sunsetDate: Date
  ): Promise<SpecVersion>;
  sunsetVersion(name: string, semver: string): Promise<SpecVersion>;
  getCompatReport(
    name: string,
    semver: string
  ): Promise<CompatReport | null>;
}

export interface SpecFilters {
  type?: SpecType;
  owner?: string;
  tags?: string[];
}