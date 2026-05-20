#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building..."
npm run build

if ! git remote get-url origin &>/dev/null; then
  echo "→ Creating GitHub repo (requires: gh auth login)..."
  gh repo create majorca-ibiza-prefx \
    --public \
    --source=. \
    --remote=origin \
    --description "MIT Sloan Majorca & Ibiza Pre-F(x) 2026 trip landing page"
fi

echo "→ Pushing to origin main..."
git push -u origin main

echo "→ Deploying to Vercel (requires: npx vercel login)..."
npx vercel deploy --prod --yes

echo "Done."
