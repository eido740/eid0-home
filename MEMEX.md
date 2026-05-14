# MEMEX

## Session Snapshot
- Session #: 4
- Date: 2026-05-14
- Active repo/branch: `/workspace` / `cursor/universal-ai-workflow-0ca7`
- Strategic objective: Execute deploy cutover hardening and prepare dedicated site repo bootstrap.

## Decisions Made
- Cursor is the implementation engine; Gemini Live is strategy support.
- Every session closes with a `MEMEX.md` update.
- New work should use standardized project templates for repeatability.
- Default operating mode is zero-command autopilot (natural-language intent, assistant executes mechanics).
- Repo SOP is Control Tower + one execution repo per serious project.
- Existing `deploy.yml` publishes only on push to `main` and only when `public/**` or deploy workflow file changes.
- Current workflow/doc changes on feature branches do not auto-publish to DreamHost.
- Control-tower deploy workflow is now explicitly disabled and cannot publish production content.
- Added bootstrap pack for dedicated `eid0-site` repo with deploy workflow, secrets checklist, and cutover checklist.
- Portfolio now tracks `eid0-site` migration as an active item.

## Current Technical Blockers
- No active blockers.

## Next Physical Step
- Create `eid0-site` repository and apply `ops/site-repo-bootstrap/` contents.

## Open Loops
- Confirm preferred naming convention for project slugs (kebab-case is current default).
- Decide whether to track MEMEX session count manually or with automation.
- Choose mini-app deployment style for `eid0-site` (artifact copy model vs direct folder deploy per app).

## Session Log
| Session # | Date | Focus | Friction Observed | Rule Update Proposed |
|---|---|---|---|---|
| 1 | 2026-05-14 | Workflow foundation | None yet | N/A |
| 2 | 2026-05-14 | Zero-command workflow + repo SOP | User frustration with command overhead and hanging sessions | Add session-close autopilot + control-tower/execution repo policy |
| 3 | 2026-05-14 | Deploy risk validation + hosting architecture | Potential coupling between control tower changes and website publishing | Separate deploy-capable site repo from control tower repo |
| 4 | 2026-05-14 | Deploy hardening + site bootstrap creation | Risk of accidental production publish from control tower | Disable deploy in control tower and introduce dedicated site repo bootstrap |

## End-of-Session Checklist
- [x] Decisions updated
- [x] Blockers updated
- [x] Next physical step updated
- [x] Session log row appended
- [ ] Retro completed if session number is divisible by 5
