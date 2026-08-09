---
title: "Which Thickness Tolerance Standard Does My Application Need?"
slug: stainless-steel-thickness-tolerance-standards
description: "ASTM A480, EN 10088-2, and ISO 9445 do not define thickness tolerance the same way. How to choose the right class and protect the PO from negative-tolerance surprises."
date: 2026-04-06
category: Dimensions & Tolerances
author: "Jinling Metal"
reviewedBy: "Jinling Materials Engineering Team, Foshan"
heroStats:
  - label: "Tolerance route"
    value: "Standard before number"
  - label: "Class control"
    value: "Normal is not precision"
  - label: "Receiving check"
    value: "Same method, same pass/fail"
heroImage: "/images/blog/thickness-tolerance-standards-hero.webp"
heroImageMode: "narrow"
---

# Which Thickness Tolerance Standard Does My Application Need?

Thickness tolerance is not a small footnote. It affects fit-up, forming, weight, structural margin, and whether a receiving claim has any basis.

ASTM A480, EN 10088-2, GB/T 3280, and ISO 9445 do not use exactly the same tolerance language. If the PO names a grade but not the tolerance class, the mill will normally ship to its commercial default. That may be fine for general fabrication and completely wrong for precision forming.

---

## Why Tolerance Class Matters

At 1.0 mm nominal, a normal tolerance band can legally allow material below nominal thickness. If the order is billed by theoretical weight, the buyer may pay for nominal thickness while receiving material closer to the lower edge of the allowed band.

Tolerance affects three things first:

- Fit-up: weld gaps, stacked panels, press tools, and laser nests react quickly to gauge variation.
- Strength and stiffness: under-thickness reduces section and can affect the calculation.
- Invoice basis: theoretical-weight billing can hide negative-tolerance cost.

The solution is not to demand the tightest class on every order. The solution is to match the class to the consequence of deviation.

---

## Which Standard Fits Which Product?

| Standard | Best used for | Ordering note |
|---|---|---|
| ASTM A480 | General sheet, coil, and plate for ASTM/export work | Pair with ASTM A240 grade and the relevant table |
| EN 10088-2 | European sheet, coil, and plate | State D1 or D2 class where thickness matters |
| GB/T 3280 | Chinese-origin cold-rolled sheet and coil | Confirm Normal or Higher Precision on the MTC |
| ISO 9445 | Narrow precision strip | Use only when the product scope is precision strip |

ASTM A480 and EN 10088-2 are the normal references for wide sheet and coil. ISO 9445 is not a shortcut to make wide commodity sheet "precision"; it belongs to narrow strip and class-based precision supply.

---

## How Tight Are the Common Classes?

The exact number depends on thickness and width, but 1.0 mm cold-rolled material is a useful comparison point.

| Reference at about 1.0 mm | Typical tolerance reading | Practical use |
|---|---|---|
| ASTM A480 standard sheet | Around ±0.06 mm | General fabrication |
| EN 10088-2 D1 | Around ±0.06 mm | Normal European sheet supply |
| EN 10088-2 D2 | Around ±0.045 mm | Better fit-up and forming control |
| GB/T 3280 Higher Precision | Around ±0.04 mm | Tighter Chinese-mill supply route |
| ISO 9445 P / EP | Much tighter, often ±0.010–0.015 mm at thin gauges | Precision strip, not general wide sheet |

If your drawing needs a number, write the number. If it only says "per standard", the receiving inspector must pull the correct table, width band, thickness band, and class before deciding whether the coil passes.

---

## Negative-Tolerance Risk

Negative tolerance is legal when it sits inside the standard. It becomes a commercial problem when the buyer expected nominal material and the contract bills theoretical weight.

At 1.0 mm nominal, a coil arriving at 0.94 mm may still conform under a normal class. The material is not automatically defective. The problem is whether the PO allowed that lower edge and whether the invoice used actual scale weight or theoretical weight.

To reduce the risk:

- State the tolerance class and the numerical limit on the PO.
- State actual scale weight or theoretical weight as the billing basis.
- Require measured thickness values on the MTC or inspection report for critical orders.
- Measure receipt values away from edges with a calibrated micrometer.

For weight impact, use the [stainless steel weight calculator](/knowledge-base/stainless-steel-weight-calculator) before the order is released, not after the invoice arrives.

---

## Hot-Rolled Plate and Flatness

Hot-rolled plate is a different tolerance conversation. It usually carries wider and often asymmetric tolerance, with more positive allowance than negative. That is normal mill practice, not necessarily a defect.

Flatness should also be specified when the process needs it. Laser cutting, visible panels, automated feeding, and large fabricated assemblies can fail on flatness even when thickness technically passes.

If flatness matters, put it into the PO as its own acceptance item. Do not assume thickness tolerance covers waviness, edge wave, or center buckle.

---

## The PO Line That Prevents Most Disputes

A useful tolerance line should name the standard, the class or table, the numerical limit, and the reporting requirement.

```text
Thickness tolerance: ASTM A480/A480M Table A2.5,
1.0 mm nominal, ±0.06 mm maximum.
MTC to include measured thickness values per coil.
Weight basis: actual scale weight with certified ticket.
```

For tighter EN work:

```text
Thickness tolerance: EN 10088-2 Class D2.
Minimum measured thickness and inspection method to be stated on MTC.
```

This language gives the mill, trader, buyer, and receiving inspector the same pass/fail basis.

---

## Receiving Check

For routine receiving, a simple check is enough:

- Confirm grade, heat number, size, finish, and standard on the MTC.
- Check whether the tolerance class named on the PO appears on the document.
- Measure center and edge-zone points, avoiding the extreme edge.
- Compare readings against the correct thickness and width band.
- Record actual values before opening a claim.

The claim is strongest when it points to a named table and measured values, not to a general feeling that the coil is "thin".

## FAQ

**Should every order use a tighter class?** No. General fabrication usually does not need precision tolerance. Tight classes cost more and may reduce availability.

**Is ISO 9445 better than ASTM A480?** Not better; different scope. ISO 9445 is for precision strip. ASTM A480 is the normal broad flat-product reference.

**Why can conforming material still feel underweight?** Because theoretical weight uses nominal thickness while actual material may sit near the lower tolerance edge.

**Does the MTC have to list measured thickness values?** Not always by default. If you need those values for acceptance, request them on the PO.

**What if ASTM and EN are both named?** State which tolerance controls, or write "whichever is more restrictive" with the numerical acceptance limit.

Thickness tolerance works best when it is treated as a contract term. Write the standard, class, numerical limit, and weight basis before the coil ships; that is much cheaper than arguing after receipt.
