# Contributing to @grapity/core

## Prerequisites

- [Bun](https://bun.sh/) >= 1.3
- Node.js >= 18

## Setup

```bash
bun install
```

## Commands

```bash
bun run typecheck   # Type check
bun run build       # Build dist/
bun test            # Run tests
```

## Local Development

The Grapity platform has three independent repos that depend on each other:

```
@grapity/core  ←  @grapity/registry  ←  @grapity/cli (peer dep)
```

### Linking all packages

The registry and CLI use `link:@grapity/core` in their package.json to resolve this package locally. After building, run `bun link` to register it globally so other repos can discover it:

```bash
cd ~/workspace/grapity/core
bun install && bun run build
bun link

# Then in registry/
cd ~/workspace/grapity/registry
bun install   # resolves @grapity/core via link:
bun run build

# Then in cli/
cd ~/workspace/grapity/cli
bun install   # resolves both via link:
bun run build
```

### Checking link status

```bash
ls -la node_modules/@grapity/core
# Symlink: node_modules/@grapity/core -> /Users/you/workspace/grapity/core
# npm:      node_modules/@grapity/core/  (regular directory)
```

### Unlinking (restore npm versions)

The `link:` protocol in registry/cli package.json is for local development only. Before pushing to CI, ensure those repos use version ranges (`^0.0.1`) instead of `link:@grapity/core`. CI expects version ranges.

### After changes

Publishing is handled by GitHub Actions. Do not publish manually.

## License

Apache-2.0