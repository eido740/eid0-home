# MEMEX

## Session Snapshot
- Session #: 3
- Date: 2026-05-14
- Active repo/branch: `/workspace` / `cursor/universal-ai-workflow-0ca7`
- Strategic objective: Validate website publish risk and choose long-term repo/deploy architecture.

## Decisions Made
- Cursor is the implementation engine; Gemini Live is strategy support.
- Every session closes with a `MEMEX.md` update.
- New work should use standardized project templates for repeatability.
- Default operating mode is zero-command autopilot (natural-language intent, assistant executes mechanics).
- Repo SOP is Control Tower + one execution repo per serious project.
- Existing `deploy.yml` publishes only on push to `main` and only when `public/**` or deploy workflow file changes.
- Current workflow/doc changes on feature branches do not auto-publish to DreamHost.

## Current Technical Blockers
- No active blockers.

## Next Physical Step
- Decide whether to migrate website publishing pipeline into a dedicated `eid0-site` execution repo.

## Open Loops
- Confirm preferred naming convention for project slugs (kebab-case is current default).
- Decide whether to track MEMEX session count manually or with automation.
- Confirm desired deploy topology for multi-app hosting on `eid0.com` (single deploy repo vs per-app deploy workflows).

## Session Log
| Session # | Date | Focus | Friction Observed | Rule Update Proposed |
|---|---|---|---|---|
| 1 | 2026-05-14 | Workflow foundation | None yet | N/A |
| 2 | 2026-05-14 | Zero-command workflow + repo SOP | User frustration with command overhead and hanging sessions | Add session-close autopilot + control-tower/execution repo policy |
| 3 | 2026-05-14 | Deploy risk validation + hosting architecture | Potential coupling between control tower changes and website publishing | Separate deploy-capable site repo from control tower repo |

## End-of-Session Checklist
- [x] Decisions updated
- [x] Blockers updated
- [x] Next physical step updated
- [x] Session log row appended
- [ ] Retro completed if session number is divisible by 5
