# Repo Seeder Setup

Repo seeder applies controlled bootstrap content to execution repos using request files.

## Auth model
- Uses the same secret as repo factory: `REPO_FACTORY_TOKEN`.
- Uses the same optional owner variable: `REPO_FACTORY_OWNER`.

## Request flow
1. Add a request JSON in `.github/repo-seeder/requests/`.
2. Merge to `main`.
3. `Repo Seeder` workflow seeds target repo files.
4. Request is moved into `.github/repo-seeder/processed/` with result metadata.

## Supported profile
- `eid0-site-bootstrap-v1`
  - `.github/workflows/deploy.yml`
  - `CUTOVER_CHECKLIST.md`
  - `SECRETS_CHECKLIST.md`
  - `README.md`
  - `public/index.html`
  - `public/apps/.gitkeep`
  - `public/assets/.gitkeep`

## Notes
- Seeder is intentionally profile-driven to avoid arbitrary writes to external repos.
- Keep profile list small and reviewed.
