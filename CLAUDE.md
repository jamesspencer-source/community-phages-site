# CLAUDE.md

Claude Code loads this file automatically. `README.md` is the operating manual for this site; this file adds what an assistant needs to work here safely.

## What this repo is

- Astro source for the Community Phages summer program site. `main` holds the source; the `gh-pages` branch holds the built output served at https://jamesspencer-source.github.io/community-phages-site/.
- Keep private operational material (student records, contact sheets, internal links, schedules) out of the repo and the site. The public instructor schedule was removed on purpose in August 2026; do not restore it.

## Commands

- Node 22 (CI uses 22; locally `~/.nvm/versions/node/v22.22.3/bin`). Install dependencies with `npm ci`.
- `npm run dev -- --port 4321` for a local preview; `npm run build` builds into `dist/`.
- `.github/workflows/deploy.yml` only builds and validates on pushes and pull requests. It does not publish.

## Publishing (how it has been done; confirm the procedure before the first publish from Claude Code)

- Past releases were manual: build, then commit the `dist/` output to the `gh-pages` branch and push (commits such as "Deploy Appleton Farms program photo"). There is no deploy script in the repo.
- A safe procedure: `git worktree add ../community-phages-site-pages gh-pages`, replace its contents with `dist/`, commit, push, then check the live site. Publishing changes the public site, so get James's go-ahead first.

## State worth knowing (2026-11-09)

- Branch `claude/phages-security-hardening` carries Codex's validated but never-committed hardening work (metadata-stripped photos, remote MathJax replaced by static MathML, Kurzgesagt link fix, public-asset gate, Astro 7). Merge and publish only with James's OK.
- The restriction-digest protocol page has an unresolved scientific question (200 ng versus 1,000 ng of DNA, and the mixing volumes). Do not change those values until an instructor confirms them; see the HMS Lab Ops note "Pending Scientific Confirmation - Restriction Digest".
- A non-git copy of this project at `~/Documents/HMS Lab Ops/Community Phages/Phages Website Project` is an older Codex working copy (Astro 6, unconfirmed protocol numbers, unrendered formula). Treat it as reference only; never copy from it blindly.
- Files named like `photo 2.jpg` are iCloud conflict copies: never commit them. The repos moved out of iCloud to `~/Developer/GitHub` on 2026-11-09.
- Branch names: `claude/<topic>` for Claude Code work; `agent/*` and `codex/*` are historical.
