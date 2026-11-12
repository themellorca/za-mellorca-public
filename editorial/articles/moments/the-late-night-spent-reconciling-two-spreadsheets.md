---
hub: moments
record_id: STORY-ANGLE-000024
slug: the-late-night-spent-reconciling-two-spreadsheets
title: The Late Night Spent Reconciling Two Spreadsheets
description: The house is quiet, the laptop is on the kitchen table and two spreadsheets sit side by side, each a few hundred rows long and a few rand apart. What row-by-row matching after hours takes from people, and what lets the evening end.
lead: The house is quiet, the laptop is on the kitchen table and two spreadsheets sit side by side, each a few hundred rows long and a few rand apart. What row-by-row matching after hours takes from people, and what lets the evening end.
category: Time and Attention
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Time and Attention
thematic_domain: time_and_attention
human_situation: An owner or bookkeeper spends evenings at home matching a downloaded bank statement against an invoice spreadsheet row by row to find small differences before a month-end deadline.
human_dividend: Time and presence: automatic matching and better references reduce reconciliation to a short list of real differences handled during working hours, returning the evening.
trade_off: Automatic matches can be wrong and must be reviewed; moving from familiar spreadsheets requires setup and learning; accounting software carries subscription costs; people may feel less control when software does the first pass.
epistemic_state: HYPOTHESISED: the time and energy costs of after-hours reconciliation are inferred from software documentation and aggregated data on after-hours work, not from a measured study of South African businesses.
sources:
  - Reconcile bank accounts - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately
  - Merge queries (Power Query) - Microsoft Support | https://support.microsoft.com/en-us/office/merge-queries-power-query-fd157620-5470-4c0f-b132-7ca2616d17f9
  - https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday | https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday
related:
  - Ten Open Tabs and Five Logins: What the Morning Sign-In Takes | /moments/ten-open-tabs-and-five-logins/
  - The Morning Routine of Checking Whether Overnight Jobs Ran | /moments/the-morning-check-that-overnight-jobs-ran/
  - Why Some People Never Get an Uninterrupted Hour | /moments/why-some-people-never-get-an-uninterrupted-hour/
summary: The house is quiet, the laptop is on the kitchen table and two spreadsheets sit side by side, each a few hundred rows long and a few rand apart. What row-by-row matching after hours takes from people, and what lets the evening end.
layout: plain
---
The house is quiet. The laptop is open on the kitchen table, and on the screen are two spreadsheets side by side. One is the bank statement, exported as a file. The other is the list of invoices and payments kept by the business. They should agree. They do not. The difference is a little over four thousand rand, and somewhere in several hundred rows is the reason.

So the evening is spent scrolling. Sorting by amount, then by date. Highlighting matches in yellow. Finding a payment that was split in two, a customer who paid two invoices at once, a bank fee nobody captured. At some point after eleven the difference is found, or reduced enough to leave until tomorrow. The laptop closes. The work was necessary. The question is whether it needed to happen this way, and at this hour.

This piece looks at what manual reconciliation after hours takes from the person doing it, and what could let the evening end earlier. Its reasoning is presented as a hypothesis, supported by software documentation and published data about after-hours work rather than by a measured study of South African businesses.

## Why reconciliation exists

Reconciliation is not busywork. Microsoft's documentation for bank reconciliation in its Business Central accounting system describes the purpose plainly: to make sure that what is in the books matches the statements from the bank, and as a practical way to find missing payments and correct bookkeeping errors. Any business that wants to trust its numbers needs some form of it.

The same documentation describes the kinds of differences that make reconciliation hard. A transaction recorded in the books has not appeared at the bank. A transaction at the bank has no matching entry in the books, such as a fee or an expense paid directly. Or the two entries correspond, but some detail, like the amount or the customer name, was recorded differently, so they do not obviously match.

Those three situations are exactly what the person at the kitchen table is hunting for. In a spreadsheet, each one has to be found by eye.

## Why it ends up happening at night

Several things tend to push reconciliation into the evening.

- **It needs uninterrupted attention.** Matching hundreds of rows is hard to do in fragments. During the day, the person is interrupted; in the evening, they are not.
- **It is often owned by one person.** In many small businesses, the owner or a single bookkeeper is the only one who knows how the spreadsheets fit together.
- **It has a deadline.** Month-end, VAT submissions, a meeting with the bank or the accountant: the reconciliation must be done by a date, whatever else happened that week.
- **The tools do not help.** Two spreadsheets have no built-in way of knowing which rows belong together.

