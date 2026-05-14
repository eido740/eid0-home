# GitHub Secrets Checklist for eid0-site

Add these repository secrets in `eid0-site`:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

## Verification step
1. Trigger `workflow_dispatch` manually once.
2. Confirm workflow can connect and upload a test change.
3. Verify files appear at `/home/geminuser/eid0.com/`.

## Safety recommendation
- Keep secrets only in `eid0-site`.
- Do not duplicate DreamHost secrets in control-tower repos.
