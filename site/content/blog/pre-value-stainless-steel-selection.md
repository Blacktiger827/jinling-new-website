---
title: "What Does PRE Value Actually Tell You? Pitting Resistance for Stainless Steel"
slug: pre-value-stainless-steel-selection
description: "PREN is a useful first screen for chloride resistance, not a final release rule. Use it to compare grades, then confirm service, crevices, temperature, and heat chemistry."
date: 2026-04-09
category: Material Selection
author: "Jinling Metal"
reviewedBy: "Jinling Materials Engineering Team, Foshan"
publishedAt: "2026-04-09"
keywords:
  - PRE value stainless steel
  - PREN formula calculation
  - chloride pitting resistance
  - 316L PRE 24
  - duplex 2205 PRE 35
heroStats:
  - value: "First screen"
    label: "What it can do"
  - value: "Not release"
    label: "What it cannot do"
  - value: "Heat chemistry"
    label: "Where the number comes from"
---

# What Does PRE Value Actually Tell You?

PREN is a quick screening number for chloride pitting resistance. It helps you remove obviously weak grades before spending time on corrosion testing, project qualification, or heat-specific review.

It is not a final material-selection answer. Real equipment has welds, crevices, deposits, temperature, stress, and cleaning chemistry. PREN tells you whether the grade belongs in the first conversation. It does not release the order by itself.

---

## The Formula

<p class="article-formula">PREN = %Cr + 3.3 × %Mo + 16 × %N</p>

Chromium builds the passive film. Molybdenum improves chloride resistance strongly. Nitrogen improves repassivation and is especially important in duplex and super duplex grades.

The formula explains why 316L performs better than 304 in chloride service even though 304 can have higher chromium. The molybdenum in 316L changes the pitting margin.

---

## Common PREN Values

Use these as screening values. Critical orders should calculate from the Mill Test Certificate, not from a catalogue midpoint.

| Grade | Typical PREN | Practical reading |
|---|---:|---|
| 430 | ~17 | Dry indoor or mild decorative service |
| 304 / 304L | ~19 | Freshwater, indoor, low chloride |
| 316L | ~24–26 | Coastal, mild chemical, chlorinated cleaning |
| 317L / 904L | ~30–35 | More aggressive chemical or chloride duty |
| 2205 duplex | ~35–36 | Brackish, seawater splash, stronger chloride service |
| 2507 / 254SMO | ~40+ | Seawater, hot chloride, desalination review |

The jump from 304 to 316L is meaningful. The jump from 316L to 2205 is larger. The jump above PREN 40 is where seawater and hot brine start to become realistic topics.

---

## How to Use PREN Without Over-Using It

| Service signal | PREN can do | PREN cannot do |
|---|---|---|
| Mild indoor or freshwater | Confirm 304 is likely in range | Replace finish and cleaning review |
| Coastal air or chlorinated cleaning | Push the discussion toward 316L | Guarantee no tea-staining or crevice attack |
| Brackish or seawater contact | Filter out 304/316L quickly | Choose between 2205, 2507, 6Mo, or titanium alone |
| Hot chloride or crevices | Show that high alloy is needed | Replace CCT, CPT, or project testing |

The mistake is treating PREN like a pass/fail certificate. It is better understood as a gate. Low PREN closes the gate. High PREN only opens the next review.

---

## CPT and CCT Matter More on Real Equipment

PREN is calculated from chemistry. CPT and CCT are tested corrosion behavior.

| Term | Meaning | Why buyers care |
|---|---|---|
| CPT | Critical Pitting Temperature | Open-surface pitting threshold |
| CCT | Critical Crevice Corrosion Temperature | Crevice threshold; usually lower and more realistic |

Real equipment is full of crevices: gaskets, flange faces, weld toes, deposits, labels, clamps, and dead legs. That is why design review should usually compare operating temperature against CCT as well as CPT.

If the service is critical, welded, chloride-rich, or difficult to repair, request heat-specific chemistry and project-relevant corrosion testing instead of relying on the grade name.

---

## Calculate From the MTC

Catalogue PREN is useful for education. MTC PREN is useful for release.

Example 316L heat:

```text
Cr 17.2%, Mo 2.08%, N 0.045%
PREN = 17.2 + 3.3 × 2.08 + 16 × 0.045 = 24.8
```

Another 316L heat with higher Cr, Mo, and N may calculate closer to 28. Both can meet 316L. They are not equal in chloride margin.

For corrosion-sensitive orders, the PO can require a minimum PREN or minimum Mo/N values:

```text
Calculated PREN from heat analysis ≥ 25.0.
MTC to report Cr, Mo, N and calculated PREN.
```

That line filters lean heats before they become a site problem.

---

## Where PREN Stops Helping

PREN is mainly a pitting-resistance index. It does not solve every corrosion mechanism.

- Stress corrosion cracking needs stress, temperature, chloride, and grade-family review.
- Intergranular corrosion needs carbon, welding, and sensitization review.
- Uniform acid corrosion needs acid concentration and temperature data.
- Galvanic corrosion needs the full metal couple and electrolyte.
- Crevice corrosion needs geometry and CCT, not open-surface pitting logic alone.

When the failure mode is not pitting, do not force PREN to answer it.

## Selection Shortcut

Use PREN to screen grades quickly. Use MTC chemistry to release actual heats. Use CCT/CPT or project testing when chloride, temperature, welding, or crevices make the consequence serious.

In plain terms: PREN tells you whether the grade is in the right neighborhood. It does not prove the house is safe to live in.

## FAQ

**Is higher PREN always better?** For chloride pitting resistance, generally yes. But higher PREN can bring cost, welding difficulty, availability issues, or the wrong microstructure for the job.

**Does 304L have a different PREN from 304?** Not meaningfully. PREN does not include carbon. The L-grade helps welded corrosion resistance, not open-surface PREN.

**Should I design to CPT or CCT?** For real equipment with crevices, CCT is usually the more honest number.

**Can I compare PREN across all stainless families?** As a first screen, yes. For final selection, grade family, fabrication, and service condition still matter.

**Should PREN appear on the MTC?** It usually does not by default. If your project needs it, ask for calculated PREN from heat analysis on the PO.

For grade decisions, pair this with [304 vs 316 stainless steel](/knowledge-base/304-vs-316-stainless-steel) or [duplex vs austenitic stainless steel](/knowledge-base/duplex-vs-austenitic-stainless-steel).
