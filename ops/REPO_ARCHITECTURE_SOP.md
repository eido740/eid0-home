# Repo Architecture SOP (Control Tower + Execution Repos)

## Blunt Answer
One giant repo for everything is usually a mess multiplier.

## Recommended Operating Model
1. **Control Tower Repo** (this repo)
   - AI operating rules
   - MEMEX continuity
   - project templates and workflow scripts
   - portfolio index
   - no production deployment secrets
2. **Execution Repos** (one per serious project)
   - actual product code
   - project-specific CI/CD and environments
   - project issues/PRs and release history
3. **Site Platform Repo** (`eid0-site`)
   - owns deployment pipeline for `eid0.com`
   - hosts root site shell and shared web assets
   - can publish multiple mini-app folders under `public/apps/`

## Why this is better
- Keeps unrelated codebases from contaminating each other.
- Faster onboarding per project.
- Cleaner risk boundaries: broken CI in Project A does not block Project B.
- Easier archival and delegation.

## When NOT to split repos
Use a monorepo only when codebases are tightly coupled and versioned together (shared deploy lifecycle, shared release cadence, shared runtime dependencies).

## Domain Hosting Pattern
- Domain root and publishing workflow live in `eid0-site`.
- Mini-app repos ship their build artifacts into `eid0-site/public/apps/<app-slug>/` (or deploy directly to matching folders if you intentionally choose that model).
- Control tower only governs workflow and portfolio; it never publishes production web content.

## Naming Convention
- Repo names: `akn-<project-slug>` (example: `akn-pricing-forecast-api`).
- Default branch: `main`.
- Feature branches: `cursor/<work-item>-<suffix>`.

## Project Creation SOP
1. Define mission and done criteria.
2. Create execution repo (directly or through repo-factory automation).
3. Register it in `PROJECT_INDEX.md`.
4. Scaffold docs from templates.
5. Start implementation with explicit `PLAN.md`.

## Repo Factory (White-Glove Mode)
- Workflow: `.github/workflows/repo-factory.yml`
- Requests: `.github/repo-factory/requests/*.json`
- Processed ledger: `.github/repo-factory/processed/*.processed.json`
- One-time setup: `ops/REPO_FACTORY_SETUP.md`

## Repo Seeder (Bootstrap Mode)
- Workflow: `.github/workflows/repo-seeder.yml`
- Requests: `.github/repo-seeder/requests/*.json`
- Processed ledger: `.github/repo-seeder/processed/*.processed.json`
- Setup: `ops/REPO_SEEDER_SETUP.md`
