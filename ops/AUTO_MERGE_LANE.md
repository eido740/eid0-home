# Auto-Merge Lane (Guarded)

This lane reduces merge clicks for low-risk control-tower PRs.

## How to use
1. Open PR as normal (non-draft by default).
2. Add label: `automerge-safe`.
3. Workflow evaluates guardrails and either:
   - merges immediately, or
   - enables GitHub auto-merge, or
   - rejects and removes the label with a comment.

## Guardrails
- PR must target `main`.
- PR head branch must come from this same repository (no fork heads).
- PR author association must be OWNER, MEMBER, or COLLABORATOR.
- Changed files are restricted to:
  - `.github/workflows/**`
  - `.github/repo-factory/**`
  - `.github/repo-seeder/**`
  - `ops/**`
  - `README.md`
  - `MEMEX.md`
  - `PROJECT_INDEX.md`

## Intent
Use this only for low-risk workflow/docs/automation updates in control tower.
Anything product-critical or broad-scope should stay manual.
