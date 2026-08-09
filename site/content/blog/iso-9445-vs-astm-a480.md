---
title: "ISO 9445 vs ASTM A480: Which Tolerance Standard Should You Specify?"
slug: iso-9445-vs-astm-a480
description: "ASTM A480 is the normal route for general sheet and coil. ISO 9445 is the class-based route for narrow precision strip. Here is where the split matters on a PO."
keywords:
 - ISO 9445 vs ASTM A480
 - cold rolled stainless steel tolerance
 - stainless steel plate tolerance standards
 - ISO 9445 thickness tolerance
 - ASTM A480 thickness tolerance
 - stainless steel sheet width tolerance
 - flatness tolerance stainless steel
 - squareness tolerance stainless steel
 - engineering drawing stainless steel tolerance
 - Chinese mill stainless steel standard
date: 2026-04-05
category: Standards & Specifications
author: "Jinling Metal"
reviewedBy: "Jinling Materials Engineering Team, Foshan"
heroStats:
  - label: "Scope first"
    value: "Precision strip is not sheet"
    note: "Use the standard that fits the product"
  - label: "Tolerance language"
    value: "Bilateral or unilateral"
    note: "Do not compare labels alone"
  - label: "PO risk"
    value: "Do not mix standards"
    note: "The release table must be enforceable"
heroImage: "/images/blog/iso-9445-vs-astm-a480-hero.webp"
heroImageMode: "narrow"
---

# ISO 9445 vs ASTM A480: Which Tolerance Standard Should You Specify?

ASTM A480 and ISO 9445 are often compared as if they were two versions of the same tolerance standard. They are not.

ASTM A480 is the normal broad flat-product route for sheet, coil, strip, and plate in ASTM-based buying. ISO 9445 is the class-based route for cold-rolled precision strip. If the order is wide sheet, ASTM A480 or EN 10088-2 is usually the right conversation. If the order is narrow strip feeding a die, ISO 9445 starts to matter.

---

## What Each Standard Is For

| Standard | Scope | What it is good at |
|---|---|---|
| ASTM A480 | General stainless sheet, strip, coil, and plate | Broad commercial supply and ASTM product orders |
| ISO 9445 | Cold-rolled narrow stainless strip | Precision classes for stamping, springs, connectors, medical parts |
| EN 10151 | European precision-strip route aligned with ISO logic | EU contracts that need class-based strip tolerance |
| EN 10088-2 | European wide sheet and coil | Better fit for wide sheet than ISO 9445 |

The mistake is copying ISO 9445 onto a wide-sheet PO when the mill is not supplying precision strip. That does not make the material precision class; it makes the document harder to enforce.

---

## Thickness Tolerance: The Important Split

ASTM A480 gives a normal commercial tolerance by thickness and width. ISO 9445 gives classes: Normal, Special, Precision, and Extra Precision.

| Buying need | Better reference | Why |
|---|---|---|
| General sheet or coil | ASTM A480 | Correct scope and familiar inspection route |
| Wide European sheet | EN 10088-2 | Names D1/D2 sheet tolerance classes |
| Narrow strip for ordinary forming | ISO 9445 N or S | Class-based strip control |
| Precision stamping or springs | ISO 9445 P / EP | Much tighter thickness and camber control |

At normal class, the numbers can be close. Precision and Extra Precision are where ISO 9445 becomes a different supply route, not merely a different document name.

---

## Width, Length, and Flatness

The width-tolerance logic is different. ASTM A480 width tolerance is often unilateral positive: material may arrive wider than ordered, not narrower. ISO 9445 uses bilateral tolerance around nominal width.

That difference matters in two opposite ways:

- A480 protects minimum usable width.
- ISO 9445 helps center strip around a guide-channel or die-feeding requirement.

Flatness and camber are also more explicit in precision-strip buying. If a strip wanders in a high-speed press, the problem may not be chemistry or thickness at all. It may be camber control.

For wide visible panels, do not try to solve flatness through ISO 9445. Use the proper sheet/plate flatness requirement for the product form.

---

## When a Tiny Difference Matters

A few hundredths of a millimetre does not matter everywhere. It matters when the downstream process is built around it.

| Application | Tolerance sensitivity | Sensible route |
|---|---|---|
| General welded fabrication | Low to moderate | ASTM A480 or EN 10088-2 normal class |
| Laser blanking and stacked panels | Moderate | EN D2 or tighter agreed limit |
| Connector stamping | High | ISO 9445 Precision |
| Spring strip | High | ISO 9445 Precision / Extra Precision |
| Decorative wide sheet | Surface and flatness matter more | EN 10088-2 / ASTM A480 plus surface requirement |

The premium for tighter tolerance is real because the mill must control rolling, rejection, inspection, and sometimes campaign scheduling more tightly. It is worth paying when downstream scrap is expensive. It is not worth paying when the part is a welded bracket.

---

## Chinese Mill Orders

Chinese mills commonly certify cold-rolled sheet and coil to GB/T 3280, with export dual certification to ASTM A480 or EN 10088-2 when required. Precision strip needs a different conversation: class, width, camber, edge condition, and measured values must all be named.

For a China-origin export PO, avoid vague phrases such as "ISO tolerance" or "precision quality". Write the controlling standard, class, and numerical limit.

Useful wording:

```text
Tolerance: ASTM A480/A480M Table A2.5, ±0.06 mm maximum,
MTC to list measured thickness values per coil.
```

For strip:

```text
Tolerance: ISO 9445-1 Precision class, thickness 0.50 mm ±0.015 mm,
width 25.0 mm ±0.10 mm, camber value to be reported.
```

---

## Ordering Shortcut

Use ASTM A480 for general flat products. Use ISO 9445 only when the order is truly precision strip. If both standards are referenced, write the numerical tolerance that controls inspection.

The cleanest phrase for cross-standard disputes is:

> Tolerance to meet the named standard and the numerical limit on this PO; where standards differ, the more restrictive value controls.

That sentence gives the receiving inspector a rule instead of an argument.

## FAQ

**Is ISO 9445 tighter than ASTM A480?** Precision classes are tighter. Normal class may be similar or even looser in some cells. The class matters more than the standard name.

**Can wide sheet be certified to ISO 9445?** Usually no. ISO 9445 is a precision-strip standard. Wide sheet should use ASTM A480 or EN 10088-2.

**Why does A480 use +/0 width tolerance?** It protects minimum delivered width. For die-fed strip, maximum width may matter more, so a separate width limit should be written.

**Should I put both standards on the PO?** Only if both are genuinely required. If you do, also write the numerical acceptance limit so inspection is not left to interpretation.

**What should appear on the MTC?** Grade, heat number, product standard, tolerance standard/class, and measured values when the order depends on dimensional acceptance.

ASTM A480 and ISO 9445 answer different buying problems. Choose the one that matches the product form first; then write the tolerance number that the receiving team will actually use.
