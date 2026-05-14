# MEMEX

## Session Snapshot
- Session #: 11
- Date: 2026-05-14
- Active repo/branch: `/workspace` / `cursor/universal-ai-workflow-0ca7`
- Strategic objective: Resolve opaque repo-seeder 404 and make failure mode actionable.

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
- Observed repo-seeder runs failing immediately due workflow file parsing issue.
- Root cause: multi-line HTML template in YAML block scalar broke indentation parsing.
- Fixed seeder by replacing raw multiline template literals with explicit line-array joins.
- Set policy to create PRs ready-for-review by default (non-draft) to remove extra status-toggle click.
- Added guarded auto-merge workflow (`auto-merge-lane.yml`) driven by `automerge-safe` label.
- Added explicit guardrails for file scope, trusted authors, same-repo branches, and `main` target.
- Documented lane usage and constraints in `ops/AUTO_MERGE_LANE.md`.
- Observed `Repo Seeder` fail with `HttpError: Not Found` on PUT to `repos/eido740/eid0-site/contents/.github/workflows/deploy.yml`.
- Patched seeder to emit explicit guidance for workflow-permission failures (classic PAT `workflow` scope or fine-grained Workflows write permission).
- Added branch resolution guard: fallback to target repo default branch if requested branch is missing.
- Updated seeder docs and request templates to treat `branch` as optional and clarify required token permissions.

## Current Technical Blockers
- Seeder hotfix must be merged to `main`; token may still need workflow-write permission depending on current PAT scope.

## Next Physical Step
- Merge seeder hotfix PR, then rerun `Repo Seeder` for queued request and validate `eid0-site` bootstrap files.

## Open Loops
- Confirm preferred naming convention for project slugs (kebab-case is current default).
- Decide whether to track MEMEX session count manually or with automation.
- Choose mini-app deployment style for `eid0-site` (artifact copy model vs direct folder deploy per app).
- Decide whether to run repo-factory under your user token or a dedicated machine user.
- Decide whether `eid0-site` should stay private or be switched to public after creation.
- Confirm seeded files in `eid0-site` and run first manual deploy test.
- Decide whether to auto-merge low-risk automation PRs once checks pass.
- Decide whether to broaden or tighten allowed path rules in auto-merge lane after first week of use.
- If seeder still fails, rotate token with workflow-write permission and rerun.

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
| 9 | 2026-05-14 | Seeder workflow hotfix + PR friction reduction | Workflow parse failure and repeated draft->ready clicks slowed execution | Rewrite seeder string construction for YAML safety and default PRs to non-draft |
| 10 | 2026-05-14 | Guarded auto-merge lane | Repeated manual merge clicks created operator friction | Add label-based auto-merge workflow with strict path and trust guardrails |
| 11 | 2026-05-14 | Seeder 404 diagnostics + remediation | Opaque 404 blocked bootstrap with unclear root cause | Add explicit permission error messaging, branch fallback, and clearer token-scope docs |

## Retro (Session 10)
- Recurring friction point 1: Merge workflow still too manual.
  - Rule update: default to non-draft PRs and use guarded `automerge-safe` lane for low-risk automation/docs changes.
- Recurring friction point 2: Fixes often need one additional merge before automation can help.
  - Rule update: ship automation primitives early in architecture so later iterations can consume them immediately.
- Recurring friction point 3: Permission boundaries can silently block execution paths.
  - Rule update: maintain token-backed automation bridges (repo-factory/repo-seeder/auto-merge lane) for cross-repo operations.

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