Evening work is common in general. Microsoft's analysis of what it calls the infinite workday, based on aggregated signals from its own software, found that the average employee sends or receives more than 50 messages outside core business hours. Those are global figures about Microsoft's users rather than a measurement of South African bookkeepers, but they show that work spilling into the evening is a widespread pattern rather than a personal failing.

## An illustrative month-end

Consider an illustrative case: the owner of a South African landscaping and garden maintenance business with twelve staff. Customers pay by EFT, often several invoices at once and usually with an unclear reference. The owner keeps an invoice register in a spreadsheet and downloads the bank statement each month.

At month-end the owner sits down after the children are in bed to match the two. A customer who pays three invoices in one transfer must be split by hand. A payment referenced only with a first name must be traced. Bank charges must be added to the register. The work usually takes two or three evenings.

The owner has considered handing it to someone else, but the spreadsheet has grown its own logic over years, with colour codes, hidden columns and notes, and nobody else could easily follow it. The broader risk is described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/).

## The human tax: time and energy

The time tax is straightforward. Hours that could belong to rest, family, exercise or anything else are spent matching rows. Mellorca does not presume to say what those hours should be used for; the point is that the person did not choose to give them up.

The energy tax is the cost of doing detailed, error-sensitive work when tired. Late-night matching is slower and more prone to mistakes, which may then cause another evening's work next month. Some people find reconciliation satisfying, a puzzle with a clear answer. Others may find it draining. Mellorca cannot know which describes any individual. The claim is that work requiring the most care is often being done at the time when care is hardest to give.

A related story, about the person who has to present disputed figures, is told in [when nobody can say which number is true](/moments/when-nobody-can-say-which-number-is-true/). This piece concerns an earlier and more private moment: the evening spent making the numbers agree in the first place.

## What could realistically change

1. **Use the reconciliation features in accounting software.** Most current accounting packages can import bank transactions and suggest matches. The Business Central documentation, for example, describes automatic matching of bank statement lines to ledger entries, with a date tolerance, a way of seeing why items were matched, and the ability to match several bank lines to one entry or the reverse. Unmatched items stay visible as differences to resolve.
2. **Reconcile more often.** Matching a week's transactions takes far less effort than a month's, and differences are easier to explain while they are fresh.
3. **Improve references at the source.** Asking customers to use the invoice number as their payment reference, and printing it clearly on every invoice, removes much of the detective work.
4. **Let spreadsheets find the differences.** Where spreadsheets remain, tools can do the comparison. Microsoft's documentation for merging queries in Power Query describes a join that returns only the rows from one table that have no match in the other, and fuzzy matching for values that differ slightly in spelling or format.
5. **Spread the knowledge.** Documenting how the reconciliation works lets a second person do it or check it.

Mellorca's analysis of [the cost of manual payment matching and reconciliation](/impact/manual-payment-matching-reconciliation-cost/) covers the business side. And [when finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/) describes what happens when this kind of work grows with the business.

## What changes first, and the business outcome

The first change is that most transactions match themselves, leaving a short list of genuine differences for a person to investigate. Reconciliation shrinks from evenings to a task that fits in working hours.

For the business, the books are accurate sooner and more often. Missing payments are noticed earlier, which helps cash collection. Errors from tired, late-night work fall.

## The human dividend

The dividends are time and presence. Time, because the evenings spent scrolling through rows return to the person. Presence, because when the laptop is not open on the kitchen table, the person can be where they are, with whoever or whatever they choose.

Reconciliation will still require judgement. The dividend is that judgement is applied to a short list of real questions, during the day, rather than to hundreds of rows at midnight.

## The trade-offs

- **Automatic matching can be wrong.** Suggested matches must be reviewed. Trusting them blindly can hide errors rather than reveal them.
- **Change takes effort first.** Moving from a familiar spreadsheet to software features takes setup, learning and a period of running both.
- **Software has a cost.** Accounting packages with good reconciliation tools carry subscription fees that a small business must weigh.
- **Some control may feel lost.** People who know every row by heart may feel less certain when software does the first pass.

## Why it matters

The late night with two spreadsheets is one of the quietest costs in a small business. Nobody sees it except the person doing it, and the result, a reconciled set of books, looks the same whether it took three evenings or one hour.

Mellorca's interpretation is that much of this effort comes from tools that cannot see what belongs together, references that do not identify payments and knowledge held by one person. Changing those does not remove the need for care. It changes when and how that care is given, and returns the evening to the person who had been spending it on rows.
