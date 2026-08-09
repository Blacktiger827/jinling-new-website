---
title: "304 Stainless Steel Mechanical Properties: Yield, Tensile, Hardness, and Temper Changes"
slug: 304-stainless-steel-mechanical-properties
description: "304 stainless steel mechanical properties explained with ASTM A240 and EN 10088-2 values, plus how temper, temperature, and product form change the real numbers."
keywords:
  - 304 stainless steel mechanical properties
  - 304 tensile strength MPa
  - ASTM A240 304 data sheet
  - EN 10088-2 1.4301 properties
  - 304 yield strength
  - 304 hardness HRB
  - 304 work hardened temper
  - 304 vs 316L mechanical properties
date: 2026-04-06
category: Material Selection
author: "Jinling Metal"
reviewedBy: "Jinling Materials Engineering Team, Foshan"
publishedAt: "2026-04-06"
heroStats:
  - value: "Annealed 304"
    label: "Start from ASTM / EN"
  - value: "Cold-worked temper"
    label: "Same grade, different behavior"
  - value: "MTC value"
    label: "Release from the actual heat"
---

# 304 Stainless Steel Mechanical Properties: Yield, Tensile, Hardness, and Temper Changes

Most questions about 304 mechanical properties are really questions about supply condition. The familiar 515 MPa tensile and 205 MPa yield values describe annealed flat product under ASTM A240. They do not automatically describe every 304 strip, bar, cold-worked temper, or certificate on the market.

[304 stainless steel](/grades/304-stainless-steel) is popular because it balances ductility, corrosion resistance, weldability, and availability. The engineering mistake is to treat one datasheet line as if it covers every product form.

---

## The Numbers Buyers Usually Need First

For annealed ASTM A240 sheet and plate, these are the practical starting values:

| Property | ASTM A240 304 | What to remember |
|---|---:|---|
| Tensile strength, Rm | 515 MPa min | Actual heats commonly run higher |
| 0.2% yield, Rp0.2 | 205 MPa min | Use the MTC value when wall thickness depends on yield |
| Elongation in 50 mm | 40% min | The reason 304 forms well in annealed condition |
| Hardness | 92 HRB / 201 HBW max | Useful for incoming inspection and forming checks |
| Elastic modulus | ~193 GPa | Similar to carbon steel for deflection calculations |

These are minimums, not promises that every heat will sit exactly there. A normal annealed 304 sheet may show tensile strength around 560–620 MPa and yield around 230–300 MPa. That is useful margin, but it should not replace the standard minimum in conservative design unless the project explicitly accepts heat-specific values.

---

## Chemistry Explains the Behavior

304 is the classic 18-8 austenitic grade: roughly 18–20% chromium and 8–10.5% nickel under ASTM A240. Chromium builds the passive film. Nickel stabilizes the austenitic structure that gives 304 its ductility and low-temperature toughness.

Three chemistry points matter in practice:

- Standard 304 allows carbon up to 0.08%; [304L](/knowledge-base/304-vs-304l-vs-304h) limits carbon to 0.030% for better welded corrosion resistance.
- 304 contains no intentional molybdenum, so it is not the right first choice for stronger chloride service.
- EN 1.4301, JIS SUS304, and GB 06Cr19Ni10 sit in the same commercial family, but the actual heat still needs to match the ordered standard.

For cross-standard work, do not approve material from the grade name alone. Match the MTC chemistry, standard, heat number, and delivery condition.

---

## ASTM A240 vs EN 10088-2

The ASTM and EN values are close, but not identical. The difference matters most when the drawing or bank documents require a specific standard.

| Check | ASTM A240 304 | EN 10088-2 1.4301 |
|---|---:|---:|
| Tensile strength, Rm | 515 MPa min | 520 MPa min |
| 0.2% yield, Rp0.2 | 205 MPa min | 210 MPa min |
| Elongation | 40% min | 45% min |
| Hardness | 92 HRB / 201 HBW max | 215 HBW max |

The EN elongation requirement is the one to notice. For deep drawing or visible formed parts, that extra ductility requirement is more meaningful than the small 5 MPa difference in tensile or yield minimums.

Dual-certified material is common, but the certificate has to say so. "Similar to 304" is not dual certification.

---

## Cold Work Changes the Story

304 cannot be hardened by heat treatment. It hardens by cold work. That is why a spring strip, half-hard coil, and annealed sheet can all be 304 while behaving like very different materials.

