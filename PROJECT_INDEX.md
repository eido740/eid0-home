# Project Portfolio Index

Single source of truth for active/paused/completed projects and their repo locations.

## Status Key
- active: currently being executed.
- paused: intentionally parked.
- completed: shipped or archived.

## Portfolio
| Project | Status | Repo URL | Local Path | Owner | Last Updated | Next Physical Step |
|---|---|---|---|---|---|---|
| AI Workspace Operating System | active | https://github.com/eido740/eid0-home | /workspace | Andrew + Assistant | 2026-05-14 | Merge seeder PR to trigger queued bootstrap request on `main`. |
| eid0 Site Platform (migration) | active | https://github.com/eido740/eid0-site | TBD | Andrew + Assistant | 2026-05-14 | Merge seeder PR, confirm seeded files in `eid0-site`, then run first manual deploy. |
| Twistile (Rubik mosaic generator) | active | https://github.com/eido740/eid0-twistile (pending factory) | `projects/active/twistile` | Andrew + Assistant | 2026-05-14 | Merge control-tower PR with repo-factory request; confirm `eid0-twistile` exists; clone and continue in new session. |

## Intake Rules
1. New serious project -> create dedicated GitHub repo.
2. Register it here immediately.
3. Scaffold local docs (`README/PLAN/TASKS/LOG/NEXT`) in that project context.
4. Keep `Next Physical Step` brutally specific (no vague goals).
