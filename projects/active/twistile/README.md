# Twistile

**Twistile** is a working title: *twist* (Rubik's Cube) + *tile* (grid of facelet colors). It is a small web app that turns a source image into a **mosaic painting plan** you can build with physical cubes—typically a grid where each cell maps to one cube face showing a chosen color from the standard palette.

## Objective

Ship a browser-based tool on **`https://eid0.com/mosaic`** that ingests an image and emits a usable mosaic layout (grid dimensions, per-cell color / cube orientation hints, and export or print-friendly views).

## Why this matters

Manual mosaic design from photos is slow and error-prone. A generator collapses iteration time so you spend hours twisting cubes instead of guessing dithering in a spreadsheet.

## Scope

- **In scope:** Client-side or lightweight image sampling; grid size and palette constraints (6 base colors + cube geography); preview + export (PNG/PDF or print grid—TBD); hosting as a path under the existing `eid0-site` deployment model.
- **Out of scope (v1):** Inventory management for your physical cube collection; optimal NP-hard cube-count solving; selling patterns or accounts.

## Definition of Done

- [ ] Repo `eid0-twistile` exists and local clone is the place for implementation work.
- [ ] App runs locally with a clear README for dev setup.
- [ ] User can upload or paste an image and see a grid preview constrained to a Rubik-like palette.
- [ ] Deployed build is reachable at **`eid0.com/mosaic`** (routing and build wiring owned by `eid0-site` / deploy SOP—coordinate there).

## Related control-tower docs

- Deployment boundary: control tower does not publish production; execution happens in **`eid0-site`** (or as documented in `README.md` at repo root).
- Portfolio row: `PROJECT_INDEX.md` in this repo.
