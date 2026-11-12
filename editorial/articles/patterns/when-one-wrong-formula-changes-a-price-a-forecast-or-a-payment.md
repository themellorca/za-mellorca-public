---
hub: patterns
record_id: PAT-258
slug: when-one-wrong-formula-changes-a-price-a-forecast-or-a-payment
title: When a Formula Error Can Change a Business Decision
description: A broken formula still returns a number, and that number can become a quote, a forecast or a commission payment. This pattern explains the exposure and how to make errors visible.
lead: A broken formula still returns a number, and that number can become a quote, a forecast or a commission payment. This pattern explains the exposure and how to make errors visible.
category: Data, Reporting & Management Visibility
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Data, Reporting & Management Visibility
pattern_family: spreadsheet-risk
observable_condition: Pricing, cash and commission figures drawn from workbooks that one person built, no independent check, and errors found after the decision was made
primary_identification: Readers can name the spreadsheets that feed decisions and judge what an error would cost
commercial_value_dimensions: Margin on quotes, cash planning accuracy, commission trust, credibility with lenders and continuity of key models
sources:
  - Floating-point arithmetic may give inaccurate result in Excel - Microsoft 365 Apps | https://learn.microsoft.com/en-us/troubleshoot/microsoft-365-apps/excel/floating-point-arithmetic-inaccurate-result
  - Protect a worksheet - Microsoft Support | https://support.microsoft.com/en-us/excel/protect-a-worksheet
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
related:
  - When Sales Data Is Complete but the Pipeline Is Still Unreliable | /patterns/when-sales-data-is-complete-but-the-pipeline-is-still-unreliable/
  - When Your Metrics Arrive After the Decision Was Needed | /patterns/when-the-number-arrives-after-the-decision-is-made/
  - When Teams Correct the Same Data Errors Repeatedly | /patterns/why-the-same-data-errors-keep-coming-back-every-week/
summary: A broken formula still returns a number, and that number can become a quote, a forecast or a commission payment. This pattern explains the exposure and how to make errors visible.
layout: plain
---
## Observable condition

A Cape Town importer prices a new product line using a spreadsheet that has been through four hands over six years. The sheet takes the supplier's invoice in dollars, applies a rand exchange rate, adds freight, duty and a margin, and produces a selling price. A sales manager uses it to quote a large tender at a margin that looks healthy. Three weeks later, a bookkeeper notices that the freight line pulls from a row that was shifted when someone inserted a new column. The freight cost has been understated for every quote since. The tender is already won.

No one was careless. Each person who touched the workbook made a reasonable change. The error did not announce itself, because a formula that is wrong still returns a number, and the number looked plausible.

This is an illustrative example, but the situation will be recognisable in any business where pricing, budgeting, commission or stock decisions rest on a spreadsheet.

## Realisation

The realisation is that a spreadsheet does not distinguish between a calculation that is right and one that is merely well-formatted. A broken formula looks just like a good one. Because the output feeds a decision, the mistake is not an accounting curiosity. It becomes a price, a hire, a purchase order or a promise to a customer.

Spreadsheet software also does some things that surprise non-specialists. Microsoft's own documentation explains that Excel is built around the IEEE 754 floating-point specification, and that this [may affect the results of some numbers or formulas because of rounding or data truncation](https://learn.microsoft.com/en-us/troubleshoot/microsoft-365-apps/excel/floating-point-arithmetic-inaccurate-result). That is a small and well-understood effect, but it is a reminder that the displayed number is not always the number being calculated with, and that decisions should not rely on a cell that nobody has questioned.

**Realisation prompt:** which decision in your business would change if one cell in your most important spreadsheet were off by ten percent, and who would notice?

## Identification

This is a pattern of unchecked calculation sitting beneath consequential decisions. The visible symptoms are a workbook that only one person fully understands, numbers that are accepted because they have always been accepted, and the occasional discovery that a figure used for weeks was wrong. The common assumption is that errors are rare and that careful staff will catch them. The structural cause is that nothing in the way the sheet is built, changed or reviewed would catch an error before it reaches a decision.

The related Pattern [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) looks at how a file takes on that role. This Pattern focuses on the specific exposure: a single wrong formula changing the outcome of a decision.

## Diagnosis

