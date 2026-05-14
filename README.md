# eid0-home

## AI Workspace Operating System

This repo now includes a durable workflow layer for organized, repeatable project execution.

### Core files
- `ops/AI_OPERATING_SYSTEM.md` - rules of engagement, role split, and guardrails.
- `ops/REPO_ARCHITECTURE_SOP.md` - repo strategy (control tower + per-project execution repos).
- `MEMEX.md` - mandatory session continuity log (decisions, blockers, next physical step).
- `PROJECT_INDEX.md` - portfolio tracker for project status + repo location.
- `ops/GEMINI_TO_CURSOR_HANDOFF.md` - mobile strategy to desktop execution handoff template.
- `ops/WORKFLOW_QUICKSTART.md` - minimal startup flow.

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