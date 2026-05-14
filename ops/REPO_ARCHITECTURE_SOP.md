# Repo Architecture SOP (Control Tower + Execution Repos)

## Blunt Answer
One giant repo for everything is usually a mess multiplier.

## Recommended Operating Model
1. **Control Tower Repo** (this repo)
   - AI operating rules
   - MEMEX continuity
   - project templates and workflow scripts
   - portfolio index
2. **Execution Repos** (one per serious project)
   - actual product code
   - project-specific CI/CD and environments
   - project issues/PRs and release history

## Why this is better
- Keeps unrelated codebases from contaminating each other.
- Faster onboarding per project.
- Cleaner risk boundaries: broken CI in Project A does not block Project B.
- Easier archival and delegation.

## When NOT to split repos
Use a monorepo only when codebases are tightly coupled and versioned together (shared deploy lifecycle, shared release cadence, shared runtime dependencies).

## Naming Convention
- Repo names: `akn-<project-slug>` (example: `akn-pricing-forecast-api`).
- Default branch: `main`.
- Feature branches: `cursor/<work-item>-<suffix>`.

## Project Creation SOP
1. Define mission and done criteria.
2. Create execution repo.
3. Register it in `PROJECT_INDEX.md`.
4. Scaffold docs from templates.
5. Start implementation with explicit `PLAN.md`.
