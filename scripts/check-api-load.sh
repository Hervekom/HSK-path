#!/usr/bin/env bash
# Loads every Vercel function the way Vercel does (plain Node ESM, one file per module, no bundling).
# Catches imports without a .js extension, which work in Vite but crash the API with FUNCTION_INVOCATION_FAILED.
set -euo pipefail
cd "$(dirname "$0")/.."
OUT=$(mktemp -d)
trap 'rm -rf "$OUT"' EXIT
npx esbuild $(ls api/*.ts server/*.ts server/ai/*.ts src/data/*.ts src/types.ts) --outdir="$OUT" --outbase=. --format=esm --platform=node --log-level=error
echo '{"type":"module"}' > "$OUT/package.json"
ln -s "$PWD/node_modules" "$OUT/node_modules"
for f in api/*.ts; do
  node --input-type=module -e "await import('$OUT/${f%.ts}.js')" && echo "ok  $f"
done
