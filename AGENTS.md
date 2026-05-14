# AGENTS.md

## Cursor Cloud specific instructions

This is a **control-tower** repository (`eid0-home`) — not a traditional application. It has zero runtime dependencies, no package manager, no build step, and no automated test suite.

### What lives here

- **Operational docs & SOPs** — `ops/`, `MEMEX.md`, `PROJECT_INDEX.md`
- **Project scaffolding** — `templates/project/`, `scripts/new_project.sh`
- **GitHub Actions workflows** — `.github/workflows/` (repo-factory, repo-seeder, auto-merge, deploy, ai-coder)
- **Static mini-apps** — `public/index.html` (landing page), `public/cards/` (goldfish card simulator)

### Running the static site locally

```bash
python3 -m http.server 8000 --directory public
```

Then visit `http://localhost:8000/` for the landing page or `http://localhost:8000/cards/` for the cards goldfish app.

### Scaffolding a new project

```bash
./scripts/new_project.sh "project name"
```

Creates `projects/active/<slug>/` with `README.md`, `PLAN.md`, `TASKS.md`, `LOG.md`, `NEXT.md`.

### Linting / Testing / Building

There are no lint, test, or build commands — the repo contains only Markdown, static HTML/CSS/JS, Bash scripts, and GitHub Actions YAML. Validate changes by reviewing file content and confirming the static server serves pages correctly.

### Key conventions

- Follow `ops/AI_OPERATING_SYSTEM.md` for session protocol, role split, and mandatory rules.
- Respect the deployment boundary: this repo does **not** publish production content. Deploy workflows belong in execution repos (e.g. `eid0-site`).
- GitHub Actions workflows require secrets (`REPO_FACTORY_TOKEN`, `AI_ENGINEER_TOKEN`, `GEMINI_API_KEY`) and vars (`REPO_FACTORY_OWNER`) configured in the GitHub repo settings — these are not needed for local development.
