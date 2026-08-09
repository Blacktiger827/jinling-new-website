# Image Guide — Jinling Steel Website

**Version**: 2026-04-17 — aligned with new brand foundation (No.8 / AFP / Super Finish · 29 years · 150+ clients across 10+ countries).

---

## Naming Convention

| Role | Filename | Target Size |
|---|---|---|
| Page main image | `hero.jpg` | 1600×900 (landscape) or 1920×1080 (full-width hero) |
| Gallery / detail | `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` | 1200×800 |
| Industry scene | `scene-1.jpg`, `scene-2.jpg` | 1200×900 |
| Process close-up | `process.jpg` | 1200×800 |
| Packaging | `packaging.jpg` | 1200×800 |
| Comparison | `comparison.jpg` | 1200×800 |
| Specification diagram | `spec.jpg` | 1200×800 |
| Video cover | `video-cover.jpg` | 1280×720 (YouTube default) |

**Format**: WebP preferred, JPG acceptable. PNG only for charts or transparent backgrounds.
**Optimization**: Run through `next/image` — all images should be compressed to ≤ 200 KB for hero, ≤ 100 KB for gallery.

### Generated Placeholder Assets

Temporary AI/Image2 assets live under `public/images/generated/` and are tracked
in `public/images/generated/manifest.json`.

- Use generated images only for temporary atmosphere, page distinction, finish swatches, or narrow editorial cues.
- Do not use generated images for proof layers: inspection, certificates, defects, hydro/NDT, loading, founder portraits, or real process-video covers.
- Name generated files as `<slot>-ai-v1.webp`; replace them later with canonical real files such as `hero.jpg`, `scene-1.jpg`, or `swatch.jpg`.

---

## Directory Structure

```
public/images/
├── hero/                      # Global hero banners
│   ├── home-hero.jpg          # Homepage hero (1920×800)
│   ├── products-hero.jpg      # /products overview
│   └── about-hero.jpg         # /about hero
│
├── products/                  # Product form pages
│   ├── coil/
│   ├── sheet/
│   ├── bar/
│   ├── tube/
│   ├── round-bar/ flat-bar/ angle-bar/ square-hex-bar/
│   └── industrial-pipe/ sanitary-tube/ decorative-pipe/ tube-pipe/
│
├── surfaces/                  # Surface finishing pages
│   ├── no8-mirror/            # ⭐ signature finish
│   ├── afp/                   # ⭐ signature finish
│   ├── super-finish/          # ⭐ signature finish
│   ├── no4-brushed/
│   ├── hairline/
│   ├── 2b/
│   ├── ba/
│   ├── embossed/
│   └── coloring/              # PVD color
│
├── grades/                    # Grade pages
│   ├── 304-stainless-steel/
│   ├── 316l-stainless-steel/
│   ├── 430-stainless-steel/
│   ├── 201-stainless-steel/
│   └── 2205-duplex-stainless-steel/
│
├── applications/              # Industry solutions
│   ├── kitchen-equipment/
│   ├── food-beverage/
│   ├── architecture/
│   ├── medical-pharmaceutical/
│   ├── oil-gas/
│   ├── elevator-decoration/
│   ├── chemical-petrochemical/
│   ├── automotive-exhaust/
│   └── water-treatment-desalination/
│
├── capabilities/              # In-house processing
│   ├── surface-finishing/
│   ├── cut-to-length/
│   ├── slitting-edging/
│   ├── protective-coating/
│   ├── protective-film/
│   └── packaging-logistics/
│
├── about/                     # Company / facility
│   ├── factory-exterior.jpg
│   ├── production-line.jpg
│   ├── qc-station.jpg
│   ├── team.jpg
│   └── kary-portrait.jpg      # ⭐ founder (for KaryQuote component)
│
├── common/                    # Cross-page shared images
│   ├── signature-no8.jpg
│   ├── signature-afp.jpg
│   ├── signature-super-finish.jpg
│   ├── logo.png               # transparent background
│   └── og-image.jpg           # 1200×630 social share default
│
├── videos/                    # YouTube video cover images
│   ├── no8-process-cover.jpg  # YouTube: 6uuisoXzwig
│   └── afp-process-cover.jpg  # YouTube: lKKG2z3OxHo
│
├── generated/                 # Temporary Image2 assets + manifest
│   ├── README.md
│   └── manifest.json
│
└── insights/                  # Market reports (charts, etc.)
```

---

## Image Content Guidelines (by directory)

### hero/
- **home-hero.jpg**: wide product-shot with No.8 mirror or factory atmosphere
- **products-hero.jpg**: product variety shot (coil + sheet + tube)
- **about-hero.jpg**: factory exterior or team shot

### products/{form}/
- `hero.jpg`: clean single-subject product shot on neutral background
- `gallery-1.jpg` … `gallery-3.jpg`: detail views, inventory shots, surface close-ups
- `angle-bar/` and `industrial-pipe/` should keep their own evidence photos instead of borrowing the parent bar or tube gallery.

### surfaces/{finish}/
- `hero.jpg`: surface close-up showing the finish character (reflection for mirror, grain for hairline)
- `gallery-1.jpg` … `gallery-3.jpg`: application contexts, process close-ups, scale references
- For No.8 / AFP — keep at least one "real-world application" shot (kitchen appliance, elevator panel)

