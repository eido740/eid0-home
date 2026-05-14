# Cutover Checklist: Control Tower -> eid0-site

## 1) Freeze deploy source
- [ ] Merge control-tower change that disables deploy workflow.

## 2) Stand up eid0-site
- [ ] Create `eid0-site` repository.
- [ ] Add `public/` content for current site.
- [ ] Add `.github/workflows/deploy.yml` from bootstrap pack.

## 3) Configure secrets
- [ ] Add `FTP_SERVER`.
- [ ] Add `FTP_USERNAME`.
- [ ] Add `FTP_PASSWORD`.

## 4) Validate deploy
- [ ] Run manual workflow dispatch.
- [ ] Verify remote path updates correctly.
- [ ] Verify live site at `eid0.com`.

## 5) Lock policy
- [ ] Keep deploy capability only in `eid0-site`.
- [ ] Update `PROJECT_INDEX.md` with `eid0-site` repo row.
- [ ] Treat mini apps as separate repos unless tightly coupled.
