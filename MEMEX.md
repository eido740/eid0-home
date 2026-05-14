# MEMEX

## Session Snapshot
- Session #: 8
- Date: 2026-05-14
- Active repo/branch: `/workspace` / `cursor/universal-ai-workflow-0ca7`
- Strategic objective: Seed `eid0-site` from bootstrap without manual repo access from agent account.

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
- Added `repo-factory` GitHub workflow to create repositories from request files after merge to `main`.
- Added one-time setup documentation for elevated GitHub permissions (`REPO_FACTORY_TOKEN`) and safe operation.
- User confirmed `REPO_FACTORY_TOKEN` and `REPO_FACTORY_OWNER` are configured.
- Created repo-factory request: `.github/repo-factory/requests/2026-05-14-eid0-site.json`.
- Identified runtime failure in repo-factory workflow: `Identifier 'core' has already been declared`.
- Patched workflow to use injected `core` from `actions/github-script` context (no local redeclaration).
- Expanded repo-factory trigger paths to include workflow-file changes for automatic reruns after hotfix merges.
- Verified `Repo Factory` run succeeded and created `https://github.com/eido740/eid0-site`.
- Added `Repo Seeder` workflow to apply approved bootstrap profiles to execution repos via request files.
- Queued seeding request: `.github/repo-seeder/requests/2026-05-14-eid0-site-bootstrap.json`.

## Current Technical Blockers
- Seeder request is queued on feature branch; merge is required for execution on `main`.

## Next Physical Step
- Merge seeder PR so `Repo Seeder` runs and applies bootstrap files into `eid0-site`.

## Open Loops
- Confirm preferred naming convention for project slugs (kebab-case is current default).
- Decide whether to track MEMEX session count manually or with automation.
- Choose mini-app deployment style for `eid0-site` (artifact copy model vs direct folder deploy per app).
- Decide whether to run repo-factory under your user token or a dedicated machine user.
- Decide whether `eid0-site` should stay private or be switched to public after creation.
- Confirm seeded files in `eid0-site` and run first manual deploy test.

## Session Log
| Session # | Date | Focus | Friction Observed | Rule Update Proposed |
|---|---|---|---|---|
| 1 | 2026-05-14 | Workflow foundation | None yet | N/A |
| 2 | 2026-05-14 | Zero-command workflow + repo SOP | User frustration with command overhead and hanging sessions | Add session-close autopilot + control-tower/execution repo policy |
| 3 | 2026-05-14 | Deploy risk validation + hosting architecture | Potential coupling between control tower changes and website publishing | Separate deploy-capable site repo from control tower repo |
| 4 | 2026-05-14 | Deploy hardening + site bootstrap creation | Risk of accidental production publish from control tower | Disable deploy in control tower and introduce dedicated site repo bootstrap |
| 5 | 2026-05-14 | White-glove repo provisioning automation | Manual GitHub repo creation step breaks flow and discourages project branching | Add repo-factory workflow with one-time token setup and request ledger |
| 6 | 2026-05-14 | First automated repo request execution | Repo creation is event-driven on `main`, so feature-branch request needs merge to run | Queue request file and make merge dependency explicit |
| 7 | 2026-05-14 | Repo-factory hotfix | Workflow failed due to `core` redeclaration in github-script runtime | Remove local `core` import and rely on injected context object |
| 8 | 2026-05-14 | Repo seeding automation for private repo access boundary | Agent account lacks direct access to private execution repos for direct push | Add token-backed Repo Seeder workflow and queue profile-based seed request |

## Retro (Session 5)
- Recurring friction point 1: Manual commands and cleanup create context decay.
  - Rule update: keep assistant-owned session closure and hanging-session reconciliation mandatory.
- Recurring friction point 2: Permission boundaries create false starts when moving from strategy to execution.
  - Rule update: implement one-time auth bootstrap docs for any boundary (repo creation, external systems), then automate repeat work.
- Recurring friction point 3: Architecture ambiguity creates hesitation on where to put new work.
  - Rule update: preserve Control Tower + execution repo split, with explicit portfolio registration on intake.

## End-of-Session Checklist
- [x] Decisions updated
- [x] Blockers updated
- [x] Next physical step updated
- [x] Session log row appended
- [x] Retro completed if session number is divisible by 5