| Condition | Strength direction | Fabrication reading |
|---|---|---|
| Annealed | 515 MPa tensile / 205 MPa yield minimum | Best for forming, welding, general fabrication |
| 1/4 hard | Much higher yield, still usable ductility | Clips, channels, light spring parts |
| 1/2 hard and harder | Very high strength, reduced elongation | Springs, retaining parts, tight forming control |
| Full hard | Highest strip strength | Not a general fabrication condition |

If the order needs cold-worked temper, name the temper and standard. A PO that only says "304 coil" usually means annealed material, not spring strip.

Cold work can also make 304 magnetic because some austenite transforms to martensite. That does not mean the grade is false. It means the condition changed. For the field check, see [is stainless steel magnetic?](/knowledge-base/is-stainless-steel-magnetic).

---

## Temperature Changes the Allowable Strength

At room temperature, 304 is easy to quote from a datasheet. At elevated temperature, use code values rather than casual interpolation.

304 remains useful in many heat-exchanger, furnace, and process-equipment environments, but yield strength falls as temperature rises. Around 500–600°C the design conversation should already be using ASME or project-specific allowable stress tables, not a simple room-temperature value.

For long exposure above the sensitization range or sustained high-temperature service, grades such as 321, 347, or 310S may become more appropriate. The decision depends on temperature, time, oxidation, stress, and whether welding is involved.

304 also performs well at low temperature. Austenitic structure keeps it ductile in freezing and cryogenic service, unlike duplex grades that carry ferrite and therefore have a different low-temperature toughness limit.

---

## 304 vs 316L vs 2205 on Strength

This comparison helps prevent a common misunderstanding: 316L costs more than 304 because it adds corrosion resistance, not because it is stronger.

| Grade | Strength reading | What the premium buys |
|---|---|---|
| 304 | 515 MPa tensile / 205 MPa yield minimum | General strength, formability, availability |
| 316L | 485 MPa tensile / 170 MPa yield minimum | Molybdenum and better chloride margin |
| 2205 duplex | 655 MPa tensile / 450 MPa yield minimum | Much higher yield plus stronger chloride/SCC resistance |

If the project is mild and strength-driven, 304 can be the more cost-effective austenitic grade. If chloride is the issue, compare [304 vs 316 stainless steel](/knowledge-base/304-vs-316-stainless-steel). If pressure load and chloride both matter, compare 316L with duplex.

---

## How to Use Mechanical Data Without Over-Reading It

Use 304 mechanical data in this order:

1. Start with the governing standard and product form.
2. Confirm whether the material is annealed, cold-worked, or specially tempered.
3. Use MTC values when the design depends on heat-specific yield or tensile strength.
4. Check whether the real limiting factor is yield, elongation, hardness, temperature, or corrosion.
5. Do not use tensile strength alone to choose between 304, 316L, and 2205.

The last point matters. Many wrong material selections happen because the easiest number to find becomes the number that drives the decision. For stainless steel, service environment often matters more than a small difference in strength.

## What Our 304 Heats Typically Look Like

Our regular 304 annealed sheet from major Chinese mills usually lands above the ASTM minimums: tensile strength often in the mid-500s to low-600s MPa, yield commonly above 240 MPa, and elongation comfortably above 40%. Those are useful typicals, not the legal floor.

If a project needs a guaranteed yield above the standard minimum, write that value into the PO before sourcing. We can then screen heats against the requirement instead of discovering the mismatch during document review.

## FAQ

**Why do real 304 yield values vary so much?** Chemistry, annealing, rolling history, and product form all move the value. ASTM gives the minimum. The MTC gives the heat-specific result.

**Is 304 magnetic after forming?** It can be. Cold work can create strain-induced martensite, which responds to a magnet. That is normal for worked 304.

**Is 304 stronger than 316L?** By ASTM minimum yield, yes. 316L's premium comes from molybdenum and chloride resistance, not higher strength.

**Can I use 304 below freezing?** Yes. Austenitic 304 keeps good toughness at low temperature and is used in cryogenic service when the specification and fabrication route are correct.

**Should I design from standard minimums or MTC values?** Use standard minimums for conservative general design. Use MTC values only when the project specifically allows heat-based design and the material will be locked to that heat.

The next decision is usually not more mechanical data. It is either corrosion duty, covered in [304 vs 316 stainless steel](/knowledge-base/304-vs-316-stainless-steel), or document verification, covered in [how to read a mill test certificate](/knowledge-base/how-to-read-mill-test-certificate).
