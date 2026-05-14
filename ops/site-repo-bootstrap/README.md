# eid0-site Bootstrap Pack

Use this pack to stand up a dedicated deployment repo for `eid0.com`.

## Goal
Keep production publishing out of the control-tower repo and isolate it in an execution repo.

## Create the new repo
Recommended repo name: `eid0-site`

## Initial files to copy into `eid0-site`
- `.github/workflows/deploy.yml` (from this folder)
- `SECRETS_CHECKLIST.md`
- `CUTOVER_CHECKLIST.md`

## Suggested structure for multi-app hosting
- `public/index.html` (root landing)
- `public/apps/<app-slug>/...` (mini apps)
- `public/assets/...` (shared static assets)

## Deployment policy
- All deploys run from `eid0-site` only.
- Control tower repo never deploys to production.
