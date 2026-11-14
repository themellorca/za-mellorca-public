---
hub: discovery
record_id: DISC-483
slug: expense-claims-are-checked-by-hand-against-a-written-policy
title: Expense claims are checked by hand against a written policy
description: When the policy lives in a document, a person reads every claim. Put limits into system rules, auto-approve what complies, route only exceptions and review the rules from the exceptions.
lead: When the policy lives in a document, a person reads every claim. Put limits into system rules, auto-approve what complies, route only exceptions and review the rules from the exceptions.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Finance manager or expense administrator
budget_owner: Financial director or CFO
sources:
  - Expense report policies and per diem rules - Training | https://learn.microsoft.com/en-us/training/modules/set-up-configure-expense-management/05-policies-per-diem-rules
  - FAQ: How are travel expenses for which I was reimbursed treated for PAYE purposes? - South African Revenue Service | https://www.sars.gov.za/faq/faq-how-are-travel-expenses-for-which-i-was-reimbursed-treated-for-paye-purposes/
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
related:
  - Software subscriptions slip through as expense claims | /discovery/software-subscriptions-slip-through-as-expense-claims/
  - Duplicate supplier invoices are caught after they are paid | /discovery/duplicate-supplier-invoices-are-caught-after-they-are-paid/
  - Supplier bank-detail changes arrive by email and go unchecked | /discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/
summary: When the policy lives in a document, a person reads every claim. Put limits into system rules, auto-approve what complies, route only exceptions and review the rules from the exceptions.
layout: plain
---
Picture the finance team at a Durban distributor a few months after it moved to a new payment platform with company cards for staff. Card use has risen sharply, and so has the number of expense claims. Two finance administrators now spend the first two days of every pay cycle reading claims one by one. For each, they open the expense policy, a six-page document on the shared drive, and compare the line on the claim with the limit written in the policy.

The work is slow and the results are uneven. A meal claim well above the policy limit was approved because the reviewer was tired and the amount was close to the figure they remembered. A salesperson waited three weeks for a reimbursement that sat in a queue behind a larger pile of claims. A kilometre claim was paid at a rate above the prescribed rate and nobody applied the tax treatment that follows from that. The administrators know most of the claims are fine, but they cannot tell which ones without reading them all.

The operating condition is plain: the expense policy exists as a document, and every claim is read and compared against it by a person instead of being checked by rules in the system. That matters to the financial director and the CFO because the checks cost skilled time, miss things a rule would catch, and slow down staff who did nothing wrong.

## The problem in plain language

Most businesses have an expense policy. It says what staff may claim and up to what amount: a limit for meals, a limit for accommodation, a rule that flights must be economy class, a rate for using a private vehicle, a requirement that every claim above a certain value has a proper receipt.

The policy is usually written as a document, in sentences, and approved by someone senior. It tells people what to do. It does not do anything itself. When a claim arrives, someone has to read the line, find the relevant paragraph, remember or look up the limit, and decide whether the claim is within it.

This works while volumes are small, because the reviewer knows the policy, knows the people and can usually tell at a glance whether a claim looks right. It stops working as volumes rise. With more cards, more claims and more staff, each review takes the same time but there are far more of them. The reviewer starts to skim, apply limits from memory or approve in bulk.

A document also cannot be applied consistently. Two reviewers read the same paragraph differently. A limit changes in the document and one reviewer misses the update. An exception that was granted once becomes a precedent that nobody wrote down.

This is related to, but different from, [software bought on company cards that nobody registers](/discovery/why-software-bought-on-company-cards-never-reaches-the-application-register/). That problem is about spend that bypasses the process. This one is about spend that goes through the process but is checked slowly and inconsistently.

## What the buyer is actually trying to solve

Finance managers and expense administrators put this in practical terms. Why does it take two days of every cycle to check claims? Why was this one paid when it broke the policy? Why are staff complaining about how long reimbursement takes? How do we get the tax treatment right without checking every claim by hand?

The outcome they want is a process where claims within policy are approved automatically, with no one reading them. Only claims that break a rule or need judgement reach a reviewer, who sees which rule was broken and why. Staff are paid quickly, finance time goes on the claims that matter, and the tax treatment follows from the data in the claim.

## Evidence and system mechanism

### Expense systems can hold the policy as rules

Expense tools are built to check policy before a person does. Microsoft's training material on [expense report policies and per diem rules](https://learn.microsoft.com/en-us/training/modules/set-up-configure-expense-management/05-policies-per-diem-rules) for Dynamics 365 Project Operations describes the idea. It says companies have expense report policies that managers often check before approving, and that the system can be configured to review a claim against the policies automatically before an employee is allowed to submit it. The example it gives is limits on air fares or meal reimbursements. Policies are created against expense categories and expense types, and one policy can contain many rules. A rule can be set so that the employee must revise a non-compliant expense before submitting, and individual rules can be retired when they stop applying. The same material describes per diem rules, which reimburse a daily fixed rate that can vary by location.

