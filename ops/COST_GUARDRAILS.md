# Cost Guardrails SOP

Keep daily conversations cheap. Escalate only when the task justifies it.

## Objective
- Avoid burning monthly usage in day 1.
- Default to low-cost models for routine work.
- Use high-cost models only when needed for difficult tasks.

## Baseline Policy
1. Default lane: **Auto / Composer** for day-to-day planning, notes, docs, triage, and straightforward coding.
2. Escalation lane: premium "big brain" model only for high-complexity tasks.
3. De-escalate back to default lane after the hard part is done.

## Escalation Triggers (Big Brain Mode)
Escalate only when one or more of these are true:
- deep architecture tradeoff analysis across multiple subsystems
- stubborn debugging after at least one failed low-cost attempt
- large refactors with high regression risk
- critical production incidents where speed and reasoning depth matter

## De-Escalation Triggers (Back to Cheap Mode)
Return to default lane when:
- core architecture decision is locked
- bug root cause is identified
- remaining work is implementation, cleanup, tests, or docs

## Daily Spend Guardrails
- Soft alert: at 25% monthly budget consumed in one day
- Hard review: at 40% monthly budget consumed in one day
- Freeze premium usage when crossing hard review threshold unless explicitly approved

## Operator Commands (Plain English)
- "Use default-cost mode" -> stay on Auto/Composer lane
- "Big brain mode for this task" -> temporary escalation for this task only
- "Back to cheap mode" -> de-escalate immediately
- "Cost status" -> summarize current usage posture and recommended lane

## Cursor Workflow (Model Switching)
Desktop chat/composer:
- Open chat (`Cmd+I` on Mac, `Ctrl+I` on Windows/Linux)
- Use model picker at top of chat panel
- Optional shortcut: `Cmd+/` cycles models (per docs)

Cloud Agent sessions:
- Treat model as selected at agent start/defaults
- If current session is on expensive model and you want cheaper mode, start a **new agent/session** with lower-cost model/default

## Weekly Review
- Check usage dashboard and identify expensive patterns.
- Capture one improvement in MEMEX every week (prompt hygiene, model routing, or scope control).
