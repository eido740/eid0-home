# eid0-home

## AI Workspace Operating System

This repo now includes a durable workflow layer for organized, repeatable project execution.

### Core files
- `ops/AI_OPERATING_SYSTEM.md` - rules of engagement, role split, and guardrails.
- `ops/REPO_ARCHITECTURE_SOP.md` - repo strategy (control tower + per-project execution repos).
- `ops/REPO_FACTORY_SETUP.md` - one-time setup for automated GitHub repo creation.
- `ops/REPO_SEEDER_SETUP.md` - setup for automated bootstrap seeding into execution repos.
- `ops/AUTO_MERGE_LANE.md` - guarded one-label lane for low-risk auto-merging.
- `MEMEX.md` - mandatory session continuity log (decisions, blockers, next physical step).
- `PROJECT_INDEX.md` - portfolio tracker for project status + repo location.
- `ops/GEMINI_TO_CURSOR_HANDOFF.md` - mobile strategy to desktop execution handoff template.
- `ops/WORKFLOW_QUICKSTART.md` - minimal startup flow.
- `ops/site-repo-bootstrap/` - bootstrap pack for dedicated `eid0-site` deployment repo.
- `.github/repo-factory/` - request/processed ledgers for automated repo creation.
- `.github/repo-seeder/` - request/processed ledgers for automated repo bootstrap seeding.

### Project scaffolding
- Templates live in `templates/project/`.
- Preferred: tell assistant `Create project <name>` and let it run automation.
- Manual fallback:

```bash
./scripts/new_project.sh "project name"
```

Generated project files:
- `README.md`
- `PLAN.md`
- `TASKS.md`
- `LOG.md`
- `NEXT.md`

### Directory structure
- `inbox/` - raw ideas and captures.
- `projects/active/` - current projects.
- `projects/paused/` - parked projects.
- `projects/completed/` - archived projects.
- `resources/` - reusable prompts and research.

### Deployment boundary
- This control-tower repository does **not** publish production site content.
- Production publishing belongs in a dedicated site execution repo (`eid0-site`).

### Repo factory automation
- One-time setup: `ops/REPO_FACTORY_SETUP.md`
- Request template: `.github/repo-factory/REQUEST_TEMPLATE.json`

### Repo seeder automation
- Setup: `ops/REPO_SEEDER_SETUP.md`
- Request template: `.github/repo-seeder/REQUEST_TEMPLATE.json`

### Auto-merge lane
- Workflow: `.github/workflows/auto-merge-lane.yml`
- Trigger label: `automerge-safe`