#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Optional local credentials; CI supplies these variables directly.
if [ -f .env ]; then
  set -a
  . ./.env
  set +a
fi
: "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN}"
: "${CLOUDFLARE_ACCOUNT_ID:?Set CLOUDFLARE_ACCOUNT_ID}"

VERSION=$(git rev-parse --short HEAD)
sed -i.bak -E "s/v=[A-Za-z0-9.-]+/v=$VERSION/g" teaser/index.html
sed -i.bak -E "s/const CACHE_VER = '[A-Za-z0-9.-]+'/const CACHE_VER = '$VERSION'/g" teaser/script.js
rm -f teaser/index.html.bak teaser/script.js.bak

bunx wrangler@4.118.0 pages deploy teaser \
  --project-name blosharper-teaser \
  --branch main \
  --commit-dirty=true
