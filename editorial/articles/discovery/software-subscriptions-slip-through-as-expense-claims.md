---
hub: discovery
record_id: DISC-486
slug: software-subscriptions-slip-through-as-expense-claims
title: Software subscriptions slip through as expense claims
description: Staff pay recurring software subscriptions personally and claim them back, so procurement never sees them. Find them in claim data, route them to registration and fix the VAT and contract gaps.
lead: Staff pay recurring software subscriptions personally and claim them back, so procurement never sees them. Find them in claim data, route them to registration and fix the VAT and contract gaps.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Finance operations or accounts payable manager
budget_owner: CFO
sources:
  - Oracle Financials 26D - Get Started | https://docs.oracle.com/en/cloud/saas/financials/25c/faiex/audit-rules-to-identify-anomalies-in-the-expense-report.html
  - How to Find and Resolve Flagged Duplicate Expenses | https://help.expensify.com/articles/new-expensify/reports-and-expenses/Duplicate-Detection
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Expense claims are checked by hand against a written policy | /discovery/expense-claims-are-checked-by-hand-against-a-written-policy/
  - Supplier bank-detail changes arrive by email and go unchecked | /discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/
  - Invoices arrive through multiple inboxes and channels | /discovery/why-supplier-invoices-need-one-front-door-as-volume-grows/
summary: Staff pay recurring software subscriptions personally and claim them back, so procurement never sees them. Find them in claim data, route them to registration and fix the VAT and contract gaps.
layout: plain
---
Picture the finance operations team at a Johannesburg consulting firm that has grown quickly over two years. The number of expense claims has more than doubled, and the accounts payable clerk now clears them in batches on Thursday afternoons. Most claims are small: a taxi, a lunch with a client, a monthly software charge. The clerk checks each against a receipt, confirms the amount is within policy and approves it.

When the finance manager pulls twelve months of claims to prepare for the budget, a pattern appears. Nine different people have claimed a monthly e-signature subscription. Four have claimed a design tool, three an AI writing assistant, and two a project-tracking tool. The invoices are in the staff members' own names. The charges are in dollars, so the rand amounts change every month, and no two claims look alike. Several of these tools hold client files, and each is held in a personal account. One annual plan renewed in March for a team that no longer uses it. Nobody in procurement had ever heard of any of them.

The operating condition is plain: recurring software subscriptions are paid personally and reimbursed through expense claims, so they never meet procurement, contracts or the application register. That matters to the CFO because the business pays for the same tools several times over, cannot say what it has bought, and cannot claim input VAT on invoices that are not in its name.

## The problem in plain language

Procurement exists to answer a few questions before money leaves the business. Who is the supplier? Is it the right one? What did we agree to? Who owns it? Is there a contract, and who signed it?

A subscription bought by an employee on a personal card skips all of these. The person signs up, enters a card number and accepts the terms, often in a few minutes. The first charge appears as a small amount. At the end of the month the employee adds it to an expense claim, with the receipt, and is reimbursed.

The expense process asks different questions. Is the amount within policy? Is there a receipt? Did the manager approve? These are the right questions for a taxi or a lunch, which are one-off purchases with a clear business reason. They are the wrong questions for a recurring commitment that may last years, process company data and renew automatically.

So the subscription passes through the expense process looking like any other small claim. It never becomes a supplier record, a contract or an entry in the application register. Each month it appears again as a new claim, reviewed in isolation.

This is related to, but different from, [software bought on company cards that nobody registers](/discovery/why-software-bought-on-company-cards-never-reaches-the-application-register/). That topic is about corporate cards, where a transaction feed exists and the card belongs to the business. Here the payment is made from a personal account and reaches finance only as a claim, with no feed and an invoice that may not name the company. It also differs from [procurement requests that disappear into email](/discovery/why-procurement-requests-disappear-into-email/), where a request was made and lost. In this case no request is made at all.

## What the buyer is actually trying to solve

Finance operations managers and heads of accounts payable put this in practical terms. How many software subscriptions are we paying for? Who bought them, and who uses them? Why are we paying for the same tool more than once? Where does our client data sit? Can we reclaim the VAT? How do we find all of this without reading every claim?

The outcome they want is a short, accurate list of the subscriptions the business is paying for, each with an owner, a purpose, a contract or terms on file, an invoice in the company's name and a renewal date. Claims for subscriptions stop arriving through the expense route, or arrive only for registered ones.

## Evidence and system mechanism

### Duplicate checks look at transactions, not at spending patterns