### grades/{grade}/
- `hero.jpg`: representative application scene for the grade's primary market
  - 304 → general industrial / food equipment
  - 316L → coastal architecture / pharma
  - 430 → appliance panels / **No.8 Mirror showcase** (Jinling 430 mirror is differentiated)
  - 201 → interior decoration
  - 2205 → chemical / offshore

### applications/{industry}/
- `hero.jpg`: industry-defining visual (kitchen = commercial kitchen line; architecture = facade close-up)
- `scene-1.jpg`: supporting scene
- All industry images **must clearly depict stainless steel presence** (no generic stock photos without metal)
- Do not use faucet, bathroom, tableware, or container/logistics photos as proof for kitchen, food, water, or medical pages unless the page is explicitly about that object.
- Automotive exhaust needs a real exhaust / bent tube / thin-wall tube route cue. Generic tanks or branded marketing covers should stay out of the hero slot.
- Application hub cards should not turn qualification numbers into promises. Keep NACE, PREN, hydro proof, and exact Ra values in article context unless the route is explicitly specified.

### capabilities/{service}/
- `hero.jpg`: production-line photo of the capability
- `gallery-1.jpg`, `gallery-2.jpg`: supporting process, surface, packing, or release-evidence photos
- For **surface-finishing** and **protective-coating** — showcase automated equipment
- For **cut-to-length** — show real sheet stacks / panel handling, not abstract texture only
- For **slitting-edging** — show feed, edge/rewind, and packed slit coil condition
- For **protective-film** — use real film/protection evidence; generated film samples can only be explanatory cues
- For **packaging-logistics** — container loading, export-grade wooden crating, wrapped coils, sheet stacks, or protected tube ends

### about/
- `kary-portrait.jpg` is **required** for KaryQuote component and About page
- Factory shots should be **recent, well-lit**, not blurry iPhone snapshots

---

## Brand Alignment Rules

**DO include these in alt text and file naming context:**
- "No.8 Mirror · Ra < 0.03 µm · 60° gloss > 550 GU"
- "AFP · Self-formulated 10–20 µm nano-coating"
- "Super Finish · 6× corrosion resistance"
- "25,000 m² dual facility"
- "29 years · Since 1997 · 150+ clients across 10+ countries"
- "ASTM A270 · 24 bar hydrostatic ≥ 1 min · 600 grit interior"

**DO NOT use in any alt text / caption / filename:**
- ❌ "6,000 tons inventory"
- ❌ "10-day lead time" / "15-day dispatch"
- ❌ "16 production lines"
- ❌ "Triple-Zero standard"
- ❌ "500+ clients"
- ❌ "27 years" (→ always 29 years)
- ❌ "25-hour deep passivation"
- ❌ "24 kg hydrostatic" (→ always 24 bar)
- ❌ Specific mill names claimed as exclusive (TISCO / Baosteel / Tsingshan / POSCO exclusive partnership)
- ❌ "Novacel strategic partnership" (→ Novacel / Nitto / Polyfilm selected per use case)
- ❌ "5 ft / 1,524 mm signature capability" (→ wider options on request)

---

## Source Library

Original high-resolution images live in:
```
/Users/liwei/Desktop/知识库test/steel/JINLING_SEO_PACKAGE/03_strategy_docs/金凌资料参考/Jinling 网站所用素材/2024 jinling metals资料收集包（金凌）/
```

Key source folders:
- `2.BANNER/` — 4 banner sets for home-hero
- `4.20款产品/产品图片/1000  800 产品图片更换2.0/` — product photos (1000×800 ready)
- `9.Scenes 资料/{1 Appliance, 2 Industrial, 3 Architecture}/` — application scene photos (licensed unsplash/pexels)
- `11.highlights/{NO.8, AFP}/` — ⭐ signature finish showcase + YouTube video links
- `公司介绍板块/` — factory & team photos

---

## Components Using These Images

| Component | Image Role |
|---|---|
| `HeroStatsCard` | No image (metric-only) |
| `GalleryGrid` | Each item needs `image` (1200×900 or square) |
| `VideoEmbed` | Uses `poster` (video-cover.jpg) or YouTube auto-thumbnail |
| `BrandBar` | No image (text-only) |
| `ApplicationShowcase` | Each item needs `image` (4:3 ratio, industry scene) |
| `JumpChips` | No image |
| `KaryQuote` | Optional `portrait` (about/kary-portrait.jpg, circular 80×80) |

---

## Still Missing / To Be Added

- ⚠️ `about/kary-portrait.jpg` — temporary crop from user-supplied Kary marketing image; replace later with a real work-context portrait or video still
- ❌ `videos/no8-process-cover.jpg` / `afp-process-cover.jpg` — currently falling back to YouTube auto-thumbnails (works but not optimal)
- ✅ Individual `industrial-pipe/` and `angle-bar/` folders now exist and should not fall back to parent `tube/` or `bar/` galleries
- ⚠️ `capabilities/protective-film/` — now uses real protection-adjacent photos, but still needs a stronger dedicated film-application / peel-test process photo when available
- ⚠️ `applications/automotive-exhaust/` — current images are real welded-tube / forming-route cues, not a dedicated automotive exhaust installation photo; replace when a true 409L / 441 exhaust line or component image is available
- ✅ `surfaces/ba/` — real BA sample directory now exists; use this instead of borrowing `super-finish/` or `2b/`
- ❌ `insights/` chart images — generated per weekly report, not batch-imported
