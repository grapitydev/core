# @grapity/core

Shared types and the Registry API contract for the Grapity platform.

This package contains the `openapi.yaml` contract and its generated TypeScript types, alongside hand-written domain types used by `@grapity/registry`, `@grapity/hub`, and `@grapity/cli`.

## What's inside

- `openapi.yaml` — the Registry API contract (source of truth)
- `src/generated/api.ts` — TypeScript types generated from `openapi.yaml`
- `src/*.ts` — hand-written domain types

## Regenerating types

After editing `openapi.yaml`:

```bash
bun run generate
```

## Usage

```typescript
// Generated schema types (from openapi.yaml)
import type { PushSpecResponse, CompatReport } from "@grapity/core";

// Domain types (hand-written)
import type { Spec, SpecVersion } from "@grapity/core";
```

## Documentation

[grapity.dev/docs](https://grapity.dev/docs/)

## License

Apache-2.0