Expense systems include controls to catch repeated claims, and those controls work on the wrong unit for this problem. Oracle's documentation on [audit rules for expense reports](https://docs.oracle.com/en/cloud/saas/financials/25c/faiex/audit-rules-to-identify-anomalies-in-the-expense-report.html) describes an audit rule that selects a report for audit if it includes an item identified as a duplicate based on its amount, date, currency, expense type and merchant. It also describes selecting reports from employees who violate the same policy more than a set number of times within a period. Expensify's help page on [duplicate detection](https://help.expensify.com/articles/new-expensify/reports-and-expenses/Duplicate-Detection) says its detection compares the amount, currency and date of expenses to find potential duplicates.

These rules are designed to catch one purchase submitted twice. A subscription paid by nine people appears as nine different transactions, with different dates, different employees and, because of exchange rates, different amounts. None of them matches another closely enough to be flagged. A subscription paid by one person each month is a series of claims that each look new. Nothing in the rule asks how many different people have claimed from this merchant, or how often, or how much the merchant has been paid in total over a year. That is a question about the merchant, not the transaction, and it has to be asked deliberately. This is a point about how the rules are built, not a limitation the vendors state.

The data to answer it exists. Every claim carries a merchant name, a date and an amount, and a report that groups claims by merchant across employees and months will show the pattern.

| Gap | Effect |
| --- | --- |
| Subscriptions treated as ordinary small claims | A recurring commitment is approved as a one-off |
| Duplicate checks work per transaction | Nine people paying the same tool are not flagged |
| Invoices issued in the employee's name | The business cannot support an input VAT claim |
| No supplier record or contract | Terms, data handling and renewal dates are unknown |
| No owner for each subscription | Renewals happen without a decision |
| Claims reviewed one at a time | Nobody sees the annual total for a merchant |

### What South African rules expect of the invoice

South African tax rules add a practical problem. SARS explains on its page about [tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) that a valid tax invoice must carry the supplier's name, address and VAT registration number, a serial number and a date, along with the recipient's name, address and VAT registration number where the recipient is a vendor. A full tax invoice is required where the consideration exceeds R5 000, and a business cannot deduct input tax without a proper tax invoice.

An invoice issued to an employee in their own name is not an invoice to the business. Reimbursing the employee does not change who the invoice is addressed to. If the supplier is a foreign provider, other VAT rules may apply, and a tax adviser can confirm the treatment. The practical lesson is that subscriptions the business wants to claim VAT on must be invoiced to the business, with the business's details, and that cannot happen if procurement never learns of them.

### What South African law expects of the data

Many subscriptions hold personal information. A tool that stores client documents, staff details or customer contact lists is processing personal information on the business's behalf. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) says in section 21 that a responsible party must have a written contract with an operator that processes personal information for it, which requires the operator to maintain the security measures in section 19 and to tell the responsible party immediately of a suspected compromise. A tool signed up for in an employee's personal account, under the vendor's standard consumer terms, is unlikely to meet that description. Confirm with your information officer how the Act applies to the tools your staff use.

## Why this becomes urgent

Invoice and claim volume growth is the usual trigger. While the business is small, the clerk knows who uses which tool, and an unfamiliar charge stands out. As the number of staff, claims and tools grows, small recurring charges disappear into the volume.

The finance team feels the strain in two ways. The workload of checking claims goes up, which leads to faster, shallower reviews. At the same time, the annual total for software grows quietly, and the first time anyone sees it as a figure is when the budget is prepared or an auditor asks for the list of suppliers.

Growth also multiplies the number of people who can sign up. Staff in every team find tools that help them, and each finds it easiest to pay on a personal card and claim the cost back. The number of unregistered subscriptions grows faster than headcount.

## Economic consequence

The cost of subscriptions that bypass procurement appears in several places:

- **Duplicate spend.** Several people or teams pay for the same tool, or for overlapping tools, because nobody can see that the other subscriptions exist and individual licences cost more than a single team plan.
- **Processing labour.** Every month, each subscription generates new claims that must be captured, reviewed, approved and reimbursed, a repeated manual cost for something that could be one supplier invoice.
- **Fraud exposure.** Claims are checked against a receipt, not against a supplier record. A fabricated or altered receipt for a software charge, or a charge from a lookalike merchant, is hard to spot when there is no list of legitimate suppliers to compare it with.
- **Control effort.** Auditors and managers ask which tools hold company data, who approved them and what was agreed, and the answers have to be rebuilt from claim data, receipts and recollection.
- **Lost VAT recovery.** Invoices in the wrong name cannot support an input VAT claim, and the business absorbs the tax.
- **Unmanaged renewals.** Annual plans renew automatically, and the business pays for seats it no longer needs.

As an illustrative example only, suppose an e-signature tool costs a modest monthly amount per person and nine people pay for it separately. A single team plan would serve them all at a lower total, and the business would hold one contract, one invoice and one renewal date. The figures are invented, but the pattern, many small payments for what should be one purchase, is common.

## Root cause

The root cause is that the expense policy treats a subscription as an ordinary claim, so nobody asks whether it should be registered, contracted or paid by the business. The policy allows "software" as an expense category and sets an approval limit. It does not distinguish between a one-off purchase and a recurring commitment that creates an ongoing relationship with a supplier.

A second cause is that the checks in the expense system are built for transactions. They test one claim at a time against a limit, a receipt and a duplicate rule. Nobody tests the pattern across claims, so a subscription that is claimed many times by many people is invisible.

A third cause is that there is no easy alternative. If getting a tool through procurement takes weeks, staff will pay for it themselves. The personal route works because it is quick. Until the official route is faster than the unofficial one, the unofficial one will keep being used.

## Practical intervention

### Practical next actions

1. **Pull twelve months of claim and card data.** Export every claim line and card transaction with merchant, employee, date, amount, currency and category. Include the personal-card claims and the corporate card transactions.
2. **Group by merchant and look for subscription patterns.** Normalise merchant names so that variations of the same name are combined. Then list merchants that appear in three or more months, or that were claimed by more than one employee, and total each one over the year.
3. **Classify what you find.** For each merchant, decide whether it is a company tool that should be registered, a personal expense that should not be reimbursed, a duplicate of another tool, or unknown. Ask the claimants what each tool is for and what data it holds.
4. **Register the ones that stay.** Create a record for each: the supplier, the business owner, the purpose, the data held, the plan, the cost, the contract or terms and the renewal date. Include a check on whether personal information is involved and whether an operator agreement is needed.
5. **Move them to company billing.** Ask the supplier to issue invoices to the company with its name, address and VAT number, or to move the subscription to a corporate card or a purchase order under a company account. Consolidate duplicates into one plan and cancel the rest.
6. **Change the policy.** State that recurring subscriptions are not reimbursable through expense claims unless they carry a registration reference, and add a "software subscription" category in the expense system that requires that reference before a claim can be submitted.
7. **Make the official route quick.** Set up a short request form for new tools with a fast decision for low-risk, low-cost cases and a clear route for larger or higher-risk ones. If staff can get an approved tool in a day or two, they stop paying personally.
8. **Report on merchants, not just claims.** Run a monthly report of new merchants, merchants claimed by more than one person and merchants with recurring charges, and send it to the finance operations manager and the owner of the application register.
9. **Calendar the renewals.** For each registered subscription, record the renewal date and the notice period, and assign someone to decide before it renews.
10. **Review the policy and the register each quarter.** Check what the monthly reports found, update the categories and thresholds, and confirm that the register still matches what the business pays for.

## Diagnostic questions

- How many software subscriptions are we paying for, and how many of them are registered anywhere?
- For our five most-claimed software merchants, how many different people claim from each, and what is the annual total?
- Which tools hold client or staff data, and in whose accounts do they sit?
- Are invoices for subscriptions addressed to the company, with its VAT number, or to the individual?
- Does our expense system flag a merchant claimed by many employees, or only one claim repeated?
- If a subscription's renewal date arrived tomorrow, who would decide whether to keep it?

## What good looks like

Recurring subscriptions are registered, owned and billed to the business, with invoices in the company's name. The expense policy does not allow a claim for a recurring subscription without a registration reference. New tools go through a quick route, and staff use it. A monthly merchant report shows new and shared subscriptions, and someone acts on it. Renewals have dates and decisions.

You can measure the result. The number of subscription claims through the expense route falls to a small, explained set. The number of duplicate tools falls as plans are consolidated. Input VAT is claimed on invoices that support it. The register matches the annual software spend, and the time to answer an auditor's question about which tools hold company data is measured in minutes.

## Where Mellorca fits

If you do not yet know which subscriptions your staff pay for, a [digital systems audit](/services/digital-systems-audit/) can analyse your claim and card data, group it by merchant, find the recurring and shared charges and produce the first register. To keep it current, [business automation and AI workflows](/services/business-automation-ai-workflows/) can run the merchant report each month, route new recurring charges to the owner of the register and enforce the registration reference when a claim is submitted.

## Method note

This article draws on Oracle's documentation on expense report audit rules, Expensify's help page on duplicate detection, the SARS page on tax invoices and the text of the Protection of Personal Information Act. The scenario, the counts of subscriptions and claimants and the cost comparison are illustrative and not measured. The article does not claim that any expense product is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the system you use. VAT treatment of subscriptions from foreign suppliers can differ from the treatment of domestic invoices, so confirm it with your tax adviser. It is general information and not tax or legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
