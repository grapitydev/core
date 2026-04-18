# Contributing to @grapity/core

## Prerequisites

- [Bun](https://bun.sh/) >= 1.3
- Node.js >= 18 (for type checking)

## Setup

```bash
bun install
```

## Development

```bash
# Type check
bun run typecheck

# Build
bun run build

# Run tests
bun run test
```

## Local Linking for Development

@grapity/core is a dependency of @grapity/registry and @grapity/cli. To test changes locally before publishing:

```bash
# From this repo (core/)
bun run build
bun link
```

Then in the consuming repo:

```bash
# In registry/
bun link @grapity/core

# In cli/
bun link @grapity/core
```

**Always unlink before pushing:**

```bash
# In registry/ or cli/
bun unlink @grapity/core
bun install
```

Check if a link is active:

```bash
ls -la node_modules/@grapity/core
# A symlink shows: node_modules/@grapity/core -> /path/to/core
```

## Publishing

Publishing is handled by GitHub Actions. Do not publish manually.

## License

Apache-2.0