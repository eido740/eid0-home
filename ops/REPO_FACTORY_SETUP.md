# Repo Factory Setup (One-Time)

This turns project repo creation into an automated pipeline.

## What this enables
- You say: "Create project <name>".
- Assistant stages project docs and a repo request file.
- After merge to `main`, GitHub Action creates the repository automatically.

## One-time GitHub setup
1. Create a fine-grained PAT from your GitHub account.
2. Grant it repository administration scope needed to create repositories.
3. In this control-tower repo, add secret:
   - `REPO_FACTORY_TOKEN` = PAT value
4. Optional: set repository variable:
   - `REPO_FACTORY_OWNER` = target owner/org (example: `eido740`)

## Safety rails in workflow
- Only names with approved prefixes are allowed (`akn-`, `eid0-`, `lab-`).
- Repo names must be lowercase and normalized.
- Visibility defaults to private unless explicitly set to `public`.
- Request files are archived into `.github/repo-factory/processed/`.

## Request flow
1. Create a request file in `.github/repo-factory/requests/`.
2. Merge to `main`.
3. Repo factory workflow runs and creates repo if missing.
4. Processed request is moved to `processed/` with result metadata.

## Request file shape
See `.github/repo-factory/REQUEST_TEMPLATE.json`.

## Security recommendations
- Use a dedicated machine user token if you later scale this.
- Keep token scope limited to repo creation/admin operations only.
- Rotate token periodically.
- Keep production deployment secrets isolated in execution repos (not control tower).
