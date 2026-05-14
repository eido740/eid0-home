# Workflow Quickstart

## 1) Capture raw ideas
- Drop rough notes into `inbox/` first.

## 2) Start projects via plain English
- Tell assistant: `Create project <project name>`.
- Assistant handles scaffold + portfolio updates.
- If project needs a new GitHub repo, tell assistant: `Create repo <repo-name>`.
- Complete one-time repo factory setup in `ops/REPO_FACTORY_SETUP.md`.
- Manual fallback (optional):
  ```bash
  ./scripts/new_project.sh "project name"
  ```

## 3) Execute with discipline
- Keep implementation logs in project `LOG.md`.
- Keep immediate next actions in project `NEXT.md`.
- Keep session continuity in root `MEMEX.md`.

## 4) Every 5th session
- Run the friction retro and propose one concrete rule improvement.
