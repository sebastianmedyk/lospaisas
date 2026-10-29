#!/usr/bin/env bash
# Scheduled rebuild: blog posts dated in the future (content/blog/*.md `date:`) are hidden
# at build time (src/lib/blog.ts isPublished, America/New_York date). Run this on/after a
# scheduled post's date: an empty commit triggers Cloudflare Workers Builds on `redesign`,
# the new build publishes due posts and refreshes sitemap lastmod, then IndexNow is pinged.
# Usage: scripts/republish.sh   (WAIT_SECONDS=720 by default)
set -euo pipefail
cd "$(dirname "$0")/.."
git checkout redesign
git pull --ff-only origin redesign
git commit --allow-empty -m "chore: scheduled rebuild"
git -c credential.helper= -c 'credential.https://github.com.helper=!/usr/local/bin/gh auth git-credential' push origin redesign
echo "Pushed $(git rev-parse --short HEAD). Waiting ${WAIT_SECONDS:-720}s for Cloudflare deploy..."
sleep "${WAIT_SECONDS:-720}"
node scripts/indexnow.mjs
