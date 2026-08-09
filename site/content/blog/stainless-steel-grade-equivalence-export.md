---
title: "How Do I Match Grades When Exporting Between ASTM, EN, JIS, and GB?"
slug: "stainless-steel-grade-equivalence-export"
description: "How to match ASTM, EN, JIS, and GB grades for export, and where name equivalence still fails on chemistry, product standards, or certificate wording."
keywords: [stainless steel grade equivalence, ASTM EN JIS GB cross reference, 304 1.4301 SUS304, 316L 1.4404 022Cr17Ni12Mo2, stainless steel standard conversion, mill test certificate grade equivalence]
date: 2026-04-06
category: Quality & Compliance
author: "Jinling Metal"
reviewedBy: "Jinling Materials Engineering Team, Foshan"
heroImage: "/images/blog/grade-equivalence-export-hero.webp"
heroImageMode: "narrow"
---

# How Do I Match Grades When Exporting Between ASTM, EN, JIS, and GB?

Grade equivalence is more than a name lookup. Export approval needs three things to line up at the same time: chemistry, product standard, and certificate wording.

ASTM 316L, EN 1.4404, JIS SUS316L, and GB 022Cr17Ni12Mo2 point to the same commercial grade family. That does not automatically mean a given heat is acceptable under every standard, or that the MTC will satisfy a bank, inspector, or destination engineer.

---

## The Working Cross-Reference

Use this table to translate the common buying names. Use the MTC to approve the actual heat.

| Trade grade | ASTM / UNS | EN | JIS | GB |
|---|---|---|---|---|
| 201 | S20100 | 1.4372 | SUS201 | 12Cr17Mn6Ni5N |
| 304 | S30400 | 1.4301 | SUS304 | 06Cr19Ni10 |
| 304L | S30403 | 1.4307 | SUS304L | 022Cr19Ni10 |
| 316L | S31603 | 1.4404 | SUS316L | 022Cr17Ni12Mo2 |
| 430 | S43000 | 1.4016 | SUS430 | 10Cr17 |
| 2205 | S32205 / S31803 | 1.4462 | SUS329J3L | 022Cr22Ni5Mo3N |

The table tells you which names belong in the same conversation. It does not prove dual certification.

---

## Where Equivalence Breaks

Small chemistry differences create most export disputes. The steel may be technically usable, but the certificate may still fail the destination standard.

| Issue | Example | Why it matters |
|---|---|---|
| Sulfur limit | EN 1.4301 can be tighter than ASTM/JIS/GB 304 | A heat passing ASTM may fail EN paperwork |
| Mo range | ASTM 316L and EN 1.4404 do not always cap Mo the same way | A heat can pass one standard and miss the other |
| Low-carbon suffix | 304 and 304L are not interchangeable for welded work | Carbon decides sensitization risk |
| Duplex UNS | S32205 is tighter than S31803 | Do not accept S31803-only paperwork for an S32205 PO |
| Product standard | Plate, tube, bar, and strip use different standards | Grade name alone does not define delivery condition |

This is why "equivalent" should never appear alone on a purchase decision. It should be followed by "verified against both standards on the MTC."

---

## Export Scenarios That Cause Trouble

**Chinese GB grade into an ASTM order.** GB 022Cr17Ni12Mo2 is the GB name for 316L. It can be acceptable for ASTM S31603 only if the MTC also shows the heat meets ASTM A240 or the relevant ASTM product standard.

**JIS SUS304 into an EN order.** SUS304 and EN 1.4301 are commercially close. The sulfur limit can still decide whether a specific heat satisfies EN.

**Letter of credit names ASTM, MTC names EN.** Banks are not metallurgy departments. They compare text. If the PO says ASTM A240 S31603 and the MTC only says EN 1.4404, expect document friction unless equivalence was written into the contract.

**2205 listed without UNS clarity.** If the PO requires S32205, the MTC should not show only S31803. S32205 has tighter chemistry, especially nitrogen.

---

## What to Put on the PO

For cross-border orders, write the grade in both systems from the start.

```text
316L stainless steel plate:
ASTM A240/A240M UNS S31603 and EN 10088-2 1.4404,
dual-certified on EN 10204 Type 3.1 MTC.
```

Then add any project-specific requirement:

```text
MTC to show measured chemistry and mechanical values.
Heat number on material to match certificate.
Where ASTM and EN limits differ, the stricter limit controls.
```

That wording prevents the supplier from shipping a locally correct material with a destination-wrong certificate.

---

## What the MTC Must Prove

A useful export MTC should show:

- producing mill and heat number
- exact grade designations requested on the PO
- product standard, not merely grade family
- measured chemistry, not merely nominal limits
- measured mechanical properties where required
- certificate type, usually EN 10204 Type 3.1 for B2B export
- heat number traceability from certificate to physical marking

If the MTC shows only the local standard, ask for dual certification before shipment. After delivery, retroactive document fixes become slow and sometimes impossible.

---

## Export Grade-Matching Checklist

Before releasing the order:

1. Translate the grade name.
2. Check the exact suffix: L, H, Ti, Nb, S32205, etc.
3. Match product form standard: sheet, plate, tube, bar, or strip.
4. Confirm chemistry meets the stricter side of the claimed equivalence.
5. Require the same names on PO, MTC, invoice, and inspection scope.
6. Match heat number on the steel to the certificate.

Grade matching is not finished until the document package can survive someone outside the buying conversation reading it cold.

## FAQ

**Is EN 1.4404 the same as ASTM 316L?** Functionally close, but approve the heat against both standards if both names matter.

**Can a mill issue dual certification after shipment?** Sometimes, but it is slow and not guaranteed. Ask before production or before the lot is released.

**Does dual certification always cost more?** On common 304/316L heats, often no. On specialty grades or tight windows, it can affect sourcing and cost.

**What is EN 10204 Type 3.1?** It is a heat-specific inspection certificate signed by the manufacturer's authorized inspector. It is the normal document level for international stainless trade.

**What if the buyer only writes AISI 304?** Ask them to confirm the controlling product standard. AISI shorthand is not enough for export release.

Cross-reference tables translate language. The MTC transfers responsibility. Use both, but do not confuse one for the other.