- **Inputs and calculations share cells.** A hard-coded exchange rate sits in the middle of a formula, or a typed override replaces a calculation without any marking. When the rate changes, only the visible cells are updated.
- **Structure changes silently.** Inserting a row or column, sorting a range or copying a block can shift references. The sheet still calculates, but from the wrong cells.
- **There is no independent check.** The person who built the formula is the person who tests it. No one compares the output with a manual calculation or with last month's result.
- **Versions multiply.** Several copies of the same model exist, each edited slightly differently. The Pattern [when nobody knows which spreadsheet is the latest](/patterns/when-nobody-knows-which-spreadsheet-is-the-latest/) describes how this makes any single error hard to locate.
- **Logic is undocumented.** Why a number is multiplied by 1.15 or reduced by a fixed amount is known only to the author, so a reviewer cannot tell a deliberate rule from a slip.
- **Edits are untraceable.** Nobody can say who changed which formula, or when. A figure that moved between last quarter and this one cannot be explained.

## Commercial impact

The commercial value at stake is pricing and margin, cash planning, commission accuracy, supplier and customer relationships, and the credibility of figures presented to a bank, investor or board.

The most immediate effect is on price. A quote built from an understated cost wins work that loses money. A quote built from an overstated cost loses work that would have been profitable, and that loss is almost never discovered. Because the second error leaves no invoice behind, it is the more expensive of the two.

The second effect is on cash. A cash-flow forecast with a formula that omits a month or double counts a receipt can make the business feel safer or more exposed than it is. Decisions about hiring, stock or equipment follow from that feeling. The Impact note on [fees, commissions and charges calculated in spreadsheets](/impact/fees-commissions-charges-calculated-in-spreadsheets-error-cost/) shows how the same weakness appears in money that is paid out to people, with a direct effect on trust.

The third effect is reputational. Once a customer, a supplier or a lender discovers a calculation error in something the business gave them, they begin to question the other numbers too. Rebuilding that confidence takes far longer than correcting the formula.

The fourth is continuity. The Impact note on [a business run on a spreadsheet only one person understands](/impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/) describes what happens when the author is absent and the model has to be explained, or rebuilt, under pressure.

## Common misidentification

The usual conclusion after an error is that someone needs to be more careful. That treats a design problem as a conduct problem. People will keep making ordinary slips; the question is whether the way the workbook is built makes those slips visible. A second reaction is to ban spreadsheets, which is rarely realistic for a small business and removes a useful tool along with the risk. A third is to add more checks by the same author, which provides little independence.

## Possibility

In a better state, the spreadsheets that drive decisions are known and listed. Inputs sit in one clearly marked area, calculations in another, and results in a third. Key outputs are reconciled against an independent figure, such as the ledger, a hand calculation of one typical case, or the previous period. Changes are made to a copy and checked before they replace the live file. The author is not the only reviewer, and the reasoning behind each major formula is written next to it. Where a model has outgrown the tool, the decision to move it is made deliberately instead of after an incident.

## Intervention

Start with an inventory, not a clean-up. List the spreadsheets that feed prices, forecasts, commission or board figures, and mark the three whose failure would cost the most. For each, separate inputs from calculations, add a short reconciliation check against a trusted figure, and have a second person review the logic once. Excel can [protect a worksheet](https://support.microsoft.com/en-us/excel/protect-a-worksheet) so that formula cells are locked against accidental edits, and a recorded [Power Query step](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) is easier to inspect than a long chain of cell formulas. Keep a simple change log. The Insight on [finding the handoffs that slow work down](/insights/how-to-find-which-handoffs-are-slowing-your-work-down/) offers a way to map who touches a model and where it passes between people.

## Practical next actions

1. List every spreadsheet used to set a price, approve a purchase, pay a commission or report to a lender, and rank them by the cost of an error.
2. For the top three, add a visible check cell that compares the main output with an independent figure, and make it turn red when the difference exceeds an agreed tolerance.
3. Move hard-coded rates and margins into a single labelled inputs area so they can be seen and changed in one place.
4. Ask a colleague who did not build the sheet to walk through one real case by hand and compare it with the sheet's answer.
5. Keep one master copy in a controlled location, and record each change with the date, the person and the reason.
6. Decide, for each critical model, whether it should stay a spreadsheet, be locked down, or be replaced, and write the reason down.

## Article summary

A formula error matters when its output becomes a price, a forecast or a payment. The commercial implication is lost margin, mistaken cash decisions and damaged credibility, usually discovered after the decision was made. The remedy is not perfection but visibility: know which spreadsheets carry decisions, separate inputs from logic, check them against something independent, and keep a trail of who changed what.
