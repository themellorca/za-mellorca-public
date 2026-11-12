---
hub: discovery
record_id: DISC-330
slug: why-software-bought-on-company-cards-never-reaches-the-application-register
title: Expense-card software purchases bypass central visibility
description: Small subscriptions on company and expense cards never pass through procurement, so the application list is incomplete. How to find them, register them and keep visibility without slowing managers down.
lead: Small subscriptions on company and expense cards never pass through procurement, so the application list is incomplete. How to find them, register them and keep visibility without slowing managers down.
category: SaaS & Application Portfolio Management
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT manager or head of operations, working with finance on card data
budget_owner: Financial director
sources:
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why application inventories leave out shadow IT and AI tools | /discovery/why-application-inventories-leave-out-shadow-it/
  - AI add-ons increase software spend outside original budgets | /discovery/ai-add-ons-push-software-spend-beyond-the-approved-budget/
  - Vendors change packaging and pricing faster than budgets adapt | /discovery/why-vendor-pricing-changes-outrun-software-budgets/
summary: Small subscriptions on company and expense cards never pass through procurement, so the application list is incomplete. How to find them, register them and keep visibility without slowing managers down.
layout: plain
---
A marketing manager needs a design tool, so she puts it on the company credit card at R480 a month. A sales lead signs up for a prospecting service on a free trial that rolls into a paid plan. A developer adds an analytics add-on on a monthly card billing. Each purchase is small, each person has a good reason, and none of it goes through procurement, because none of it needed a purchase order. Eighteen months later the financial director asks the IT manager how many software products the company uses, and nobody can give her a number.

This article looks at that operating condition: software bought on expense and company cards that never becomes visible to the people who manage the application portfolio. It tends to surface when a business tries to rationalise its applications and discovers that the list it is working from is incomplete.

## The problem in plain language

Most businesses control large software purchases well: a quote, an approval, a contract, an entry in the asset register. Small subscriptions skip all of that. They are paid by card, they are claimed on expense reports, and the invoice goes to the cardholder's inbox, not to accounts payable. The card statement shows a vendor name and an amount, often in a foreign currency, with no indication of what the product does, who uses it or what company data it holds. The central view of the software estate is built from contracts and licence records, so these products simply do not appear.

## What the buyer is actually trying to solve

The person searching for this problem wants one reliable list of what the business pays for, who owns each item and what it touches. A finance lead wants to stop recurring charges nobody can justify. An IT or operations lead wants to know which products hold customer or employee data. Neither wants to take cards away from managers who are trying to get work done, so the goal is visibility with minimal friction, not a ban.

## Evidence and system mechanism

### You cannot manage what the inventory does not list

The Center for Internet Security's [Control 2 on software assets](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets) describes actively managing all software on the network so that only authorised software is installed and can run, and so that unauthorised and unmanaged software is found and prevented from installation or execution. The principle applies equally to cloud services bought outside procurement. A product that never enters the inventory is, by definition, unmanaged, and it escapes patching, access reviews and renewal decisions for as long as the card keeps paying it.

### Discovery can start from traffic and from payments

Microsoft's documentation on [cloud app discovery](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery) explains that analysing network traffic logs against a catalogue of more than 31,000 cloud apps gives ongoing visibility into cloud use and the risk of shadow IT. Not every business owns that tooling, and the catalogue cannot see apps used on personal networks. The same logic works with simpler data: a twelve-month export of card transactions, sorted by vendor, gives a first approximation of the software estate, which can then be checked against the application register to see what is missing.

### South African law adds a data dimension

Under [section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), a responsible party must take appropriate, reasonable technical and organisational measures to secure personal information in its possession or control, including identifying reasonably foreseeable risks. If a team uploads a customer list to a tool nobody in IT has heard of, the business cannot demonstrate that it identified the risk. The question is not only what the software costs, but which personal information has already been loaded into it.

### Warning signs

