# Image Slots

Map of every image placeholder across the Elec Reid marketing site and the
`/build` form. Each slot has a unique ID. To wire up a real photo:

1. Drop the image in `public/images/` with a clear filename.
2. Find the slot ID below in the relevant page or `public/design-plan.html`.
3. For the marketing site: pass `src="/images/your-file.jpg"` to the
   `<ImagePlaceholder>` component (it falls back to a cream placeholder card
   when no `src` is provided).
4. For the form (`public/design-plan.html`): replace `<div class="img-slot"
   ...>` with `<div class="img-slot has-image" ...><img src="..."></div>`,
   matching the existing `IMG-WHY` / `IMG-00A` pattern.

Every slot also has a `data-img-slot="IMG-..."` attribute so you can find it
via DOM inspector or `grep`.

---

## Site letter scheme (so codes never collide with the form's numerics)

| Surface                       | Letter | Example       |
| ----------------------------- | ------ | ------------- |
| Homepage                      | `H`    | `IMG-H-A`     |
| Brands index                  | `B`    | `IMG-B-A`     |
| Projects index                | `P`    | `IMG-P-A`     |
| About                         | `A`    | `IMG-A-A`     |
| Solutions / services          | `S`    | `IMG-S-A`     |
| Project detail (per slug)     | `PR-`  | `IMG-PR-haven-A` |

The `/build` form uses numeric stage codes (`IMG-00A`, `IMG-04A1`, etc.) which
already live in `public/design-plan.html`. Don't reuse those on the site.

---

## Homepage (`app/page.tsx`)

Currently rendered with `src` fallback to existing photos so production never
shows an empty placeholder. Replace `src` with the real high-res photo when
ready.

| Slot       | Aspect | Current src                          | Caption (what to upload)                                       |
| ---------- | ------ | ------------------------------------ | -------------------------------------------------------------- |
| `IMG-H-A`  | _hero_ | `/images/haven-dsc05570.jpg` (hero bg, full-bleed not via slot) | Hero photo — modern interior, switch detail or wide shot, dusk warm light. |
| `IMG-H-B`  | 4:5    | `/images/haven-dsc05653.jpg`         | Residential division — premium home interior, switch detail.   |
| `IMG-H-C`  | 4:5    | `/images/eclat-bureau.webp`          | Commercial division — office or hospitality, AV in context.    |
| `IMG-H-D`  | 4:5    | `/images/industrial-warehouse.jpg`   | Industrial division — switchboard or warehouse, on-the-tools.  |
| `IMG-H-E`  | 1:1    | `/images/haven-dsc05653.jpg`         | Philosophy grid 1 — Haven Court home theatre and bar.          |
| `IMG-H-F`  | 1:1    | `/images/haven-dsc05656.jpg`         | Philosophy grid 2 — Haven Court home bar detail.               |
| `IMG-H-G`  | 1:1    | `/images/merival-sonos.jpg`          | Philosophy grid 3 — Merival whole-home audio install.          |
| `IMG-H-H`  | 1:1    | `/images/haven-dsc05643.jpg`         | Philosophy grid 4 — Haven Court private spa.                   |
| `IMG-H-I`  | 1:1    | `/images/haven-dsc05570.jpg`         | Project tile — Haven Court, Torquay.                           |
| `IMG-H-J`  | 1:1    | `/images/mckimm-5.jpg`               | Project tile — McKimm, Brighton.                               |
| `IMG-H-K`  | 1:1    | `/images/stkilda-1.jpg`              | Project tile — Fitzroy St, St Kilda.                           |
| `IMG-H-L`  | 1:1    | `/images/merival-sonos.jpg`          | Project tile — Merival, Melbourne.                             |
| `IMG-H-M`  | 1:1    | `/images/basalte-fibonacci.jpg`      | Brand tile — Basalte switch product shot.                      |
| `IMG-H-N`  | 1:1    | `/images/ekinex-proxima.jpg`         | Brand tile — Ekinex switch product shot.                       |
| `IMG-H-O`  | 1:1    | `/images/control4-lux.jpg`           | Brand tile — Control4 keypad product shot.                     |
| `IMG-H-P`  | 1:1    | `/images/apple-home.png`             | Brand tile — Apple Home device or app shot.                    |

The hero background image at the top of the page is rendered via a direct
`<Image>` (not via `ImagePlaceholder`) because it's a decorative full-bleed
backdrop, not a content slot. Slot ID `IMG-H-A` is reserved for it if you
want to convert it later.

---

## Brands index (`app/brands/page.tsx`)

Not yet converted to `ImagePlaceholder` slots — currently text-only cards.
When real brand logos / product shots arrive, add slots in this order:

| Slot       | Aspect | Caption                                             |
| ---------- | ------ | --------------------------------------------------- |
| `IMG-B-A`  | 1:1    | Apple Home — app or device hero shot.               |
| `IMG-B-B`  | 1:1    | Basalte — switch product shot.                      |
| `IMG-B-C`  | 1:1    | Home Assistant — dashboard shot.                    |
| `IMG-B-D`  | 1:1    | Control4 — keypad or touchscreen shot.              |
| `IMG-B-E`  | 1:1    | KNX — architectural keypad shot.                    |
| `IMG-B-F`  | 1:1    | Ekinex — Proxima or 20Venti shot.                   |
| `IMG-B-G`  | 1:1    | C-Bus — Australian-context install shot.            |
| `IMG-B-H`  | 1:1    | Core Smart Home — Eclipse range shot.               |
| `IMG-B-I`  | 1:1    | Unifi — rack or AP shot.                            |
| `IMG-B-J`  | 1:1    | Sonos — in-ceiling speaker install.                 |

(Add more as needed — keep sequential `IMG-B-*`.)

---

## Projects index (`app/projects/page.tsx`)

Not yet converted. When ready:

| Slot       | Aspect | Caption                                             |
| ---------- | ------ | --------------------------------------------------- |
| `IMG-P-A`  | 4:3    | Hero project tile — Haven Court wide shot.          |
| `IMG-P-B`  | 4:3    | Project tile — McKimm.                              |
| `IMG-P-C`  | 4:3    | Project tile — Fitzroy St.                          |
| `IMG-P-D`  | 4:3    | Project tile — Merival.                             |
| ...        |        | Add `IMG-P-E`, `IMG-P-F` etc. for new projects.     |

---

## Project detail pages

Each project gets its own letter prefix `IMG-PR-<slug>-X`. When project detail
pages are built, follow this pattern:

- `/projects/haven-court` → `IMG-PR-haven-A`, `IMG-PR-haven-B`, ...
- `/projects/mckimm`      → `IMG-PR-mckimm-A`, ...
- `/projects/fitzroy-st`  → `IMG-PR-fitzroy-A`, ...

Slot A is always the hero. B, C, D etc. are detail / interior shots.

---

## About / Solutions / Services

To be added when those pages get a photo pass:

- About → `IMG-A-A` (Joe / team portrait), `IMG-A-B` (workshop / office), …
- Services → `IMG-S-A`, `IMG-S-B`, …

---

## Form (`public/design-plan.html`)

Already extensive — see the file directly for `IMG-00A` through `IMG-WELLNESS-D`
and the `IMG-WHY` opener. Stages 03 (touchscreens), 04 (switches), 04B
(deep-dive), 05 (scenes), 06 (systems) and 06B (deep dives) all use slots.
Replace any `<div class="img-slot" ...>` with `<div class="img-slot has-image"
...><img src="/images/..."></div>` to wire a real photo.
