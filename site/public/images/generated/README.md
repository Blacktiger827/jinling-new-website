# Generated Image Asset Rules

This folder is for temporary AI-generated website imagery that supports layout,
atmosphere, product distinction, or finish swatches while better real Jinling
photos are still unavailable.

Generated images are placeholders, not proof. Do not use them for inspection
evidence, certificate evidence, defect claims, hydrostatic testing, loading
proof, or any place where the page is asking the buyer to trust a physical
process.

## Naming

Use stable, page-aware names:

```text
public/images/generated/<family>/<page-or-topic>/<slot>-ai-v1.webp
public/images/generated/<family>/<page-or-topic>/<slot>-ai-v2.webp
```

Examples:

```text
public/images/generated/hero/products-overview/hero-ai-v1.webp
public/images/generated/capabilities/protective-film/hero-ai-v1.webp
public/images/generated/surfaces/stainless-steel-ba-finish/hero-ai-v1.webp
```

When a real image becomes available, save it in the canonical image tree:

```text
public/images/<family>/<slug>/<slot>.jpg
public/images/<family>/<slug>/<slot>.webp
```

Examples:

```text
public/images/capabilities/protective-film/hero.jpg
public/images/surfaces/ba/hero.jpg
public/images/products/square-hex-bar/hero.jpg
```

## Replacement Workflow

1. Generate the candidate image and save it under this folder using the
   generated naming pattern.
2. Record the page, slot, prompt, generated path, and future real replacement
   path in `manifest.json`.
3. Use generated imagery only where the manifest says `generate_image2`.
4. Keep proof-layer slots on hold until real Jinling images exist.
5. When a real photo arrives, save it to the canonical `public/images/...`
   path and update the consuming page or component to point there.
6. Change the manifest action to `replaced_with_real` after the swap.

## Visual Standard

Generated assets should feel like restrained industrial editorial photography:

- realistic stainless steel surfaces and factory context
- quiet light, controlled contrast, no glossy brochure effects
- no fake labels, no fake certificates, no fake instrument readings
- no visible third-party brand names unless the real photo legally shows them
- no text inside the image unless a later brief explicitly requires it

Alt text should describe the subject plainly. Do not write "AI-generated" in
public-facing alt text.