- The card statement contains vendors that no register mentions.
- The same function is being paid for by two departments, a pattern also seen in [departments that buy overlapping software for the same capability](/discovery/departments-buy-overlapping-software-for-the-same-capability/).
- A leaver's expense claims include software subscriptions that carry on after their last day.
- Renewals arrive as card charges, not as notices.

## Problem owner and why-now trigger

The problem owner is usually the IT manager or head of operations, who is asked to rationalise applications without a reliable list. The budget owner is the financial director, who controls card policy and the cost line. The trigger is typically an application rationalisation exercise, a cost-cutting round, a security review or an audit that asks for a list of systems holding personal information. In each case the exercise starts from the contract list and discovers, partway through, that card spend tells a different story.

## Economic consequence

The direct cost is the subscriptions themselves. A business with thirty unregistered subscriptions averaging R600 a month is paying R216,000 a year, and a share of that is typically unused or duplicated. These figures are illustrative; the real total comes from your own card statements. The indirect costs matter more: products holding customer data without a security review, no one to switch them off when a team member leaves, and prices that rise each year without anyone negotiating. The consequences for the budget are explored in [the cost of software bought without approval](/impact/software-bought-without-approval-shadow-it-cost/).

## Root cause

- **Card policy is written for spending, not for software.** It sets limits per transaction but does not say that software must be registered.
- **The register is built from contracts.** It misses cloud products that never had one, a gap described in [why IT asset registers miss cloud and SaaS services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/).
- **Finance and IT see different data.** Finance sees card lines; IT sees contracts and logins; neither sees both.
- **No named owner per product.** When a renewal charge appears, nobody is responsible for deciding whether to keep it, as set out in [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).

## Practical intervention

1. **Export twelve months of card and expense data.** Include company cards, employee reimbursements and any virtual cards.
2. **Group by vendor.** Strip out non-software spend and list each recurring software vendor with monthly cost and cardholder.
3. **Compare with the register.** Mark each vendor as listed, unlisted or unknown. The unlisted and unknown set is your visibility gap.
4. **Ask each cardholder three questions.** What is it used for, who else uses it, and does it hold customer or employee information?
5. **Add a light rule.** Software on a card is allowed if it is registered within a week of purchase with an owner and a purpose. No approval queue; just a record.
6. **Review monthly.** Finance sends new software vendors from the card statement to IT, which adds them to the register or follows up.
7. **Decide per product.** Keep, consolidate or stop, using the approach in [building an application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/).

### Trade-offs

A registration rule is only as good as the monthly review that backs it. Too much process pushes purchases onto personal cards, where they disappear altogether, so keep the rule simple. And some cheap tools genuinely are better than the corporate alternative; the aim is to know about them and choose deliberately.

### An illustrative example

Illustrative: a Johannesburg professional-services firm with 80 staff decided to cut software costs. Its IT manager started from the application register and found 34 products. The financial director then exported a year of card data and found 61 recurring software vendors, 27 of which were not on the register. Eleven turned out to be duplicates of tools already licensed, and four held client files. The firm cancelled the duplicates, moved the four into the register with named owners and added a monthly check of new card vendors.

## Diagnostic questions

- How many software vendors appear on your card statements that are not in your application register?
- Which of them hold customer, employee or supplier information?
- Who gets the invoice when the cardholder leaves?
- When did anyone last compare card data with the register?

## What good looks like

Every recurring software charge maps to a registered product with an owner, a purpose and a note of the data it holds. Finance and IT review new card vendors together each month. Cardholders are free to buy useful tools, and the business can still produce one honest list of what it pays for when an auditor, a customer or the financial director asks.

## Where Mellorca fits

Mellorca helps South African businesses build a trustworthy application inventory from contracts, card data and system access, then decide what to keep, consolidate or remove. We work with finance and IT together so that the register stays current without turning every subscription into a procurement project.

## Method note

The sources describe a software inventory control, a cloud discovery capability and the POPIA security duty. They do not measure how much software is bought on cards in any particular business. The rand figures and the firm are illustrative rather than a client case.
