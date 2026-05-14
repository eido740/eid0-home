# Repo Factory Ledger

## Directories
- `requests/` contains pending JSON requests.
- `processed/` contains archived request results after automation runs.

## Workflow
- Automation is handled by `.github/workflows/repo-factory.yml`.
- It runs on `main` when a request file is added/changed in `requests/`.

## Naming policy
- Allowed prefixes: `akn-`, `eid0-`, `lab-`.
- Lowercase names only.
