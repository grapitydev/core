export interface PolicyProfile {
  id: string;
  name: string;
  gatewayProvider: "kong" | "apisix";
  plugins: PluginConfig[];
}

export interface PluginConfig {
  name: string;
  order: number;
  config: Record<string, unknown>;
  configRef?: string[];
  condition?: string;
}