Other expense products have comparable features under different names. The point is that the rule exists in the system, and that it acts at the moment the claim is entered. The employee is told straight away, when correcting it is easy, and the reviewer sees only what is left.

Rules only help if they are written. A policy sentence such as "reasonable accommodation costs will be reimbursed" cannot be turned into a rule. A policy that says "accommodation up to a stated amount per night in a stated list of cities" can.

| Gap | Effect |
| --- | --- |
| Policy held in a document | Every claim is checked by a person |
| Limits remembered by reviewers | Different people apply different limits |
| No check at the point of entry | Errors are found days later, when they are harder to fix |
| All claims go to a reviewer | Time goes on compliant claims, and exceptions get less attention |
| Rules not reviewed against exceptions | The policy drifts away from how the business actually works |
| Tax treatment left to a manual step | Errors arise when a claim exceeds a prescribed amount |

### What SARS expects of expense treatment

Two South African rules show why a manual check misses things. The first concerns reimbursed business travel. The SARS FAQ on [how reimbursed travel expenses are treated for PAYE](https://www.sars.gov.za/faq/faq-how-are-travel-expenses-for-which-i-was-reimbursed-treated-for-paye-purposes/) explains that a reimbursement paid per kilometre of business travel is non-taxable only if the rate does not exceed the rate fixed by the Minister of Finance and the employee has received no other compensation for travel, such as another reimbursement or a fixed allowance (other than for parking or tolls). If either condition is not met, the reimbursement is a taxable reimbursive travel allowance, and employees' tax must be deducted from the amount paid above the prescribed rate. SARS also lists separate income source codes for the taxable and non-taxable portions.

A reviewer reading a kilometre claim sees a number of kilometres and a rate. Whether the employee also receives a travel allowance, and whether the rate used matches the prescribed rate for the current tax year, are facts held in different places. A rule in the system can look them up. A person reading the claim usually does not.

The second concerns receipts. SARS explains on its page on [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) that a valid tax invoice must carry specific details, including the supplier's name, address and VAT registration number, a serial number and a date, that a full tax invoice is needed when the consideration exceeds R5 000, and that a business cannot deduct input tax without a proper tax invoice. A photograph of a till slip may satisfy a reviewer who is checking whether a purchase happened, but may not satisfy the rules for claiming input VAT. A rule that checks which details are present, or flags claims above the threshold that lack a full invoice, protects the VAT claim. Confirm how these rules apply to your own claims with your tax adviser.

## Why this becomes urgent

A new payment platform is the usual trigger. Cards make it easy to spend, and the volume of transactions to reconcile and claims to review rises quickly. The platform may bring its own expense feed, which means more lines to check, arriving faster.

The finance team finds that the old way, reading each claim against the policy, does not scale. Adding staff to read more claims is expensive and does not make the checks more accurate. The backlog grows, reimbursements slow down and staff complain. Meanwhile, the time spent on routine claims leaves little for the unusual ones where a skilled review would matter.

The same moment often reveals how many claims have been paid out of policy. The first time someone compares a month of payments with the policy by rule instead of by eye, the number of exceptions is usually higher than expected.

## Economic consequence

The cost of hand-checking claims is spread across several areas:

- **Out-of-policy spend paid anyway.** Amounts above limits, claims for items the policy excludes, and duplicate or repeated claims that a tired reviewer misses.
- **Slow reimbursement.** Staff wait for repayment of money they spent on the business's behalf, and some begin to avoid claiming or to chase finance constantly.
- **Frustrated staff.** Inconsistent decisions, unexplained rejections and long waits damage trust in the process.
- **Finance time on low-value checks.** Skilled people reading hundreds of ordinary claims for the sake of a handful of problems.
- **Tax treatment errors.** Kilometre reimbursements above the prescribed rate paid without the right deduction, or VAT claimed on receipts that do not meet the invoice requirements.
- **Late detection.** Problems that surface only at month-end or in an audit, when they are harder to correct.

As an illustrative example only, suppose two administrators spend two days each per pay cycle reading claims. Across twelve cycles that is nearly seven weeks of two people's time, spent mostly on claims that were fine. Rules that approve compliant claims automatically would return most of that time to work that needs judgement. The figures are invented, but the shape is common: the checking effort is large and spread thinly, so nobody sees it as a single cost.

The problems that hand-checking misses tend to appear later, as the pattern described in [leakage that only shows at month-end reconciliation](/discovery/why-revenue-leakage-only-shows-up-at-month-end-reconciliation/).

## Root cause

The root cause is that the expense policy lives in a document, so each claim is read and compared against it by a person instead of being checked by rules in the system. The policy was written for people to read, and the process was built around people reading it.

A second cause is that limits and rates are kept in several places. The document says one thing, the expense tool may hold another, the payroll system holds the travel allowance and the tax tables hold the prescribed rate. When a limit changes, each place has to be updated separately, and often one is missed.

A third cause is that the policy is rarely reviewed against what happens. Nobody looks at which claims are rejected, which exceptions are approved and which rules cause the most friction. As [control tests scheduled in personal calendars](/discovery/why-control-testing-schedules-should-not-live-in-personal-calendars/) shows, reviews that depend on individuals' diaries are easily forgotten, and the policy ages without anyone noticing.

## Practical intervention

### Practical next actions

1. **Rewrite the policy as testable limits.** Go through the document and turn each statement into something that can be checked: a category, a limit, a condition and a result. Replace vague wording with figures, lists and thresholds. Where judgement is genuinely needed, name the person who exercises it.
2. **Enter the rules in the expense system.** Create policy rules by expense category and type, covering limits, required receipts, allowed vendors or locations, per diems and any conditions on approval. Decide which breaches must be fixed before submission and which can be submitted with a reason.
3. **Hold rates and thresholds in tables with effective dates.** Keep the prescribed kilometre rate and similar figures as dated entries, so that the correct rate applies to each trip date. Assign someone to update them each tax year.
4. **Check the tax conditions in the rules.** For kilometre claims, check whether the employee also receives a travel allowance and whether the rate exceeds the prescribed rate, and pass any taxable portion to payroll with the right code. For receipts, require the supplier details and invoice type that your VAT treatment needs, and flag claims above the full tax invoice threshold that lack one.
5. **Auto-approve claims within policy.** Set the system to approve and pay claims that pass all rules, up to a value limit agreed with the financial director. Keep a record of the rules that were applied.
6. **Route only exceptions to a reviewer.** Send a claim to a person only when it breaks a rule or meets a risk condition. Show the reviewer the rule that was breached, the evidence and the employee's explanation, so that the decision takes a minute, not ten.
7. **Sample the automatic approvals.** Each period, pick a random sample of auto-approved claims and check them by hand, to confirm that the rules work and to deter abuse. Report the results.
8. **Review the rules against what exceptions show.** On a set schedule, look at the exceptions: which rules fire most, which are overridden, which are rejected. Change limits that no longer fit, add rules for repeated problems and retire rules that no longer apply. Put the review in the finance calendar as a team task, not in one person's diary.
9. **Tell staff what the system will do.** Publish the rules in plain language, explain what is approved automatically and what is reviewed, and give a target time for reimbursement.

## Diagnostic questions

- Which of our policy limits are held as rules in the system, and which exist only in the document?
- What share of claims is read by a person, and what share of those is approved without changes?
- How long does a compliant claim take from submission to payment, and how long does an exception take?
- Where is the prescribed kilometre rate held, and who updates it each tax year?
- Do we check whether an employee who claims kilometres also receives a travel allowance?
- When did we last review the rules against the exceptions we approved and rejected?

## What good looks like

The policy is written as limits that can be tested, and the key ones are rules in the expense system. Claims within policy are approved and paid automatically, quickly and without a reviewer. Exceptions reach a person with the broken rule and the evidence in front of them. Rates and thresholds are dated and maintained. A sample of automatic approvals is checked each period, and the rules are reviewed regularly against what the exceptions show.

You can measure the result. The share of claims approved without human review rises while the rate of problems found in the sample stays low. Time from submission to reimbursement falls. Finance time per cycle on claim checking falls and shifts to exceptions. Tax treatment errors on kilometre claims and VAT receipts become rare, and when one is found it traces to a rule that is then fixed.

## Where Mellorca fits

If your expense system holds claims but not rules, [business automation and AI workflows](/services/business-automation-ai-workflows/) can turn your policy limits into checks, route exceptions to the right reviewer with the evidence attached, and pass taxable amounts to payroll. To rewrite the policy as testable limits, agree the auto-approval value limits and set up the regular review of the rules, [digital operations improvement](/services/digital-operations-improvement/) can design the process with your finance team and make it routine.

## Method note

This article draws on Microsoft's training material on expense report policies and per diem rules, and on two SARS pages: the FAQ on the tax treatment of reimbursed travel and the guidance on tax invoices. The scenario, the staff time and the figures in it are illustrative and not measured. The article does not state the current prescribed rate per kilometre, since it is fixed by the Minister of Finance and changes, so check the current notice on the SARS website. It does not claim that any expense product is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the system you use. It is general information and not tax advice: confirm PAYE and VAT treatment with your tax adviser.
