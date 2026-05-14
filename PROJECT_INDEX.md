# Project Portfolio Index

Single source of truth for active/paused/completed projects and their repo locations.

## Status Key
- active: currently being executed.
- paused: intentionally parked.
- completed: shipped or archived.

## Portfolio
| Project | Status | Repo URL | Local Path | Owner | Last Updated | Next Physical Step |
|---|---|---|---|---|---|---|
| AI Workspace Operating System | active | https://github.com/eido740/eid0-home | /workspace | Andrew + Assistant | 2026-05-14 | Merge control-tower PR so repo-factory can process queued requests on `main`. |
| eid0 Site Platform (migration) | active | Provisioning queued (`eid0-site`) | TBD | Andrew + Assistant | 2026-05-14 | Merge PR to trigger repo-factory, then copy bootstrap pack, set deploy secrets, run first manual deploy. |

## Intake Rules
1. New serious project -> create dedicated GitHub repo.
2. Register it here immediately.
3. Scaffold local docs (`README/PLAN/TASKS/LOG/NEXT`) in that project context.
4. Keep `Next Physical Step` brutally specific (no vague goals).
