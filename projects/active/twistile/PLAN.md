# PLAN

## Plan of Attack

- [ ] Confirm **execution repo** `eid0-twistile` exists after repo-factory merge; clone and open in a **new Cursor session** rooted in that repo.
- [ ] Spike image → downsample → **quantize to cube palette** (6 face colors + optional multi-cube palette expansion); decide grid UX (fixed aspect vs user-chosen W×H).
- [ ] Choose stack (static HTML/JS vs small framework) aligned with how `eid0-site` serves subpaths; implement MVP UI: upload, sliders for grid, preview canvas.
- [ ] Add export path for “build sheet” (print-friendly or image); document how `/mosaic` is built and deployed from `eid0-site`.

## Risks / Unknowns

- **Color science:** photos rarely map cleanly to six saturated plastics; need dithering or perceptual mapping and user-tunable brightness/saturation.
- **Physical realism:** one cube per cell vs “tile wall” with sticker parity—clarify v1 assumption so the grid math matches how you build.
- **Hosting:** `/mosaic` routing, base paths, and cache headers live in `eid0-site`; this repo should stay a focused app the site repo mounts or copies.
