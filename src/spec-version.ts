import type { SpecStatus } from "./spec";
import type { CompatReport } from "./compat-report";

export interface SpecVersion {
  id: string;
  specId: string;
  semver: string;
  content: string;
  checksum: string;
  gitRef?: string;
  pushedBy?: string;
  status: SpecStatus;
  compatibility?: CompatReport;
  sunsetDate?: Date;
  previousVersion?: string;
  createdAt: Date;
}